export type AdvisorMode = "EXPLORE" | "DESIGN" | "BUILD";

export interface AIAdvisorRequest {
  problemDescription: string;
  industry?: string;
  mode?: AdvisorMode;
  scale?: string;
  existingTools?: string;
}

export interface SystemBlueprint {
  challenge: string;
  recommendedSystem: string;
  architectureStages: {
    stage: string;
    title: string;
    description: string;
  }[];
  aiCapabilities: string[];
  integrationLayer: string[];
  aiFit: "STRONG POTENTIAL" | "SELECTIVE AUTOMATION" | "HIGH COMPLEXITY" | "NOT RECOMMENDED FOR AI";
  implementationComplexity: "LOW" | "MEDIUM" | "HIGH" | "ENTERPRISE SCALE";
  strategicRationale: string;
  consultationSummary: string;
  whatsappMessage: string;
}

export function generateAdvisorResponse(req: AIAdvisorRequest): SystemBlueprint {
  const query = (req.problemDescription + " " + (req.industry || "")).toLowerCase();
  const mode = req.mode || "DESIGN";

  // Standard creative/marketing exclusion check
  if (query.includes("logo") || query.includes("brochure") || query.includes("banner") || query.includes("poster")) {
    return {
      challenge: req.problemDescription,
      recommendedSystem: "Standard Digital Design Tooling",
      architectureStages: [
        { stage: "01", title: "Creative Briefing", description: "Define aesthetic guidelines, typography & brand palette" },
        { stage: "02", title: "Visual Synthesis", description: "Design execution via professional software suites (Figma / Adobe)" },
        { stage: "03", title: "Human Review", description: "Stakeholder sign-off and multi-format asset export" }
      ],
      aiCapabilities: [
        "Traditional design agency workflow recommended",
        "Custom cognitive enterprise AI is unnecessary CAPEX for static assets"
      ],
      integrationLayer: ["Figma", "Adobe Creative Cloud"],
      aiFit: "NOT RECOMMENDED FOR AI",
      implementationComplexity: "LOW",
      strategicRationale: "NOXTUM advises against deploying custom AI pipelines where standard commercial tooling solves the problem at a fraction of the cost.",
      consultationSummary: "Strategic review concluded this challenge is better addressed via traditional creative tooling rather than custom cognitive systems.",
      whatsappMessage: "Hello NOXTUM AI Team, I was looking into creative design tooling for: " + req.problemDescription
    };
  }

  // Real estate / sales lead qualification / Dubai property
  if (query.includes("lead") || query.includes("estate") || query.includes("whatsapp") || query.includes("property") || query.includes("villa") || query.includes("inquiry")) {
    return {
      challenge: "High-volume inbound inquiries requiring instantaneous qualification and CRM synchronization.",
      recommendedSystem: "Autonomous Inbound Lead & Property Qualification Agent",
      architectureStages: [
        { stage: "01 // INTAKE", title: "Omnichannel Listener", description: "Ingests WhatsApp / Webform / Portal inquiries in under 3 seconds" },
        { stage: "02 // COGNITION", title: "Intent & Budget Classifier", description: "Extracts target location, budget bracket, timeline & purchasing authority" },
        { stage: "03 // INVENTORY", title: "Property Knowledge Matcher", description: "Cross-checks qualified parameters against active inventory feeds" },
        { stage: "04 // DISPATCH", title: "CRM Sync & Sales Escalation", description: "Populates HubSpot/Salesforce and alerts senior broker for VIP leads" }
      ],
      aiCapabilities: [
        "24/7 sub-5s personalized multi-lingual engagement (English, Arabic, Russian, French)",
        "Deterministic budget and pre-approval qualification checks",
        "Autonomous calendar scheduling for private viewings",
        "Zero manual data entry required from sales representatives"
      ],
      integrationLayer: ["WhatsApp Cloud API", "HubSpot / Salesforce", "Property Management DB", "Broker Calendar"],
      aiFit: "STRONG POTENTIAL",
      implementationComplexity: "MEDIUM",
      strategicRationale: "Eliminates lead decay in fast-moving markets like Dubai where response latency within 5 minutes increases conversion rates by >300%.",
      consultationSummary: "NOXTUM System Blueprint: Autonomous WhatsApp Lead Qualification & Property Matcher with direct CRM sync.",
      whatsappMessage: "Hello NOXTUM AI, I reviewed the System Blueprint for our real estate lead workflow.\n\nChallenge: " + req.problemDescription + "\n\nI would like to discuss building this system with your team."
    };
  }

  // Healthcare / Clinical Appointments & Triage
  if (query.includes("health") || query.includes("clinic") || query.includes("patient") || query.includes("doctor") || query.includes("appointment") || query.includes("hospital")) {
    return {
      challenge: "Clerical overhead in patient appointment scheduling, pre-consultation intake, and records coordination.",
      recommendedSystem: "Clinical Operations & Patient Intake System",
      architectureStages: [
        { stage: "01 // TRIAGE", title: "Conversational Patient Intake", description: "Assesses reason for visit, symptom severity & department specialty" },
        { stage: "02 // EHR MATCH", title: "Doctor Schedule Optimization", description: "Matches patient urgency with physician calendars and room availability" },
        { stage: "03 // VERIFY", title: "Insurance & ID Pre-Clearance", description: "Extracts Emirates ID / insurance card details and validates coverage status" },
        { stage: "04 // CONFIRM", title: "Automated Preparation Protocols", description: "Dispatches pre-visit fasting or fasting instructions via WhatsApp/SMS" }
      ],
      aiCapabilities: [
        "Reduces no-shows through smart adaptive reminder sequences",
        "Zero-retention sovereign compliance (HIPAA / UAE Health Data Law aligned)",
        "Directly integrates with Electronic Medical Records (EMR / EHR)",
        "Instant rescheduling and waitlist cancellation backfilling"
      ],
      integrationLayer: ["EMR / EHR System", "WhatsApp Business", "Insurance Gateways", "SMS Telemetry"],
      aiFit: "STRONG POTENTIAL",
      implementationComplexity: "HIGH",
      strategicRationale: "Frees nursing and administrative staff from repetitive phone rescheduling, allowing 100% focus on in-clinic patient care.",
      consultationSummary: "NOXTUM System Blueprint: Clinical Intake & Scheduling Automation with EHR interoperability.",
      whatsappMessage: "Hello NOXTUM AI, I would like to explore the Clinical Operations System for our healthcare practice.\n\nRequirement: " + req.problemDescription
    };
  }

  // Automotive / Car Dealerships & Service Bookings
  if (query.includes("car") || query.includes("auto") || query.includes("vehicle") || query.includes("fleet") || query.includes("dealership") || query.includes("service booking")) {
    return {
      challenge: "Slow response to vehicle purchase inquiries and friction in workshop service appointment scheduling.",
      recommendedSystem: "Automotive Sales & Workshop Concierge Agent",
      architectureStages: [
        { stage: "01 // ENGAGE", title: "Vehicle Discovery Concierge", description: "Understands model interest, lease vs cash preferences & trade-in status" },
        { stage: "02 // INVENTORY", title: "DMS Showroom Lookup", description: "Verifies real-time VIN showroom availability and pricing tiers" },
        { stage: "03 // SERVICE", title: "Telematics & Workshop Triage", description: "Schedules periodic maintenance and mileage-based inspections" },
        { stage: "04 // HANDOFF", title: "Test Drive & Advisor Dispatch", description: "Books showroom appointments and prepares deal sheet for floor manager" }
      ],
      aiCapabilities: [
        "Instant trade-in preliminary valuation estimations",
        "Workshop bay allocation and parts availability cross-check",
        "Automated vehicle handover document collection",
        "Multi-branch routing based on customer GPS proximity"
      ],
      integrationLayer: ["Dealer Management System (DMS)", "WhatsApp API", "Showroom CRM", "Parts Inventory DB"],
      aiFit: "STRONG POTENTIAL",
      implementationComplexity: "MEDIUM",
      strategicRationale: "High-value automotive decisions require rapid engagement before buyer intent dissipates across competing dealerships.",
      consultationSummary: "NOXTUM System Blueprint: Automotive Sales & Service Booking Engine.",
      whatsappMessage: "Hello NOXTUM AI, let's discuss deploying the Automotive Concierge Agent for our dealership operations.\n\nDetails: " + req.problemDescription
    };
  }

  // Recruitment / HR / Talent Acquisition
  if (query.includes("resume") || query.includes("cv") || query.includes("hiring") || query.includes("recruit") || query.includes("candidate")) {
    return {
      challenge: "Recruiters spending 15+ hours weekly manually reading unqualified resumes from mass application portals.",
      recommendedSystem: "Neural Document Intelligence & Talent Matching System",
      architectureStages: [
        { stage: "01 // INGEST", title: "Multi-Format Resume Parser", description: "Parses PDF, Word, and LinkedIn exports into structured entity graphs" },
        { stage: "02 // EXTRACT", title: "Skill & Experience Normalizer", description: "Identifies verifiable domain competencies and career tenure milestones" },
        { stage: "03 // MATCH", title: "Vector Semantic Ranking", description: "Scores candidates against objective job specifications with explanation notes" },
        { stage: "04 // SCREEN", title: "Autonomous Pre-Screening", description: "Coordinates asynchronous technical screening Q&A with top 10% talent" }
      ],
      aiCapabilities: [
        "Processes 1,500+ CVs in under 4 minutes with zero manual formatting",
        "Contextual semantic matching (understands equivalent senior engineering stacks)",
        "Eliminates initial clerical fatigue and unconscious screening bias",
        "Direct bidirectional synchronization with Greenhouse, Lever, or Workday"
      ],
      integrationLayer: ["Enterprise ATS (Workday/Lever/Greenhouse)", "Email Inboxes", "Internal HR DB", "WhatsApp Pre-Screening"],
      aiFit: "STRONG POTENTIAL",
      implementationComplexity: "MEDIUM",
      strategicRationale: "Shrinks time-to-hire by 60% while ensuring top-tier talent is interviewed before competitors initiate contact.",
      consultationSummary: "NOXTUM System Blueprint: Neural Resume Parsing & Talent Ranking Pipeline.",
      whatsappMessage: "Hello NOXTUM AI, we want to discuss deploying the Neural Talent Matching System for our recruitment team.\n\nVolume: " + req.problemDescription
    };
  }

  // Default Custom Enterprise System
  return {
    challenge: req.problemDescription,
    recommendedSystem: "Custom Enterprise Cognitive Operating System",
    architectureStages: [
      { stage: "01 // PERCEIVE", title: "Operational Event Gateway", description: "Ingests raw operational data, inbound communications, or document queues" },
      { stage: "02 // REASON", title: "Domain-Tuned Cognitive Pipeline", description: "Evaluates business logic, compliance guardrails & decision trees" },
      { stage: "03 // DECIDE", title: "Deterministic Action Validator", description: "Ensures calculations meet confidence thresholds prior to autonomous execution" },
      { stage: "04 // ACT", title: "Enterprise API Orchestration", description: "Updates core ERP/CRM, dispatches notifications & escalates exceptions to human leads" }
    ],
    aiCapabilities: [
      "Engineered strictly around your proprietary business workflows",
      "Strict data isolation (Zero training on client intellectual property)",
      "High-throughput sub-100ms inference orchestration",
      "Auditable decision trails with human-in-the-loop governance"
    ],
    integrationLayer: ["Corporate ERP / CRM", "Internal Databases (PostgreSQL / Snowflake)", "Enterprise Communication Gateways"],
    aiFit: "STRONG POTENTIAL",
    implementationComplexity: mode === "BUILD" ? "ENTERPRISE SCALE" : "MEDIUM",
    strategicRationale: "Replaces fragmented manual point solutions with a unified, self-optimizing operational intelligence layer.",
    consultationSummary: "NOXTUM System Blueprint: Bespoke Enterprise AI Operational Pipeline for " + (req.industry || "General Enterprise"),
    whatsappMessage: "Hello NOXTUM AI, I generated a System Blueprint for our business operations.\n\nProject Scope: " + req.problemDescription + "\n\nI would like to schedule a strategy session to build this."
  };
}
