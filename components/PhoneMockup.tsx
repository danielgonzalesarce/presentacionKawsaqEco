"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type PhoneMockupProps = {
  src: string;
  alt: string;
  label?: string;
  imageName?: string;
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

function fileNameFromSrc(src: string) {
  return src.split("/").pop() ?? "imagen.png";
}

export default function PhoneMockup({
  src,
  alt,
  label,
  imageName,
  size = "md",
  delay = 0,
  className = "",
  hideLabel = false,
  noEntryAnimation = false,
  float = false,
}: PhoneMockupProps) {
  const fileName = imageName ?? fileNameFromSrc(src);
  const [imageOk, setImageOk] = useState(false);

  useEffect(() => {
    setImageOk(false);
    const probe = new Image();
    probe.onload = () => setImageOk(true);
    probe.onerror = () => setImageOk(false);
    probe.src = src;
  }, [src]);

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
      <div className="iphone-frame">
        <div className="iphone-screen">
          <div className="iphone-island" aria-hidden>
            <span className="iphone-island-cam" />
          </div>

          {imageOk ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              className="iphone-screen-img"
              loading="eager"
              draggable={false}
            />
          ) : (
            <div className="iphone-placeholder">
              <span className="iphone-placeholder-tag">colocarimagen</span>
              <span className="iphone-placeholder-name">{fileName}</span>
            </div>
          )}

          {imageOk && <div className="iphone-screen-shine" aria-hidden />}
          {imageOk && <div className="iphone-home-bar" aria-hidden />}
        </div>
      </div>
    </div>
  );

  const showcase = (
    <div className="phone-showcase">
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
