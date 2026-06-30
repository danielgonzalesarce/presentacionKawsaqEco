"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, scaleIn } from "@/lib/motion";

type RevealDirection = "up" | "left" | "right" | "scale";

const variants = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
};

type RevealProps = HTMLMotionProps<"div"> & {
  direction?: RevealDirection;
  delay?: number;
};

export default function Reveal({
  direction = "up",
  delay = 0,
  children,
  className,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      custom={delay}
      variants={variants[direction]}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
