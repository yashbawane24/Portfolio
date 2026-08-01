"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/constants/config";
import { socials } from "@/constants/socials";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail, twitter: Github };

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire this up to an API route (e.g. app/api/contact/route.ts) or a
    // service like Resend / Formspree before going live.
    setSent(true);
  }

  return (
    <section id="contact" className="py-32 sm:py-36">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          subtitle="Open to internships, freelance projects, and collaborations."
        />
        <div className="grid md:grid-cols-2 gap-14">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <Card className="p-10">
              <Field label="Your name" type="text" />
              <Field label="Email address" type="email" />
              <Field label="Message" type="textarea" />
              <div className="flex flex-wrap gap-3.5">
                <button data-hoverable type="submit" className="magnetic bg-grad-accent text-white rounded-full px-7 py-3.5 text-sm font-medium">
                  {sent ? "Sent ✓" : "Send message"}
                </button>
                <a data-hoverable href={siteConfig.resumeUrl} className="magnetic border border-card-border rounded-full px-7 py-3.5 text-sm">
                  Download Resume
                </a>
              </div>
            </Card>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-10">
              <div className="flex items-center gap-3.5 py-3.5 border-b border-card-border text-sm">
                <span className="w-9 h-9 rounded-full border border-card-border flex items-center justify-center">
                  <Mail size={14} />
                </span>
                {siteConfig.email}
              </div>
              <div className="flex items-center gap-3.5 py-3.5 text-sm">
                <span className="w-9 h-9 rounded-full border border-card-border flex items-center justify-center">
                  <MapPin size={14} />
                </span>
                {siteConfig.location}
              </div>
              <div className="flex gap-3.5 mt-5">
                {socials.map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <a key={s.label} data-hoverable href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="w-11 h-11 rounded-full border border-card-border flex items-center justify-center hover:-translate-y-1 hover:border-accent2 transition-all">
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type }: { label: string; type: "text" | "email" | "textarea" }) {
  return (
    <div className="relative mb-7 group">
      {type === "textarea" ? (
        <textarea required placeholder=" " className="peer w-full bg-transparent border-b border-card-border pt-3.5 pb-2.5 outline-none resize-none min-h-[90px] text-[15px] focus:border-accent1 transition-colors" />
      ) : (
        <input required type={type} placeholder=" " className="peer w-full bg-transparent border-b border-card-border pt-3.5 pb-2.5 outline-none text-[15px] focus:border-accent1 transition-colors" />
      )}
      <label className="absolute left-0 top-3.5 text-text-dim text-[15px] pointer-events-none transition-all peer-focus:-top-3.5 peer-focus:text-[11px] peer-focus:text-accent1 peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-accent1">
        {label}
      </label>
    </div>
  );
}
