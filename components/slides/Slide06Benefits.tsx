"use client";

import { useState } from "react";
import {
  Eye,
  Gift,
  Globe2,
  HeartHandshake,
  Leaf,
  MapPin,
  Users,
} from "lucide-react";
import SlideLayout from "@/components/SlideLayout";
import SlideHeader from "@/components/visual/SlideHeader";
import PhoneCenterLayout from "@/components/layout/PhoneCenterLayout";
import SidePanel from "@/components/layout/SidePanel";
import PhoneFanStack from "@/components/visual/PhoneFanStack";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const benefits = [
  { icon: Globe2, label: "Ambiental", text: "Menos residuos en vertederos" },
  { icon: Users, label: "Social", text: "Comunidad más unida" },
  { icon: HeartHandshake, label: "Familiar", text: "Hábitos que perduran" },
];

const screens = [
  {
    src: "/screenshots/home.svg",
    alt: "Huella verde",
    label: "Huella verde",
    icon: Leaf,
    title: "Huella ambiental",
    desc: "Cada familia ve su impacto acumulado en la app.",
  },
  {
    src: "/screenshots/rewards.svg",
    alt: "Recompensas",
    label: "Recompensas",
    icon: Gift,
    title: "Puntos locales",
    desc: "Canjeables en comercios del barrio.",
  },
  {
    src: "/screenshots/map.svg",
    alt: "Red de acopios",
    label: "Acopios",
    icon: MapPin,
    title: "Red de acopios",
    desc: "Puntos verdes en todo Santa Anita.",
  },
] as const;

export default function Slide06Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SlideLayout>
      <SlideHeader slide={6} />

      <PhoneCenterLayout
        gap="wide"
        left={
          <SidePanel
            className="benefits-panel"
            eyebrow="Impacto"
            title="Beneficios"
            description="Cuidar el planeta integrado a la vida diaria de las familias en Santa Anita."
          >
            <Stagger delay={0.25} className="mt-5 space-y-2.5">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <StaggerItem key={b.label}>
                    <div className="benefit-pillar">
                      <div className="benefit-pillar-icon">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-primary-light">
                          {b.label}
                        </p>
                        <p className="mt-0.5 text-sm font-bold leading-snug text-primary">
                          {b.text}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </SidePanel>
        }
        center={
          <PhoneFanStack
            phones={[
              {
                src: screens[0].src,
                alt: screens[0].alt,
                label: screens[0].label,
              },
              {
                src: screens[1].src,
                alt: screens[1].alt,
                label: screens[1].label,
              },
              {
                src: screens[2].src,
                alt: screens[2].alt,
                label: screens[2].label,
              },
            ]}
            activeIndex={activeIndex}
            onActiveChange={setActiveIndex}
          />
        }
        right={
          <SidePanel
            className="impact-panel"
            variant="accent"
            icon={<Eye size={28} className="text-accent" strokeWidth={1.8} />}
            title="Impacto visible"
            description="Cada acción suma para un barrio más limpio, unido y consciente."
          >
            <Stagger delay={0.3} className="mt-4 space-y-2">
              {screens.map((screen, i) => {
                const Icon = screen.icon;
                const isActive = i === activeIndex;
                return (
                  <StaggerItem key={screen.label}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={`impact-feature${isActive ? " impact-feature-active" : ""}`}
                    >
                      <div className="impact-feature-icon">
                        <Icon size={16} strokeWidth={2} />
                      </div>
                      <div className="min-w-0 text-left">
                        <p className="text-sm font-bold text-primary">
                          {screen.title}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-text-secondary">
                          {screen.desc}
                        </p>
                      </div>
                    </button>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </SidePanel>
        }
      />
    </SlideLayout>
  );
}
