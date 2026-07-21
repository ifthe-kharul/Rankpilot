"use client";

import { useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { AdminPageHeader, StatCard, StatusPill } from "@/components/admin";

const kpis = [
  { icon: "domain", label: "Total Workspaces", value: "3,216" },
  { icon: "check_circle", label: "Active", value: "2,984", tone: "success" as const },
  { icon: "payments", label: "Paid", value: "1,842", tone: "primary" as const },
  { icon: "hourglass_empty", label: "Trial", value: "624", tone: "warning" as const },
  { icon: "block", label: "Suspended", value: "28", tone: "error" as const },
  { icon: "groups", label: "Avg. Members", value: "4.8" },
];

const workspaces = [
  { id: "ws_8f92j3k1", name: "Acme Corp", owner: "Sarah J.", plan: "Enterprise", members: 42, usagePct: 85, usageLabel: "85k / 100k", status: "Active", created: "Oct 12, 2023" },
  { id: "ws_global_tech", name: "Global Tech", owner: "Mike T.", plan: "Pro", members: 12, usagePct: 48, usageLabel: "12k / 25k", status: "Active", created: "Nov 04, 2023" },
  { id: "ws_startup_ai", name: "Startup AI", owner: "Alex W.", plan: "Free", members: 3, usagePct: 100, usageLabel: "5k / 5k", status: "Suspended", created: "Jan 15, 2024", note: "Payment Failed" },
  { id: "ws_rankpilot_01", name: "Rankpilot Media", owner: "Ariful Islam", plan: "Premium", members: 12, usagePct: 62, usageLabel: "62k / 100k", status: "Active", created: "Jan 18, 2026" },
];

const statusTone: Record<string, "success" | "error"> = { Active: "success", Suspended: "error" };

export default function AdminWorkspacesPage() {
  const [search, setSearch] = useState("");

  return (
    <AdminShell eyebrow="Admin Console" title="Workspaces">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <AdminPageHeader
          title="Workspaces"
          subtitle="Manage tenant accounts, ownership, members, projects, plans and usage."
          actions={
            <>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-body-sm text-body-sm font-semibold hover:bg-primary-container transition-colors">
                <Icon name="add" size={18} />
                Create Workspace
              </button>
            </>
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {kpis.map((k) => (
            <StatCard key={k.label} {...k} />
          ))}
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 mb-4 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Icon name="search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search workspace, domain, owner..."
              className="w-full pl-9 pr-3 py-2 bg-surface-bright border border-outline-variant rounded-lg text-[13px]"
            />
          </div>
          {["Status: All", "Plan: All"].map((f) => (
            <button key={f} className="flex items-center gap-2 px-3 py-2 bg-white border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface-variant hover:border-primary transition-colors">
              {f}
              <Icon name="expand_more" size={16} />
            </button>
          ))}
          <button className="flex items-center gap-2 px-3 py-2 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface-variant hover:bg-surface-container transition-colors">
            <Icon name="filter_list" size={16} />
            More Filters
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface-variant hover:bg-surface-container transition-colors">
            <Icon name="bookmark" size={16} />
            Saved Views
          </button>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low text-[11px] font-bold text-outline uppercase">
              <tr>
                <th className="px-4 py-3 w-10">
                  <input type="checkbox" className="w-4 h-4 accent-primary" />
                </th>
                <th className="px-4 py-3">Workspace</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Plan</th>
                <th className="px-4 py-3 text-right">Members</th>
                <th className="px-4 py-3">Usage</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Created</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {workspaces
                .filter((w) => w.name.toLowerCase().includes(search.toLowerCase()))
                .map((w) => (
                  <tr
                    key={w.id}
                    className={`hover:bg-surface-container-low/50 transition-colors ${w.status === "Suspended" ? "bg-error/5" : ""}`}
                  >
                    <td className="px-4 py-3">
                      <input type="checkbox" className="w-4 h-4 accent-primary" />
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/workspaces/${w.id}`} className="flex items-center gap-3 group">
                        <div className="w-9 h-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs shrink-0">
                          {w.name[0]}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-on-surface text-[13px] group-hover:text-primary transition-colors truncate">{w.name}</div>
                          <div className="text-[11px] text-outline truncate">{w.note ?? w.id}</div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-on-surface-variant">{w.owner}</td>
                    <td className="px-4 py-3 text-[13px] text-on-surface-variant">{w.plan}</td>
                    <td className="px-4 py-3 text-right text-[13px] text-on-surface-variant">{w.members}</td>
                    <td className="px-4 py-3 w-40">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${w.usagePct >= 90 ? "bg-error" : w.usagePct >= 75 ? "bg-warning" : "bg-primary"}`}
                            style={{ width: `${w.usagePct}%` }}
                          />
                        </div>
                        <span className="text-[11px] text-outline w-16 shrink-0">{w.usageLabel}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <StatusPill label={w.status} tone={statusTone[w.status]} />
                    </td>
                    <td className="px-4 py-3 text-[13px] text-on-surface-variant">{w.created}</td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-outline hover:text-primary transition-colors">
                        <Icon name="more_vert" size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between px-4 py-3 border-t border-outline-variant text-[12px] text-on-surface-variant">
            <span>Showing 1-25 of 3,216 workspaces</span>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded hover:bg-surface-container transition-colors">
                <Icon name="chevron_left" size={18} />
              </button>
              <button className="p-1.5 rounded hover:bg-surface-container transition-colors">
                <Icon name="chevron_right" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
