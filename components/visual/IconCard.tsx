"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  accent?: "green" | "earth" | "mint" | "alert";
  layout?: "row" | "column";
};

const accentMap = {
  green: {
    box: "bg-primary/10 text-primary border-primary/20",
    bar: "bg-primary",
  },
  earth: {
    box: "bg-earth/12 text-earth border-earth/25",
    bar: "bg-earth",
  },
  mint: {
    box: "bg-accent/15 text-primary-light border-accent/30",
    bar: "bg-accent",
  },
  alert: {
    box: "bg-red-50 text-red-700 border-red-200",
    bar: "bg-red-400",
  },
};

export default function IconCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  accent = "green",
  layout = "row",
}: IconCardProps) {
  const a = accentMap[accent];

  if (layout === "column") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay }}
        className="panel-card group relative flex flex-col items-center overflow-hidden rounded-2xl p-5 text-center"
      >
        <div className={`absolute inset-x-0 top-0 h-1 ${a.bar}`} />
        <div
          className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border ${a.box}`}
        >
          <Icon size={26} strokeWidth={2} />
        </div>
        <h3 className="text-base font-bold text-primary">{title}</h3>
        <p className="mt-1.5 text-sm leading-snug text-text-secondary">
          {description}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay }}
      className="panel-card flex gap-4 rounded-2xl p-4 md:p-5"
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${a.box}`}
      >
        <Icon size={22} strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <h3 className="font-bold text-primary">{title}</h3>
        <p className="mt-0.5 text-sm leading-snug text-text-secondary">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
