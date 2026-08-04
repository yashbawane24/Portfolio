"use client";

import React, { useRef, useState } from "react";
import { SkillItem } from "@/constants/skills";

interface SkillCardProps {
  skill: SkillItem;
}

export function SkillCard({ skill }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // Simple Icons SVG URL template with dark/light mode adaptable colors
  const logoUrl = skill.iconSlug
    ? `https://cdn.simpleicons.org/${skill.iconSlug}/ffffff`
    : null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle magnetic tilt effect
    const tiltX = (y / (rect.height / 2)) * -8;
    const tiltY = (x / (rect.width / 2)) * 8;
    const translateX = (x / (rect.width / 2)) * 6;
    const translateY = (y / (rect.height / 2)) * 6;

    setTransformStyle(
      `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${translateX}px, ${translateY}px, 0) scale(1.08)`
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle("");
  };

  return (
    <div
      ref={cardRef}
      data-hoverable
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered ? transformStyle : "perspective(600px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0) scale(1)",
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out, border-color 0.3s, box-shadow 0.3s",
        boxShadow: isHovered
          ? `0 12px 30px -10px ${skill.color || "var(--accent-1)"}33, 0 0 20px 0 ${skill.color || "var(--accent-1)"}22`
          : "var(--shadow)",
      }}
      className="group relative flex items-center gap-3.5 px-5 py-3.5 rounded-full bg-white/[0.04] dark:bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/30 cursor-pointer select-none shrink-0 will-change-transform"
    >
      {/* Outer Gradient Border Glow on Hover */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-[1px]"
        style={{
          background: `linear-gradient(135deg, ${skill.color || "var(--accent-1)"}, var(--accent-2))`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Official Logo / Custom SVG Icon */}
      <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
        {logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoUrl}
            alt={`${skill.name} logo`}
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain group-hover:rotate-12 transition-transform duration-300 filter drop-shadow"
            loading="lazy"
            onError={(e) => {
              // Fallback if Simple Icons CDN fails to load specific slug
              (e.target as HTMLElement).style.display = "none";
            }}
          />
        ) : skill.customSvg ? (
          <div
            className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: skill.customSvg }}
          />
        ) : (
          <div className="w-2.5 h-2.5 rounded-full bg-accent1 group-hover:scale-125 transition-transform" />
        )}
      </div>

      {/* Technology Name */}
      <span className="font-sans text-sm sm:text-[15px] font-medium tracking-wide text-text/90 group-hover:text-white transition-colors whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}
