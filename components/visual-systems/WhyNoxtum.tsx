"use client";

import { ShieldCheck, Cpu, Target, Network, Layers } from "lucide-react";

const REASONS = [
  {
    icon: Target,
    title: "Problem-First Architecture",
    description: "We do not sell pre-packaged models or generic wrappers. We start strictly with your manual friction points and cost-to-serve metrics."
  },
  {
    icon: Network,
    title: "Engineered Infrastructure",
    description: "We design complete end-to-end pipelines: connectors, APIs, vector graphs, validation gates, and human handoff protocols."
  },
  {
    icon: ShieldCheck,
    title: "100% Data Sovereignty",
    description: "Your proprietary customer records, financial ledgers, and operational secrets never train public model checkpoints."
  },
  {
    icon: Layers,
    title: "Outcome-Accountable",
    description: "Every deployment is held to deterministic accuracy benchmarks, latency profiles under 100ms, and measurable operational ROI."
  }
];

export function WhyNoxtum() {
  return (
    <section className="py-24 bg-[#030303] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
            WHY NOXTUM AI
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            AI is Easy to Demo. <br />
            <span className="text-neutral-400">Engineering it Into a Business Isn&apos;t.</span>
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed">
            The market is saturated with brittle chat widgets and vanity prototypes. NOXTUM bridges the gap between machine learning capability and mission-critical enterprise reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-neutral-500">
                  NOXTUM STANDARD // VERIFIED
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
