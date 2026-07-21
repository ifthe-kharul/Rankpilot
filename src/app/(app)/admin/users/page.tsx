"use client";

import { useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { AdminPageHeader, StatCard, StatusPill } from "@/components/admin";

const kpis = [
  { icon: "group", label: "Total Users", value: "12,486" },
  { icon: "bolt", label: "Active Today", value: "4,822", tone: "primary" as const },
  { icon: "payments", label: "Paid Users", value: "3,914", tone: "success" as const },
  { icon: "person_add", label: "New This Month", value: "742" },
  { icon: "block", label: "Suspended", value: "38", tone: "error" as const },
  { icon: "mark_email_unread", label: "Unverified", value: "126", tone: "warning" as const },
];

const users = [
  { id: "usr_8K4R92", name: "Ariful Islam", email: "ariful@rankpilot.io", initials: "AI", status: "Active", plan: "Premium", usage: 68, lastActive: "8 minutes ago" },
  { id: "usr_7J3Q81", name: "Jane Smith", email: "jane@example.com", initials: "JS", status: "Active", plan: "Enterprise", usage: 75, lastActive: "2 mins ago" },
  { id: "usr_5M9P44", name: "Alex Morgan", email: "alex.morgan@example.com", initials: "AM", status: "Active", plan: "Standard", usage: 32, lastActive: "1 hour ago" },
  { id: "usr_2X7L18", name: "Mike Ross", email: "mike.ross@example.com", initials: "MR", status: "Suspended", plan: "Free", usage: 100, lastActive: "3 days ago" },
  { id: "usr_9T1K55", name: "Sarah Chen", email: "sarah.chen@rankpilot.io", initials: "SC", status: "Active", plan: "Enterprise", usage: 44, lastActive: "12 mins ago" },
  { id: "usr_4B6N23", name: "Priya Patel", email: "priya@contractor.com", initials: "PP", status: "Unverified", plan: "Trial", usage: 8, lastActive: "1 day ago" },
];

const statusTone: Record<string, "success" | "error" | "warning"> = {
  Active: "success",
  Suspended: "error",
  Unverified: "warning",
};

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");

  return (
    <AdminShell eyebrow="Admin Console" title="Users">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <AdminPageHeader
          title="Users"
          subtitle="Manage user accounts, subscriptions, access, usage and security."
          actions={
            <>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
                Export Users
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-body-sm text-body-sm font-semibold hover:bg-primary-container transition-colors">
                <Icon name="add" size={18} />
                Add User
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
              placeholder="Search by name, email or user ID..."
              className="w-full pl-9 pr-3 py-2 bg-surface-bright border border-outline-variant rounded-lg text-[13px]"
            />
          </div>
          {["Status: All", "Plan: All"].map((f) => (
            <div key={f} className="relative">
              <button className="flex items-center gap-2 px-3 py-2 bg-white border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface-variant hover:border-primary transition-colors">
                {f}
                <Icon name="expand_more" size={16} />
              </button>
            </div>
          ))}
          <button className="flex items-center gap-2 px-3 py-2 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface-variant hover:bg-surface-container transition-colors">
            <Icon name="filter_list" size={16} />
            More Filters
          </button>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low text-[11px] font-bold text-outline uppercase">
              <tr>
                <th className="px-4 py-3 w-10">
                  <input type="checkbox" className="w-4 h-4 accent-primary" />
                </th>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Plan</th>
                <th className="px-4 py-3">Usage</th>
                <th className="px-4 py-3">Last Active</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {users
                .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()))
                .map((u) => (
                  <tr key={u.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="w-4 h-4 accent-primary" />
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/users/${u.id}`} className="flex items-center gap-3 group">
                        <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                          {u.initials}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-on-surface text-[13px] group-hover:text-primary transition-colors truncate">{u.name}</div>
                          <div className="text-[12px] text-outline truncate">{u.email}</div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <StatusPill label={u.status} tone={statusTone[u.status] ?? "neutral"} />
                    </td>
                    <td className="px-4 py-3 text-[13px] text-on-surface-variant">{u.plan}</td>
                    <td className="px-4 py-3 w-40">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${u.usage}%` }} />
                        </div>
                        <span className="text-[11px] text-outline w-8">{u.usage}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-on-surface-variant">{u.lastActive}</td>
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
            <span>Showing 1-25 of 12,486 users</span>
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
