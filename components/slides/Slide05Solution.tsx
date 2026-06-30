"use client";

import { Camera, Gift, MessageCircle, Sparkles } from "lucide-react";
import SlideLayout from "@/components/SlideLayout";
import SlideHeader from "@/components/visual/SlideHeader";
import PhoneCenterLayout from "@/components/layout/PhoneCenterLayout";
import SidePanel from "@/components/layout/SidePanel";
import PhoneMockup from "@/components/PhoneMockup";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const steps = [
  { icon: Camera, title: "Registra", text: "Separa en casa" },
  { icon: MessageCircle, title: "Aprende", text: "Kaws te orienta" },
  { icon: Gift, title: "Gana", text: "Puntos y recompensas" },
];

export default function Slide05Solution() {
  return (
    <SlideLayout>
      <SlideHeader slide={5} />

      <PhoneCenterLayout
        left={
          <SidePanel
            eyebrow="Propuesta"
            title="Nuestra solución"
            description="KawsaqEco acompaña al vecino en cada paso con orientación clara, acopios cercanos y beneficios locales."
          >
            <Stagger delay={0.25} className="mt-5 space-y-2.5 border-t border-border pt-5">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <StaggerItem key={s.title}>
                    <div className="solution-step flex items-center gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-border hover:bg-background/80">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm">
                        {i + 1}
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon size={16} className="text-primary-light" />
                        <div>
                          <p className="text-sm font-bold text-primary">{s.title}</p>
                          <p className="text-xs text-text-muted">{s.text}</p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </SidePanel>
        }
        center={
          <div className="flex items-center justify-center gap-6 md:gap-10">
            <PhoneMockup
              src="/screenshots/scan.svg"
              alt="Registra residuos"
              label="Registra"
              size="xl"
              delay={0.1}
              float
            />
            <PhoneMockup
              src="/screenshots/chat.svg"
              alt="Asistente Kaws"
              label="Kaws"
              size="xl"
              delay={0.2}
              float
            />
          </div>
        }
        right={
          <SidePanel
            variant="accent"
            icon={<Sparkles size={28} className="text-accent" strokeWidth={1.8} />}
          >
            <p className="text-lg font-bold leading-snug text-primary md:text-xl">
              Todo en un solo lugar, pensado para el vecino de Santa Anita.
            </p>
            <Stagger delay={0.3} className="mt-5 space-y-2.5 text-sm text-text-secondary">
              {[
                "Guía al separar residuos",
                "Mapa de acopios cercanos",
                "Recompensas con comercio local",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="check-item flex gap-2.5 rounded-lg p-1.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-chat-user text-xs font-bold text-primary">
                      ✓
                    </span>
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </SidePanel>
        }
      />
    </SlideLayout>
  );
}
