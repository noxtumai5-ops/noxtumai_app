import Link from "next/link";
import { Cpu, ArrowUpRight, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { NOXTUM_CONTACT, NOXTUM_WHATSAPP_NUMBER } from "@/lib/handoff";

export function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Official Office Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/noxtum-logo-white.png"
                alt="NOXTUM AI"
                className="h-6 sm:h-7 w-auto object-contain transition-opacity duration-200 hover:opacity-90"
              />
            </Link>
            
            <p className="text-xs font-mono text-neutral-400">
              {NOXTUM_CONTACT.tagline}
            </p>

            {/* Official Clean Dubai Contact Card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2.5 text-xs text-neutral-300 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div className="leading-snug">
                  <div className="font-semibold text-white">Dubai, UAE</div>
                  <div className="text-neutral-400 text-[11px]">{NOXTUM_CONTACT.office.line1}, {NOXTUM_CONTACT.office.line2}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1 border-t border-white/5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${NOXTUM_CONTACT.phoneDisplay.replace(/\s+/g, "")}`}
                  className="font-mono text-neutral-300 hover:text-white transition-colors"
                >
                  {NOXTUM_CONTACT.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${NOXTUM_CONTACT.email}`}
                  className="font-mono text-blue-400 hover:text-blue-300 transition-colors text-[11px]"
                >
                  {NOXTUM_CONTACT.email}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={"https://wa.me/" + NOXTUM_WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs font-mono text-[#25D366] transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                <span>WhatsApp: {NOXTUM_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="/solutions" className="hover:text-white transition-colors">AI Strategy & Feasibility</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">AI Process Automation</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">AI Agents & Assistants</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Custom AI Engineering</Link></li>
              <li><Link href="/products/nova" className="hover:text-white transition-colors">Decision Intelligence</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Data & Analytics</Link></li>
            </ul>
          </div>

          {/* Our Work & Verticals */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Portfolio</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="/work" className="hover:text-white transition-colors">All Work & Systems</Link></li>
              <li><Link href="/work/smart-vehicle-data-management" className="hover:text-white transition-colors">Smart Vehicle Data</Link></li>
              <li><Link href="/work/dataflow-analytics-workspace" className="hover:text-white transition-colors">DATAFLOW Workspace</Link></li>
              <li><Link href="/work/skillsscan-ai" className="hover:text-white transition-colors">SkillsScan AI</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Industry Solutions</Link></li>
              <li><Link href="/products/nova" className="hover:text-blue-400 transition-colors flex items-center gap-1">NOVA Framework <ArrowUpRight className="w-3 h-3" /></Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About NOXTUM</Link></li>
              <li><Link href="/transformation" className="hover:text-white transition-colors">How We Work</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights & Articles</Link></li>
              <li><Link href="/book-consultation" className="hover:text-white transition-colors">Book a Consultation</Link></li>
              <li><a href={`mailto:${NOXTUM_CONTACT.email}`} className="hover:text-white transition-colors">{NOXTUM_CONTACT.email}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Security Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} NOXTUM AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>DUBAI, UAE · LEVEL 3, BURJUMAN CENTER</span>
            <span className="text-neutral-700">|</span>
            <span>PRIVACY-CONSCIOUS ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
