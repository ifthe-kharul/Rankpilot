import { cn } from "@/lib/cn";

export function ProgressBar({
  value,
  className,
  trackClassName,
  glow = false,
}: {
  value: number;
  className?: string;
  trackClassName?: string;
  glow?: boolean;
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("h-1.5 w-full bg-surface-container rounded-full overflow-hidden", trackClassName)}>
      <div
        className={cn("h-full bg-primary rounded-full transition-all", glow && "ai-glow", className)}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
