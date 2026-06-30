"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import { PROTOTYPE_SCREENS } from "@/lib/prototypeScreens";

const AUTO_INTERVAL_MS = 15_000;
const RESUME_AFTER_MS = 30_000;
const TOTAL = PROTOTYPE_SCREENS.length;

export default function PrototypeCarousel() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((next: number) => {
    setIndex((next + TOTAL) % TOTAL);
  }, []);

  const scheduleAutoResume = useCallback(() => {
    pausedRef.current = true;

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
      resumeTimerRef.current = null;
    }, RESUME_AFTER_MS);
  }, []);

  const handleManual = useCallback(
    (action: () => void) => {
      action();
      scheduleAutoResume();
    },
    [scheduleAutoResume],
  );

  const prev = useCallback(
    () => handleManual(() => goTo(indexRef.current - 1)),
    [goTo, handleManual],
  );

  const next = useCallback(
    () => handleManual(() => goTo(indexRef.current + 1)),
    [goTo, handleManual],
  );

  const goToManual = useCallback(
    (i: number) => handleManual(() => goTo(i)),
    [goTo, handleManual],
  );

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        goTo(indexRef.current + 1);
      }
    }, AUTO_INTERVAL_MS);

    return () => {
      clearInterval(id);
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, [goTo]);

  const screen = PROTOTYPE_SCREENS[index];

  return (
    <div className="prototype-carousel">
      <div className="prototype-carousel-header">
        <h3 className="prototype-carousel-title">Prototipo</h3>
        <span className="prototype-carousel-counter">
          {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </span>
      </div>

      <div className="prototype-carousel-body">
        <button
          type="button"
          onClick={prev}
          aria-label="Pantalla anterior"
          className="prototype-carousel-arrow"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>

        <div className="prototype-carousel-phones">
          <AnimatePresence mode="wait">
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="prototype-carousel-phones-row"
            >
              <PhoneMockup
                src={screen.src}
                alt={screen.label}
                imageName={screen.fileName}
                label={screen.label}
                size="xl"
                float
                noEntryAnimation
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Pantalla siguiente"
          className="prototype-carousel-arrow"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
      </div>

      <div
        className="prototype-carousel-dots"
        role="tablist"
        aria-label="Pantallas del prototipo"
      >
        {PROTOTYPE_SCREENS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={s.label}
            onClick={() => goToManual(i)}
            className={`prototype-carousel-dot${i === index ? " prototype-carousel-dot-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
