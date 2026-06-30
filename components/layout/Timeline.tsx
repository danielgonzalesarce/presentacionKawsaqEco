"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type TimelineProps = {
  steps: Step[];
};

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="space-y-0">
      {steps.map((step, i) => {
        const Icon = step.icon;
        const isLast = i === steps.length - 1;
        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <Icon size={18} strokeWidth={2.5} />
              </div>
              {!isLast && <div className="my-1 w-0.5 flex-1 bg-border min-h-[2rem]" />}
            </div>
            <div className={`pb-6 ${isLast ? "pb-0" : ""}`}>
              <p className="font-bold text-primary">{step.title}</p>
              <p className="mt-0.5 text-sm text-text-secondary">{step.text}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
