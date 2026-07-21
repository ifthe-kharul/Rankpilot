"use client";

import { use, useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { Breadcrumb, DetailTabs, StatCard, StatusPill } from "@/components/admin";
import { CreditAdjustmentModal } from "@/components/admin/CreditAdjustmentModal";

const kpis = [
  { icon: "groups", label: "Members", value: "12" },
  { icon: "rocket_launch", label: "Active Projects", value: "46" },
  { icon: "description", label: "Documents", value: "1,240" },
  { icon: "account_balance_wallet", label: "Credits Used (Mo)", value: "18,500", tone: "primary" as const },
  { icon: "storage", label: "Storage", value: "4.2GB" },
  { icon: "smart_toy", label: "AI Provider Cost", value: "$428.50" },
];

const limits = [
  { label: "Users", used: 12, max: 25, pct: 48, tag: "Inherited" },
  { label: "Projects", used: 46, max: 100, pct: 46, tag: "Workspace Override" },
  { label: "Storage", used: "4.2GB", max: "10GB", pct: 42, tag: "Inherited" },
];

const toolUsage = [
  { name: "Content Creator", runs: 8450 },
  { name: "Writing Tools", runs: 5200 },
  { name: "Marketing Tools", runs: 3120 },
  { name: "SEO / AEO / GEO", runs: 1730 },
];

const projects = [
  { name: "Q3 Marketing Campaign", type: "Content", status: "Active", updated: "2 hrs ago" },
  { name: "Product Launch SEO", type: "SEO", status: "Active", updated: "5 hrs ago" },
  { name: "Blog Rewrite Batch", type: "Writing", status: "Paused", updated: "1 day ago" },
];

const overrides = ["Advanced Analytics", "Custom LLM Routing", "API Access (High Rate)"];

export default function WorkspaceDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [creditModalOpen, setCreditModalOpen] = useState(false);

  return (
    <AdminShell eyebrow="Admin Console" title="Workspace Details">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <Breadcrumb items={[{ label: "Workspaces", href: "/admin/workspaces" }, { label: "Rankpilot Media" }]} />

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-bold text-lg shrink-0">
                R
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface">Rankpilot Media</h1>
                  <StatusPill label="Active" tone="success" />
                </div>
                <p className="text-on-surface-variant text-[13px] mt-1">
                  ID: {id} <span className="mx-1.5 text-outline">•</span>
                  Owner:{" "}
                  <Link href="/admin/users/usr_8K4R92" className="text-primary hover:underline">
                    Ariful Islam
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => setCreditModalOpen(true)} className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface hover:bg-surface-container transition-colors">
                <Icon name="account_balance_wallet" size={18} />
                Adjust Credits
              </button>
              <Link href="/admin/plans/standard" className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface hover:bg-surface-container transition-colors">
                <Icon name="payments" size={18} />
                Change Plan
              </Link>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-[13px] font-bold hover:bg-primary-container transition-colors">
                <Icon name="admin_panel_settings" size={18} />
                Impersonate Workspace
              </button>
              <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
                <Icon name="more_vert" size={18} />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[12px] text-on-surface-variant pt-4 border-t border-outline-variant">
            <span>Plan <strong className="text-on-surface">Premium Plan</strong></span>
            <span>Created <strong className="text-on-surface">Jan 18, 2026</strong></span>
            <span>Members <strong className="text-on-surface">12</strong></span>
            <span>Projects <strong className="text-on-surface">46</strong></span>
            <span>Credits Remaining <strong className="text-on-surface">64,200</strong></span>
          </div>
        </div>

        <DetailTabs tabs={["Overview", "Members", "Projects", "Usage", "Billing", "Features", "Integrations", "Security", "Audit"]} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {kpis.map((k) => (
            <StatCard key={k.label} {...k} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Current Plan &amp; Limits</h3>
                <a href="#" className="text-primary text-[12px] font-medium hover:underline">Manage Limits</a>
              </div>
              <div className="space-y-4">
                {limits.map((l) => (
                  <div key={l.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[13px] font-medium text-on-surface flex items-center gap-2">
                        {l.label}
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-surface-container text-outline">{l.tag}</span>
                      </span>
                      <span className="text-[12px] text-on-surface-variant">
                        {l.used} / {l.max}
                      </span>
                    </div>
                    <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${l.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Tool Usage (Last 30 Days)</h3>
              <div className="space-y-3">
                {toolUsage.map((t) => {
                  const max = toolUsage[0].runs;
                  return (
                    <div key={t.name}>
                      <div className="flex justify-between text-[13px] mb-1">
                        <span className="text-on-surface-variant">{t.name}</span>
                        <span className="font-semibold text-on-surface">{t.runs.toLocaleString()} runs</span>
                      </div>
                      <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: `${(t.runs / max) * 100}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Projects</h3>
                <a href="#" className="text-primary text-[12px] font-medium hover:underline">View All</a>
              </div>
              <div className="divide-y divide-outline-variant">
                {projects.map((p) => (
                  <div key={p.name} className="py-3 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-medium text-on-surface text-[13px] truncate">{p.name}</p>
                      <p className="text-[11px] text-outline">{p.type} • {p.updated}</p>
                    </div>
                    <StatusPill label={p.status} tone={p.status === "Active" ? "success" : "warning"} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Feature Overrides</h3>
                <button className="text-outline hover:text-primary transition-colors">
                  <Icon name="edit" size={18} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {overrides.map((o) => (
                  <span key={o} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-success/10 text-success rounded-full text-[12px] font-medium">
                    <Icon name="check_circle" size={14} />
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CreditAdjustmentModal
        open={creditModalOpen}
        onClose={() => setCreditModalOpen(false)}
        target={{ type: "Workspace", name: "Rankpilot Media" }}
        currentBalance={64200}
      />
    </AdminShell>
  );
}
