interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const cache = new Map<string, RateLimitRecord>();

/**
 * Lightweight sliding-window in-memory rate limiter.
 * Protects endpoints from brute-force queries and token exhaustion.
 */
export function checkRateLimit(
  identifier: string,
  limit: number = 10,
  windowMs: number = 60000
): { success: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const record = cache.get(identifier);

  // Clean old expired entries if cache exceeds thresholds
  if (cache.size > 5000) {
    for (const [key, val] of cache.entries()) {
      if (val.resetAt < now) {
        cache.delete(key);
      }
    }
  }

  if (!record || record.resetAt < now) {
    cache.set(identifier, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: limit - 1, reset: now + windowMs };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, reset: record.resetAt };
  }

  record.count += 1;
  cache.set(identifier, record);
  return { success: true, remaining: limit - record.count, reset: record.resetAt };
}
