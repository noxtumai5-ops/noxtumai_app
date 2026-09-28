"use client";

import { motion } from "framer-motion";
import { Database, BrainCircuit, LineChart, Zap, ArrowRight, ShieldCheck } from "lucide-react";

const STAGES = [
  {
    step: "01",
    name: "Business Data",
    short: "Data Foundation",
    description: "Your operational documents, customer inquiries, databases, and spreadsheets are structured into accessible pipelines.",
    icon: Database
  },
  {
    step: "02",
    name: "AI & Privacy Guardrails",
    short: "Intelligent Processing",
    description: "Purpose-tuned AI models extract meaning, classify intents, and validate information under strict privacy controls.",
    icon: BrainCircuit
  },
  {
    step: "03",
    name: "Decision Intelligence",
    short: "Clarity & Guidance",
    description: "Operational trends are evaluated, confidence metrics are checked, and recommended courses of action are surfaced.",
    icon: LineChart
  },
  {
    step: "04",
    name: "Action & Sync",
    short: "Seamless Execution",
    description: "Automated updates trigger inside your CRM, messaging channels, or databases—with human sign-off for exceptions.",
    icon: Zap
  }
];

export function HowWeBuildSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How We Build AI Systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
            We don&apos;t build isolated chatbots. We construct reliable end-to-end software pipelines that connect your existing business data to practical operational outcomes.
          </p>
        </div>

        {/* 4-Step Clean Visual Pipeline: Data -> AI -> Decision -> Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 hover:bg-blue-950/5 transition-all flex flex-col justify-between group shadow-lg relative"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
                    <span className="text-2xl font-mono font-extrabold text-neutral-600 group-hover:text-blue-500 transition-colors">
                      {stage.step}
                    </span>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-neutral-500 uppercase block mb-1">
                    {stage.short}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {stage.name}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-7 h-7 rounded-full bg-[#030303] border border-white/20 flex items-center justify-center text-neutral-400">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Supporting Guarantees Bar */}
        <div className="mt-12 p-5 rounded-2xl bg-[#08080a] border border-white/5 flex flex-wrap items-center justify-around gap-4 text-xs font-mono text-neutral-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Privacy-Conscious AI Architecture</span>
          </div>
          <span className="hidden sm:inline text-neutral-700">|</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>Zero Unnecessary Vendor Lock-In</span>
          </div>
          <span className="hidden sm:inline text-neutral-700">|</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Human-in-the-Loop Safeguards</span>
          </div>
        </div>

      </div>
    </section>
  );
}
