"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { GlobalAdvisorModal, FloatingAdvisorButton } from "@/components/advisor/GlobalAdvisorModal";
import { TRANSFORMATION_STEPS } from "@/content/solutions";
import { ArrowRight, ShieldCheck, Zap, Activity, CheckCircle2 } from "lucide-react";

export default function TransformationPage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      <Navbar onOpenAdvisor={() => setAdvisorOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
              METHODOLOGY
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Enterprise AI Transformation
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed">
              Moving organizations from exploratory AI experimentation to deep operational integration with strict governance, sovereign data boundaries, and measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {TRANSFORMATION_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-2xl bg-[#08080a] border border-white/10 shadow-2xl relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-mono font-black text-neutral-700">
                      {step.step}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-950/40 text-blue-400 border border-blue-500/20">
                      PHASE // {step.phase}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{step.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>DETERMINISTIC VERIFICATION</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/20 via-[#070709] to-blue-950/20 border border-blue-500/30 text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Initiate an AI Readiness Audit?
            </h2>
            <p className="text-sm text-neutral-300 max-w-xl mx-auto">
              Our principal architects will conduct an end-to-end operational friction review across your team workflows.
            </p>
            <div className="pt-2">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-colors"
              >
                <span>COMMENCE AUDIT DISCOVERY</span>
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
