"use client";

import PhoneMockup from "@/components/PhoneMockup";

type PhoneShowcaseProps = {
  phones: { src: string; alt: string; label: string }[];
  layout?: "fan" | "row";
};

export default function PhoneShowcase({ phones, layout = "row" }: PhoneShowcaseProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`flex items-end justify-center gap-2 md:gap-4 ${
          layout === "fan" ? "flex-wrap" : ""
        }`}
      >
        {phones.map((phone, i) => (
          <PhoneMockup
            key={phone.label}
            src={phone.src}
            alt={phone.alt}
            label={phone.label}
            size={i === 1 && phones.length === 3 ? "md" : "sm"}
            delay={0.25 + i * 0.12}
            className={
              layout === "fan" && phones.length === 3
                ? i === 0
                  ? "mb-4 -rotate-6"
                  : i === 2
                    ? "mb-4 rotate-6"
                    : "z-10 scale-105"
                : i === 1
                  ? "mt-6 md:mt-10"
                  : ""
            }
          />
        ))}
      </div>
    </div>
  );
}
