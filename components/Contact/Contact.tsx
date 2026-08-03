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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setFeedback("");

    try {
      const apiKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "b25878f8-fdd7-45ae-b660-2eca231f488f";

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: `${formData.name} (Portfolio)`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFeedback("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(data.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setFeedback("An unexpected error occurred. Please try sending directly via email.");
    } finally {
      setLoading(false);
    }
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
              <Field
                label="Your name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              <Field
                label="Email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Field
                label="Message"
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  data-hoverable
                  type="submit"
                  disabled={loading}
                  className="magnetic bg-grad-accent text-white rounded-full px-7 py-3.5 text-sm font-medium disabled:opacity-50 transition-opacity"
                >
                  {loading ? "Sending..." : status === "success" ? "Sent ✓" : "Send message"}
                </button>
                <a
                  data-hoverable
                  href={siteConfig.resumeUrl}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic border border-card-border rounded-full px-7 py-3.5 text-sm"
                >
                  Download Resume
                </a>
              </div>

              {feedback && (
                <p
                  className={`mt-4 text-sm ${
                    status === "success" ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {feedback}
                </p>
              )}
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
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent1 transition-colors"
                >
                  {siteConfig.email}
                </a>
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
                    <a
                      key={s.label}
                      data-hoverable
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="w-11 h-11 rounded-full border border-card-border flex items-center justify-center hover:-translate-y-1 hover:border-accent2 transition-all"
                    >
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

interface FieldProps {
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Field({ label, name, type, value, onChange }: FieldProps) {
  return (
    <div className="relative mb-7 group">
      {type === "textarea" ? (
        <textarea
          required
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="peer w-full bg-transparent border-b border-card-border pt-3.5 pb-2.5 outline-none resize-none min-h-[90px] text-[15px] focus:border-accent1 transition-colors"
        />
      ) : (
        <input
          required
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="peer w-full bg-transparent border-b border-card-border pt-3.5 pb-2.5 outline-none text-[15px] focus:border-accent1 transition-colors"
        />
      )}
      <label className="absolute left-0 top-3.5 text-text-dim text-[15px] pointer-events-none transition-all peer-focus:-top-3.5 peer-focus:text-[11px] peer-focus:text-accent1 peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-accent1">
        {label}
      </label>
    </div>
  );
}
