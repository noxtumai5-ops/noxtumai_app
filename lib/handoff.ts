export interface ConsultationLead {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  industry?: string;
  problemDescription?: string;
  aiRequirement?: string;
  aiSummary?: string;
}

// Official NOXTUM AI Contact Details
export const NOXTUM_CONTACT = {
  companyName: "NOXTUM AI",
  tagline: "AI Solutions & Transformation",
  phoneDisplay: "+971 56 950 1555",
  phoneRaw: "971569501555",
  email: "noxtumai@outlook.com",
  office: {
    line1: "Level 3, BurJuman Center",
    line2: "Bur Dubai, Dubai, UAE",
    full: "Level 3, BurJuman Center, Bur Dubai, Dubai, UAE"
  }
};

const DEFAULT_FORM_URL =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
  "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder/viewform";

export function generateGoogleFormUrl(lead: ConsultationLead): string {
  try {
    const url = new URL(DEFAULT_FORM_URL);
    url.searchParams.set("usp", "pp_url");

    if (lead.fullName) url.searchParams.set("entry.1000001", lead.fullName);
    if (lead.company) url.searchParams.set("entry.1000002", lead.company);
    if (lead.email) url.searchParams.set("entry.1000003", lead.email);
    if (lead.phone) url.searchParams.set("entry.1000004", lead.phone);
    if (lead.industry) url.searchParams.set("entry.1000005", lead.industry);
    if (lead.problemDescription)
      url.searchParams.set("entry.1000006", lead.problemDescription);
    if (lead.aiSummary) url.searchParams.set("entry.1000007", lead.aiSummary);

    return url.toString();
  } catch {
    return DEFAULT_FORM_URL;
  }
}

// Configurable WhatsApp Business Phone Number
// Default is official UAE line +971 56 950 1555 (971569501555)
export const NOXTUM_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || NOXTUM_CONTACT.phoneRaw;

export function formatWhatsAppMessage(lead: ConsultationLead): string {
  return [
    "🚀 *NEW NOXTUM AI CONSULTATION INQUIRY*",
    "----------------------------------------",
    `👤 *Client Name:* ${lead.fullName || "Not provided"}`,
    `🏢 *Company:* ${lead.company || "Not provided"}`,
    `✉️ *Business Email:* ${lead.email || "Not provided"}`,
    `📱 *Phone / WhatsApp:* ${lead.phone || "Not provided"}`,
    `🌐 *Industry:* ${lead.industry || "Not provided"}`,
    "",
    "🎯 *BUSINESS PROBLEM TO SOLVE:*",
    lead.problemDescription || "Not provided",
    "",
    "⚡ *DESIRED AI CAPABILITY / REQUIREMENT:*",
    lead.aiRequirement || lead.aiSummary || "Strategic Feasibility & Production Architecture",
    "",
    "----------------------------------------",
    "Sent directly via NOXTUM AI Consultation Portal"
  ].join("\n");
}

export function generateWhatsAppUrl(customMessage: string): string {
  const cleanNumber = NOXTUM_WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(customMessage);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

export interface ChatHandoffDetails {
  userQuery: string;
  aiRecommendation?: string;
  fileName?: string;
  clientName?: string;
  clientCompany?: string;
}

export function formatChatHandoffWhatsAppMessage(details: ChatHandoffDetails): string {
  const lines = [
    "🤖 *NEW CLIENT INQUIRY VIA NOXTUM AI ADVISOR*",
    "----------------------------------------",
    `👤 *Client Name:* ${details.clientName || "Prospective Client"}`,
    `🏢 *Company:* ${details.clientCompany || "Enterprise / Startup"}`,
    details.fileName ? `📄 *Uploaded Project Brief:* ${details.fileName}` : "",
    "",
    "💬 *PROJECT REQUIREMENTS DISCUSSED:*",
    details.userQuery,
    "",
    details.aiRecommendation ? "💡 *RECOMMENDED SYSTEM BLUEPRINT:*" : "",
    details.aiRecommendation ? details.aiRecommendation.substring(0, 300) + "..." : "",
    "",
    "----------------------------------------",
    "Sent directly via NOXTUM AI Intelligence Portal"
  ].filter(Boolean);

  return lines.join("\n");
}

export interface FeedbackHandoffDetails {
  name: string;
  company: string;
  role: string;
  rating: number;
  message: string;
  serviceUsed: string;
  projectResult?: string;
}

export function formatFeedbackWhatsAppMessage(f: FeedbackHandoffDetails): string {
  const stars = "⭐".repeat(Math.max(1, Math.min(5, f.rating)));
  return [
    "🌟 *NEW CLIENT FEEDBACK & TESTIMONIAL*",
    "----------------------------------------",
    `👤 *Client Name:* ${f.name}`,
    `🏢 *Company:* ${f.company}`,
    `💼 *Role / Title:* ${f.role}`,
    `⭐ *Rating:* ${stars} (${f.rating}/5)`,
    `🛠️ *Service Used:* ${f.serviceUsed}`,
    "",
    "💬 *CLIENT REVIEW / EXPERIENCE:*",
    `"${f.message}"`,
    "",
    f.projectResult ? `📈 *Impact / Results Achieved:*\n${f.projectResult}\n` : "",
    "----------------------------------------",
    "Sent directly via NOXTUM AI Review Portal"
  ].filter(Boolean).join("\n");
}


