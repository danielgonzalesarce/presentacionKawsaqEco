"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";

type PhoneItem = {
  src: string;
  alt: string;
  label: string;
};

type PhoneFanStackProps = {
  phones: [PhoneItem, PhoneItem, PhoneItem];
  intervalMs?: number;
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
};

type Slot = "left" | "center" | "right";

const SLOT_STYLES: Record<
  Slot,
  { x: number; scale: number; rotate: number; zIndex: number; opacity: number }
> = {
  left: { x: -62, scale: 0.74, rotate: -12, zIndex: 10, opacity: 0.9 },
  center: { x: 0, scale: 1, rotate: 0, zIndex: 30, opacity: 1 },
  right: { x: 62, scale: 0.74, rotate: 12, zIndex: 10, opacity: 0.9 },
};

function getSlot(phoneIndex: number, activeIndex: number): Slot {
  const diff = (phoneIndex - activeIndex + 3) % 3;
  if (diff === 0) return "center";
  if (diff === 1) return "right";
  return "left";
}

/** Tres iPhones visibles: uno al centro, dos asomándose por los lados; rotan cada N segundos */
export default function PhoneFanStack({
  phones,
  intervalMs = 5000,
  activeIndex: controlledIndex,
  onActiveChange,
}: PhoneFanStackProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = controlledIndex ?? internalIndex;
  const activeRef = useRef(activeIndex);
  activeRef.current = activeIndex;

  const setActiveIndex = (index: number) => {
    if (onActiveChange) onActiveChange(index);
    else setInternalIndex(index);
  };

  useEffect(() => {
    const id = setInterval(() => {
      const next = (activeRef.current + 1) % phones.length;
      if (onActiveChange) onActiveChange(next);
      else setInternalIndex(next);
    }, intervalMs);
    return () => clearInterval(id);
  }, [phones.length, intervalMs, onActiveChange]);

  const activePhone = phones[activeIndex];

  return (
    <div className="phone-carousel">
      <div className="phone-carousel-stage" aria-live="polite">
        {phones.map((phone, i) => {
          const slot = getSlot(i, activeIndex);
          const style = SLOT_STYLES[slot];

          return (
            <motion.div
              key={phone.label}
              className="phone-carousel-slot"
              animate={{
                x: style.x,
                scale: style.scale,
                rotate: style.rotate,
                zIndex: style.zIndex,
                opacity: style.opacity,
              }}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: "bottom center" }}
            >
              <PhoneMockup
                src={phone.src}
                alt={phone.alt}
                size="xl"
                hideLabel
                noEntryAnimation
              />
            </motion.div>
          );
        })}
      </div>

      <div className="phone-carousel-footer">
        <AnimatePresence mode="wait">
          <motion.span
            key={activePhone.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="phone-carousel-label"
          >
            {activePhone.label}
          </motion.span>
        </AnimatePresence>

        <div className="phone-carousel-dots" role="tablist" aria-label="Pantallas de la app">
          {phones.map((phone, i) => (
            <button
              key={phone.label}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={phone.label}
              className={`phone-carousel-dot${i === activeIndex ? " phone-carousel-dot-active" : ""}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
