import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("glass glow-border rounded-3xl relative overflow-hidden", className)}>
      {children}
    </div>
  );
}
