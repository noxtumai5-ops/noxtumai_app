"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { GlobalAdvisorModal, FloatingAdvisorButton } from "@/components/advisor/GlobalAdvisorModal";
import { OUR_WORK } from "@/content/work";
import { ArrowUpRight, CheckCircle2, Cpu } from "lucide-react";

export default function WorkCatalogPage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      <Navbar onOpenAdvisor={() => setAdvisorOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
              ENGINEERING PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Our Work
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed">
              We design and engineer software platforms, data pipelines, and AI systems built around real operational challenges. Explore our deployed architectures, capabilities, and technologies.
            </p>
          </div>

          <div className="space-y-12">
            {OUR_WORK.map((item) => (
              <div
                key={item.id}
                id={item.slug}
                className="p-8 sm:p-10 rounded-3xl bg-[#08080a] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-blue-400 bg-blue-950/40 px-2.5 py-1 rounded border border-blue-500/30">
                      {item.categoryTags[0]}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{item.tagline}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{item.title}</h2>
                  <p className="text-sm text-neutral-300 leading-relaxed">{item.description}</p>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                      CHALLENGES SOLVED:
                    </span>
                    <ul className="space-y-1.5">
                      {item.problemSolved.map((prob, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1.5">TECHNOLOGY STACK:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech, i) => (
                        <span key={i} className="text-xs font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded text-neutral-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-8 pt-6 lg:pt-0 space-y-6">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 uppercase block mb-3">SYSTEM WORKFLOW</span>
                    <div className="space-y-2 text-xs font-mono text-neutral-300">
                      {item.workflow.map((w, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-2 rounded bg-[#050505] border border-white/5">
                          <span className="text-blue-400 font-bold">0{i + 1}</span>
                          <span>{w}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-blue-300 leading-relaxed">
                      <span className="font-mono text-neutral-400 block mb-1 text-[10px]">BUSINESS VALUE:</span>
                      {item.businessValue}
                    </div>
                    <Link
                      href={`/book-consultation?project=${item.slug}`}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black font-semibold text-xs font-mono hover:bg-neutral-200 transition-all shadow-lg"
                    >
                      <span>DISCUSS BUILDING A SIMILAR SYSTEM</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
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
