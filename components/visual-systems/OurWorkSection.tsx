"use client";

import Link from "next/link";
import { ArrowUpRight, Cpu, Database, FileText, BarChart3, Rocket, Activity } from "lucide-react";
import { OUR_WORK } from "@/content/work";

const ICON_MAP: Record<string, any> = {
  "smart-vehicle-data": Database,
  "dataflow": BarChart3,
  "skillsscan-ai": FileText,
  "ai-business-evaluator": Cpu,
  "idea-os": Rocket,
  "fitpro": Activity,
};

export function OurWorkSection() {
  return (
    <section id="work" className="py-24 bg-[#030303] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
              <span>PROVEN INTELLIGENT SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Our Work
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
              Products and intelligent systems we&apos;ve built. We design and engineer practical software that solves genuine operational and data challenges.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-all w-fit"
          >
            <span>VIEW ALL SYSTEMS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Uniform Grid - Every card has the exact same design and structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUR_WORK.map((proj) => {
            const Icon = ICON_MAP[proj.id] || Cpu;
            return (
              <div
                key={proj.id}
                className="p-6 rounded-2xl bg-[#08080a] border border-white/[0.08] hover:border-blue-500/40 hover:bg-blue-950/5 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/40 text-blue-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wide">
                        {proj.category}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <span className="text-xs font-mono text-neutral-400 block mb-3">{proj.tagline}</span>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {proj.homepageSummary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {proj.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono bg-white/5 px-2 py-0.5 rounded text-neutral-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/work/${proj.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-neutral-300 group-hover:text-white transition-colors ml-2 shrink-0"
                  >
                    <span>CASE STUDY</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
