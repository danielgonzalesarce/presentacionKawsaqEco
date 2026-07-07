"use client";

import { AlertTriangle, CircleHelp, MapPinOff, TrendingDown } from "lucide-react";
import SlideLayout from "@/components/SlideLayout";
import SlideHeader from "@/components/visual/SlideHeader";
import PhoneCenterLayout from "@/components/layout/PhoneCenterLayout";
import SidePanel from "@/components/layout/SidePanel";
import PhoneMockup from "@/components/PhoneMockup";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const problems = [
  {
    icon: CircleHelp,
    label: "Confusión",
    text: "¿Cómo separo cada residuo?",
  },
  {
    icon: MapPinOff,
    label: "Desinformación",
    text: "¿Dónde llevo lo que separo?",
  },
  {
    icon: TrendingDown,
    label: "Desmotivación",
    text: "¿Para qué tanto esfuerzo?",
  },
];

export default function Slide04Problem() {
  return (
    <SlideLayout>
      <SlideHeader slide={4} />

      <PhoneCenterLayout
        left={
          <SidePanel
            eyebrow="Contexto"
            title="El problema"
            description="En Santa Anita, miles de hogares generan residuos cada día, pero separar en origen sigue siendo un reto cotidiano."
          >
            <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-text-secondary">
              Las familias{" "}
              <strong className="text-primary">quieren reciclar</strong>, pero
              sin saber cómo separar, dónde llevar los residuos ni qué obtienen
              a cambio, el hábito no se mantiene.
            </p>
          </SidePanel>
        }
        center={
          <PhoneMockup
            src="/screenshots/prototype/10-mapa.jpeg"
            alt="Sin ruta clara para reciclar"
            label="Sin ruta clara"
            size="xl"
            delay={0.15}
            float
          />
        }
        right={
          <SidePanel
            variant="accent"
            icon={<AlertTriangle size={28} className="text-accent" strokeWidth={1.8} />}
            title="Tres barreras"
            description="Lo que impide que el reciclaje se convierta en hábito diario."
          >
            <Stagger delay={0.25} className="mt-4 space-y-2.5">
              {problems.map((p) => {
                const Icon = p.icon;
                return (
                  <StaggerItem key={p.label}>
                    <div className="problem-card flex items-start gap-3 rounded-xl border border-border/60 bg-background/90 p-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-primary-light">
                          {p.label}
                        </p>
                        <p className="mt-0.5 text-sm font-bold text-primary">
                          {p.text}
                        </p>
                      </div>
                    </div>
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
