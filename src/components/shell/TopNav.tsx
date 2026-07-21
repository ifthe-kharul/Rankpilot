"use client";

import { Icon } from "@/components/ui";
import { cn } from "@/lib/cn";

type SaveStatus = "saved" | "saving" | "unsaved" | "offline";

const statusCopy: Record<SaveStatus, { label: string; icon: string; className: string }> = {
  saved: { label: "All changes saved", icon: "cloud_done", className: "text-success" },
  saving: { label: "Saving…", icon: "cloud_sync", className: "text-outline animate-pulse" },
  unsaved: { label: "Unsaved changes", icon: "cloud_off", className: "text-warning" },
  offline: { label: "Offline — changes queued", icon: "wifi_off", className: "text-error" },
};

export function TopNav({
  eyebrow = "Personal Workspace",
  title,
  credits = 2500,
  notifications = 0,
  status,
  jobRunning = false,
  onMenuClick,
}: {
  eyebrow?: string;
  title: string;
  credits?: number;
  notifications?: number;
  status?: SaveStatus;
  jobRunning?: boolean;
  onMenuClick?: () => void;
}) {
  const statusInfo = status ? statusCopy[status] : null;

  return (
    <header className="h-topbar-height w-full sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-outline-variant/60 flex items-center justify-between px-4 md:px-container-padding gap-4 md:gap-8">
      <div className="flex items-center gap-3 shrink-0 min-w-0">
        <button
          type="button"
          onClick={onMenuClick}
          className="md:hidden text-on-surface-variant hover:text-on-surface transition-colors shrink-0"
        >
          <Icon name="menu" />
        </button>
        <div className="flex flex-col min-w-0">
          <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold text-outline truncate">
            {eyebrow}
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface leading-tight truncate">
            {title}
          </span>
        </div>
      </div>

      <div className="hidden md:flex flex-1 max-w-2xl">
        <div className="relative group flex items-center border border-outline-variant rounded-xl bg-surface-container-lowest w-full transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
          <div className="pl-4 pr-2 flex items-center text-outline group-focus-within:text-primary">
            <Icon name="search" size={20} />
          </div>
          <input
            className="w-full bg-transparent border-none focus:ring-0 focus:outline-none py-2.5 font-body-md text-body-md text-on-surface placeholder:text-outline/60"
            placeholder="Search projects, documents, tools, or commands"
            type="text"
          />
          <div className="pr-4 flex items-center gap-1.5">
            <kbd className="px-1.5 py-0.5 rounded border border-outline-variant bg-surface-container-low text-[10px] font-medium text-outline flex items-center gap-0.5">
              <span className="text-[12px]">⌘</span>K
            </kbd>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-5 shrink-0">
        {statusInfo && (
          <div className={cn("hidden lg:flex items-center gap-1.5 text-[13px] font-medium", statusInfo.className)}>
            <Icon name={statusInfo.icon} size={18} />
            {statusInfo.label}
          </div>
        )}

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/20 border border-secondary-container/40">
          <Icon name="account_balance_wallet" size={18} filled className="text-secondary" />
          <span className="font-body-sm text-body-sm text-secondary font-bold">
            {credits.toLocaleString()} Credits
          </span>
        </div>

        <div className="flex items-center gap-1">
          {jobRunning && (
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-primary"
              title="Background job running"
            >
              <Icon name="sync" className="animate-spin" size={20} />
            </button>
          )}
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-on-surface-variant relative"
          >
            <Icon name="notifications" />
            {notifications > 0 && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface" />
            )}
          </button>
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-on-surface-variant"
          >
            <Icon name="help" />
          </button>
        </div>

        <div className="h-8 w-px bg-outline-variant hidden sm:block" />

        <button
          type="button"
          className="flex items-center gap-3 pl-1 pr-1 py-1 rounded-full hover:bg-surface-container transition-all group"
        >
          <div className="w-9 h-9 rounded-full bg-primary/80 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-premium ring-1 ring-outline-variant">
            AE
          </div>
          <div className="hidden lg:flex flex-col items-start pr-2">
            <span className="font-body-sm text-body-sm text-on-surface leading-none">Alex Editor</span>
            <span className="text-[11px] text-outline">Pro Account</span>
          </div>
          <Icon name="expand_more" className="text-outline group-hover:text-on-surface transition-colors" />
        </button>
      </div>
    </header>
  );
}
