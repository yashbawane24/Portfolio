"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/constants/skills";
import { SkillMarquee } from "./SkillMarquee";

export function Skills() {
  const [rowsCount, setRowsCount] = useState(5);

  // Responsive row counts: Desktop = 5, Tablet = 4, Mobile = 3
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRowsCount(3);
      } else if (width < 1024) {
        setRowsCount(4);
      } else {
        setRowsCount(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCategories = skillCategories.slice(0, rowsCount);
  const headingWords = "What I work with.".split(" ");

  return (
    <section id="skills" className="relative py-32 sm:py-36 overflow-hidden">
      {/* Background Enhancements: Ambient Glow & Grid overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-accent2/10 via-accent1/10 to-accent3/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 mb-16 sm:mb-20">
        <Eyebrow>SKILLS</Eyebrow>

        {/* Word-by-Word Staggered Heading Reveal */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight flex flex-wrap gap-x-3.5 gap-y-1">
          {headingWords.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </div>

      {/* Infinite Horizontal Marquee Rows */}
      <div className="space-y-8 sm:space-y-10">
        {visibleCategories.map((categoryRow, i) => (
          <motion.div
            key={categoryRow.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: "easeOut",
            }}
          >
            <SkillMarquee
              title={categoryRow.title}
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
