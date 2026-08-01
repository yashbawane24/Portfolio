export function Background() {
  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(127,127,127,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(127,127,127,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      <div
        className="fixed -inset-1/5 z-0 pointer-events-none blur-[90px] opacity-30 animate-aurora"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--accent-2), transparent 40%), radial-gradient(circle at 80% 30%, var(--accent-1), transparent 38%), radial-gradient(circle at 50% 80%, var(--accent-3), transparent 42%)",
        }}
      />
      <div className="fixed inset-0 z-[1] pointer-events-none noise-overlay" />
    </>
  );
}
