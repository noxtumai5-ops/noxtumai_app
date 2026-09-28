export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  capabilities: string[];
  workflow: string[];
  enterpriseImpact: string;
  href: string;
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "ai-consulting",
    number: "01",
    title: "AI Strategy & Feasibility",
    subtitle: "Practical Opportunity Assessment",
    tagline: "Identify where AI creates genuine business value before spending capital.",
    description: "We evaluate your current business processes, team bottlenecks, and data readiness to identify high-leverage opportunities where artificial intelligence delivers real ROI.",
    capabilities: [
      "Operational Bottleneck & Cost Analysis",
      "Practical Feasibility & Technology Selection",
      "Executive AI Roadmap & Priority Mapping",
      "Data Readiness & Privacy Assessment"
    ],
    workflow: ["Discovery & Audit", "Feasibility Assessment", "Opportunity Roadmap", "Architecture Design"],
    enterpriseImpact: "Avoids costly experimentation and directs resources toward projects with proven operational payback.",
    href: "/solutions"
  },
  {
    id: "ai-automation",
    number: "02",
    title: "AI Process Automation",
    subtitle: "Intelligent Operational Workflows",
    tagline: "Reliable workflows that handle repetitive business tasks so your teams focus on higher-value work.",
    description: "Automate document review, intake triage, and cross-system data updates with intelligent validation that reduces manual errors and turnaround times.",
    capabilities: [
      "Document Extraction & Invoice / Form Processing",
      "Automated Triage & Customer Request Routing",
      "Cross-Platform Data Synchronization",
      "Exception Handling with Human Oversight"
    ],
    workflow: ["Data Ingestion", "Smart Extraction", "Automated Action", "Team Escalation"],
    enterpriseImpact: "Substantially reduces manual document processing time while maintaining human oversight for exceptions.",
    href: "/solutions"
  },
  {
    id: "ai-agents",
    number: "03",
    title: "AI Agents & Assistants",
    subtitle: "Task-Oriented Software Agents",
    tagline: "Software agents that assist customers, qualify inquiries, and execute multi-step business actions.",
    description: "We design AI agents that work inside your existing channels—WhatsApp, web chat, CRMs, and email—to handle customer qualification and operational tasks 24/7.",
    capabilities: [
      "Multi-Channel Inbound Qualification Agents",
      "Integration with CRMs, Calendars & Messaging",
      "Context-Aware Customer Support & Guidance",
      "Structured Safety Guidelines & Team Handoff"
    ],
    workflow: ["Inquiry Reception", "Intent Understanding", "Automated Execution", "Team Handoff"],
    enterpriseImpact: "Enables instant response times for client inquiries without requiring around-the-clock manual staffing.",
    href: "/solutions"
  },
  {
    id: "custom-ai-solutions",
    number: "04",
    title: "Custom AI Engineering",
    subtitle: "Tailored AI Systems",
    tagline: "Purpose-built AI solutions designed around your specific business processes.",
    description: "When off-the-shelf tools fail to fit your company's proprietary workflows, we engineer bespoke AI models and software systems built specifically for your domain.",
    capabilities: [
      "Domain-Specific Model Customization",
      "Knowledge Retrieval Over Internal Documents",
      "Privacy-Conscious Cloud & Local Deployments",
      "Custom Business Logic & Validation Rules"
    ],
    workflow: ["Data Gathering", "System Design", "Development & Validation", "Deployment & Training"],
    enterpriseImpact: "Delivers purpose-built capability designed with your data privacy and operational standards at the center.",
    href: "/solutions"
  },
  {
    id: "ai-integration",
    number: "05",
    title: "AI Integration & Architecture",
    subtitle: "Enterprise Software Connectivity",
    tagline: "Connect modern AI capabilities directly into your existing business software.",
    description: "We connect intelligent systems directly to your existing CRM, ERP, databases, and operational tools—ensuring your team works inside familiar tools without disruption.",
    capabilities: [
      "Seamless CRM & Database Connectivity",
      "Secure API Gateways & Data Pipelines",
      "Enterprise Authentication & Audit Trails",
      "Reliable Error Handling & System Monitoring"
    ],
    workflow: ["System Audit", "API Integration", "Testing & Verification", "Live Deployment"],
    enterpriseImpact: "Maximizes the value of your existing software investments by adding intelligence without costly platform replacements.",
    href: "/solutions"
  },
  {
    id: "data-business-intelligence",
    number: "06",
    title: "Data & Business Intelligence",
    subtitle: "Clear, Actionable Analytics",
    tagline: "Turn fragmented business records into clear insights your leadership can act on.",
    description: "We clean, organize, and unify scattered business data into intuitive reporting systems and conversational analytics dashboards that give leaders full operational visibility.",
    capabilities: [
      "Automated Data Cleansing & Deduplication",
      "Executive Dashboards & KPI Monitoring",
      "Conversational Data Querying & Reports",
      "Unified Customer & Operational Reporting"
    ],
    workflow: ["Data Collection", "Quality Cleansing", "Structured Modeling", "Actionable Dashboards"],
    enterpriseImpact: "Eliminates messy spreadsheets and gives decision-makers immediate clarity on core business metrics.",
    href: "/solutions"
  },
  {
    id: "decision-intelligence",
    number: "07",
    title: "Decision Intelligence & NOVA",
    subtitle: "Forward-Looking Business Guidance",
    tagline: "Explore business scenarios and evaluate outcomes before committing capital.",
    description: "Powered by NOXTUM's NOVA framework, we help businesses model complex decisions, evaluate risks, and identify practical courses of action.",
    capabilities: [
      "Business Scenario Simulation & Exploration",
      "Operational Risk Analysis & Early Warning",
      "Opportunity Evaluation & Prioritization",
      "NOVA Decision Support Integration"
    ],
    workflow: ["Data Inputs", "Scenario Modeling", "Risk Evaluation", "Recommended Strategy"],
    enterpriseImpact: "Helps executive teams evaluate major strategic moves with structured data rather than guesswork.",
    href: "/products/nova"
  }
];

