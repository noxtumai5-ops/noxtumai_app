"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import {
  generateWhatsAppUrl,
  formatWhatsAppMessage,
  NOXTUM_CONTACT,
  NOXTUM_WHATSAPP_NUMBER
} from "@/lib/handoff";
import {
  MessageSquare,
  CheckCircle2,
  Mail,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  MapPin,
  Phone,
  Clock
} from "lucide-react";
import { GlobalAdvisorModal, FloatingAdvisorButton } from "@/components/advisor/GlobalAdvisorModal";

function ConsultationContent() {
  const searchParams = useSearchParams();
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    problemDescription: "",
    aiRequirement: ""
  });

  useEffect(() => {
    const urlIndustry = searchParams.get("industry");
    const urlProblem = searchParams.get("problem");
    if (urlIndustry || urlProblem) {
      setFormData((prev) => ({
        ...prev,
        industry: urlIndustry || prev.industry,
        problemDescription: urlProblem || prev.problemDescription
      }));
    }
  }, [searchParams]);
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    // 1. Generate full structured WhatsApp message fallback
    const formattedMsg = formatWhatsAppMessage({
      fullName: formData.fullName,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      industry: formData.industry,
      problemDescription: formData.problemDescription,
      aiRequirement: formData.aiRequirement
    });

    let targetWhatsAppUrl = generateWhatsAppUrl(formattedMsg);

    // 2. Persist lead to Backend API
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.whatsappUrl) {
        targetWhatsAppUrl = data.whatsappUrl;
      }
    } catch (err) {
      console.warn("Backend lead storage warning, fallback to direct dispatch:", err);
    } finally {
      setIsSubmitting(false);
    }

    setLastWhatsAppUrl(targetWhatsAppUrl);

    // 3. Open WhatsApp immediately in a new tab/app
    if (typeof window !== "undefined") {
      window.open(targetWhatsAppUrl, "_blank", "noopener,noreferrer");
    }

    // 4. Set submitted UI state
    setSubmitted(true);
  };

  const currentPreviewMessage = formatWhatsAppMessage(formData);
  const instantWhatsAppUrl = generateWhatsAppUrl(currentPreviewMessage);

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col">
      <Navbar onOpenAdvisor={() => setAdvisorOpen(true)} />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>DIRECT DISPATCH TO LEADERSHIP</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Book an AI Consultation
            </h1>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Connect directly with NOXTUM principal engineers to evaluate project feasibility, system architecture, and operational ROI. Submit below to dispatch immediately via WhatsApp or call our Dubai office.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#08080a] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(37,211,102,0.2)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Opening WhatsApp...</h3>
                    <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been compiled and dispatched to WhatsApp ({NOXTUM_CONTACT.phoneDisplay}). If the chat window didn&apos;t open automatically, click the button below to continue:
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={lastWhatsAppUrl || instantWhatsAppUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs font-mono font-bold shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-black" />
                      <span>CONTINUE TO WHATSAPP DIRECT</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-mono transition-all"
                    >
                      Edit Requirements
                    </button>
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left text-xs space-y-2 max-w-lg mx-auto">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                      Dispatched Payload Preview:
                    </span>
                    <pre className="text-neutral-300 font-mono text-[11px] whitespace-pre-wrap leading-relaxed overflow-x-auto">
                      {formatWhatsAppMessage(formData)}
                    </pre>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        FULL NAME <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        COMPANY NAME <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp / Enterprise"
                        className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        BUSINESS EMAIL <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1">
                        PHONE / WHATSAPP NUMBER
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      INDUSTRY SECTOR
                    </label>
                    <input
                      type="text"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      placeholder="e.g. Real Estate, Logistics, FinTech, Healthcare, E-commerce..."
                      className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      WHAT BUSINESS PROBLEM ARE YOU SOLVING? <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.problemDescription}
                      onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
                      placeholder="Describe your current manual bottleneck, repetitive workflows, data complexity, or volume of inquiries..."
                      className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500/60 resize-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      WHAT WOULD YOU LIKE AI TO HELP WITH?
                    </label>
                    <input
                      type="text"
                      value={formData.aiRequirement}
                      onChange={(e) => setFormData({ ...formData, aiRequirement: e.target.value })}
                      placeholder="e.g. Multi-Agent Customer Routing, Document OCR/Extraction, Predictive Analytics..."
                      className="w-full bg-[#040405] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500/60 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] disabled:opacity-75 text-black text-xs font-bold font-mono transition-all shadow-[0_0_25px_rgba(37,211,102,0.25)] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : (
                        <MessageSquare className="w-4 h-4 fill-black" />
                      )}
                      <span>
                        {isSubmitting
                          ? "SECURING INQUIRY & PREPARING DISPATCH..."
                          : `SEND INQUIRY DIRECTLY TO WHATSAPP (${NOXTUM_CONTACT.phoneDisplay})`}
                      </span>
                      {!isSubmitting && <ArrowRight className="w-4 h-4 ml-1" />}
                    </button>
                    <p className="text-[11px] text-neutral-500 text-center mt-2 font-mono">
                      Direct handoff to NOXTUM AI engineering leadership on WhatsApp.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar: Official Dubai Office & Contact Details */}
            <div className="lg:col-span-4 space-y-6">
              {/* WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-[#08080a] border border-[#25D366]/30 space-y-4 relative overflow-hidden">
                <div className="flex items-center gap-2 text-[#25D366]">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold">WHATSAPP DIRECT DISPATCH</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Skip email queues and intake delays. Submitting this form sends your project requirements straight to our executive WhatsApp inbox.
                </p>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 space-y-1.5 text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center gap-2 text-white">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Direct Access: {NOXTUM_CONTACT.phoneDisplay}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <Clock className="w-3 h-3 text-neutral-500" />
                    <span>Fast response during UAE business hours (GST).</span>
                  </div>
                </div>

                <a
                  href={instantWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-mono font-bold transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Direct</span>
                </a>
              </div>

              {/* Official Office Details */}
              <div className="p-6 rounded-2xl bg-[#08080a] border border-white/10 space-y-4 text-xs">
                <div className="flex items-center gap-2 text-white font-mono font-bold">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>OFFICIAL DUBAI OFFICE</span>
                </div>
                <div className="space-y-1 text-neutral-300">
                  <div className="font-semibold text-white">NOXTUM AI</div>
                  <div className="text-neutral-400">{NOXTUM_CONTACT.office.line1}</div>
                  <div className="text-neutral-400">{NOXTUM_CONTACT.office.line2}</div>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <a href={`tel:${NOXTUM_CONTACT.phoneDisplay.replace(/\s+/g, "")}`} className="hover:text-white font-mono">
                      {NOXTUM_CONTACT.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <a href={`mailto:${NOXTUM_CONTACT.email}`} className="text-blue-400 hover:underline font-mono">
                      {NOXTUM_CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Need to discuss project first? */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-950/20 to-[#08080a] border border-blue-500/20 space-y-3">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block">
                  NOT SURE ABOUT ARCHITECTURE?
                </span>
                <h4 className="text-sm font-bold text-white">
                  Discuss Your Project With the AI System Advisor
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Have an interactive session with our AI System Advisor first to diagnose bottlenecks and explore recommended solutions.
                </p>
                <button
                  type="button"
                  onClick={() => setAdvisorOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-mono transition-all cursor-pointer"
                >
                  <span>Launch AI Project Advisor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

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

export default function BookConsultationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#030303] text-white flex items-center justify-center font-mono text-xs text-neutral-500">Loading consultation portal...</div>}>
      <ConsultationContent />
    </Suspense>
  );
}
