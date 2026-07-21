import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ai" | "ghost" | "outline" | "danger";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow-md active:scale-95",
  ai: "border border-secondary text-secondary bg-secondary-container/20 hover:bg-secondary-container/40 active:scale-95",
  ghost: "text-on-surface hover:bg-surface-container active:scale-95",
  outline:
    "border border-outline-variant text-on-surface hover:bg-surface-container active:scale-95",
  danger: "bg-error text-on-error hover:opacity-90 active:scale-95",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px] gap-1.5",
  md: "px-6 py-2.5 text-body-sm gap-2",
  lg: "px-8 py-3.5 text-body-sm gap-2.5",
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }
>(({ className, variant = "primary", size = "md", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-body-sm font-semibold transition-all disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";
