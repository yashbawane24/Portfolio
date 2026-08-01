"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Sparkles, Figma, Server, Smartphone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { services } from "@/constants/services";

const iconMap = {
  code: Code2,
  layers: Layers,
  sparkles: Sparkles,
  figma: Figma,
  server: Server,
  smartphone: Smartphone,
};

export function Services() {
  return (
    <section id="services" className="py-32 sm:py-36">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <SectionHeading eyebrow="Services" title="How I can help." />
        <div className="grid md:grid-cols-3 gap-5.5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8">
                  <div className="w-11 h-11 rounded-2xl bg-grad-accent flex items-center justify-center mb-6">
                    <Icon size={19} className="text-white" />
                  </div>
                  <h3 className="text-lg mb-2.5">{service.title}</h3>
                  <p className="text-text-dim text-sm leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
