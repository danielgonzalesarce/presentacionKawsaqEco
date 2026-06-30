"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type BentoCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  delay?: number;
  variant?: "default" | "accent" | "dark";
};

const variants = {
  default: "card bento-stat",
  accent: "card bento-stat border-accent/30 bg-chat-user/50",
  dark: "green-panel bento-stat",
};

export default function BentoCard({
  icon: Icon,
  label,
  value,
  delay = 0,
  variant = "default",
}: BentoCardProps) {
  const isDark = variant === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={variants[variant]}
    >
      <Icon
        size={28}
        strokeWidth={1.8}
        className={isDark ? "text-accent" : "text-primary-light"}
      />
      <div>
        <p
          className={`text-xs font-semibold uppercase tracking-wider ${
            isDark ? "text-white/60" : "text-text-muted"
          }`}
        >
          {label}
        </p>
        <p
          className={`mt-1 text-lg font-bold leading-tight md:text-xl ${
            isDark ? "text-white" : "text-primary"
          }`}
        >
          {value}
        </p>
      </div>
    </motion.div>
  );
}
