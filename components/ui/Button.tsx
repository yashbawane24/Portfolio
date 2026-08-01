import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline";

interface BaseProps {
  variant?: Variant;
  className?: string;
}

const base =
  "magnetic inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm tracking-wide transition-colors";
const variants: Record<Variant, string> = {
  primary: "bg-grad-accent text-white font-medium",
  outline: "border border-card-border text-text hover:border-accent1",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cn(base, variants[variant], className)} {...props} />;
}
