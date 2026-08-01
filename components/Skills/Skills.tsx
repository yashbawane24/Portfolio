"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { skillCategories } from "@/constants/skills";

export function Skills() {
  return (
    <section id="skills" className="py-32 sm:py-36">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <SectionHeading eyebrow="Skills" title="What I work with." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Card className="p-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-accent1 mb-4">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      data-hoverable
                      className="px-3.5 py-1.5 rounded-full border border-card-border bg-surface text-xs hover:-translate-y-1 hover:border-accent2 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
