"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { HeroAdvisorWidget } from "@/components/advisor/HeroAdvisorWidget";

export function GlobalAdvisorModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-3xl z-10"
          >
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <HeroAdvisorWidget />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Retained as null so existing page imports continue to build cleanly without rendering the bottom floating button
export function FloatingAdvisorButton(_props?: { onOpen?: () => void }) {
  return null;
}
