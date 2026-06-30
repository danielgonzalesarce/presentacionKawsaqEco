"use client";

import { motion } from "framer-motion";

type PhoneMockupProps = {
  src: string;
  alt: string;
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
  delay?: number;
  className?: string;
  hideLabel?: boolean;
  noEntryAnimation?: boolean;
  float?: boolean;
};

const FRAME_WIDTH: Record<NonNullable<PhoneMockupProps["size"]>, string> = {
  sm: "w-[142px]",
  md: "w-[178px]",
  lg: "w-[212px]",
  xl: "w-[228px] md:w-[248px]",
};

export default function PhoneMockup({
  src,
  alt,
  label,
  size = "md",
  delay = 0,
  className = "",
  hideLabel = false,
  noEntryAnimation = false,
  float = false,
}: PhoneMockupProps) {
  const Figure = noEntryAnimation ? "figure" : motion.figure;
  const figureProps = noEntryAnimation
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, delay },
      };

  const device = (
    <div className={`iphone-device relative ${FRAME_WIDTH[size]}`}>
      <span className="iphone-btn-silent" aria-hidden />
      <span className="iphone-btn-volume-up" aria-hidden />
      <span className="iphone-btn-volume-down" aria-hidden />
      <span className="iphone-btn-power" aria-hidden />

      <div className="iphone-frame">
        <div className="iphone-screen">
          <div className="iphone-island" aria-hidden>
            <span className="iphone-island-cam" />
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="iphone-screen-img"
            loading="eager"
            draggable={false}
          />

          <div className="iphone-screen-shine" aria-hidden />
          <div className="iphone-home-bar" aria-hidden />
        </div>
      </div>
    </div>
  );

  const showcase = (
    <div className="phone-showcase">
      <div className="phone-showcase-glow" aria-hidden />
      {float ? (
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay * 2,
          }}
          className="phone-float"
        >
          {device}
        </motion.div>
      ) : (
        device
      )}
      <div className="phone-showcase-shadow" aria-hidden />
    </div>
  );

  return (
    <Figure
      {...figureProps}
      className={`flex flex-col items-center gap-3 ${className}`}
    >
      {showcase}

      {label && !hideLabel && (
        <figcaption className="phone-label">{label}</figcaption>
      )}
    </Figure>
  );
}
