"use client";

import { Leaf } from "lucide-react";

type BrandLogoProps = {
  light?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { box: "h-8 w-8", icon: 16, text: "text-sm" },
  md: { box: "h-10 w-10", icon: 20, text: "text-lg" },
  lg: { box: "h-12 w-12", icon: 24, text: "text-xl" },
};

export default function BrandLogo({ light = false, size = "md" }: BrandLogoProps) {
  const s = sizes[size];
  return (
    <div className={`flex items-center gap-2.5 font-bold ${s.text}`}>
      <span
        className={`flex ${s.box} items-center justify-center rounded-xl ${
          light ? "bg-white/15 text-accent" : "bg-primary text-white"
        }`}
      >
        <Leaf size={s.icon} strokeWidth={2.5} />
      </span>
      <span className={light ? "text-white" : "text-primary"}>KawsaqEco</span>
    </div>
  );
}
