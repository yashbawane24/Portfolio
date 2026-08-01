import type { Metadata } from "next";
import { About } from "@/components/About/About";
import { Skills } from "@/components/Skills/Skills";
import { Experience } from "@/components/Experience/Experience";
import { siteConfig } from "@/constants/config";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: siteConfig.bio,
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <Skills />
      <Experience />
    </div>
  );
}
