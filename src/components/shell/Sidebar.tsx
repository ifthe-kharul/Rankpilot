"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/ui";
import { navGroups } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { CreateNewPanel } from "./CreateNewPanel";

export function Sidebar({
  credits = 2500,
  creditPct = 40,
  lowCredit = false,
  mobileOpen = false,
  onCloseMobile,
}: {
  credits?: number;
  creditPct?: number;
  lowCredit?: boolean;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <>
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-on-surface/40 z-40 md:hidden"
        />
      )}
      <aside
        className={cn(
          "flex flex-col h-screen fixed left-0 top-0 md:sticky shrink-0 bg-navy-sidebar py-6 border-r border-outline-variant z-50 overflow-hidden transition-transform md:transition-all duration-200",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          collapsed ? "w-sidebar-width-expanded md:w-sidebar-width-collapsed" : "w-sidebar-width-expanded"
        )}
      >
      <button
        type="button"
        onClick={onCloseMobile}
        className="md:hidden absolute top-4 right-4 text-outline hover:text-white transition-colors"
      >
        <Icon name="close" />
      </button>
      <div className="px-4 mb-8 flex items-center justify-between">
        {!collapsed && (
          <div className="flex flex-col overflow-hidden">
            <span className="font-headline-md text-headline-md text-white tracking-tight truncate">
              RankPilot
            </span>
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            setCollapsed((v) => !v);
            setCreateOpen(false);
          }}
          className="text-outline hover:text-white transition-colors shrink-0"
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <Icon name={collapsed ? "menu" : "menu_open"} />
        </button>
      </div>

      <div className="px-3 mb-6">
        <button
          type="button"
          onClick={() => setCreateOpen(true)}
          className={cn(
            "w-full bg-primary hover:bg-primary-container text-on-primary font-body-sm text-body-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2 shadow-premium active:scale-95 transition-all",
            collapsed && "px-0"
          )}
        >
          <Icon name="add" />
          {!collapsed && "Create New"}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto sidebar-scroll px-2 space-y-6">
        {navGroups.map((group) => (
          <div key={group.title}>
            {!collapsed && (
              <div className="px-4 mb-2">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
                  {group.title}
                </p>
              </div>
            )}
            <ul className="space-y-1">
              {group.items.map((item) => {
                const active = pathname === item.href || pathname?.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onCloseMobile}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2 transition-all duration-200 group rounded-md",
                        active
                          ? "border-l-4 border-primary bg-primary/10 text-white font-semibold"
                          : "text-outline hover:text-white hover:bg-white/5"
                      )}
                    >
                      <Icon name={item.icon} className="group-hover:text-white shrink-0" />
                      {!collapsed && (
                        <span className="font-body-sm text-body-sm flex-1 truncate">{item.label}</span>
                      )}
                      {!collapsed && item.badge && (
                        <span className="bg-secondary-fixed-dim/20 text-secondary-fixed-dim text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="mt-auto px-3 space-y-4 pt-6 border-t border-outline-variant/30">
        {!collapsed ? (
          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-label-sm text-[11px] text-outline flex items-center gap-1.5">
                <Icon name="account_balance_wallet" size={14} />
                Credits: {credits.toLocaleString()}
              </span>
              <Link href="/billing/checkout" className="text-[11px] font-bold text-secondary-fixed-dim hover:underline">
                Upgrade
              </Link>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className={cn("h-full ai-glow", lowCredit ? "bg-error" : "bg-secondary-fixed-dim")}
                style={{ width: `${creditPct}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <Icon name="account_balance_wallet" className={lowCredit ? "text-error" : "text-secondary-fixed-dim"} />
          </div>
        )}

        <div className="p-2 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 transition-all cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-9 h-9 rounded-full bg-primary/40 border-2 border-primary/40 flex items-center justify-center text-white text-xs font-bold">
                AE
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-navy-sidebar rounded-full" />
            </div>
            {!collapsed && (
              <div className="flex flex-col flex-1 overflow-hidden">
                <span className="font-body-sm text-body-sm text-white truncate">Alex Editor</span>
                <span className="font-label-sm text-[11px] text-outline truncate">Standard Plan</span>
              </div>
            )}
          </div>
        </div>
      </div>
      </aside>
      <CreateNewPanel open={createOpen} onClose={() => setCreateOpen(false)} collapsed={collapsed} />
    </>
  );
}
