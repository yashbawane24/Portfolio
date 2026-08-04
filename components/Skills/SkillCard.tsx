"use client";

import React, { useState } from "react";
import { SkillItem } from "@/constants/skills";

interface SkillCardProps {
  skill: SkillItem;
}

export function SkillCard({ skill }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // SVG logo URL using Simple Icons CDN (white fill for sleek dark theme cohesion)
  const logoUrl = skill.iconSlug
    ? `https://cdn.simpleicons.org/${skill.iconSlug}/ffffff`
    : null;

  return (
    <div
      data-hoverable
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center gap-3.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md border border-white/[0.08] hover:border-accent1/50 cursor-pointer select-none shrink-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.05]"
      style={{
        boxShadow: isHovered
          ? `0 10px 30px -8px ${skill.color || "rgba(0, 229, 255, 0.3)"}, 0 0 15px 0 ${skill.color || "rgba(0, 229, 255, 0.15)"}`
          : "0 4px 20px -4px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* Soft Cyan/Blue Glow Underlay on Hover */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 blur-md"
        style={{
          background: `radial-gradient(circle at center, ${skill.color || "#00e5ff"}33, transparent 70%)`,
        }}
      />

      {/* Official SVG Logo */}
      <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0">
        {logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoUrl}
            alt={`${skill.name} icon`}
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain group-hover:rotate-12 transition-transform duration-300 filter drop-shadow opacity-90 group-hover:opacity-100"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
        ) : skill.customSvg ? (
          <div
            className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 group-hover:text-white group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: skill.customSvg }}
          />
        ) : (
          <div className="w-2 h-2 rounded-full bg-accent1 group-hover:scale-125 transition-transform" />
        )}
      </div>

      {/* Technology Name */}
      <span className="font-sans text-xs sm:text-sm font-medium tracking-wide text-text/85 group-hover:text-white transition-colors whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}
