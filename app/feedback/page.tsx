"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Star, CheckCircle2, ArrowRight, ShieldCheck, MessageSquare } from "lucide-react";
import { NOXTUM_CONTACT } from "@/lib/handoff";

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    rating: 5,
    message: "",
    serviceUsed: "Custom Enterprise AI System",
    projectResult: "",
    agreedToPublish: false
  });

  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToPublish) {
      setErrorMessage("Please check the consent box to submit your testimonial.");
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit feedback.");
      }

      // Automatically launch WhatsApp with the formatted review
      if (data.whatsappUrl && typeof window !== "undefined") {
        window.open(data.whatsappUrl, "_blank", "noopener,noreferrer");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
              <Star className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
              <span>CLIENT TESTIMONIAL PORTAL</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Share Your Experience With NOXTUM
            </h1>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We engineer practical AI systems that solve mission-critical operational challenges. Your honest feedback helps other enterprise leaders evaluate system impact.
            </p>
          </div>

          {status === "success" ? (
            <div className="p-8 sm:p-10 rounded-2xl bg-[#08080a] border border-emerald-500/30 text-center space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">Thank You for Your Feedback!</h2>
              <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                Your testimonial has been securely registered in our system. Following standard client privacy and editorial verification, it will be highlighted on our official portal.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors"
                >
                  Return to Homepage
                </Link>
                <a
                  href={`https://wa.me/971569501555`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Contact Dubai Office</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#08080a] border border-white/10 shadow-2xl">
              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2.5">
                  <span className="font-bold">Error:</span> {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Rating Stars */}
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-2">
                    OVERALL SYSTEM & PARTNERSHIP RATING <span className="text-blue-400">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormData({ ...formData, rating: star })}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-neutral-600 hover:scale-110 transition-all cursor-pointer"
                        aria-label={`Rate ${star} star`}
                      >
                        <Star
                          className={`w-7 h-7 ${
                            (hoverRating || formData.rating) >= star
                              ? "fill-amber-400 text-amber-400"
                              : "text-neutral-700"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-mono text-neutral-400 ml-2">
                      {formData.rating === 5 ? "Exceptional" : formData.rating === 4 ? "Great Value" : `${formData.rating} Stars`}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      YOUR FULL NAME <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Faisal Al-Ketbi"
                      className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      ORGANIZATION / COMPANY <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Emirates Global Supply"
                      className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      ROLE / DESIGNATION <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. VP Operations / Chief Technology Officer"
                      className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      SOLUTION DELIVERED <span className="text-rose-400">*</span>
                    </label>
                    <select
                      value={formData.serviceUsed}
                      onChange={(e) => setFormData({ ...formData, serviceUsed: e.target.value })}
                      className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Custom Enterprise AI System">Custom Enterprise AI System</option>
                      <option value="Multi-Agent Workflow Automation">Multi-Agent Workflow Automation</option>
                      <option value="DATAFLOW ETL & Data Platform">DATAFLOW ETL & Data Platform</option>
                      <option value="Computer Vision & Video Intelligence">Computer Vision & Video Intelligence</option>
                      <option value="NOVA Decision Cockpit">NOVA Decision Cockpit</option>
                      <option value="Enterprise AI Consultation">Enterprise AI Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1">
                    TESTIMONIAL & EXPERIENCE <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe how NOXTUM engineered your system, the operational problem solved, or the impact on your team's workflow..."
                    className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 resize-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1">
                    MEASURABLE IMPACT / RESULT <span className="text-neutral-500">(OPTIONAL)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.projectResult}
                    onChange={(e) => setFormData({ ...formData, projectResult: e.target.value })}
                    placeholder="e.g. Cut invoice processing time from 3 days to 4 minutes; 99.4% extraction accuracy."
                    className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Consent checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreedToPublish}
                      onChange={(e) => setFormData({ ...formData, agreedToPublish: e.target.checked })}
                      className="mt-0.5 rounded border-white/20 bg-black text-blue-600 focus:ring-0 cursor-pointer"
                    />
                    <span className="text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                      I agree to have this verified testimonial and company attribution displayed on the NOXTUM AI website and official case material.
                    </span>
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-70 text-white text-xs font-bold font-mono transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <ShieldCheck className="w-4 h-4" />
                    )}
                    <span>{isSubmitting ? "TRANSMITTING REVIEW..." : "SUBMIT TESTIMONIAL FOR REVIEW"}</span>
                    {!isSubmitting && <ArrowRight className="w-4 h-4 ml-1" />}
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center mt-2 font-mono">
                    All reviews undergo strict editorial review before appearing on the live portal.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
