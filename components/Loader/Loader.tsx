"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/constants/config";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return next;
      });
    }, 140);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center gap-7"
        >
          <div className="font-display text-sm tracking-[0.35em] text-text-dim uppercase">
            {siteConfig.name}
          </div>
          <div className="w-56 h-px bg-card-border relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-grad-accent transition-[width] duration-150"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="font-mono text-xs text-text-dim tracking-widest">
            {String(Math.floor(Math.min(progress, 100))).padStart(2, "0")}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
