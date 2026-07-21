"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Overview", icon: "dashboard", href: "/admin" },
  { label: "Users", icon: "group", href: "/admin/users" },
  { label: "Workspaces", icon: "account_tree", href: "/admin/workspaces" },
  { label: "Plans", icon: "payments", href: "/admin/plans" },
  { label: "Credits", icon: "account_balance_wallet", href: "/admin/credits" },
  { label: "Providers", icon: "hub", href: "/admin/providers" },
  { label: "Jobs", icon: "precision_manufacturing", href: "/admin/jobs" },
  { label: "Feature Flags", icon: "flag", href: "/admin/feature-flags" },
  { label: "Logs", icon: "receipt_long", href: "/admin/logs" },
  { label: "Features", icon: "extension", href: "/admin/features" },
  { label: "Settings", icon: "settings", href: "/admin/settings" },
];

export function AdminSidebar({
  mobileOpen = false,
  onCloseMobile,
}: {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {mobileOpen && (
        <div onClick={onCloseMobile} className="fixed inset-0 bg-on-surface/40 z-40 md:hidden" />
      )}
      <aside
        className={cn(
          "flex flex-col h-screen fixed left-0 top-0 md:sticky shrink-0 w-sidebar-width-expanded bg-navy-sidebar py-6 border-r border-outline-variant z-50 overflow-hidden transition-transform md:transition-none duration-200",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <button
          type="button"
          onClick={onCloseMobile}
          className="md:hidden absolute top-4 right-4 text-outline hover:text-white transition-colors"
        >
          <Icon name="close" />
        </button>

        <div className="px-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <Icon name="terminal" filled className="text-white" size={20} />
            </div>
            <div>
              <h1 className="font-headline-md text-headline-md font-bold text-white leading-none">RankPilot</h1>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto sidebar-scroll">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onCloseMobile}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg font-label-md text-label-md transition-colors duration-150",
                  active
                    ? "bg-white/10 border-l-4 border-primary-fixed text-white font-bold"
                    : "text-outline hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-6 mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-primary-fixed-dim bg-primary/40 flex items-center justify-center text-white text-xs font-bold shrink-0">
              AC
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-label-md text-label-md text-white truncate">Alex Chen</span>
              <span className="font-label-sm text-label-sm text-outline truncate">Super Admin</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
