import { logAudit } from "@/lib/backend/logger";

export interface DocChunk {
  chunkIndex: number;
  text: string;
}

export interface RagSession {
  sessionId: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  chunks: DocChunk[];
  createdAt: string;
  expiresAt: number;
}

/**
 * High-speed in-memory session cache.
 * NO database needed. Perfect for Vercel and serverless deployments.
 */
const ragSessionStore = new Map<string, RagSession>();

export function chunkDocumentText(text: string, chunkSize = 800, overlap = 150): DocChunk[] {
  const clean = text.replace(/\r\n/g, "\n").replace(/\s+/g, " ").trim();
  const chunks: DocChunk[] = [];
  
  if (clean.length === 0) return [];
  if (clean.length <= chunkSize) {
    return [{ chunkIndex: 0, text: clean }];
  }

  let start = 0;
  let index = 0;

  while (start < clean.length) {
    let end = start + chunkSize;
    if (end < clean.length) {
      const nextSpace = clean.lastIndexOf(" ", end);
      if (nextSpace > start + 200) {
        end = nextSpace;
      }
    } else {
      end = clean.length;
    }

    const chunkText = clean.substring(start, end).trim();
    if (chunkText.length > 20) {
      chunks.push({ chunkIndex: index++, text: chunkText });
    }

    if (end >= clean.length) break;
    start = end - overlap;
  }

  return chunks;
}

export async function saveRagSession(session: RagSession): Promise<void> {
  // Clean expired sessions
  const now = Date.now();
  for (const [id, s] of ragSessionStore.entries()) {
    if (s.expiresAt < now) {
      ragSessionStore.delete(id);
    }
  }

  ragSessionStore.set(session.sessionId, session);
  logAudit("RAG_SESSION_CACHED", { sessionId: session.sessionId, file: session.fileName });
}

export async function getRagSession(sessionId: string): Promise<RagSession | null> {
  const session = ragSessionStore.get(sessionId);
  if (!session) return null;
  if (session.expiresAt < Date.now()) {
    ragSessionStore.delete(sessionId);
    return null;
  }
  return session;
}

export function retrieveRelevantChunks(query: string, chunks: DocChunk[], topK = 4): DocChunk[] {
  if (!chunks || chunks.length === 0) return [];
  if (chunks.length <= topK) return chunks;

  const queryTerms = query
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((term) => term.length > 2);

  if (queryTerms.length === 0) {
    return chunks.slice(0, topK);
  }

  const scored = chunks.map((chunk) => {
    const chunkLower = chunk.text.toLowerCase();
    let score = 0;

    for (const term of queryTerms) {
      const matches = (chunkLower.match(new RegExp(`\\b${term}`, "g")) || []).length;
      score += matches * 2;
      if (chunkLower.includes(term)) {
        score += 1;
      }
    }

    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK).map((item) => item.chunk);
}
