"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { siteConfig } from "@/constants/config";
import { useTypedText } from "@/hooks/useTypedText";
import { socials } from "@/constants/socials";
import { Github, Linkedin } from "lucide-react";

const HeroScene = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), {
  ssr: false,
});

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 + i * 0.12 },
  }),
};

export function Hero() {
  const typed = useTypedText(siteConfig.typedRoles);
  const github = socials.find((s) => s.icon === "github");
  const linkedin = socials.find((s) => s.icon === "linkedin");

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      <div className="absolute inset-0 z-[1]">
        <HeroScene />
      </div>

      <div className="relative z-[2] max-w-[1240px] mx-auto px-6 sm:px-8 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl sm:text-2xl text-text-dim font-light mb-3"
        >
          Hello, I&apos;m
        </motion.p>

        <h1 className="font-display font-semibold leading-[0.96] text-[48px] sm:text-[80px] lg:text-[118px]">
          <span className="block overflow-hidden">
            <motion.span
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              YASH
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-gradient"
            >
              BAWANE
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 font-mono text-base sm:text-xl text-text-dim flex gap-2"
        >
          <span>&gt;</span>
          <span className="text-accent1">
            {typed}
            <span className="inline-block w-[2px] h-[1em] bg-accent1 ml-1 align-middle animate-blink" />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.02 }}
          className="mt-10 flex flex-wrap gap-3.5"
        >
          <a data-hoverable href="#projects" className="magnetic bg-grad-accent text-white font-medium rounded-full px-7 py-3.5 text-sm">
            View Projects
          </a>
          <a data-hoverable href={siteConfig.resumeUrl} download target="_blank" rel="noreferrer" className="magnetic border border-card-border rounded-full px-7 py-3.5 text-sm">
            Download Resume
          </a>
          <a data-hoverable href="#contact" className="magnetic border border-card-border rounded-full px-7 py-3.5 text-sm">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-9 flex gap-4"
        >
          {github && (
            <a data-hoverable href={github.href} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center hover:-translate-y-1 transition-transform">
              <Github size={16} />
            </a>
          )}
          {linkedin && (
            <a data-hoverable href={linkedin.href} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center hover:-translate-y-1 transition-transform">
              <Linkedin size={16} />
            </a>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2.5"
      >
        <div className="relative w-px h-12 bg-gradient-to-b from-text-dim to-transparent overflow-hidden">
          <div className="absolute -top-full left-0 w-full h-full bg-gradient-to-b from-accent1 to-transparent animate-[scrollDrop_2.2s_ease-in-out_infinite]" />
        </div>
        <span className="font-mono text-[10px] tracking-[0.2em] text-text-dim uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
