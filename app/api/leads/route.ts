import { NextRequest, NextResponse } from "next/server";
import { LeadSubmissionSchema } from "@/lib/backend/validation";
import { saveLead } from "@/lib/backend/lead-store";
import { checkRateLimit } from "@/lib/backend/rate-limit";
import { logAudit } from "@/lib/backend/logger";
import { formatWhatsAppMessage, generateWhatsAppUrl } from "@/lib/handoff";

export async function POST(req: NextRequest) {
  try {
    // 1. Client IP for rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    // 2. Rate limit check: max 5 consultation submissions per IP per 5 minutes
    const limitCheck = checkRateLimit(`lead_submit_${ip}`, 5, 300000);
    if (!limitCheck.success) {
      logAudit("RATE_LIMIT_EXCEEDED", { ip, route: "/api/leads" }, "warn");
      return NextResponse.json(
        {
          success: false,
          error: "Too many submission attempts. Please reach our Dubai team directly on WhatsApp (+971 56 950 1555)."
        },
        { status: 429 }
      );
    }

    // 3. Schema validation
    const json = await req.json();
    const result = LeadSubmissionSchema.safeParse(json);

    if (!result.success) {
      const errorMsg = result.error.issues.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ");
      return NextResponse.json(
        { success: false, error: errorMsg },
        { status: 400 }
      );
    }

    const validatedData = result.data;

    // 4. Guaranteed lead storage & persistence
    const saved = await saveLead(validatedData, { ipAddress: ip, userAgent });

    // 5. Generate verified WhatsApp pre-formatted briefing
    const whatsappMsg = formatWhatsAppMessage({
      fullName: validatedData.fullName,
      company: validatedData.company,
      email: validatedData.email,
      phone: validatedData.phone,
      industry: validatedData.industry,
      problemDescription: validatedData.problemDescription,
      aiRequirement: validatedData.aiRequirement
    });
    const whatsappUrl = generateWhatsAppUrl(whatsappMsg);

    return NextResponse.json(
      {
        success: true,
        message: "Consultation inquiry registered and safely stored with NOXTUM AI systems.",
        leadId: saved.id,
        whatsappUrl,
        createdAt: saved.createdAt
      },
      { status: 201 }
    );
  } catch (err) {
    logAudit("LEADS_API_ERROR", { error: String(err) }, "error");
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error registering consultation. Please connect directly via WhatsApp."
      },
      { status: 500 }
    );
  }
}
