"use client";

import { ReactNode } from "react";
import Reveal from "@/components/motion/Reveal";

type PhoneCenterLayoutProps = {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
  gap?: "default" | "wide";
};

/**
 * Layout estándar: información a los lados, teléfono(s) siempre al centro.
 */
export default function PhoneCenterLayout({
  left,
  center,
  right,
  gap = "default",
}: PhoneCenterLayoutProps) {
  const gapClass =
    gap === "wide"
      ? "gap-8 lg:gap-10 xl:gap-14"
      : "gap-8 lg:gap-8 xl:gap-12";

  return (
    <div className="flex flex-1 items-center">
      <div
        className={`grid w-full grid-cols-1 items-center ${gapClass} lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]`}
      >
        <aside className="order-2 flex min-w-0 flex-col justify-center lg:order-1 lg:pr-1 xl:pr-3">
          <Reveal direction="left" delay={0.12}>
            {left}
          </Reveal>
        </aside>

        <div className="order-1 flex shrink-0 items-center justify-center lg:order-2">
          <Reveal direction="scale" delay={0.2}>
            {center}
          </Reveal>
        </div>

        <aside className="order-3 flex min-w-0 flex-col justify-center lg:pl-1 xl:pl-3">
          <Reveal direction="right" delay={0.16}>
            {right}
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
