import { NextRequest, NextResponse } from "next/server";
import { generateAdvisorResponse, SystemBlueprint } from "@/lib/ai/advisor-engine";
import { AdvisorRequestSchema } from "@/lib/backend/validation";
import { checkRateLimit } from "@/lib/backend/rate-limit";
import { checkTokenGuard, recordTokenUsage, sanitizeAndVerifyPrompt } from "@/lib/backend/token-guard";
import { logAudit } from "@/lib/backend/logger";

export async function POST(req: NextRequest) {
  try {
    // 1. IP rate limiting: max 6 deep diagnostic calls per 1 minute per IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const limitCheck = checkRateLimit(`advisor_query_${ip}`, 6, 60000);

    if (!limitCheck.success) {
      logAudit("ADVISOR_RATE_LIMIT", { ip }, "warn");
      return NextResponse.json(
        { error: "Advisor query rate limit reached. Please wait a moment or speak directly with our Dubai AI team via WhatsApp (+971 56 950 1555)." },
        { status: 429 }
      );
    }

    // 2. Token protection guard check
    const tokenCheck = checkTokenGuard(ip, 500);
    if (!tokenCheck.allowed) {
      return NextResponse.json(
        { error: tokenCheck.reason || "Token quota reached." },
        { status: 429 }
      );
    }

    // 3. Schema validation
    const rawBody = await req.json();
    const parseResult = AdvisorRequestSchema.safeParse(rawBody);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Please provide a valid description of the business problem you are looking to solve (minimum 3 characters)." },
        { status: 400 }
      );
    }

    const body = parseResult.data;

    // 4. Sanitize and check for prompt injection
    const sanitizeResult = sanitizeAndVerifyPrompt(body.problemDescription);
    if (!sanitizeResult.valid) {
      return NextResponse.json({ error: sanitizeResult.error }, { status: 400 });
    }
    body.problemDescription = sanitizeResult.cleanText;

    const geminiKey = process.env.GEMINI_API_KEY;
    const openAiKey = process.env.OPENAI_API_KEY;

    // 1. If user provided a GEMINI_API_KEY, use Google Gemini API
    if (geminiKey) {
      try {
        const prompt = `You are a Principal AI Systems Architect at NOXTUM AI (Dubai & India).
A client wants to evaluate an AI solution for their business problem.
Industry: ${body.industry || "General Enterprise / SMB"}
Mode: ${body.mode || "DESIGN"}
Business Problem: "${body.problemDescription}"

Respond strictly with a JSON object matching this schema:
{
  "challenge": "A concise, professional 1-line re-articulation of their bottleneck",
  "recommendedSystem": "Title of the practical AI system recommended (e.g. Autonomous Inbound Lead Qualification Agent)",
  "architectureStages": [
    {"stage": "01", "title": "Data / Ingestion", "description": "Short explanation of how data is gathered/received"},
    {"stage": "02", "title": "AI & Processing", "description": "Short explanation of the AI intelligence, extraction or classification"},
    {"stage": "03", "title": "Action / Execution", "description": "Short explanation of CRM/database/WhatsApp sync with human oversight"}
  ],
  "aiCapabilities": ["Key capability 1", "Key capability 2", "Key capability 3"],
  "integrationLayer": ["Tool 1", "Tool 2", "Tool 3"],
  "aiFit": "STRONG POTENTIAL",
  "implementationComplexity": "LOW" | "MEDIUM" | "HIGH",
  "strategicRationale": "1-2 sentences on why this practical approach delivers real operational payback",
  "consultationSummary": "Concise summary for consultation briefing",
  "whatsappMessage": "Clean WhatsApp pre-filled message starting with: Hello NOXTUM AI Team, I want to discuss building..."
}

Do not include markdown backticks like \`\`\`json. Return only the raw JSON.`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: { responseMimeType: "application/json" }
            })
          }
        );

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const text = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            const parsed = JSON.parse(text) as SystemBlueprint;
            recordTokenUsage(ip, 750);
            return NextResponse.json({
              success: true,
              data: parsed,
              source: "gemini-api",
              generatedAt: new Date().toISOString()
            });
          }
        }
      } catch (geminiErr) {
        console.warn("Gemini API call failed, falling back to built-in engine:", geminiErr);
      }
    }

    // 2. If user provided an OPENAI_API_KEY, use OpenAI
    if (openAiKey) {
      try {
        const prompt = `You are a Principal AI Systems Architect at NOXTUM AI (Dubai & India).
A client wants to evaluate an AI solution for their business problem.
Industry: ${body.industry || "General Enterprise / SMB"}
Business Problem: "${body.problemDescription}"

Respond strictly with a JSON object:
{
  "challenge": "Concise re-articulation of the bottleneck",
  "recommendedSystem": "Title of the practical AI system",
  "architectureStages": [
    {"stage": "01", "title": "Data / Ingestion", "description": "Short description"},
    {"stage": "02", "title": "AI & Processing", "description": "Short description"},
    {"stage": "03", "title": "Action / Execution", "description": "Short description"}
  ],
  "aiCapabilities": ["Capability 1", "Capability 2"],
  "integrationLayer": ["Tool 1", "Tool 2"],
  "aiFit": "STRONG POTENTIAL",
  "implementationComplexity": "MEDIUM",
  "strategicRationale": "Why this delivers ROI",
  "consultationSummary": "Summary",
  "whatsappMessage": "Hello NOXTUM AI Team, I want to discuss building..."
}`;

        const openAiRes = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openAiKey}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            response_format: { type: "json_object" },
            messages: [{ role: "user", content: prompt }]
          })
        });

        if (openAiRes.ok) {
          const openAiData = await openAiRes.json();
          const text = openAiData.choices?.[0]?.message?.content;
          if (text) {
            const parsed = JSON.parse(text) as SystemBlueprint;
            recordTokenUsage(ip, 750);
            return NextResponse.json({
              success: true,
              data: parsed,
              source: "openai-api",
              generatedAt: new Date().toISOString()
            });
          }
        }
      } catch (openAiErr) {
        console.warn("OpenAI API call failed, falling back to built-in engine:", openAiErr);
      }
    }

    // 3. Fallback: Built-in intelligent rules engine (works 100% reliably even with no API key set)
    const assessment = generateAdvisorResponse(body);

    return NextResponse.json({
      success: true,
      data: assessment,
      source: "noxtum-core-engine",
      generatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error("NOXTUM Advisor API Error:", error);
    return NextResponse.json(
      { error: "Failed to synthesize AI advisory report. Please try again or connect directly with our engineering team." },
      { status: 500 }
    );
  }
}
