"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SlideBodyProps = {
  children: ReactNode;
  delay?: number;
  light?: boolean;
  className?: string;
};

export default function SlideBody({
  children,
  delay = 0.25,
  light = false,
  className = "",
}: SlideBodyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`space-y-4 text-base leading-relaxed md:text-lg md:leading-relaxed ${
        light ? "text-white/85" : "text-text-secondary"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
