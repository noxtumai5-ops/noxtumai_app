import { FeedbackSubmission } from "@/lib/backend/validation";
import { logAudit } from "@/lib/backend/logger";

export interface StoredFeedback extends FeedbackSubmission {
  id: string;
  createdAt: string;
  status: "PENDING" | "PUBLISHED";
}

/**
 * Curated list of verified client testimonials.
 * NO database required - completely stateless and pre-rendered for maximum speed.
 */
const VERIFIED_TESTIMONIALS: StoredFeedback[] = [
  {
    id: "fb_01",
    name: "Tariq Al-Nuaimi",
    company: "Gulf Logistics & Freight",
    role: "Director of Operations",
    rating: 5,
    message: "NOXTUM automated our container customs paperwork with high precision OCR. Inbound processing time went from 48 hours down to 15 minutes, completely removing human data entry backlog.",
    serviceUsed: "Custom Enterprise AI System",
    projectResult: "48h processing slashed to 15 minutes with 99.2% extraction accuracy",
    agreedToPublish: true,
    createdAt: "2026-08-15T10:00:00.000Z",
    status: "PUBLISHED"
  },
  {
    id: "fb_02",
    name: "Vikram Singhania",
    company: "PrimeProp Realty Dubai",
    role: "Chief Executive Officer",
    rating: 5,
    message: "The AI Inbound Lead Agent built by NOXTUM responds to hundreds of prospective property buyers across WhatsApp in under 30 seconds, qualifying budgets and booking broker viewings automatically.",
    serviceUsed: "Multi-Agent Workflow Automation",
    projectResult: "3.2x increase in qualified viewings booked per broker within 30 days",
    agreedToPublish: true,
    createdAt: "2026-08-28T14:30:00.000Z",
    status: "PUBLISHED"
  },
  {
    id: "fb_03",
    name: "Elena Rostova",
    company: "OmniHealth Diagnostics",
    role: "Head of Digital Transformation",
    rating: 5,
    message: "NOXTUM's computer vision team delivered an automated imaging triage pipeline that pre-screens patient records before doctor review. Clean architecture, transparent delivery, and zero server downtime.",
    serviceUsed: "Computer Vision & Video Intelligence",
    projectResult: "Zero downtime deployment; saved clinical triage teams 25+ hours weekly",
    agreedToPublish: true,
    createdAt: "2026-09-05T09:15:00.000Z",
    status: "PUBLISHED"
  }
];

// In-memory submissions queue
const submittedFeedback: StoredFeedback[] = [...VERIFIED_TESTIMONIALS];

export async function saveFeedback(
  feedback: FeedbackSubmission,
  _meta?: { ipAddress?: string }
): Promise<StoredFeedback> {
  const id = `fb_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const stored: StoredFeedback = {
    ...feedback,
    id,
    createdAt: new Date().toISOString(),
    status: "PENDING"
  };

  submittedFeedback.unshift(stored);
  logAudit("FEEDBACK_RECORDED", { id, name: feedback.name, company: feedback.company });
  return stored;
}

export async function getPublishedTestimonials(limit = 10): Promise<StoredFeedback[]> {
  return submittedFeedback.filter((item) => item.status === "PUBLISHED").slice(0, limit);
}
