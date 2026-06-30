"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type TeamMember = {
  id: string;
  firstName: string;
  fullName: string;
  photo: string;
  fallback: string;
};

const members: [TeamMember, TeamMember] = [
  {
    id: "daniel",
    firstName: "Daniel",
    fullName: "Daniel Alexander Gonzales Arce",
    photo: "/team/daniel.jpg",
    fallback: "/team/daniel.svg",
  },
  {
    id: "elienai",
    firstName: "Elienai",
    fullName: "Elienai Ramos Escarrache",
    photo: "/team/elienai.jpg",
    fallback: "/team/elienai.svg",
  },
];

type Phase = 0 | 1 | 2;
const INTERVAL_MS = 5000;

function MemberPhoto({
  member,
  size = "featured",
}: {
  member: TeamMember;
  size?: "featured" | "compact";
}) {
  const dim =
    size === "featured"
      ? "h-[5.5rem] w-[5.5rem] md:h-28 md:w-28"
      : "h-[4.5rem] w-[4.5rem] md:h-20 md:w-20";

  return (
    <div className={`team-avatar ${dim}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={member.photo}
        alt={member.fullName}
        className="h-full w-full object-cover"
        onError={(e) => {
          const img = e.currentTarget;
          if (!img.src.endsWith(member.fallback)) img.src = member.fallback;
        }}
      />
    </div>
  );
}

function MemberInfo({
  member,
  featured = false,
}: {
  member: TeamMember;
  featured?: boolean;
}) {
  const surname = member.fullName.replace(`${member.firstName} `, "");

  return (
    <div className={featured ? "text-left" : "text-center"}>
      <p
        className={`font-extrabold text-white ${
          featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
        }`}
      >
        {member.firstName}
      </p>
      <p
        className={`mt-0.5 leading-snug text-white/75 ${
          featured ? "text-sm md:text-base" : "text-xs md:text-sm"
        }`}
      >
        {surname}
      </p>
    </div>
  );
}

function FeaturedMember({ member }: { member: TeamMember }) {
  return (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      className="team-member-featured"
    >
      <MemberPhoto member={member} size="featured" />
      <MemberInfo member={member} featured />
    </motion.div>
  );
}

function DuoMembers() {
  return (
    <motion.div
      key="duo"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="team-member-duo"
    >
      {members.map((member) => (
        <div key={member.id} className="team-member-duo-item">
          <MemberPhoto member={member} size="compact" />
          <MemberInfo member={member} />
        </div>
      ))}
    </motion.div>
  );
}

/** Integrante 1 → integrante 2 → ambos juntos (estado final) */
export default function TeamMemberShowcase() {
  const [phase, setPhase] = useState<Phase>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), INTERVAL_MS);
    const t2 = setTimeout(() => setPhase(2), INTERVAL_MS * 2);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="team-showcase" aria-live="polite">
      <div className="team-showcase-panel">
        <p className="team-showcase-label">Integrantes</p>

        <div className="team-showcase-stage">
          <AnimatePresence mode="wait">
            {phase === 0 && <FeaturedMember member={members[0]} />}
            {phase === 1 && <FeaturedMember member={members[1]} />}
            {phase === 2 && <DuoMembers />}
          </AnimatePresence>
        </div>

        {phase < 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="team-showcase-progress"
          >
            {members.map((m, i) => (
              <span
                key={m.id}
                className={`team-showcase-step${
                  phase === i ? " team-showcase-step-active" : ""
                }`}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export { members as teamMembers };
