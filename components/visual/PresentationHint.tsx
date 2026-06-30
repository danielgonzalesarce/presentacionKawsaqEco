"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

type PresentationHintProps = {
  visible: boolean;
};

export default function PresentationHint({ visible }: PresentationHintProps) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="pointer-events-none absolute bottom-6 left-6 z-50 hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-md md:flex"
    >
      <span>Usa</span>
      <kbd className="rounded bg-white/15 px-1.5 py-0.5 font-mono text-[10px] text-white">
        →
      </kbd>
      <span>o</span>
      <ChevronRight size={14} className="text-accent" />
      <span>para avanzar</span>
    </motion.div>
  );
}
