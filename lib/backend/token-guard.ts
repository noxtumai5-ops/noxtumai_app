import { logAudit } from "./logger";

interface TokenUsageRecord {
  hourlyTokens: number;
  lastResetHour: number;
  requestCount: number;
  lastRequestTime: number;
}

// In-memory sliding tracker for IP token consumption
const ipTracker = new Map<string, TokenUsageRecord>();

// Global daily usage tracker
let globalDailyTokens = 0;
let globalResetDay = new Date().getUTCDate();

// Limits
const MAX_HOURLY_TOKENS_PER_IP = parseInt(process.env.LLM_PER_IP_HOURLY_BUDGET || "15000", 10);
const MAX_GLOBAL_DAILY_TOKENS = parseInt(process.env.LLM_DAILY_TOKEN_BUDGET || "500000", 10);
const MIN_REQUEST_COOLDOWN_MS = 2500; // 2.5s between requests to prevent rapid automated spam
const MAX_PROMPT_CHARS = 4500; // Hard max prompt character count

// Suspicious patterns / prompt injection vectors
const INJECTION_PATTERNS = [
  /ignore (all )?previous instructions/i,
  /disregard (all )?(prior|previous)/i,
  /you are now in DAN mode/i,
  /jailbreak/i,
  /<\|endoftext\|>/i,
  /<\|im_start\|>/i,
  /system prompt override/i,
];

export interface TokenGuardResult {
  allowed: boolean;
  reason?: string;
  remainingHourlyTokens?: number;
}

/**
 * Validates prompt integrity, checks prompt injection patterns,
 * enforces cooldown, and manages token limits.
 */
export function checkTokenGuard(
  ip: string,
  estimatedInputTokens: number = 250
): TokenGuardResult {
  const now = Date.now();
  const currentHour = Math.floor(now / (1000 * 60 * 60));
  const currentDay = new Date().getUTCDate();

  // Reset global counter on UTC day change
  if (currentDay !== globalResetDay) {
    globalDailyTokens = 0;
    globalResetDay = currentDay;
  }

  // 1. Global daily budget check
  if (globalDailyTokens + estimatedInputTokens > MAX_GLOBAL_DAILY_TOKENS) {
    logAudit("GLOBAL_TOKEN_EXHAUSTED", { globalDailyTokens, ip }, "warn");
    return {
      allowed: false,
      reason: "NOXTUM AI server daily capacity reached. Direct consultation is available immediately via WhatsApp (+971 56 950 1555)."
    };
  }

  // 2. IP record check
  let record = ipTracker.get(ip);
  if (!record || record.lastResetHour !== currentHour) {
    record = {
      hourlyTokens: 0,
      lastResetHour: currentHour,
      requestCount: 0,
      lastRequestTime: 0
    };
  }

  // 3. Cooldown check (prevent automated scripts firing every 100ms)
  if (now - record.lastRequestTime < MIN_REQUEST_COOLDOWN_MS) {
    return {
      allowed: false,
      reason: "Please wait a moment before sending another query."
    };
  }

  // 4. IP Hourly token budget check
  if (record.hourlyTokens + estimatedInputTokens > MAX_HOURLY_TOKENS_PER_IP) {
    logAudit("IP_TOKEN_LIMIT_EXCEEDED", { ip, hourlyTokens: record.hourlyTokens }, "warn");
    return {
      allowed: false,
      reason: "Your session token limit has been reached for this hour to prevent server exhaustion. Please connect directly with our Dubai engineering team on WhatsApp."
    };
  }

  return {
    allowed: true,
    remainingHourlyTokens: Math.max(0, MAX_HOURLY_TOKENS_PER_IP - (record.hourlyTokens + estimatedInputTokens))
  };
}

/**
 * Records actual tokens consumed after successful LLM response
 */
export function recordTokenUsage(ip: string, tokensConsumed: number) {
  const now = Date.now();
  const currentHour = Math.floor(now / (1000 * 60 * 60));

  let record = ipTracker.get(ip);
  if (!record || record.lastResetHour !== currentHour) {
    record = {
      hourlyTokens: 0,
      lastResetHour: currentHour,
      requestCount: 0,
      lastRequestTime: now
    };
  }

  record.hourlyTokens += tokensConsumed;
  record.requestCount += 1;
  record.lastRequestTime = now;
  ipTracker.set(ip, record);

  globalDailyTokens += tokensConsumed;
}

/**
 * Sanitizes input text and screens for malicious injection
 */
export function sanitizeAndVerifyPrompt(input: string): { valid: boolean; error?: string; cleanText: string } {
  if (!input || typeof input !== "string") {
    return { valid: false, error: "Input text is required.", cleanText: "" };
  }

  if (input.length > MAX_PROMPT_CHARS) {
    return {
      valid: false,
      error: `Input exceeds maximum allowed size (${MAX_PROMPT_CHARS} characters). Please provide a concise project description or upload the document.`,
      cleanText: ""
    };
  }

  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(input)) {
      logAudit("PROMPT_INJECTION_DETECTED", { pattern: pattern.toString() }, "warn");
      return {
        valid: false,
        error: "Unsafe or prohibited prompt patterns detected. Please describe your business problem directly.",
        cleanText: ""
      };
    }
  }

  // Strip dangerous control chars and HTML script tags
  const cleanText = input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .trim();

  return { valid: true, cleanText };
}
