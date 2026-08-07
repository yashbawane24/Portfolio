"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/constants/projects";
import { Card } from "@/components/ui/Card";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: relY * -6, y: relX * 6 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.3s ease-out",
      }}
    >
      <Card className="h-full">
        <div className="h-52 relative overflow-hidden bg-surface">
          <div className="absolute inset-0 bg-grad-accent opacity-20 transition-transform duration-700 group-hover:scale-110" />
          {project.featured && (
            <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-bg/80 border border-card-border">
              Featured
            </span>
          )}
        </div>
        <div className="p-7">
          <h3 className="text-xl mb-2.5">{project.title}</h3>
          <p className="text-text-dim text-sm leading-relaxed mb-4.5">{project.summary}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="font-mono text-[11px] text-text-dim border border-card-border rounded-md px-2.5 py-1">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-5 text-sm text-text-dim">
            <a data-hoverable href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-accent1 transition-colors">
              <Github size={14} /> GitHub
            </a>
            {project.liveUrl && project.liveUrl !== "#" && (
              <a data-hoverable href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-accent1 transition-colors">
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
