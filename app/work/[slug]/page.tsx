"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { OUR_WORK } from "@/content/work";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu } from "lucide-react";

export default function ProjectCaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = OUR_WORK.find((p) => p.slug === slug) || OUR_WORK[0];

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO OUR WORK</span>
          </Link>

          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-blue-400 bg-blue-950/40 px-3 py-1 rounded border border-blue-500/30">
                CASE STUDY
              </span>
              <span className="text-xs font-mono text-neutral-400">{project.category}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {project.title}
            </h1>
            <p className="text-lg text-neutral-300 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/10 space-y-4">
              <h3 className="text-base font-bold font-mono text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                THE OPERATIONAL CHALLENGE
              </h3>
              <ul className="space-y-2 text-xs text-neutral-300">
                {project.problemSolved.map((prob, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 mt-1 shrink-0" />
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#08080a] border border-white/10 space-y-4">
              <h3 className="text-base font-bold font-mono text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                KEY SYSTEM CAPABILITIES
              </h3>
              <ul className="space-y-2 text-xs text-neutral-300">
                {project.keyCapabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#060608] border border-white/10 mb-12 space-y-6">
            <h3 className="text-lg font-bold font-mono text-white">SYSTEM ARCHITECTURE & PIPELINE</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs">
              {project.workflow.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#030304] border border-white/5 space-y-2">
                  <span className="text-[10px] text-blue-400 font-bold block">STAGE 0{idx + 1}</span>
                  <span className="text-neutral-200 text-xs font-sans leading-snug block">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#08080a] border border-white/10 mb-12 space-y-4">
            <h3 className="text-base font-bold font-mono text-white">TECHNOLOGIES & FRAMEWORKS</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center p-8 rounded-2xl bg-blue-950/20 border border-blue-500/30 space-y-4">
            <h3 className="text-2xl font-bold text-white">Ready to Engineer a System Around Your Business?</h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
              Our engineering team will assess your operational workflows and design a custom production architecture.
            </p>
            <div className="pt-2">
              <Link
                href={`/book-consultation?project=${project.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-xs font-mono font-bold hover:bg-neutral-200 transition-colors"
              >
                <span>INITIATE PROJECT CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