export interface IndustryItem {
  id: string;
  name: string;
  summary: string;
  challenges: string[];
  aiOpportunities: string[];
  exampleWorkflow: string;
  badge: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "real-estate",
    name: "Real Estate & Property",
    summary: "AI solutions for property sales, instant lead response, document processing, and operational intelligence.",
    challenges: ["Delayed response to high-intent buyer inquiries", "Time-consuming lease and title paperwork", "Managing inquiries across portals & WhatsApp"],
    aiOpportunities: ["AI Sales Agent for WhatsApp", "Document Extraction for Contracts", "Property Intelligence & Valuation"],
    exampleWorkflow: "Inquiry on WhatsApp -> AI Lead Qualification -> Viewing Scheduled -> CRM Updated",
    badge: "Faster Lead Response"
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    summary: "Streamlined patient scheduling, intake coordination, and administrative document processing with strict privacy standards.",
    challenges: ["Heavy administrative paperwork for clinical staff", "Patient no-shows and rescheduling delays", "Fragmented intake records"],
    aiOpportunities: ["Automated Patient Scheduling", "Intake Document Digitization", "Clinical Administrative Support"],
    exampleWorkflow: "Patient Request -> Automated Triage & Scheduling -> Intake Confirmation -> Practice Calendar Sync",
    badge: "Reduced Admin Overhead"
  },
  {
    id: "finance",
    name: "Finance & Professional Services",
    summary: "Automated document verification, transaction monitoring, and structured portfolio reporting.",
    challenges: ["Manual document review backlogs", "Complex financial reconciliations", "Time spent preparing standard reports"],
    aiOpportunities: ["Financial Statement Extraction", "Transaction Anomaly Flagging", "Automated Client Reporting"],
    exampleWorkflow: "Document Upload -> Automated Extraction & Check -> Anomaly Scan -> Verification Summary",
    badge: "Accelerated Verification"
  },
  {
    id: "recruitment",
    name: "Recruitment & HR",
    summary: "Intelligent candidate matching, resume parsing, and automated applicant coordination.",
    challenges: ["Screening hundreds of non-standard resumes", "Slow candidate outreach cycles", "Difficulty comparing cross-industry skillsets"],
    aiOpportunities: ["Intelligent Resume Screening", "Candidate Competency Matching", "Automated Candidate Communication"],
    exampleWorkflow: "Resume Intake -> Contextual Competency Extraction -> Role Match Score -> Candidate Shortlist",
    badge: "Faster Candidate Shortlisting"
  },
  {
    id: "hospitality",
    name: "Hospitality & Travel",
    summary: "24/7 guest communication, automated concierge assistance, and guest preference tracking.",
    challenges: ["High volume of repetitive guest questions across channels", "Manual booking changes and inquiries", "Multi-lingual communication barriers"],
    aiOpportunities: ["Multi-Lingual WhatsApp Concierge", "Personalized Recommendation Engine", "Automated Booking Support"],
    exampleWorkflow: "Guest WhatsApp Message -> Instant Multi-Lingual Answer -> Service Scheduled -> PMS Logged",
    badge: "Instant Guest Response"
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    summary: "Automated returns triage, conversational product discovery, and demand forecasting.",
    challenges: ["High volume of repetitive return and order status tickets", "Abandoned carts", "Unpredictable product inventory stockouts"],
    aiOpportunities: ["Conversational Shopping Guide", "Automated Returns & Exchanges", "Demand & Inventory Forecasting"],
    exampleWorkflow: "Customer Return Request -> Policy & Photo Check -> Exchange Processed -> Stock Adjusted",
    badge: "Streamlined Customer Support"
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    summary: "Automated shipping document processing, shipment tracking updates, and proactive exception alerts.",
    challenges: ["Manual entry of waybills and customs documentation", "Delays in communicating shipment status", "Handling dispatch exceptions"],
    aiOpportunities: ["Waybill & Invoice OCR Extraction", "Automated Exception Alerts", "Dispatch Coordination Support"],
    exampleWorkflow: "Shipping Document Scanned -> Key Fields Extracted -> Customs System Verified -> Status Dispatched",
    badge: "Rapid Document Processing"
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Operations",
    summary: "Equipment maintenance alerts, quality inspection logging, and digital operations documentation.",
    challenges: ["Unplanned machine downtime", "Manual quality inspection logs", "Scattered standard operating manuals"],
    aiOpportunities: ["Preventative Maintenance Alerts", "Quality Inspection Records", "Digital Assistant for Operating Manuals"],
    exampleWorkflow: "Telemetry Reading -> Pattern Alert Triggered -> Maintenance Task Generated -> Operator Notified",
    badge: "Reduced Unplanned Downtime"
  },
  {
    id: "trading",
    name: "Commodities & Trading",
    summary: "Contract review support, market sentiment tracking, and trade compliance validation.",
    challenges: ["Rapid market shifts", "Complex trade documentation reviews", "Ensuring counterparty compliance"],
    aiOpportunities: ["Trade Contract Clause Analysis", "Market News & Sentiment Summaries", "Compliance & Sanctions Check"],
    exampleWorkflow: "Contract Upload -> Clause & Term Check -> Deviation Flagged -> Legal Summary Generated",
    badge: "Accelerated Contract Review"
  },
  {
    id: "legal",
    name: "Legal & Corporate Services",
    summary: "Contract analysis, document summarization, and precedent search for legal and corporate teams.",
    challenges: ["Hours spent on manual contract comparison", "Scattered precedent files across partners", "Slow turnaround on standard client agreements"],
    aiOpportunities: ["Semantic Contract Search", "Agreement Comparison & Redlining", "Corporate Entity Document Extraction"],
    exampleWorkflow: "Agreement Draft Upload -> Key Terms Highlighted -> Precedent Comparison -> Executive Brief",
    badge: "Faster Document Turnaround"
  }
];

