"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

type StaggerProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Stagger({
  delay = 0,
  children,
  className,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      custom={delay}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={staggerItem} className={className} {...props}>
      {children}
    </motion.div>
  );
}
