"use client";

import { Leaf, MapPin, Quote } from "lucide-react";
import SlideLayout from "@/components/SlideLayout";
import SlideHeader from "@/components/visual/SlideHeader";
import PhoneCenterLayout from "@/components/layout/PhoneCenterLayout";
import SidePanel from "@/components/layout/SidePanel";
import PhoneMockup from "@/components/PhoneMockup";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function Slide03Intro() {
  return (
    <SlideLayout>
      <SlideHeader slide={3} />

      <PhoneCenterLayout
        left={
          <SidePanel
            eyebrow="Introducción"
            title="El que da vida"
            description={
              <>
                En quechua, <strong className="text-primary">Kawsaq</strong>{" "}
                significa «el que da vida» — devolver vitalidad al entorno con
                gestos que cualquier familia repite cada día.
              </>
            }
          >
            <Stagger delay={0.25} className="mt-5 space-y-2.5 border-t border-border pt-5">
              {[
                "Reciclaje cercano y sencillo",
                "Impacto visible en el barrio",
                "Comunidad de Santa Anita",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-5 flex items-center gap-2 rounded-full bg-chat-user/60 px-3 py-1.5 text-xs font-semibold text-primary-light">
              <MapPin size={14} />
              Santa Anita, Lima
            </div>
          </SidePanel>
        }
        center={
          <div className="flex items-center justify-center gap-6 md:gap-10">
            <PhoneMockup
              src="/screenshots/home.svg"
              alt="Tu impacto diario"
              label="Tu impacto"
              size="xl"
              delay={0.1}
              float
            />
            <PhoneMockup
              src="/screenshots/scan.svg"
              alt="Recicla en segundos"
              label="Recicla fácil"
              size="xl"
              delay={0.2}
              float
            />
          </div>
        }
        right={
          <SidePanel
            variant="accent"
            icon={<Quote size={32} className="text-accent" strokeWidth={1.5} />}
          >
            <blockquote className="text-lg font-bold leading-snug text-primary md:text-xl">
              &ldquo;Cada botella, cada papel y cada envase recuperado suma
              para el barrio.&rdquo;
            </blockquote>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary">
              Reciclar deja de ser complicado cuando cada acción tiene sentido
              y se refleja en tu comunidad.
            </p>
            <div className="mt-6 flex items-center gap-2 border-t border-border pt-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white shadow-sm">
                <Leaf size={18} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">KawsaqEco</p>
                <p className="text-xs text-text-muted">Propuesta · Santa Anita</p>
              </div>
            </div>
          </SidePanel>
        }
      />
    </SlideLayout>
  );
}
