"use client";

import { motion } from "framer-motion";

type SlideTitleProps = {
  children: string;
  subtitle?: string;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  light?: boolean;
};

export default function SlideTitle({
  children,
  subtitle,
  align = "left",
  size = "lg",
  light = false,
}: SlideTitleProps) {
  const sizeClass =
    size === "xl"
      ? "text-4xl md:text-5xl lg:text-6xl"
      : size === "md"
        ? "text-xl md:text-2xl"
        : "text-2xl md:text-3xl lg:text-4xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <div
        className={`slide-accent-line mb-2.5 ${align === "center" ? "mx-auto" : ""}`}
      />
      <h1
        className={`font-sans font-bold tracking-tight ${sizeClass} ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {children}
      </h1>
      {subtitle && (
        <p
          className={`mt-1.5 text-sm md:text-base ${
            light ? "text-white/65" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
