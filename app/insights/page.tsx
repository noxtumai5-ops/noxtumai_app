"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { GlobalAdvisorModal, FloatingAdvisorButton } from "@/components/advisor/GlobalAdvisorModal";
import { ArrowUpRight, BookOpen, Terminal, Sparkles } from "lucide-react";

const ARTICLES = [
  {
    title: "Why Most Enterprise Generative AI Pilots Fail to Reach Production",
    category: "RESEARCH BRIEF",
    readTime: "6 min read",
    summary: "An analysis of 120+ corporate AI initiatives and why ungrounded chatbots collapse under production latency and hallucination constraints."
  },
  {
    title: "GraphRAG vs Standard Vector RAG in Multi-Hop Document Reasoning",
    category: "ARCHITECTURE",
    readTime: "9 min read",
    summary: "How semantic graph knowledge representations outperform naive chunked embeddings for complex legal and regulatory audits."
  },
  {
    title: "The Shift to Decision Intelligence: Why Prediction Isn't Enough",
    category: "STRATEGY",
    readTime: "7 min read",
    summary: "Examining how counterfactual scenario modeling bridges the gap between predictive machine learning and executive capital allocation."
  }
];

export default function InsightsPage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      <Navbar onOpenAdvisor={() => setAdvisorOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
              TECHNICAL PAPERS & RESEARCH
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              NOXTUM Engineering Insights
            </h1>
            <p className="text-base text-neutral-400 leading-relaxed">
              In-depth research papers, architectural blueprints, and operational post-mortems on deploying high-reliability cognitive systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ARTICLES.map((art, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#08080a] border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4 text-xs font-mono">
                    <span className="text-blue-400">{art.category}</span>
                    <span className="text-neutral-500">{art.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white">
                  <span>READ PAPER</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center space-y-4">
            <h3 className="text-xl font-bold font-mono text-white">Subscribe to Technical Releases</h3>
            <p className="text-xs text-neutral-400 max-w-md mx-auto">
              Periodic engineering breakdowns of novel model architectures, agent frameworks, and enterprise case studies.
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="corporate.email@domain.com"
                className="flex-1 bg-[#050505] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50"
              />
              <button className="px-4 py-2 bg-white text-black font-semibold text-xs rounded-lg hover:bg-neutral-200 transition-colors">
                Subscribe
              </button>
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
