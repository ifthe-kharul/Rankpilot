import { Icon } from "@/components/ui";

type Tone = "default" | "success" | "warning" | "error" | "primary";

const toneClasses: Record<Tone, string> = {
  default: "bg-surface-container text-on-surface-variant",
  primary: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
};

export function StatCard({
  icon,
  label,
  value,
  delta,
  tone = "default",
  onClick,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  delta?: string;
  tone?: Tone;
  onClick?: () => void;
  href?: string;
}) {
  const Comp = href ? "a" : "div";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`p-5 rounded-xl bg-surface-container-lowest border border-outline-variant relative overflow-hidden ${
        href || onClick ? "cursor-pointer hover:border-primary/40 transition-colors" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${toneClasses[tone]}`}>
          <Icon name={icon} size={18} />
        </div>
        {delta && (
          <span
            className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${
              delta.startsWith("-") ? "text-error bg-error/10" : "text-success bg-success/10"
            }`}
          >
            {delta}
          </span>
        )}
      </div>
      <p className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider truncate">{label}</p>
      <p className="text-xl font-bold text-on-surface mt-0.5">{value}</p>
    </Comp>
  );
}
