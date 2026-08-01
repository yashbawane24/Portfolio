"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { socials } from "@/constants/socials";
import { siteConfig } from "@/constants/config";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail, twitter: Github };

export function Footer() {
  return (
    <footer className="relative z-[2] border-t border-card-border py-14">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex flex-wrap items-center justify-between gap-6">
        <div className="text-base tracking-wide">
          Y<span className="text-accent2">.</span>B
        </div>

        <div className="flex gap-3.5">
          {socials.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                data-hoverable
                className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center hover:-translate-y-1 hover:border-accent2 transition-all"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>

        <p className="text-text-dim text-sm">
          © {new Date().getFullYear()} {siteConfig.name}. Built with intent.
        </p>

        <button
          data-hoverable
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-11 h-11 rounded-full border border-card-border flex items-center justify-center"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
