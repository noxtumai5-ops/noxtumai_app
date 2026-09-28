"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";

export function Navbar({ onOpenAdvisor }: { onOpenAdvisor?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (
        scrolled
          ? "bg-[#030303]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center group py-1">
          <img
            src="/noxtum-logo-white.png"
            alt="NOXTUM AI"
            className="h-7 sm:h-8 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
          />
        </Link>

        {/* Clean Corporate Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <Link href="/solutions" className="hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="/work" className="hover:text-white transition-colors flex items-center gap-1">
            <span>Our Work</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          </Link>
          <Link href="/industries" className="hover:text-white transition-colors">
            Industries
          </Link>
          <Link href="/products/nova" className="hover:text-white flex items-center gap-1.5 transition-colors">
            <span>NOVA</span>
            <span className="text-[9px] font-mono px-1.5 py-0.2 bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 uppercase">Engine</span>
          </Link>
          <Link href="/transformation" className="hover:text-white transition-colors">
            Transformation
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/insights" className="hover:text-white transition-colors">
            Insights
          </Link>
        </nav>

        {/* Actions: Talk to an AI Expert (Launches AI Project Advisor) */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenAdvisor ? (
            <button
              onClick={onOpenAdvisor}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-neutral-200 rounded-lg transition-all shadow-lg cursor-pointer font-mono"
            >
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>Talk to an AI Expert</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Link
              href="/book-consultation"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-neutral-200 rounded-lg transition-all shadow-lg cursor-pointer font-mono"
            >
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>Talk to an AI Expert</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3 text-base font-medium text-neutral-300">
            <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">
              Solutions
            </Link>
            <Link href="/work" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">
              Our Work
            </Link>
            <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">
              Industries
            </Link>
            <Link href="/products/nova" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1 flex items-center justify-between">
              <span>NOVA Decision Engine</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">AI Engine</span>
            </Link>
            <Link href="/transformation" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">
              Transformation
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">
              About NOXTUM
            </Link>
            <Link href="/insights" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">
              Insights
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            {onOpenAdvisor ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdvisor();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-black bg-white rounded-lg cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>Talk to an AI Expert</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/book-consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-black bg-white rounded-lg"
              >
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>Talk to an AI Expert</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
