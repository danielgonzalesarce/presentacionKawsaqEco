"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SlideLayout from "@/components/SlideLayout";
import SlideHeader from "@/components/visual/SlideHeader";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function Slide01Cover() {
  return (
    <SlideLayout variant="hero">
      <SlideHeader slide={1} light />

      <Stagger
        delay={0.1}
        className="flex flex-1 flex-col items-center justify-center pb-8 text-center"
      >
        <StaggerItem>
          <span className="eyebrow eyebrow-light mb-6">
            <MapPin size={14} />
            Santa Anita, Lima
          </span>
        </StaggerItem>

        <StaggerItem>
          <h1 className="display-hero hero-title-glow text-white">KawsaqEco</h1>
        </StaggerItem>

        <StaggerItem>
          <p className="display-sub display-sub-glow mt-4 text-accent">
            Recicla, actúa, da vida.
          </p>
        </StaggerItem>

        <StaggerItem>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
            Reciclaje comunitario para familias que quieren cuidar su barrio y
            ver el impacto de cada acción.
          </p>
        </StaggerItem>

        <StaggerItem>
          <motion.div
            className="mt-10 h-0.5 w-20 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent"
            animate={{ scaleX: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          />
        </StaggerItem>
      </Stagger>
    </SlideLayout>
  );
}
