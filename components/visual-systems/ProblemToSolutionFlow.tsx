"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, ChevronRight } from "lucide-react";

const STAGES = [
  {
    step: "01",
    label: "BUSINESS PROBLEM",
    description: "Operational bottlenecks, manual processing toils, fragmented communication, or data blindspots.",
    color: "border-neutral-700 bg-neutral-900/60"
  },
  {
    step: "02",
    label: "AI OPPORTUNITY",
    description: "Algorithmic audit, cognitive feasibility scoring, and highest-ROI initiative mapping.",
    color: "border-blue-900/80 bg-blue-950/20 text-blue-400"
  },
  {
    step: "03",
    label: "SYSTEM ARCHITECTURE",
    description: "Autonomous agent graphs, fine-tuned domain models, RAG vector indexers, and safety guardrails.",
    color: "border-neutral-700 bg-neutral-900/60"
  },
  {
    step: "04",
    label: "SEAMLESS INTEGRATION",
    description: "Serverless gateways connecting directly to legacy databases, CRMs, ERPs, and team tools.",
    color: "border-blue-900/80 bg-blue-950/20 text-blue-400"
  },
  {
    step: "05",
    label: "MEASURABLE OUTCOME",
    description: "70-90% cycle time reduction, zero hallucinations, lower cost-to-serve, and compound operational leverage.",
    color: "border-emerald-900/80 bg-emerald-950/20 text-emerald-400"
  }
];

export function ProblemToSolutionFlow() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030303]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-2 block">
            THE NOXTUM PARADIGM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Latent Business Problems to Autonomous Enterprise Systems
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            We do not sell pre-packaged AI hype. We start strictly with the friction points in your operations, identify where machine intelligence creates defensible value, and engineer the pipeline around your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {STAGES.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className={"p-6 rounded-2xl border " + stage.color + " relative flex flex-col justify-between group hover:border-blue-500/50 transition-all shadow-xl"}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-neutral-400">
                    PHASE {stage.step}
                  </span>
                  {idx < STAGES.length - 1 ? (
                    <ChevronRight className="w-4 h-4 text-neutral-600 hidden md:block" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  )}
                </div>
                <h3 className="text-base font-bold text-white font-mono tracking-tight mb-2">
                  {stage.label}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {idx < STAGES.length - 1 && (
                <div className="flex md:hidden justify-center my-2 text-neutral-600">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
