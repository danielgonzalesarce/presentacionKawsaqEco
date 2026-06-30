"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EASE_SPRING } from "@/lib/motion";

type NavigationProps = {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
};

export default function Navigation({
  current,
  total,
  onPrev,
  onNext,
  onGoTo,
}: NavigationProps) {
  return (
    <div className="pointer-events-none absolute right-4 bottom-4 z-50 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      <div className="flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/80 px-2.5 py-1.5 shadow-sm backdrop-blur-md">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onGoTo(i)}
            aria-label={`Ir a slide ${i + 1}`}
            className="pointer-events-auto p-0.5"
          >
            <motion.span
              animate={{
                width: i === current ? 18 : 6,
                backgroundColor:
                  i === current
                    ? "var(--color-primary)"
                    : "var(--color-border)",
              }}
              transition={EASE_SPRING}
              className="block h-1.5 rounded-full"
            />
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <motion.button
          type="button"
          onClick={onPrev}
          disabled={current === 0}
          aria-label="Slide anterior"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={EASE_SPRING}
          className="nav-btn pointer-events-auto"
        >
          <ChevronLeft size={18} strokeWidth={2.5} />
        </motion.button>
        <motion.button
          type="button"
          onClick={onNext}
          disabled={current === total - 1}
          aria-label="Slide siguiente"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={EASE_SPRING}
          className="nav-btn pointer-events-auto"
        >
          <ChevronRight size={18} strokeWidth={2.5} />
        </motion.button>
      </div>
    </div>
  );
}
