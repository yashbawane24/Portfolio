import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] text-text-dim border border-card-border rounded-md px-2.5 py-1",
        className
      )}
    >
      {children}
    </span>
  );
}
