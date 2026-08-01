"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/constants/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 sm:py-36">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <SectionHeading eyebrow="Testimonials" title="What people say." />
        <div className="flex gap-6 overflow-x-auto pb-3 snap-x snap-mandatory">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="min-w-[340px] sm:min-w-[380px] snap-start"
            >
              <Card className="p-9 h-full">
                <p className="text-[15px] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-grad-accent" />
                  <div>
                    <div className="text-sm">{t.name}</div>
                    <div className="text-xs text-text-dim">{t.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
