import { NextRequest, NextResponse } from "next/server";
import { FeedbackSubmissionSchema } from "@/lib/backend/validation";
import { saveFeedback, getPublishedTestimonials } from "@/lib/backend/feedback-store";
import { checkRateLimit } from "@/lib/backend/rate-limit";
import { logAudit } from "@/lib/backend/logger";

// 1. GET: Public testimonials (ONLY returns status === "PUBLISHED")
export async function GET() {
  try {
    const testimonials = await getPublishedTestimonials(10);
    return NextResponse.json({
      success: true,
      testimonials,
      count: testimonials.length
    });
  } catch (error) {
    logAudit("FEEDBACK_GET_ERROR", { error: String(error) }, "error");
    return NextResponse.json({ success: true, testimonials: [], count: 0 });
  }
}

// 2. POST: Submit new feedback (saved as PENDING)
export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    // Rate limit: max 4 feedback submissions per 15 minutes per IP
    const rateCheck = checkRateLimit(`feedback_sub_${ip}`, 4, 900000);
    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many feedback submissions from this connection. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parseResult = FeedbackSubmissionSchema.safeParse(body);

    if (!parseResult.success) {
      const issueMsg = parseResult.error.issues.map((i) => i.message).join(", ");
      return NextResponse.json({ error: issueMsg }, { status: 400 });
    }

    const saved = await saveFeedback(parseResult.data, { ipAddress: ip });

    // Generate direct WhatsApp handoff to owner's number (+971 56 950 1555)
    const { formatFeedbackWhatsAppMessage, generateWhatsAppUrl } = await import("@/lib/handoff");
    const waText = formatFeedbackWhatsAppMessage({
      name: parseResult.data.name,
      company: parseResult.data.company,
      role: parseResult.data.role,
      rating: parseResult.data.rating,
      message: parseResult.data.message,
      serviceUsed: parseResult.data.serviceUsed,
      projectResult: parseResult.data.projectResult
    });
    const whatsappUrl = generateWhatsAppUrl(waText);

    logAudit("FEEDBACK_RECEIVED", {
      id: saved.id,
      company: saved.company,
      rating: saved.rating,
      ip
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your testimonial has been recorded and will now open WhatsApp to notify NOXTUM AI directly.",
        id: saved.id,
        whatsappUrl
      },
      { status: 201 }
    );
  } catch (err) {
    logAudit("FEEDBACK_POST_ERROR", { error: String(err) }, "error");
    return NextResponse.json(
      { error: "Failed to register feedback. Please try again." },
      { status: 500 }
    );
  }
}
