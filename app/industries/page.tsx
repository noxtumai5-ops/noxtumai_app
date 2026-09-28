"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { GlobalAdvisorModal, FloatingAdvisorButton } from "@/components/advisor/GlobalAdvisorModal";
import { INDUSTRIES } from "@/content/solutions";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function IndustriesPage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      <Navbar onOpenAdvisor={() => setAdvisorOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
              SECTOR ROADMAPS
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Industry Vertical Deployments
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed">
              Domain-tuned architectures addressing the specific regulatory, data formatting, and workflow constraints of 10 core enterprise industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="p-8 rounded-2xl bg-[#08080a] border border-white/10 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                      {ind.id.replace("-", " ")}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/20">
                      {ind.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2">{ind.name}</h2>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">{ind.summary}</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">
                        HIGH-IMPACT CAPABILITIES:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.aiOpportunities.map((opp, i) => (
                          <span key={i} className="text-[11px] font-sans px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
                            {opp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">
                        PIPELINE BLUEPRINT:
                      </span>
                      <code className="text-xs font-mono text-neutral-400 block bg-[#040405] p-2.5 rounded border border-white/5">
                        {ind.exampleWorkflow}
                      </code>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500">PRODUCTION READY</span>
                  <Link
                    href={"/book-consultation?industry=" + ind.id}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    <span>SCHEDULE BRIEFING</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <GlobalAdvisorModal isOpen={advisorOpen} onClose={() => setAdvisorOpen(false)} />
      <FloatingAdvisorButton onOpen={() => setAdvisorOpen(true)} />
      <Footer />
    </div>
  );
}
