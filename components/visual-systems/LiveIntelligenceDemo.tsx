"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Play, 
  RotateCcw, 
  Check, 
  MessageSquare, 
  Database, 
  UserCheck, 
  Zap, 
  Cpu, 
  Bot, 
  Sliders
} from "lucide-react";

export function LiveIntelligenceDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const runSimulation = () => {
    setIsRunning(true);
    setActiveStep(1);
    setTimeout(() => setActiveStep(2), 1200);
    setTimeout(() => setActiveStep(3), 2400);
    setTimeout(() => {
      setActiveStep(4);
      setIsRunning(false);
    }, 3600);
  };

  const reset = () => {
    setActiveStep(0);
    setIsRunning(false);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#050505] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>LIVE AI SYSTEM SIMULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              See Intelligence in Action
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              Witness how a live NOXTUM cognitive agent ingests raw inbound communication, reasons through multi-variable criteria, and executes deterministic actions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold font-mono tracking-wide transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isRunning ? "PROCESSING LIVE..." : "RUN SYSTEM SIMULATION"}</span>
            </button>
            <button
              onClick={reset}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Reset simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Processing Grid */}
        <div className="rounded-2xl border border-white/10 bg-[#070709] p-6 shadow-2xl relative">
          
          {/* Top telemetry bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold">CASE LAB: DUBAI PROPERTY LEAD TRIAGE</span>
            </div>
            <div className="flex items-center gap-4">
              <span>LATENCY: <strong className="text-blue-400">42ms</strong></span>
              <span>TOKEN SAFETY: <strong className="text-emerald-400">100% DETERMINISTIC</strong></span>
            </div>
          </div>

          {/* 4 Connected Processing Stages */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            
            {/* Step 1: Raw Inbound Signal */}
            <div className={"p-4 rounded-xl border transition-all " + (activeStep >= 1 ? "bg-blue-950/20 border-blue-500/50 shadow-lg shadow-blue-500/5" : "bg-[#040405] border-white/5")}>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-2">
                <span>01 // SIGNAL</span>
                {activeStep >= 1 && <Check className="w-3.5 h-3.5 text-blue-400" />}
              </div>
              <h4 className="text-xs font-bold font-mono text-white mb-2">Raw WhatsApp Message</h4>
              <div className="p-2.5 rounded bg-black/60 border border-white/5 text-[11px] text-neutral-300 font-sans italic">
                &quot;Hi, looking for a 3-bedroom villa in Palm Jumeirah or Dubai Hills. Budget is around AED 15M cash buyer.&quot;
              </div>
            </div>

            {/* Step 2: Cognition & Extraction */}
            <div className={"p-4 rounded-xl border transition-all " + (activeStep >= 2 ? "bg-blue-950/20 border-blue-500/50 shadow-lg shadow-blue-500/5" : "bg-[#040405] border-white/5")}>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-2">
                <span>02 // UNDERSTAND</span>
                {activeStep >= 2 && <Check className="w-3.5 h-3.5 text-blue-400" />}
              </div>
              <h4 className="text-xs font-bold font-mono text-white mb-2">Entity Extraction</h4>
              <div className="space-y-1 font-mono text-[10px] text-neutral-300">
                <div className="flex justify-between"><span>TYPE:</span><span className="text-blue-400">3-Bed Villa</span></div>
                <div className="flex justify-between"><span>LOCATION:</span><span className="text-blue-400">Palm / Dubai Hills</span></div>
                <div className="flex justify-between"><span>BUDGET:</span><span className="text-emerald-400">AED 15,000,000</span></div>
                <div className="flex justify-between"><span>PAYMENT:</span><span className="text-purple-400">Cash / Immediate</span></div>
              </div>
            </div>

            {/* Step 3: Reasoning & Scoring */}
            <div className={"p-4 rounded-xl border transition-all " + (activeStep >= 3 ? "bg-blue-950/20 border-blue-500/50 shadow-lg shadow-blue-500/5" : "bg-[#040405] border-white/5")}>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-2">
                <span>03 // REASON</span>
                {activeStep >= 3 && <Check className="w-3.5 h-3.5 text-blue-400" />}
              </div>
              <h4 className="text-xs font-bold font-mono text-white mb-2">Inventory Matcher</h4>
              <div className="space-y-1 font-mono text-[10px] text-neutral-300">
                <div className="flex justify-between"><span>LEAD TIER:</span><span className="text-emerald-400 font-bold">HIGH (Score 98/100)</span></div>
                <div className="flex justify-between"><span>MATCHED:</span><span className="text-white">2 Off-Market Units</span></div>
                <div className="flex justify-between"><span>AGENT ACTION:</span><span className="text-blue-400">Immediate Escalation</span></div>
              </div>
            </div>

            {/* Step 4: Autonomous Action */}
            <div className={"p-4 rounded-xl border transition-all " + (activeStep >= 4 ? "bg-emerald-950/20 border-emerald-500/50 shadow-lg shadow-emerald-500/5" : "bg-[#040405] border-white/5")}>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-2">
                <span>04 // ACT</span>
                {activeStep >= 4 && <Check className="w-3.5 h-3.5 text-emerald-400" />}
              </div>
              <h4 className="text-xs font-bold font-mono text-white mb-2">Deterministic Action</h4>
              <div className="space-y-1 text-[10px] font-mono text-neutral-300">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Check className="w-3 h-3" />
                  <span>HubSpot Deal Created</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Check className="w-3 h-3" />
                  <span>Brochure Dispatched</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Check className="w-3 h-3" />
                  <span>Senior Broker Paged</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Callout */}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <span className="text-neutral-400">
              {activeStep === 0 && "STATUS: READY FOR INBOUND EVENT"}
              {activeStep === 1 && "STATUS: INGESTING INBOUND PAYLOAD..."}
              {activeStep === 2 && "STATUS: PERFORMING NEURAL CLASSIFICATION..."}
              {activeStep === 3 && "STATUS: MATCHING ACTIVE PROPERTY INVENTORY..."}
              {activeStep === 4 && "STATUS: COMPLETED IN 1.8 SECONDS. ZERO HUMAN LATENCY."}
            </span>
            <span className="text-blue-400">
              CUSTOM ARCHITECTURE DEPLOYABLE IN 2-3 WEEKS
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
