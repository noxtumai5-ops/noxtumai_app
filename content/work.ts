export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: "AI & Automation" | "Data & Analytics" | "Business Intelligence" | "AI Products" | "Consumer Products";
  tagline: string;
  homepageSummary: string; // Clean, concise summary for homepage cards
  description: string;
  problemSolved: string[];
  keyCapabilities: string[];
  techStack: string[];
  categoryTags: string[];
  workflow: string[];
  businessValue: string;
  featured?: boolean;
}

export const OUR_WORK: ProjectCaseStudy[] = [
  {
    id: "smart-vehicle-data",
    slug: "smart-vehicle-data-management",
    title: "Smart Vehicle Data Management",
    category: "AI & Automation",
    tagline: "AI-Powered Vehicle & Insurance Data Platform",
    homepageSummary: "AI-powered vehicle and insurance data platform designed to simplify complex data, automate document extraction, and streamline operational workflows.",
    description: "A comprehensive software platform designed to simplify the management, processing, and analysis of large-scale vehicle and insurance records. It enables operations teams to search complex files instantly, extract data from policy documents via OCR, and gain full visibility into fleet portfolios.",
    problemSolved: [
      "Manual handling and reconciliation of large vehicle and insurance spreadsheets",
      "High latency when searching and matching records across disparate files",
      "Time-consuming manual data entry from physical policy documents and receipts",
      "Limited real-time analytics and visibility into operational fleet risk"
    ],
    keyCapabilities: [
      "Vehicle & insurance fleet dataset management",
      "High-throughput spreadsheet data ingestion & validation",
      "OCR-driven automated document information extraction",
      "Intelligent search & fast record discovery",
      "Interactive analytics & custom reporting exports",
      "Role-based enterprise security & access controls"
    ],
    techStack: ["Python", "Flask", "FastAPI", "MongoDB", "Redis", "Celery", "Pandas", "OpenPyXL", "OCR Engine"],
    categoryTags: ["AI & Automation", "OCR Extraction", "Workflow Automation"],
    workflow: [
      "Raw Vehicle & Policy Ingestion",
      "OCR Document Parsing",
      "Data Normalization & Deduplication",
      "Fast Record Search & Dashboards",
      "Operational Export & Reporting"
    ],
    businessValue: "Transforms fragmented vehicle paperwork and bulky spreadsheets into an automated, searchable operational pipeline with instant document lookup.",
    featured: true
  },
  {
    id: "dataflow",
    slug: "dataflow-analytics-workspace",
    title: "DATAFLOW",
    category: "Data & Analytics",
    tagline: "Data Quality & Analytics Workspace",
    homepageSummary: "Interactive analytics workspace that automates CSV data ingestion, detects quality anomalies, removes duplicates, and prepares clean reporting models.",
    description: "A modern analytics workspace that helps businesses import raw customer data, identify quality anomalies, eliminate duplicates, and transform unorganized CSV files into clean, analysis-ready reporting models.",
    problemSolved: [
      "Inconsistent, incomplete, or corrupted customer data imports",
      "Unnoticed duplicate entries skewing business analytics",
      "Cumbersome and slow manual CSV cleansing before CRM ingestion",
      "Lack of real-time visibility into data health and ingestion statuses"
    ],
    keyCapabilities: [
      "Automated CSV file ingestion & schema validation",
      "Intelligent duplicate detection & record deduplication",
      "Data-quality scoring & error distribution breakdown",
      "Interactive data exploration workspace & reporting dashboards",
      "Asynchronous high-volume processing pipeline",
      "Clean, structured exports ready for business applications"
    ],
    techStack: ["React", "FastAPI", "Python", "SQLAlchemy", "Tailwind CSS", "Vite", "Pandas"],
    categoryTags: ["Data & Analytics", "Data Quality", "ETL Pipelines"],
    workflow: [
      "Raw Customer File Upload",
      "Automated Schema & Quality Audit",
      "Duplicate & Anomaly Flagging",
      "Validation & Cleansing Engine",
      "Executive Analytics & Verified Export"
    ],
    businessValue: "Replaces hours of manual spreadsheet data cleanup with automated validation gates and live data-quality telemetry.",
    featured: true
  },
  {
    id: "skillsscan-ai",
    slug: "skillsscan-ai",
    title: "SkillsScan AI",
    category: "AI Products",
    tagline: "AI-Powered Resume & Skills Intelligence",
    homepageSummary: "Recruitment intelligence platform that extracts competencies from multi-format resumes and matches candidate capabilities to open roles in seconds.",
    description: "An AI-powered recruitment platform designed to analyze high volumes of resumes, accurately extract candidate competencies, and transform unstructured CVs into structured, queryable talent profiles.",
    problemSolved: [
      "Recruiters spending hours manually reading hundreds of non-standard resumes",
      "Keyword-only search engines missing qualified candidates with alternative phrasing",
      "Severe application backlogs during competitive hiring campaigns",
      "Inconsistent candidate evaluation standards across team reviewers"
    ],
    keyCapabilities: [
      "Multi-format resume ingestion (PDF, Word, Scanned Documents)",
      "Contextual skill & credential extraction using modern language models",
      "Candidate competency profiling and automated evaluation summaries",
      "Semantic matching against role specifications",
      "Structured candidate intelligence dashboard for hiring teams"
    ],
    techStack: ["AI/LLM", "Node.js", "Gemini", "Groq", "JavaScript", "OCR"],
    categoryTags: ["AI Products", "Recruitment AI", "Document Intelligence"],
    workflow: [
      "Bulk CV Upload (PDF / DOCX)",
      "OCR & Text Structure Normalization",
      "Skill & Competency Extraction",
      "Candidate Profiling & Role Matching",
      "Recruiter Search & Review Matrix"
    ],
    businessValue: "Enables hiring teams to screen candidate batches in minutes with deep semantic comprehension instead of superficial keyword searches.",
    featured: true
  },
  {
    id: "ai-business-evaluator",
    slug: "ai-data-business-evaluator",
    title: "AI Data Business Evaluator",
    category: "Business Intelligence",
    tagline: "AI-Powered Business Analysis Platform",
    homepageSummary: "Decision platform that aggregates business metrics, analyzes performance trends, and surfaces prioritized recommendations for executive action.",
    description: "An intelligent business platform that aggregates operational metrics, analyzes key performance drivers, and surfaces AI-assisted insights to help leaders evaluate opportunities and make sound strategic decisions.",
    problemSolved: [
      "Operational numbers and performance metrics trapped across siloed sources",
      "Difficulty connecting raw numbers to actionable business initiatives",
      "Delayed quarterly reviews and slow turnaround on performance audits",
      "Lack of guided, scenario-based executive recommendations"
    ],
    keyCapabilities: [
      "Multi-source business metric ingestion & consolidation",
      "AI-assisted diagnostic insights & root-cause detection",
      "Interactive executive performance cockpit",
      "Key indicator trend forecasting & variance tracking",
      "Actionable recommendations prioritized by business leverage"
    ],
    techStack: ["Python", "Flask", "React", "MongoDB", "AI/LLM", "Data Science Libraries"],
    categoryTags: ["Business Intelligence", "Decision Support", "Executive Analytics"],
    workflow: [
      "Business Telemetry & Revenue Ingestion",
      "Performance Metric Calculation",
      "Trend & Anomaly Diagnostics",
      "Strategic Recommendation Synthesis",
      "Executive Review & Action Planning"
    ],
    businessValue: "Bridges the gap between raw data dashboards and executive strategy by converting historical numbers into forward-looking action plans.",
    featured: true
  },
  {
    id: "idea-os",
    slug: "idea-os",
    title: "IdeaOS",
    category: "AI Products",
    tagline: "AI-Powered Startup Idea Validator",
    homepageSummary: "Concept validation workspace that helps teams stress-test product ideas through structured market research and competitor analysis.",
    description: "An AI-driven platform that helps founders and innovation teams stress-test startup concepts through structured market analysis, competitor mapping, and viability evaluation before investing engineering resources.",
    problemSolved: [
      "Uncertainty around product-market fit before allocating capital",
      "Hours spent gathering manual competitor and market landscape data",
      "Unstructured brainstorming lacking rigorous business model validation",
      "Difficulty formulating clear value propositions and monetization strategies"
    ],
    keyCapabilities: [
      "Structured concept deconstruction & target customer definition",
      "Automated competitor landscape & market opportunity analysis",
      "Revenue model feasibility and risk factor assessment",
      "AI-generated executive validation reports & product roadmaps",
      "Continuous concept iteration and refinement workspace"
    ],
    techStack: ["React", "Tailwind CSS", "Flask", "Python", "MongoDB", "AI/LLM"],
    categoryTags: ["AI Products", "Market Validation", "Innovation Tooling"],
    workflow: [
      "Concept Intake & Market Hypothesis",
      "Competitor Landscape Retrieval",
      "Business Model Stress-Testing",
      "Risk & Moat Analysis",
      "Structured Validation Report"
    ],
    businessValue: "Helps teams validate assumptions early, mitigating the risk of building products that lack clear market demand.",
    featured: false
  },
  {
    id: "fitpro",
    slug: "fitpro",
    title: "FitPro",
    category: "Consumer Products",
    tagline: "Digital Fitness & Workout Platform",
    homepageSummary: "Engaging digital fitness application engineered with responsive state management, muscle-targeted routines, and interactive activity tracking.",
    description: "A consumer-focused digital fitness application engineered to deliver an engaging, responsive workout discovery experience with structured exercise data, personalized routines, and intuitive user tracking.",
    problemSolved: [
      "Fragmented, confusing digital fitness interfaces",
      "Difficulty discovering tailored workout routines by target muscle group",
      "Lack of clean, responsive design across mobile and tablet devices"
    ],
    keyCapabilities: [
      "Dynamic workout & exercise discovery engine",
      "Detailed exercise execution guides and muscle categorization",
      "Clean, user-centric responsive interface",
      "External fitness data & media API integrations",
      "Fast, fluid client-side navigation"
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "Modern Web Standards"],
    categoryTags: ["Consumer Products", "Mobile-First UX", "Application Engineering"],
    workflow: [
      "User Fitness Goal Selection",
      "Curated Exercise Exploration",
      "Routine Assembly & Schedule",
      "Guided Activity Execution"
    ],
    businessValue: "Demonstrates high-polish consumer product design, responsive state management, and real-time API integrations.",
    featured: false
  }
];
