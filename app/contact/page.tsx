import type { Metadata } from "next";
import { Contact } from "@/components/Contact/Contact";
import { siteConfig } from "@/constants/config";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
