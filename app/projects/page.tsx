import type { Metadata } from "next";
import { Projects } from "@/components/Projects/Projects";
import { siteConfig } from "@/constants/config";

export const metadata: Metadata = {
  title: `Projects — ${siteConfig.name}`,
  description: "Selected AI-driven and full-stack projects by " + siteConfig.name,
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <Projects />
    </div>
  );
}
