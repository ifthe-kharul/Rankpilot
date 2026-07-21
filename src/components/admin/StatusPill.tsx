const toneClasses: Record<string, string> = {
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
  primary: "bg-primary/10 text-primary",
  neutral: "bg-surface-container text-on-surface-variant",
};

export function StatusPill({
  label,
  tone = "neutral",
  className = "",
}: {
  label: string;
  tone?: "success" | "warning" | "error" | "primary" | "neutral";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${toneClasses[tone]} ${className}`}
    >
      {label}
    </span>
  );
}
