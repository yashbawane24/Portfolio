"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { homeSectionLinks, navItems } from "@/constants/navigation";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const links = onHome ? homeSectionLinks : navItems;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6 sm:px-10 py-5 backdrop-blur-md bg-gradient-to-b from-bg/80 to-transparent"
    >
      <Link href="/" data-hoverable className="text-lg tracking-wide">
        Y<span className="text-accent2">.</span>B
      </Link>

      <div className="hidden md:flex gap-8 text-sm text-text-dim">
        {links.map((item) => (
          <Link key={item.href} href={item.href} data-hoverable className="relative group transition-colors hover:text-text">
            {item.label}
            <span className="absolute left-0 -bottom-1.5 w-0 h-px bg-accent1 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3.5">
        <ThemeToggle />
        <Link
          href="/contact"
          data-hoverable
          className="magnetic border border-card-border rounded-full px-6 py-3 text-sm hover:border-accent1 transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </motion.nav>
  );
}
