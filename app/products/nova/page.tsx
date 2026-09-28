"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { GlobalAdvisorModal, FloatingAdvisorButton } from "@/components/advisor/GlobalAdvisorModal";
import { Cpu, TrendingUp, ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function NovaProductPage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      <Navbar onOpenAdvisor={() => setAdvisorOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>PROPRIETARY DECISION INTELLIGENCE ENGINE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
              NOVA Engine
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Moving beyond descriptive dashboards into prescriptive foresight. NOVA ingests multi-source enterprise data to model counterfactual scenarios, mitigate disruption risk, and recommend optimal strategic interventions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Counterfactual Simulation</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Test hundreds of pricing, supply chain, and resource allocation hypotheses in an isolated synthetic environment before committing capital.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Continuous Disruption Radar</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Monitors anomalous variance across vendor lead times, customer churn signals, and invoice discrepancies to trigger proactive remediation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Prescriptive Executive Action</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Translates high-dimensional mathematical projections into plain-English executive playbooks with calculated confidence intervals.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#060608] border border-white/10 mb-16">
            <h2 className="text-xl font-bold font-mono text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              TECHNICAL ARCHITECTURE SPECIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-neutral-500 block mb-1">DATA INGESTION</span>
                <span className="text-white font-semibold">Parquet / Kafka / CDC Streams</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-neutral-500 block mb-1">LATENCY PROFILE</span>
                <span className="text-white font-semibold">&lt; 140ms Scenario Synthesis</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-neutral-500 block mb-1">SOVEREIGNTY</span>
                <span className="text-white font-semibold">VPC / Private Air-Gapped</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-neutral-500 block mb-1">AUDITABILITY</span>
                <span className="text-white font-semibold">Deterministic Decision Tree Evals</span>
              </div>
            </div>
          </div>

          <div className="text-center p-8 rounded-2xl bg-blue-950/20 border border-blue-500/30 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-white">Experience NOVA in Action</h2>
            <p className="text-sm text-neutral-400">
              Inquire about pilot deployment for your enterprise telemetry or request an architectural walkthrough with our research team.
            </p>
            <div className="pt-2">
              <Link
                href="/book-consultation?product=nova"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-xs font-mono font-bold hover:bg-neutral-200 transition-colors"
              >
                <span>REQUEST NOVA DEMO</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <GlobalAdvisorModal isOpen={advisorOpen} onClose={() => setAdvisorOpen(false)} />
      <FloatingAdvisorButton onOpen={() => setAdvisorOpen(true)} />
      <Footer />
    </div>
  );
}
