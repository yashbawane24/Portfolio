"use client";

import React, { useRef, useState, useEffect } from "react";
import { SkillItem } from "@/constants/skills";
import { SkillCard } from "./SkillCard";

interface SkillMarqueeProps {
  title: string;
  skills: SkillItem[];
  direction?: "left" | "right";
  speed?: number;
}

export function SkillMarquee({
  title,
  skills,
  direction = "left",
  speed = 25,
}: SkillMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const startXRef = useRef(0);
  const currentDragRef = useRef(0);

  // Duplicate skills list 3 times to ensure continuous seamless infinite looping
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.clientX - currentDragRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX - startXRef.current;
    currentDragRef.current = x;
    setDragOffset(x);
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      // Smoothly reset drag offset after release so standard marquee resumes seamlessly
      setTimeout(() => {
        setIsPaused(false);
        setDragOffset(0);
        currentDragRef.current = 0;
      }, 500);
    } else {
      setIsPaused(false);
    }
  };

  // Touch Drag Support for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.touches[0].clientX - currentDragRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX - startXRef.current;
    currentDragRef.current = x;
    setDragOffset(x);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => {
      setIsPaused(false);
      setDragOffset(0);
      currentDragRef.current = 0;
    }, 500);
  };

  return (
    <div className="w-full space-y-3">
      {/* Row Label */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <h4 className="font-mono text-xs uppercase tracking-widest text-text-dim/70">
          {title}
        </h4>
      </div>

      {/* Marquee Wrapper with side fade gradients */}
      <div
        ref={containerRef}
        onMouseEnter={() => !isDragging && setIsPaused(true)}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full overflow-hidden py-3 cursor-grab active:cursor-grabbing select-none"
      >
        {/* Left & Right Gradient Mask Overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div
          ref={trackRef}
          style={
            {
              "--marquee-duration": `${speed}s`,
              animationPlayState: isPaused ? "paused" : "running",
              transform: isDragging || dragOffset !== 0 ? `translateX(${dragOffset}px)` : undefined,
              transition: isDragging ? "none" : "transform 0.5s ease-out",
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
    </div>
  );
}
