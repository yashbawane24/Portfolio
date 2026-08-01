import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects, getProjectBySlug } from "@/constants/projects";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-[860px] mx-auto px-6 sm:px-8">
        <Link data-hoverable href="/projects" className="inline-flex items-center gap-2 text-sm text-text-dim hover:text-text transition-colors mb-10">
          <ArrowLeft size={14} /> Back to projects
        </Link>

        <div className="flex items-center gap-2 mb-5">
          <span className="font-mono text-xs uppercase tracking-wider text-accent1">{project.category}</span>
          {project.featured && <Badge>Featured</Badge>}
        </div>

        <h1 className="font-display text-4xl sm:text-5xl mb-6 leading-tight">{project.title}</h1>
        <p className="text-text-dim text-lg leading-relaxed mb-8">{project.summary}</p>

        <div className="flex flex-wrap gap-3 mb-12">
          <a data-hoverable href={project.githubUrl} target="_blank" rel="noreferrer" className="magnetic inline-flex items-center gap-2 border border-card-border rounded-full px-6 py-3 text-sm hover:border-accent1 transition-colors">
            <Github size={15} /> GitHub
          </a>
          <a data-hoverable href={project.liveUrl} target="_blank" rel="noreferrer" className="magnetic inline-flex items-center gap-2 bg-grad-accent text-white rounded-full px-6 py-3 text-sm font-medium">
            <ExternalLink size={15} /> Live Demo
          </a>
        </div>

        <Card className="p-9 mb-10">
          <h2 className="text-xl mb-4">Overview</h2>
          <p className="text-text-dim leading-relaxed">{project.description}</p>
        </Card>

        <Card className="p-9 mb-10">
          <h2 className="text-xl mb-5">Key features</h2>
          <ul className="space-y-3.5">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-text-dim text-sm">
                <CheckCircle2 size={16} className="text-accent3 mt-0.5 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </Card>

        <div>
          <h2 className="text-xl mb-4">Tech stack</h2>
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
