"use client";

import { MapPin, Recycle, Target, Users } from "lucide-react";
import SlideLayout from "@/components/SlideLayout";
import SlideHeader from "@/components/visual/SlideHeader";
import SlideSection from "@/components/layout/SlideSection";
import Reveal from "@/components/motion/Reveal";
import TeamMemberShowcase from "@/components/visual/TeamMemberShowcase";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const strengths = [
  {
    icon: MapPin,
    title: "Vivimos en Santa Anita",
    text: "Conocemos el barrio, sus calles y los puntos de acopio del distrito.",
  },
  {
    icon: Recycle,
    title: "Entendemos el día a día",
    text: "Sabemos lo difícil que es reciclar en casa sin una guía clara.",
  },
  {
    icon: Target,
    title: "Una propuesta concreta",
    text: "App, orientación y recompensas pensadas para familias del barrio.",
  },
];

export default function Slide02Team() {
  return (
    <SlideLayout>
      <SlideHeader slide={2} />

      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col justify-center lg:col-span-5">
          <SlideSection
            eyebrow="El equipo"
            title="Vecinos que proponen para vecinos"
            description="KawsaqEco nace en Santa Anita: vecinos que conocen el problema del reciclaje en casa y proponen una solución práctica para su comunidad."
          />

          <Stagger delay={0.2} className="mt-6 space-y-2.5">
            {strengths.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.title}>
                  <div className="benefit-pillar">
                    <div className="benefit-pillar-icon">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-primary">{s.title}</p>
                      <p className="mt-0.5 text-xs leading-snug text-text-secondary md:text-sm">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        <Reveal direction="scale" delay={0.15} className="flex items-center lg:col-span-7">
          <div className="card-elevated w-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <div className="team-hero relative overflow-hidden px-8 py-9 text-white md:px-10 md:py-10">
              <div className="team-hero-shine" aria-hidden />

              <div className="relative">
                <div className="absolute top-0 right-0 flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                  <MapPin size={12} />
                  Santa Anita, Lima
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                  <Users size={26} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-2xl font-bold md:text-3xl">
                  Equipo KawsaqEco
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
                  Dos integrantes, un mismo objetivo: reciclaje sencillo y con
                  impacto visible para las familias de Santa Anita.
                </p>

                <TeamMemberShowcase />
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-border bg-surface">
              {[
                { n: "2", label: "Integrantes" },
                { n: "100%", label: "Enfoque local" },
                { n: "1", label: "Meta: barrio limpio" },
              ].map((stat, i) => (
                <div key={stat.label} className="px-4 py-5 text-center">
                  <p className="text-xl font-extrabold text-primary md:text-2xl">
                    {stat.n}
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SlideLayout>
  );
}
