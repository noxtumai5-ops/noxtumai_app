"use client";

import { motion } from "framer-motion";
import { Database, Binary, BrainCircuit, Zap, Terminal } from "lucide-react";

const LAYERS = [
  { icon: Database, name: "DATA FOUNDATION", desc: "Telemetry, documents, SQL databases, customer interactions & unstructured streams." },
  { icon: Binary, name: "REPRESENTATION", desc: "High-dimensional vector embeddings, semantic knowledge graphs & metadata indexing." },
  { icon: BrainCircuit, name: "COGNITION & REASONING", desc: "Multi-agent planning graphs, domain fine-tuned LLMs & counterfactual simulation." },
  { icon: Zap, name: "DETERMINISTIC ACTION", desc: "API execution, ERP synchronization, automated client engagement & human-in-the-loop triage." }
];

export function OperatingLayerDiagram() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>THE ENTERPRISE OPERATING STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              From Raw Corporate Exhaust to Autonomous Decision Systems
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Standard AI experiments produce isolated chatbot widgets. NOXTUM engineers full-stack cognitive systems that sit directly atop your data layer, transforming inert business exhaust into autonomous operational momentum.
            </p>

            <div className="mt-8 space-y-4 font-mono text-xs">
              <div className="flex items-center gap-3 text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Deterministic Safety & Audit Trails</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Zero Training On Private Intellectual Property</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Sub-100ms Edge Inference Orchestration</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-transparent rounded-2xl blur-xl" />
            {LAYERS.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="p-4 sm:p-5 rounded-xl bg-[#0a0a0c] border border-white/[0.08] flex items-start gap-4 group hover:border-blue-500/40 hover:bg-blue-950/10 transition-all shadow-md"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/40 text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-neutral-400">LAYER 0{4 - idx}</span>
                      <h4 className="text-sm font-bold text-white font-mono">{layer.name}</h4>
                    </div>
                    <p className="text-xs text-neutral-400 leading-snug">{layer.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
