"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SlideLayout from "@/components/SlideLayout";
import SlideHeader from "@/components/visual/SlideHeader";
import BrandLogo from "@/components/brand/BrandLogo";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Reveal from "@/components/motion/Reveal";

export default function Slide07Thanks() {
  return (
    <SlideLayout variant="closing">
      <SlideHeader slide={7} light />

      <Stagger
        delay={0.15}
        className="flex flex-1 flex-col items-center justify-center text-center"
      >
        <StaggerItem>
          <h1 className="display-hero text-white">¡Gracias!</h1>
        </StaggerItem>
        <StaggerItem>
          <p className="display-sub mt-4 text-accent">Recicla, actúa, da vida.</p>
        </StaggerItem>
        <StaggerItem>
          <p className="mx-auto mt-4 max-w-sm text-base text-white/65">
            Cada residuo bien separado es una semilla de cambio para Santa
            Anita.
          </p>
        </StaggerItem>
        <StaggerItem>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <span>Sigamos construyendo juntos</span>
            <ArrowRight size={16} className="text-accent" />
          </motion.div>
        </StaggerItem>
      </Stagger>

      <Reveal direction="up" delay={0.5}>
        <footer className="mt-auto flex flex-col items-center gap-3 border-t border-white/10 pt-6">
          <BrandLogo light size="md" />
          <div>
            <p className="font-bold text-white">Tecsup</p>
            <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
              Tecnología con sentido
            </p>
          </div>
        </footer>
      </Reveal>
    </SlideLayout>
  );
}
