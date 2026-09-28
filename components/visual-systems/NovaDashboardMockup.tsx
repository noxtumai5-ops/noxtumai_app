"use client";

import { Cpu, ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export function NovaDashboardMockup() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030303] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>DECISION INTELLIGENCE FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              NOVA Decision Intelligence
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
              NOVA helps organizations understand complex business scenarios, explore possible outcomes, and identify actions worth considering before allocating capital.
            </p>
          </div>
          <Link
            href="/products/nova"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-all w-fit"
          >
            <span>EXPLORE NOVA CAPABILITIES</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Dashboard Frame */}
        <div className="rounded-2xl border border-white/10 bg-[#070709] p-4 sm:p-6 shadow-2xl relative">
          
          {/* Header with explicit Simulated Notice */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] mb-6 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-xs font-mono text-neutral-400">
                NOVA-CORE // SCENARIO SIMULATOR
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>SIMULATED SCENARIO DEMONSTRATION</span>
            </div>
          </div>

          {/* Metric Tiles with Explicit Example Labels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase">
                <span>Simulated Velocity Gain</span>
                <span className="text-neutral-500">Demo</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-mono font-bold text-white">+48.2%</span>
                <span className="text-xs text-emerald-400 font-mono">Projected</span>
              </div>
              <span className="text-[11px] text-neutral-400 mt-1 block">Simulated order routing throughput</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase">
                <span>Model Risk Evaluation</span>
                <span className="text-neutral-500">Demo</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-mono font-bold text-emerald-400">LOW RISK</span>
                <span className="text-xs text-emerald-400 font-mono">Rank 0.14</span>
              </div>
              <span className="text-[11px] text-neutral-400 mt-1 block">Variance across fulfillment factors</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase">
                <span>Projected Gross Margin</span>
                <span className="text-neutral-500">Demo</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-mono font-bold text-white">34.6%</span>
                <span className="text-xs text-emerald-400 font-mono">+4.1%</span>
              </div>
              <span className="text-[11px] text-neutral-400 mt-1 block">Post-intervention modeled estimate</span>
            </div>
          </div>

          {/* Action Recommendation Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#030304] border border-white/[0.08] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400 uppercase">Simulated Recommendation:</span>
              <span className="text-blue-400 text-[11px]">EXAMPLE OUTPUT</span>
            </div>
            <p className="text-sm font-sans text-neutral-200 leading-relaxed">
              &quot;Scenario analysis indicates that order fulfillment delays in regional distribution accounts for 14.8% customer attrition risk. Re-routing priority accounts through the automated warehouse dispatch pipeline retains an estimated <span className="text-white font-semibold font-mono">$184,000</span> in projected revenue across the test cohort.&quot;
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/products/nova"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold cursor-pointer transition-colors"
              >
                Learn How NOVA Works
              </Link>
              <span className="text-[11px] font-mono text-neutral-500">
                *Output generated from simulated business test scenario.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
