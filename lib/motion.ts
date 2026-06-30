import type { Transition, Variants } from "framer-motion";

export const EASE_OUT: Transition["ease"] = [0.25, 0.1, 0.25, 1];
export const EASE_SPRING = { type: "spring" as const, stiffness: 260, damping: 24 };

export const slideTransition: Transition = {
  duration: 0.45,
  ease: EASE_OUT,
};

export const slideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 48 : -48,
    scale: 0.985,
    filter: "blur(6px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
    scale: 0.985,
    filter: "blur(6px)",
  }),
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: EASE_OUT },
  }),
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay, ease: EASE_OUT },
  }),
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay, ease: EASE_OUT },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: (delay = 0) => ({
    transition: { staggerChildren: 0.09, delayChildren: delay },
  }),
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay, ease: EASE_OUT },
  }),
};
