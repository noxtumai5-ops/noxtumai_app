"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { GlobalAdvisorModal, FloatingAdvisorButton } from "@/components/advisor/GlobalAdvisorModal";
import { SOLUTIONS } from "@/content/solutions";
import { ArrowUpRight, CheckCircle2, Cpu } from "lucide-react";

export default function SolutionsPage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      <Navbar onOpenAdvisor={() => setAdvisorOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
              SYSTEM ARCHITECTURE
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              AI Solutions Catalog
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed">
              We engineer scalable cognitive systems designed to eliminate friction points across business operations, multi-agent workflows, and decision pipelines.
            </p>
          </div>

          <div className="space-y-12">
            {SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                id={sol.id}
                className="p-8 rounded-2xl bg-[#08080a] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-blue-400 bg-blue-950/40 px-2.5 py-1 rounded border border-blue-500/30">
                      {sol.number} // SOLUTION
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{sol.subtitle}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{sol.title}</h2>
                  <p className="text-sm text-neutral-300 leading-relaxed">{sol.description}</p>
                  
                  <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs font-mono text-blue-300">
                    <span className="text-neutral-400 block mb-1">ENTERPRISE IMPACT:</span>
                    {sol.enterpriseImpact}
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-3">
                  <span className="text-xs font-mono text-neutral-400 uppercase block">CORE CAPABILITIES</span>
                  <ul className="space-y-2">
                    {sol.capabilities.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-8 pt-6 lg:pt-0">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase block mb-2">TYPICAL WORKFLOW</span>
                    <div className="space-y-1.5 text-xs font-mono text-neutral-300">
                      {sol.workflow.map((w, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-neutral-500">0{i + 1}</span>
                          <span>{w}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={"/book-consultation?solution=" + sol.id}
                    className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-black font-semibold text-xs font-mono hover:bg-neutral-200 transition-all shadow-lg"
                  >
                    <span>CONSULT ON THIS</span>
                    <ArrowUpRight className="w-4 h-4" />
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
