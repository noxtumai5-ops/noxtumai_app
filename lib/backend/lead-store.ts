import { LeadSubmission } from "@/lib/backend/validation";
import { logAudit } from "@/lib/backend/logger";

export interface StoredLead extends LeadSubmission {
  id: string;
  createdAt: string;
  ipAddress?: string;
  status: "NEW";
}

/**
 * In-memory serverless cache.
 * NO external database needed.
 * The primary business action is the instant WhatsApp dispatch to the owner's WhatsApp (+971 56 950 1555).
 */
const recentLeadsCache: StoredLead[] = [];

export async function saveLead(
  lead: LeadSubmission,
  meta?: { ipAddress?: string; userAgent?: string }
): Promise<StoredLead> {
  const id = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const stored: StoredLead = {
    ...lead,
    id,
    createdAt: new Date().toISOString(),
    ipAddress: meta?.ipAddress || "unknown",
    status: "NEW"
  };

  recentLeadsCache.unshift(stored);
  if (recentLeadsCache.length > 50) {
    recentLeadsCache.pop();
  }

  logAudit("LEAD_REGISTERED_FOR_WHATSAPP", {
    id,
    fullName: lead.fullName,
    company: lead.company,
    phone: lead.phone
  });

  return stored;
}

export async function getRecentLeads(limit = 20): Promise<StoredLead[]> {
  return recentLeadsCache.slice(0, limit);
}
