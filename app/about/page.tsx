"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { GlobalAdvisorModal, FloatingAdvisorButton } from "@/components/advisor/GlobalAdvisorModal";
import { Cpu, CheckCircle2, ShieldCheck, ArrowRight, Building2, Globe2, Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      <Navbar onOpenAdvisor={() => setAdvisorOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-16 space-y-4">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
              ABOUT NOXTUM AI
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              We Turn Promising AI Ideas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-blue-400">
                Into Practical Business Systems.
              </span>
            </h1>
            <p className="text-base sm:text-xl text-neutral-300 leading-relaxed max-w-3xl pt-2">
              NOXTUM AI was founded on a simple realization: businesses don&apos;t need another generic AI chatbot or hype-filled experiment. They need reliable, production-ready software systems that fit into their existing operations and help their teams work faster, smarter, and with greater confidence.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-[#08080a] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold">
                <Target className="w-4 h-4" />
                <span>WHAT WE BELIEVE</span>
              </div>
              <h3 className="text-lg font-bold text-white">Technology Must Serve the Business</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Artificial intelligence is not an end in itself—it is an operational tool to solve bottlenecks, eliminate repetitive manual toil, and sharpen decision-making. If an AI system doesn&apos;t deliver clear, measurable time savings or financial value, it shouldn&apos;t be built.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#08080a] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>HOW WE WORK</span>
              </div>
              <h3 className="text-lg font-bold text-white">Practical Engineering, Zero Lock-In</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                We design AI solutions that connect cleanly into your existing software—whether that&apos;s your CRM, spreadsheets, custom ERP, or messaging channels. We prioritize data privacy, rigorous testing, and transparent architecture so your team stays completely in control.
              </p>
            </div>
          </div>

          {/* Who We Work With & Problems We Solve */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#08080a] border border-white/10 mb-16 space-y-8 shadow-2xl">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">
                OUR CLIENT FOCUS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Who We Work With & What We Solve
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-mono font-bold text-xs">
                  01
                </div>
                <h4 className="font-bold text-white">Growing Businesses & Agencies</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Companies dealing with high inquiry volumes, manual lead qualification delays, or repetitive document entry that slows team responsiveness.
                </p>
              </div>

              <div className="space-y-2 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-mono font-bold text-xs">
                  02
                </div>
                <h4 className="font-bold text-white">Operational & Service Teams</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Organizations in real estate, healthcare, logistics, and professional services where manual document review creates administrative bottlenecks.
                </p>
              </div>

              <div className="space-y-2 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-mono font-bold text-xs">
                  03
                </div>
                <h4 className="font-bold text-white">Innovators & Founders</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Product creators who need to build custom AI workflows, validation engines, and intelligence workspaces from concept to production.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-blue-400" />
                <span>Serving businesses across India, UAE, and international markets.</span>
              </div>
              <Link
                href="/work"
                className="text-white hover:text-blue-400 font-bold flex items-center gap-1 transition-colors"
              >
                <span>Explore what we&apos;ve built</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Guiding Principles */}
          <div className="p-8 rounded-2xl bg-[#060608] border border-white/10 space-y-6 mb-16">
            <h2 className="text-lg font-bold font-mono text-white">THE NOXTUM PRINCIPLES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-neutral-300">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-blue-400 font-bold block">01 // DATA PRIVACY</span>
                <p className="text-neutral-400">We engineer privacy-conscious AI architectures where your proprietary business records remain secure.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-blue-400 font-bold block">02 // RELIABILITY</span>
                <p className="text-neutral-400">Every automated action includes clear guardrails, structured validation, and human review touchpoints.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-blue-400 font-bold block">03 // MEASURED VALUE</span>
                <p className="text-neutral-400">We measure success by hours saved, faster customer response times, and concrete operational leverage.</p>
              </div>
            </div>
          </div>

          {/* Official Dubai Presence & Contact */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#08080a] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
                HEADQUARTERS & GLOBAL ENGAGEMENT
              </span>
              <h3 className="text-2xl font-bold text-white">NOXTUM AI — Dubai, UAE</h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed">
                Level 3, BurJuman Center, Bur Dubai, Dubai, UAE. We work with forward-thinking businesses across the UAE, India, and internationally.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-300 pt-1">
                <span>Phone: +971 56 950 1555</span>
                <span className="text-neutral-600">|</span>
                <a href="mailto:noxtumai@outlook.com" className="text-blue-400 hover:underline">
                  noxtumai@outlook.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <Link
                href="/book-consultation"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs font-mono hover:bg-neutral-200 transition-all shadow-lg"
              >
                Book a Consultation
              </Link>
              <a
                href="https://wa.me/971569501555"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-semibold text-xs font-mono transition-all"
              >
                WhatsApp Direct
              </a>
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
