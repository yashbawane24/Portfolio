"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

// Placeholder stats — wire up to the GitHub REST/GraphQL API with your
// username to replace these with live numbers.
const stats = [
  { label: "Public Repositories", value: "27" },
  { label: "Total Stars", value: "184" },
  { label: "Contributions (past year)", value: "612" },
  { label: "Longest Streak", value: "21 days" },
];

const languages = [
  { name: "TypeScript", pct: 36, color: "var(--accent-1)" },
  { name: "JavaScript", pct: 28, color: "var(--accent-2)" },
  { name: "Python", pct: 20, color: "var(--accent-3)" },
  { name: "C++", pct: 16, color: "#F59E0B" },
];

// Deterministic pseudo-random contribution levels so server and client render match.
function levelFor(i: number) {
  const seed = Math.sin(i * 999) * 10000;
  return seed - Math.floor(seed);
}

export function GitHubStats() {
  return (
    <section id="github" className="py-32 sm:py-36">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <SectionHeading eyebrow="GitHub" title="Open-source activity." />
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Card className="p-8">
              {stats.map((s) => (
                <div key={s.label} className="flex justify-between py-3.5 border-b border-card-border last:border-none text-sm">
                  <span>{s.label}</span>
                  <span className="font-mono text-accent1">{s.value}</span>
                </div>
              ))}
              <div className="mt-4">
                <div className="flex h-2 rounded-md overflow-hidden mb-3">
                  {languages.map((l) => (
                    <div key={l.name} style={{ width: `${l.pct}%`, backgroundColor: l.color }} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-3.5 text-xs text-text-dim">
                  {languages.map((l) => (
                    <span key={l.name} className="inline-flex items-center gap-1.5">
                      <i className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: l.color }} />
                      {l.name} {l.pct}%
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="p-8">
              <div className="text-sm text-text-dim mb-4">Contribution graph</div>
              <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-[3px]">
                {Array.from({ length: 26 * 7 }).map((_, i) => {
                  const level = levelFor(i);
                  const color = level > 0.8 ? "var(--accent-1)" : level > 0.55 ? "var(--accent-2)" : level > 0.3 ? "var(--accent-3)" : "var(--card-border)";
                  return <div key={i} className="aspect-square rounded-[2px]" style={{ backgroundColor: color, opacity: level > 0.3 ? 0.9 : 0.5 }} />;
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
