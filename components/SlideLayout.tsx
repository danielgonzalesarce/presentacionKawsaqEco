"use client";

import { ReactNode } from "react";
import EcoBackground, { SlideShell } from "@/components/visual/EcoBackground";

type SlideLayoutProps = {
  children: ReactNode;
  variant?: "light" | "hero" | "closing";
};

export default function SlideLayout({
  children,
  variant = "light",
}: SlideLayoutProps) {
  const textClass =
    variant === "hero" || variant === "closing" ? "text-white" : "text-text";

  return (
    <div className={`relative h-full w-full overflow-hidden ${textClass}`}>
      <EcoBackground variant={variant} />
      <SlideShell>{children}</SlideShell>
    </div>
  );
}
