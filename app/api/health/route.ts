import { NextResponse } from "next/server";

export async function GET() {
  const uptimeSeconds = process.uptime ? Math.floor(process.uptime()) : 0;
  const memUsage = process.memoryUsage ? process.memoryUsage() : null;

  return NextResponse.json(
    {
      status: "healthy",
      service: "NOXTUM AI Enterprise Core",
      timestamp: new Date().toISOString(),
      uptimeSeconds,
      environment: process.env.NODE_ENV || "development",
      architecture: {
        mode: "STATELESS_ENTERPRISE_SHOWCASE",
        leadHandoff: "DIRECT_ENCRYPTED_WHATSAPP_DISPATCH",
        ownerContact: "+971 56 950 1555"
      },
      aiIntegration: {
        geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
        openAiConfigured: Boolean(process.env.OPENAI_API_KEY),
        engineMode: process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY ? "HYBRID_LLM" : "CORE_DETERMINISTIC_RULES"
      },
      system: {
        memory: memUsage
          ? {
              rssMb: Math.round(memUsage.rss / 1024 / 1024),
              heapUsedMb: Math.round(memUsage.heapUsed / 1024 / 1024)
            }
          : null
      }
    },
    { status: 200 }
  );
}
