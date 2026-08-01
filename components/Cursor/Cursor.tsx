"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a small dot that tracks the mouse exactly, plus a
 * lagging glow ring that eases toward it and expands over hoverable elements.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    let mx = 0,
      my = 0,
      gx = 0,
      gy = 0;
    let raf: number;

    function handleMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
    }

    function loop() {
      gx += (mx - gx) * 0.18;
      gy += (my - gy) * 0.18;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("[data-hoverable]")) {
        glowRef.current?.classList.add("scale-[1.9]", "border-accent2", "bg-accent2/10");
      }
    }
    function handleOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("[data-hoverable]")) {
        glowRef.current?.classList.remove("scale-[1.9]", "border-accent2", "bg-accent2/10");
      }
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("mouseout", handleOut, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(raf);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9000] w-1.5 h-1.5 rounded-full bg-text pointer-events-none will-change-transform"
      />
      <div
        ref={glowRef}
        className="fixed top-0 left-0 z-[9000] w-10 h-10 rounded-full border border-card-border pointer-events-none will-change-transform hidden md:block"
      />
    </>
  );
}
