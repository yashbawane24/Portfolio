"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-accent1 mb-4">
      <span className="w-6 h-px bg-accent1" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-14", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-display text-4xl sm:text-5xl leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && <p className="text-text-dim text-base max-w-xl mt-4 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
