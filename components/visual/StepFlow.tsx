"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type StepItem = {
  icon: LucideIcon;
  label: string;
  sub: string;
};

type StepFlowProps = {
  steps: StepItem[];
};

export default function StepFlow({ steps }: StepFlowProps) {
  return (
    <div className="relative">
      <div
        className="absolute top-9 right-[16%] left-[16%] hidden h-0.5 bg-gradient-to-r from-primary via-accent to-primary-light sm:block"
        aria-hidden
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="panel-card relative flex flex-col items-center rounded-2xl px-4 py-6 text-center"
            >
              <span className="absolute -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                {i + 1}
              </span>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-primary-light">
                <Icon size={22} strokeWidth={2} />
              </div>
              <span className="text-base font-bold text-primary">{step.label}</span>
              <span className="mt-1 text-xs text-text-muted">{step.sub}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
