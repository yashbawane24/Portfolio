"use client";

import React, { useState } from "react";
import { SkillItem } from "@/constants/skills";
import { SkillCard } from "./SkillCard";

interface SkillMarqueeProps {
  skills: SkillItem[];
  direction?: "left" | "right";
  speed?: number;
}

export function SkillMarquee({
  skills,
  direction = "left",
  speed = 30,
}: SkillMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items 4 times to guarantee a seamless, infinite loop on any screen width
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full overflow-hidden py-3 select-none"
    >
      {/* Side Fade Gradient Overlays for Smooth Edge Transitions */}
      <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-bg via-bg/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-bg via-bg/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div
        style={
          {
            "--marquee-duration": `${speed}s`,
            animationPlayState: isPaused ? "paused" : "running",
          } as React.CSSProperties
        }
        className={`flex gap-4 sm:gap-6 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}
