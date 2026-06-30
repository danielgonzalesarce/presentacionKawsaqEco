"use client";

import { ReactNode } from "react";

type EcoBackgroundProps = {
  variant?: "light" | "hero" | "closing";
};

export default function EcoBackground({ variant = "light" }: EcoBackgroundProps) {
  if (variant === "hero" || variant === "closing") {
    const gradClass =
      variant === "hero" ? "hero-gradient" : "closing-gradient";
    return (
      <>
        <div
          className={`absolute inset-0 ${gradClass} hero-gradient-animated`}
          aria-hidden
        />
        <div className="hero-orb hero-orb-1" aria-hidden />
        <div className="hero-orb hero-orb-2" aria-hidden />
      </>
    );
  }

  return (
    <>
      <div className="absolute inset-0 bg-surface" aria-hidden />
      <div className="light-mesh" aria-hidden />
    </>
  );
}

export function SlideShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-5 py-6 md:px-10 md:py-8 lg:px-12">
      {children}
    </div>
  );
}
