"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Zap,
  Building2,
  Database,
  LineChart,
  ShieldCheck,
  Cpu,
  Clock,
  MessageSquare,
  TrendingUp,
  Bot,
  HelpCircle,
  Lightbulb,
  Workflow,
  BarChart3,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { OurWorkSection } from "@/components/visual-systems/OurWorkSection";
import { HeroAdvisorWidget } from "@/components/advisor/HeroAdvisorWidget";
import { GlobalAdvisorModal, FloatingAdvisorButton } from "@/components/advisor/GlobalAdvisorModal";
import { HowWeBuildSection } from "@/components/visual-systems/HowWeBuildSection";
import { TestimonialsSection } from "@/components/visual-systems/TestimonialsSection";
import { SOLUTIONS, INDUSTRIES, TRANSFORMATION_STEPS } from "@/content/solutions";
import { NOXTUM_CONTACT } from "@/lib/handoff";

export default function HomePage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);

  const handleImproveChoice = (choice: string) => {
    setAdvisorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar onOpenAdvisor={() => setAdvisorOpen(true)} />

      {/* 1. HERO — COMPANY POSITIONING */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden tech-grid border-b border-white/[0.06]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-neutral-300 shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>NOXTUM AI // DUBAI & INDIA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] font-sans"
          >
            We Build AI Systems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-blue-400">
              That Move Businesses Forward.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
          >
            NOXTUM AI helps businesses identify where artificial intelligence creates genuine operational value — and designs, engineers, and integrates intelligent software systems around their core workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a
              href="#assessment"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-xs font-mono tracking-wide hover:bg-neutral-200 transition-all shadow-xl"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/book-consultation"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs transition-all cursor-pointer"
            >
              <span>Talk to NOXTUM</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="pt-8 text-xs font-mono text-neutral-400 tracking-wider">
            AI STRATEGY · AUTOMATION · AI AGENTS · DECISION INTELLIGENCE · CUSTOM AI
          </div>

          {/* Interactive Visual Telemetry Mockup (Professional, responsive 3D-depth layer) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="pt-6 max-w-4xl mx-auto"
          >
            <div className="p-4 sm:p-6 rounded-2xl bg-[#08080c]/90 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 gap-2 mb-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-bold">NOXTUM OPERATIONAL PIPELINE</span>
                  <span className="text-neutral-500 hidden sm:inline">// DUBAI CLOUD & EDGE</span>
                </div>
                <div className="text-neutral-400 text-[11px]">
                  ACTIVE WORKFLOWS: <span className="text-blue-400 font-bold">6 PRODUCTION SYSTEMS</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-[10px] text-neutral-500 uppercase">Input Channels</div>
                  <div className="text-xs text-white font-semibold flex items-center justify-between">
                    <span>WhatsApp / Web / ERP</span>
                    <span className="text-emerald-400 text-[10px]">Connected</span>
                  </div>
                  <div className="text-[11px] text-neutral-400">Zero manual triage latency</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-[10px] text-neutral-500 uppercase">Intelligent Processing</div>
                  <div className="text-xs text-white font-semibold flex items-center justify-between">
                    <span>Extraction & Reasoning</span>
                    <span className="text-blue-400 text-[10px]">Active</span>
                  </div>
                  <div className="text-[11px] text-neutral-400">Contextual entity validation</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-[10px] text-neutral-500 uppercase">Business Outcome</div>
                  <div className="text-xs text-white font-semibold flex items-center justify-between">
                    <span>Instant Execution</span>
                    <span className="text-purple-400 text-[10px]">Verified</span>
                  </div>
                  <div className="text-[11px] text-neutral-400">Direct CRM & calendar dispatch</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FREE AI BUSINESS ASSESSMENT (PRIMARY LEAD GENERATOR ⭐) */}
      <section id="assessment" className="py-16 bg-gradient-to-b from-[#08080c] to-[#040406] border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#09090c] border border-blue-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FREE AI BUSINESS ASSESSMENT</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Discover Where AI Can Help Your Business
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Tell us about your business and the challenges you&apos;re facing. We&apos;ll help you identify where AI could save time, improve operations, or create new revenue opportunities.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 pt-2">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> 100% Free Consultation
                </span>
                <span>•</span>
                <span>No Technical Jargon</span>
                <span>•</span>
                <span>Practical Payback Roadmap</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => setAdvisorOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Your Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/971569501555?text=Hello%20NOXTUM%20AI%2C%20I%20would%20like%20to%20request%20a%20Free%20AI%20Business%20Assessment%20for%20my%20company."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-mono text-xs font-semibold transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT AI CAN DO FOR YOUR BUSINESS (USE CASES) */}
      <section className="py-24 bg-[#030303] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
              REAL-WORLD IMPACT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              What Could AI Do For Your Business?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400">
              Clear, proven ways artificial intelligence helps companies reduce costs, eliminate manual toil, and grow faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-3">
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 w-fit">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Increase Sales</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Respond to leads faster and help your sales team qualify and convert more opportunities across WhatsApp, web, and email.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Save Time</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Reduce repetitive administrative work and let your team focus on high-leverage client relationships and core operations.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-3">
              <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 w-fit">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Improve Customer Experience</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Give customers faster, more helpful support and guidance 24/7 across their preferred messaging channels.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-3">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 w-fit">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Work Smarter With Data</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Turn scattered spreadsheets, documents, and business information into clear insights your leadership can query anytime.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-3">
              <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400 w-fit">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Automate Everyday Work</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Eliminate manual paperwork, invoice entry, and handoffs across your business systems with intelligent validation.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 w-fit">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Make Better Decisions</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Understand what&apos;s happening in your business in real time and identify the next highest-priority actions to take.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR WORK ⭐ (PROVEN SYSTEMS) */}
      <OurWorkSection />

      {/* 5. "HOW CAN WE HELP?" (INTERACTIVE HIGH-CONVERSION SELECTOR) */}
      <section className="py-20 bg-[#050505] border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
            CHOOSE YOUR FOCUS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Are You Trying to Improve?
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto">
            Select your primary objective below to start an interactive assessment with our team:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 text-left">
            {[
              { title: "I want to increase sales", desc: "Faster lead qualification & customer booking agents." },
              { title: "I want to reduce manual work", desc: "Automating document entry, invoicing & paperwork." },
              { title: "I want to improve customer service", desc: "24/7 multi-lingual WhatsApp & web assistance." },
              { title: "I want to understand my data", desc: "Cleaning fragmented records & executive analytics." },
              { title: "I want to build an AI product", desc: "Custom AI application engineering from scratch." },
              { title: "I'm not sure — I need guidance", desc: "Explore feasibility and audit where AI fits." }
            ].map((opt, i) => (
              <button
                key={i}
                onClick={() => handleImproveChoice(opt.title)}
                className="p-5 rounded-xl bg-[#08080a] border border-white/10 hover:border-blue-500/50 hover:bg-blue-950/10 transition-all group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                    {opt.title}
                  </div>
                  <div className="text-xs text-neutral-400 leading-snug">
                    {opt.desc}
                  </div>
                </div>
                <div className="pt-3 text-[11px] font-mono text-blue-400 flex items-center justify-between">
                  <span>Explore Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT WE CAN BUILD (IMAGINE WHAT'S POSSIBLE) */}
      <section className="py-24 bg-[#030303] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
                CAPABILITIES & PRODUCTS
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Imagine What&apos;s Possible
              </h2>
              <p className="mt-2 text-sm text-neutral-400 max-w-xl">
                Here are the core types of intelligent systems we engineer for forward-thinking businesses.
              </p>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-neutral-300 hover:text-white transition-colors"
            >
              <span>VIEW DETAILED SOLUTIONS</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-2.5">
              <span className="text-xs font-mono text-blue-400 font-bold block">01 // AI ASSISTANTS</span>
              <h3 className="text-base font-bold text-white">Answer, Support & Assist</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Answer customer questions instantly, support staff with internal knowledge lookup, and handle multi-lingual communication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-2.5">
              <span className="text-xs font-mono text-blue-400 font-bold block">02 // AI AGENTS</span>
              <h3 className="text-base font-bold text-white">Autonomous Workflows</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Handle multi-step tasks across CRMs, calendars, spreadsheets, and communication channels automatically.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-2.5">
              <span className="text-xs font-mono text-blue-400 font-bold block">03 // BUSINESS INTELLIGENCE</span>
              <h3 className="text-base font-bold text-white">Actionable Analytics</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Turn your business numbers, telemetry, and customer records into useful, queryable insights that assist leadership decisions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-2.5">
              <span className="text-xs font-mono text-blue-400 font-bold block">04 // CUSTOM AI APPLICATIONS</span>
              <h3 className="text-base font-bold text-white">Full-Stack AI Products</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Build an AI-powered software product around your proprietary workflow, database, or product idea from scratch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-2.5">
              <span className="text-xs font-mono text-blue-400 font-bold block">05 // PROCESS AUTOMATION</span>
              <h3 className="text-base font-bold text-white">Reduce Repetitive Work</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Extract data from documents, eliminate duplicate spreadsheet entry, and speed up operational fulfillment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all space-y-2.5">
              <span className="text-xs font-mono text-blue-400 font-bold block">06 // CUSTOMER EXPERIENCES</span>
              <h3 className="text-base font-bold text-white">Smart Client Interactions</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Create faster, smoother, personalized interactions across WhatsApp, mobile apps, and company portals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY NOXTUM? */}
      <section className="py-20 bg-[#050505] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
              OUR PROMISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Businesses Work With NOXTUM
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400">
              We focus on measurable business leverage rather than complicated AI experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/5 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400 block">01 // PROBLEM-FIRST</span>
              <h3 className="text-base font-bold text-white">We Start With Your Problem</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We take the time to understand your operational challenge and daily friction points before recommending any technology.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/5 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400 block">02 // TAILORED FIT</span>
              <h3 className="text-base font-bold text-white">Solutions Built Around You</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Every business has unique workflows. We create solutions that connect into your existing software and processes without disruption.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/5 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400 block">03 // END-TO-END</span>
              <h3 className="text-base font-bold text-white">From Idea to Implementation</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We don&apos;t just consult. We engineer the complete system, test it with your team, and ensure it works reliably in production.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/5 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400 block">04 // REAL VALUE</span>
              <h3 className="text-base font-bold text-white">Focused on Real Value</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Our objective is simple: make your business operations simpler, faster, and more effective with clear payback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES — AI THAT UNDERSTANDS YOUR INDUSTRY */}
      <section className="py-24 bg-[#030303] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
                INDUSTRY SPECIFICITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                AI That Understands Your Industry
              </h2>
              <p className="mt-2 text-sm text-neutral-400 max-w-xl">
                Practical solutions tailored to the daily operational demands of specific sectors.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-neutral-300 hover:text-white transition-colors"
            >
              <span>EXPLORE YOUR INDUSTRY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
            {INDUSTRIES.slice(0, 6).map((ind, idx) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryTab(idx)}
                className={"whitespace-nowrap px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer " + (
                  activeIndustryTab === idx
                    ? "bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/25"
                    : "bg-white/5 hover:bg-white/10 text-neutral-400 border border-white/5"
                )}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {(() => {
            const ind = INDUSTRIES[activeIndustryTab] || INDUSTRIES[0];
            return (
              <div className="p-8 sm:p-10 rounded-3xl bg-[#08080a] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-blue-400 bg-blue-950/40 px-2.5 py-1 rounded border border-blue-500/30">
                      KEY OBJECTIVE
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">{ind.badge}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{ind.name}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{ind.summary}</p>

                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                      PRACTICAL AI EXAMPLES:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {ind.aiOpportunities.map((opp, i) => (
                        <span key={i} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-neutral-200">
                          {opp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase block mb-2">CHALLENGES SOLVED</span>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      {ind.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 mt-1 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/industries`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white hover:bg-neutral-200 text-black text-xs font-semibold font-mono transition-colors"
                  >
                    <span>EXPLORE VERTICAL SOLUTIONS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 9. AI ADVISOR FEATURE — NOT SURE WHERE TO START? */}
      <section className="py-24 bg-[#050505] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
                INTERACTIVE ASSESSMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Not Sure Where to Start With AI?
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Tell us what you&apos;re struggling with. Our AI Advisor will help you explore possible solutions and synthesize a preliminary roadmap.
              </p>

              <div className="space-y-3 font-mono text-xs text-neutral-300 pt-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Instant preliminary opportunity assessment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Pre-mapped real estate, healthcare, & operational patterns</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Direct handoff to WhatsApp for engineering review</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <HeroAdvisorWidget />
            </div>

          </div>
        </div>
      </section>

      {/* 10. HOW WE BUILD AI SYSTEMS */}
      <HowWeBuildSection />

      {/* 11. HOW WE WORK (METHODOLOGY: DISCOVER -> PLAN -> BUILD -> LAUNCH -> IMPROVE) */}
      <section className="py-24 bg-[#050505] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-2 block">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              From Business Problem to Production System
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400">
              A structured 6-stage roadmap designed to take you from initial audit to a dependable, deployed software system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRANSFORMATION_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#08080a] border border-white/[0.08] relative group hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-extrabold text-neutral-600 group-hover:text-blue-500 transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-400 uppercase">
                    {step.phase}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FREE CONSULTATION CALLOUT */}
      <section className="py-20 bg-[#07070a] border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
            FREE CONSULTATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have an Idea or Business Challenge?
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Let&apos;s talk about it. Share what you&apos;re trying to achieve and we&apos;ll explore the possibilities together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/book-consultation"
              className="px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-xs font-mono tracking-wide hover:bg-neutral-200 transition-all shadow-xl"
            >
              Book a Free Consultation →
            </Link>
            <a
              href="https://wa.me/971569501555?text=Hello%20NOXTUM%20AI%2C%20I%20have%20an%20idea%20and%20would%20like%20to%20schedule%20a%20free%20consultation."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-mono text-xs font-semibold transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us →</span>
            </a>
          </div>
        </div>
      </section>

      {/* 13. ABOUT NOXTUM SUMMARY */}
      <section className="py-20 bg-[#030303] border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
            ABOUT NOXTUM AI
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            We Believe Technology Should Serve the Business, Not the Other Way Around.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            NOXTUM AI was founded on a simple realization: companies don&apos;t need more brittle chat widgets or empty marketing hype. They need practical, production-grade software that helps their people work with greater speed and operational confidence.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-blue-400 transition-colors"
            >
              <span>LEARN MORE ABOUT NOXTUM</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. CLIENT FEEDBACK & TESTIMONIALS */}
      <TestimonialsSection />

      {/* 14. STRONG FINAL CTA */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#020202]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have a Problem Worth Solving?
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Tell us what you&apos;re trying to improve, automate, or build.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/book-consultation"
              className="px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-xs font-mono tracking-wide hover:bg-neutral-200 transition-all shadow-xl"
            >
              Talk to NOXTUM →
            </Link>
            <button
              onClick={() => setAdvisorOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              Start With AI Advisor →
            </button>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-neutral-400">
            <a
              href="https://wa.me/971569501555"
              target="_blank"
              rel="noreferrer"
              className="text-[#25D366] hover:underline"
            >
              WhatsApp: +971 56 950 1555
            </a>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <span>Dubai, UAE: Level 3, BurJuman Center, Bur Dubai</span>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <a href="mailto:noxtumai@outlook.com" className="text-blue-400 hover:underline">
              noxtumai@outlook.com
            </a>
          </div>
        </div>
      </section>

      {/* Global Advisor Modal & Floating Launcher */}
      <GlobalAdvisorModal isOpen={advisorOpen} onClose={() => setAdvisorOpen(false)} />
      <FloatingAdvisorButton onOpen={() => setAdvisorOpen(true)} />

      <Footer />
    </div>
  );
}
