"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-11 h-11" />;

  const isLight = resolvedTheme === "light";

  return (
    <button
      data-hoverable
      aria-label="Toggle theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="relative w-11 h-11 rounded-full border border-card-border flex items-center justify-center overflow-hidden"
    >
      <Moon
        className={`absolute w-[18px] h-[18px] text-text-dim transition-all duration-500 ${
          isLight ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        }`}
      />
      <Sun
        className={`absolute w-[18px] h-[18px] text-amber-500 transition-all duration-500 ${
          isLight ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
        }`}
      />
    </button>
  );
}
