import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/backend/rate-limit";
import { logAudit } from "@/lib/backend/logger";
import { chunkDocumentText, saveRagSession, RagSession } from "@/lib/rag/rag-engine";

// Maximum upload file size: 5MB
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    // 1. Rate limit: max 6 doc uploads per 10 mins per IP to prevent storage flooding
    const rateCheck = checkRateLimit(`doc_upload_${ip}`, 6, 600000);
    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Upload rate limit exceeded. Please wait a few minutes before uploading another document." },
        { status: 429 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No document file provided in request." }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        { error: "Document exceeds maximum allowed size (5MB). Please upload a smaller brief or text outline." },
        { status: 400 }
      );
    }

    const fileName = file.name || "uploaded_project_doc";
    const fileType = file.type || "application/octet-stream";
    const buffer = Buffer.from(await file.arrayBuffer());

    let extractedText = "";

    // 2. Parse text based on document type
    if (fileName.toLowerCase().endsWith(".pdf") || fileType.includes("pdf")) {
      try {
        const { PDFParse } = await import("pdf-parse");
        const parser = new PDFParse({ data: buffer });
        const result = await parser.getText();
        extractedText = result.text || "";
      } catch (pdfErr) {
        logAudit("PDF_PARSE_FAILED", { fileName, error: String(pdfErr) }, "warn");
        return NextResponse.json(
          { error: "Could not parse PDF content. Please ensure the file is not password-protected or corrupted." },
          { status: 422 }
        );
      }
    } else if (
      fileName.toLowerCase().endsWith(".txt") ||
      fileName.toLowerCase().endsWith(".md") ||
      fileName.toLowerCase().endsWith(".json") ||
      fileType.includes("text")
    ) {
      extractedText = buffer.toString("utf-8");
    } else {
      return NextResponse.json(
        { error: "Unsupported file type. Please upload a PDF (.pdf), Text document (.txt), or Markdown (.md)." },
        { status: 400 }
      );
    }

    if (!extractedText || extractedText.trim().length < 30) {
      return NextResponse.json(
        { error: "The document appears to be empty or contains insufficient readable text." },
        { status: 400 }
      );
    }

    // 3. Chunk and index document
    const chunks = chunkDocumentText(extractedText);
    const sessionId = `rag_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24-hour expiration

    const session: RagSession = {
      sessionId,
      fileName,
      fileSize: file.size,
      fileType,
      chunks,
      createdAt: new Date().toISOString(),
      expiresAt
    };

    await saveRagSession(session);

    logAudit("DOC_UPLOAD_SUCCESS", {
      sessionId,
      fileName,
      chunkCount: chunks.length,
      fileSize: file.size,
      ip
    });

    return NextResponse.json(
      {
        success: true,
        sessionId,
        fileName,
        chunkCount: chunks.length,
        summary: `Document indexed successfully into ${chunks.length} semantic sections. You can now ask questions about this project brief.`
      },
      { status: 201 }
    );
  } catch (error) {
    logAudit("DOC_UPLOAD_ERROR", { error: String(error) }, "error");
    return NextResponse.json(
      { error: "Failed to process document upload. Please try again or paste your project requirements directly." },
      { status: 500 }
    );
  }
}
