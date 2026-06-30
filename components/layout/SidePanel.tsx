"use client";

import { ReactNode } from "react";

type SidePanelProps = {
  variant?: "default" | "accent";
  eyebrow?: string;
  title?: string;
  description?: ReactNode;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
};

/** Panel lateral unificado para slides con teléfono al centro */
export default function SidePanel({
  variant = "default",
  eyebrow,
  title,
  description,
  icon,
  children,
  className = "",
}: SidePanelProps) {
  const base =
    variant === "accent" ? "side-panel-accent" : "side-panel";

  return (
    <div
      className={`${base} mx-auto w-full max-w-sm lg:mx-0 ${className}`}
    >
      {icon && <div className="side-panel-icon">{icon}</div>}

      {eyebrow && (
        <span className="eyebrow eyebrow-dark mb-3">{eyebrow}</span>
      )}

      {title && (
        <>
          <div className="slide-accent-line mb-3" />
          <h2 className="text-2xl font-extrabold leading-tight text-primary md:text-3xl">
            {title}
          </h2>
        </>
      )}

      {description && (
        <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
