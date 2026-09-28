import { z } from "zod";

export const LeadSubmissionSchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters").max(100),
  company: z.string().trim().min(1, "Company name is required").max(100),
  email: z.string().trim().email("Please provide a valid business email address"),
  phone: z.string().trim().min(5, "Please provide a valid contact phone number").max(30),
  industry: z.string().trim().min(2, "Industry is required").max(60),
  problemDescription: z.string().trim().min(5, "Please describe the business bottleneck in at least 5 characters").max(2000),
  aiRequirement: z.string().trim().max(1000).optional().default(""),
  source: z.string().optional().default("consultation-form"),
  utmSource: z.string().optional().default("direct"),
});

export type LeadSubmission = z.infer<typeof LeadSubmissionSchema>;

export const AdvisorRequestSchema = z.object({
  problemDescription: z.string().trim().min(3, "Problem description is required").max(4000),
  industry: z.string().trim().max(100).optional().default("General Enterprise"),
  mode: z.enum(["EXPLORE", "DESIGN", "BUILD"]).optional().default("DESIGN"),
  companySize: z.string().trim().max(50).optional(),
});

export type AdvisorRequest = z.infer<typeof AdvisorRequestSchema>;

export const FeedbackSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().trim().min(1, "Company name is required").max(100),
  role: z.string().trim().min(2, "Role or designation is required").max(100),
  rating: z.number().int().min(1, "Rating must be between 1 and 5").max(5),
  message: z.string().trim().min(15, "Please provide at least 15 characters of feedback").max(2000),
  serviceUsed: z.string().trim().min(2, "Service used is required").max(100),
  projectResult: z.string().trim().max(500).optional().default(""),
  agreedToPublish: z.literal(true, {
    message: "You must consent to testimonial display to submit."
  })
});

export type FeedbackSubmission = z.infer<typeof FeedbackSubmissionSchema>;

export const ChatMessageSchema = z.object({
  message: z.string().trim().min(2, "Message is required").max(4000),
  sessionId: z.string().trim().optional(),
  conversationHistory: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string().max(4000)
  })).optional().default([])
});

export type ChatMessageRequest = z.infer<typeof ChatMessageSchema>;
