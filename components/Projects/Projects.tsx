"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/constants/projects";

export function Projects({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-32 sm:py-36">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected projects."
          subtitle="AI-driven products and full-stack builds — each with a dedicated case study."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {list.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        {limit && (
          <div className="mt-12 text-center">
            <Link data-hoverable href="/projects" className="magnetic inline-block border border-card-border rounded-full px-7 py-3.5 text-sm hover:border-accent1 transition-colors">
              View all projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
