"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { EASE_OUT } from "@/lib/motion";

type SlideSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  children?: ReactNode;
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: EASE_OUT },
  }),
};

export default function SlideSection({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  children,
}: SlideSectionProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass}`}>
      {eyebrow && (
        <motion.span
          custom={0}
          initial="hidden"
          animate="visible"
          variants={item}
          className={`eyebrow mb-4 ${light ? "eyebrow-light" : "eyebrow-dark"}`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={item}
        className={`slide-accent-line mb-3 ${align === "center" ? "mx-auto" : ""}`}
      />
      <motion.h2
        custom={2}
        initial="hidden"
        animate="visible"
        variants={item}
        className={`section-title ${light ? "!text-white" : ""}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={item}
          className={`mt-3 max-w-xl text-base leading-relaxed md:text-lg ${
            light ? "text-white/70" : "text-text-secondary"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
      {children}
    </div>
  );
}
