"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/constants/experience";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });
  const trackHeight = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section id="experience" className="py-32 sm:py-36">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <SectionHeading eyebrow="Journey" title="Experience timeline." />
        <div ref={containerRef} className="relative pl-11">
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-card-border" />
          <motion.div
            style={{ scaleY: trackHeight, transformOrigin: "top" }}
            className="absolute left-[5px] top-0 bottom-0 w-px bg-grad-accent"
          />
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative mb-14 last:mb-0"
            >
              <div className="absolute -left-11 top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-accent2" />
              <div className="font-mono text-[11px] text-text-dim tracking-wide mb-2">{item.date}</div>
              <h4 className="text-lg mb-1">{item.org}</h4>
              <span className="block font-mono text-accent1 text-sm mb-3">{item.role}</span>
              <p className="text-text-dim text-sm leading-relaxed max-w-xl">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