export const TRANSFORMATION_STEPS = [
  {
    step: "01",
    phase: "DISCOVER",
    title: "Operational Discovery & Friction Audit",
    description: "We sit down with your leadership and team to understand your daily workflows, identifying where manual toil, delays, and lost opportunities occur."
  },
  {
    step: "02",
    phase: "ANALYSE",
    title: "Data & Workflow Viability Analysis",
    description: "We review your existing software, data availability, and security standards to confirm exactly how an AI solution can integrate cleanly."
  },
  {
    step: "03",
    phase: "DESIGN",
    title: "Solution Blueprint & Architecture",
    description: "We create a clear engineering plan covering model selection, data safety, user interfaces, and human oversight touchpoints."
  },
  {
    step: "04",
    phase: "BUILD",
    title: "Development & Integration",
    description: "We engineer the software system and connect it directly to your existing tools—such as your CRM, databases, or communication channels."
  },
  {
    step: "05",
    phase: "DEPLOY",
    title: "Testing, Pilot & Team Onboarding",
    description: "We validate accuracy, run a controlled pilot with your team, and ensure everyone is trained to work effectively with the new system."
  },
  {
    step: "06",
    phase: "IMPROVE",
    title: "Ongoing Monitoring & Refinement",
    description: "We provide ongoing system health monitoring, performance tracking, and continuous improvements as your business expands."
  }
];
