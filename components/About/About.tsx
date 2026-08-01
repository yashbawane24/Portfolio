"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/constants/config";

export function About() {
  const { bio, education } = siteConfig;
  const [first, second] = bio.split(". I'm passionate");

  return (
    <section id="about" className="py-32 sm:py-36">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <Eyebrow>About</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl leading-tight"
          >
            A builder who ships.
          </motion.h2>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-text-dim leading-relaxed mb-5"
          >
            {first}.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-text-dim leading-relaxed mb-8"
          >
            I&apos;m passionate{second}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card className="p-8">
              <h4 className="text-lg mb-1.5">{education.school}</h4>
              <span className="block font-mono text-accent1 text-sm mb-4">{education.degree}</span>
              <div className="flex justify-between py-2.5 border-t border-card-border text-sm text-text-dim">
                <span>Expected Graduation</span>
                <span className="font-mono text-text">{education.graduation}</span>
              </div>
              <div className="flex justify-between py-2.5 border-t border-card-border text-sm text-text-dim">
                <span>Current CGPA</span>
                <span className="font-mono text-text">{education.cgpa}</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
