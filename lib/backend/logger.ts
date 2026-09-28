export type LogLevel = "info" | "warn" | "error" | "debug";

export function logAudit(
  event: string,
  meta: Record<string, unknown> = {},
  level: LogLevel = "info"
) {
  const timestamp = new Date().toISOString();
  const payload = {
    timestamp,
    service: "noxtum-backend",
    level,
    event,
    ...meta
  };

  const formatted = `[${timestamp}] [NOXTUM-${level.toUpperCase()}] ${event} ${JSON.stringify(meta)}`;
  
  if (level === "error") {
    console.error(formatted);
  } else if (level === "warn") {
    console.warn(formatted);
  } else {
    console.log(formatted);
  }

  return payload;
}
