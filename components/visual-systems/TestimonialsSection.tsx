"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Star, MessageSquare, ShieldCheck, ArrowRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  rating: number;
  message: string;
  serviceUsed: string;
  projectResult?: string;
  createdAt: string;
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await fetch("/api/feedback");
        const data = await res.json();
        if (data.testimonials && Array.isArray(data.testimonials)) {
          setTestimonials(data.testimonials);
        }
      } catch (e) {
        console.warn("Could not fetch testimonials:", e);
      } finally {
        setLoading(false);
      }
    }
    loadTestimonials();
  }, []);

  return (
    <section className="py-20 border-t border-white/5 bg-[#040405] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VERIFIED ENTERPRISE EXPERIENCES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              What Businesses Say About Working With NOXTUM
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-2xl leading-relaxed">
              Real results from commercial deployments. We only publish verified testimonials with explicit client consent.
            </p>
          </div>

          <Link
            href="/feedback"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold font-mono transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>Share Your Experience →</span>
          </Link>
        </div>

        {/* Dynamic Testimonials Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#08080a] border border-white/5 animate-pulse h-48" />
            ))}
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-[#08080a] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      {t.serviceUsed}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed italic">
                    &ldquo;{t.message}&rdquo;
                  </p>

                  {t.projectResult && (
                    <div className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/15 text-[11px] text-emerald-400 font-mono">
                      <span className="font-bold">Impact:</span> {t.projectResult}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-neutral-400 text-[11px]">{t.role}, {t.company}</div>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Honest, Authentic Early-Stage Client Invite State */
          <div className="p-8 sm:p-10 rounded-2xl bg-[#08080a] border border-white/10 text-center max-w-3xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-400">
              <Quote className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">
              Authentic Feedback Only — Zero Speculation
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xl mx-auto">
              We never fabricate customer reviews to look established. As current enterprise deployments conclude their production milestone reviews, client testimonials will appear here directly upon formal sign-off.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/feedback"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold transition-colors flex items-center gap-2"
              >
                <span>Submit a Client Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/work"
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-mono text-xs transition-colors"
              >
                View 6 Production Case Studies →
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
