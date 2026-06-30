"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { SLIDE_COUNT } from "@/lib/constants";
import { slideTransition, slideVariants } from "@/lib/motion";
import Slide01Cover from "@/components/slides/Slide01Cover";
import Slide02Team from "@/components/slides/Slide02Team";
import Slide03Intro from "@/components/slides/Slide03Intro";
import Slide04Problem from "@/components/slides/Slide04Problem";
import Slide05Solution from "@/components/slides/Slide05Solution";
import Slide06Benefits from "@/components/slides/Slide06Benefits";
import Slide07Thanks from "@/components/slides/Slide07Thanks";
import PresentationHint from "@/components/visual/PresentationHint";

const slides = [
  Slide01Cover,
  Slide02Team,
  Slide03Intro,
  Slide04Problem,
  Slide05Solution,
  Slide06Benefits,
  Slide07Thanks,
];

export default function SlideDeck() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(Math.max(0, Math.min(SLIDE_COUNT - 1, index)));
    },
    [current],
  );

  const next = useCallback(() => {
    if (current < SLIDE_COUNT - 1) goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") goTo(0);
      else if (e.key === "End") goTo(SLIDE_COUNT - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo]);

  useEffect(() => {
    let touchStartX = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    };
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  const Slide = slides[current];

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0"
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      <Navigation
        current={current}
        total={SLIDE_COUNT}
        onPrev={prev}
        onNext={next}
        onGoTo={goTo}
      />

      <PresentationHint visible={current === 0} />
    </main>
  );
}
