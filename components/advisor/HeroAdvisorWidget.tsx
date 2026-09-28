"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  MessageSquare, 
  CheckCircle2, 
  Layers,
  Wrench,
  Building2,
  Stethoscope,
  Users,
  Info
} from "lucide-react";
import { SystemBlueprint, AdvisorMode } from "@/lib/ai/advisor-engine";
import { generateGoogleFormUrl, generateWhatsAppUrl } from "@/lib/handoff";
import { DocumentUploadWidget } from "@/components/advisor/DocumentUploadWidget";
import Link from "next/link";

const INDUSTRY_STARTERS = [
  {
    icon: Building2,
    industry: "Real Estate",
    text: "I run a real estate agency and our sales team is overwhelmed with inquiries across WhatsApp and listing portals."
  },
  {
    icon: Stethoscope,
    industry: "Healthcare",
    text: "Our clinic spends hours each day answering appointment calls, rescheduling visits, and managing patient intake records."
  },
  {
    icon: Users,
    industry: "Recruitment",
    text: "Our hiring team reviews hundreds of resumes weekly and struggles to quickly shortlist qualified candidates."
  }
];

export function HeroAdvisorWidget() {
  const [problem, setProblem] = useState("");
  const [industry, setIndustry] = useState("");
  const [mode, setMode] = useState<AdvisorMode>("DESIGN");
  const [loading, setLoading] = useState(false);
  const [blueprint, setBlueprint] = useState<SystemBlueprint | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ragSessionId, setRagSessionId] = useState<string | null>(null);
  const [ragFileName, setRagFileName] = useState<string | null>(null);

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!problem.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problemDescription: problem,
          industry,
          mode
        })
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Failed to generate assessment");
      }

      setBlueprint(json.data);
    } catch (err: any) {
      setError(err.message || "Failed to generate assessment. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetAdvisor = () => {
    setBlueprint(null);
    setProblem("");
    setError(null);
  };

  return (
    <div className="w-full relative rounded-2xl glass-panel border border-white/10 p-5 sm:p-7 shadow-2xl overflow-hidden bg-[#070709]">
      {/* Accent Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08] mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-mono tracking-wider uppercase text-white font-bold">
            AI SYSTEM ADVISOR
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-400">
          <Info className="w-3 h-3 text-blue-400" />
          <span>Interactive Assessment</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!blueprint ? (
          <motion.div
            key="input-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {/* Industry quick select */}
            <div>
              <label className="block text-xs font-mono text-neutral-400 mb-2">
                SELECT A COMMON BUSINESS SCENARIO OR TYPE YOUR OWN:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {INDUSTRY_STARTERS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setProblem(item.text);
                        setIndustry(item.industry);
                      }}
                      className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-left transition-all flex flex-col justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 group-hover:text-blue-400 mb-1">
                        <Icon className="w-3.5 h-3.5 text-blue-400" />
                        <span>{item.industry}</span>
                      </div>
                      <span className="text-[11px] text-neutral-400 line-clamp-2 leading-tight">
                        {item.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleGenerate} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1">
                  DESCRIBE YOUR CURRENT OPERATIONAL BOTTLENECK:
                </label>
                <textarea
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  placeholder="e.g. Our sales team receives 150 inquiries daily on WhatsApp and takes hours to qualify buyers, causing missed deals..."
                  rows={3}
                  className="w-full bg-[#030304] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/60 transition-colors resize-none font-sans"
                />
              </div>

              {/* Optional RAG Document Upload */}
              <DocumentUploadWidget
                activeSessionId={ragSessionId}
                activeFileName={ragFileName}
                onSessionReady={(sessionId, fileName) => {
                  setRagSessionId(sessionId);
                  setRagFileName(fileName);
                  if (!problem.trim()) {
                    setProblem(`We have uploaded our project brief (${fileName}). Please review the requirements, identify the core operational bottleneck, and recommend an enterprise AI architecture.`);
                  }
                }}
                onClearSession={() => {
                  setRagSessionId(null);
                  setRagFileName(null);
                }}
              />

              {error && (
                <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !problem.trim()}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono text-xs font-bold transition-all shadow-lg shadow-blue-600/25 cursor-pointer"
              >
                {loading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>ANALYZING BUSINESS REQUIREMENTS...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>EVALUATE AI OPPORTUNITY</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="blueprint-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {/* Header / Reset */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400 font-bold uppercase">
                  RECOMMENDED SYSTEM:
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  {blueprint.aiFit}
                </span>
              </div>
              <button
                onClick={resetAdvisor}
                className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>New Query</span>
              </button>
            </div>

            {/* Architecture Card */}
            <div className="p-4 rounded-xl bg-[#040405] border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-white tracking-tight">
                {blueprint.recommendedSystem}
              </h3>

              {/* 3-Stage Pipeline */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                {blueprint.architectureStages.map((stage, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-blue-400 block">
                      STAGE {stage.stage}
                    </span>
                    <div className="text-xs font-semibold text-neutral-200">
                      {stage.title}
                    </div>
                    <div className="text-[11px] text-neutral-400 leading-snug">
                      {stage.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Rationale */}
              <div className="pt-2 border-t border-white/5 space-y-1 text-xs">
                <span className="text-[10px] font-mono text-neutral-500 uppercase block">
                  PRACTICAL VALUE & INTEGRATION:
                </span>
                <p className="text-neutral-300 leading-relaxed text-xs">
                  {blueprint.strategicRationale}
                </p>
                <div className="mt-2 text-[10px] font-mono text-neutral-400">
                  <span className="text-neutral-500">INTEGRATION: </span>
                  <span>{blueprint.integrationLayer.join(" · ")}</span>
                </div>
              </div>
            </div>

            {/* Actions: Discuss on WhatsApp or Submit Details */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={generateWhatsAppUrl(blueprint.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold font-mono transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>

              <Link
                href={`/book-consultation?industry=${encodeURIComponent(industry)}&problem=${encodeURIComponent(problem)}`}
                className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black text-xs font-bold font-mono hover:bg-neutral-200 transition-all shadow-xl"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="text-[10px] font-mono text-neutral-500 text-center pt-1">
              *Preliminary architecture synthesized based on simulated operational patterns.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
