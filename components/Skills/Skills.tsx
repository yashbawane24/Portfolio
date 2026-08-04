"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/constants/skills";
import { SkillMarquee } from "./SkillMarquee";

export function Skills() {
  return (
    <section id="skills" className="relative py-32 sm:py-36 overflow-hidden">
      {/* Subtle Background Glow behind Marquee Rows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[1000px] h-[300px] bg-gradient-to-r from-accent1/10 via-accent2/10 to-accent3/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--card-border)_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 mb-16 sm:mb-20">
        <Eyebrow>SKILLS</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
        >
          What I work with.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-text-dim text-base sm:text-lg max-w-2xl mt-4 leading-relaxed"
        >
          Technologies I use to build modern, scalable, and AI-powered applications.
        </motion.p>
      </div>

      {/* Marquee Rows Container (ONLY 2 ROWS) */}
      <div className="space-y-6 sm:space-y-8 w-full">
        {skillCategories.map((categoryRow, i) => (
          <motion.div
            key={categoryRow.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: "easeOut",
            }}
            className="w-full"
          >
            {/* Optional subtle row category title indicator */}
            <div className="max-w-[1240px] mx-auto px-6 sm:px-8 mb-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-text-dim/60">
                {categoryRow.title}
              </span>
            </div>

            <SkillMarquee
              skills={categoryRow.skills}
              direction={categoryRow.direction}
              speed={categoryRow.speed}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
