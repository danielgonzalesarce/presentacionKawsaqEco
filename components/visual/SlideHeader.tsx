"use client";

import { motion } from "framer-motion";
import BrandLogo from "@/components/brand/BrandLogo";
import { SLIDE_COUNT } from "@/lib/constants";
import { EASE_OUT } from "@/lib/motion";

type SlideHeaderProps = {
  slide: number;
  light?: boolean;
};

export default function SlideHeader({ slide, light = false }: SlideHeaderProps) {
  const progress = (slide / SLIDE_COUNT) * 100;

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
      className="mb-5 shrink-0 md:mb-8"
    >
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: EASE_OUT }}
        >
          <BrandLogo light={light} size="sm" />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.1, ease: EASE_OUT }}
          className={`rounded-full px-3 py-1 text-xs font-bold tabular-nums ${
            light ? "bg-white/10 text-accent" : "bg-chat-user text-primary"
          }`}
        >
          {String(slide).padStart(2, "0")} / {String(SLIDE_COUNT).padStart(2, "0")}
        </motion.span>
      </div>
      <div
        className={`mt-4 h-0.5 w-full overflow-hidden rounded-full ${
          light ? "bg-white/10" : "bg-border"
        }`}
      >
        <motion.div
          className="progress-bar-fill h-full rounded-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
        />
      </div>
    </motion.header>
  );
}
