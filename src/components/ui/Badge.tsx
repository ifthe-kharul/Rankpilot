import { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Tone = "primary" | "ai" | "success" | "warning" | "error" | "neutral";

const toneClasses: Record<Tone, string> = {
  primary: "bg-primary-fixed text-on-primary-fixed",
  ai: "bg-secondary-container/40 text-on-secondary-container",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  error: "bg-error-container text-on-error-container",
  neutral: "bg-surface-container text-on-surface-variant",
};

export function Badge({
  tone = "neutral",
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
