"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { AdminPageHeader, StatCard, StatusPill } from "@/components/admin";

const kpis = [
  { icon: "hourglass_empty", label: "Queued", value: "214" },
  { icon: "sync", label: "Running", value: "126", tone: "primary" as const },
  { icon: "check_circle", label: "Completed (Today)", value: "8,426", tone: "success" as const },
  { icon: "error", label: "Failed (24h)", value: "24", tone: "error" as const },
  { icon: "autorenew", label: "Retrying", value: "18", tone: "warning" as const },
  { icon: "timer", label: "Avg Duration", value: "48s" },
  { icon: "schedule", label: "Queue Delay", value: "12s" },
  { icon: "cancel", label: "Cancelled", value: "36" },
];

const jobs = [
  { id: "JOB-94821", type: "Content Generation", tool: "Content Creator", workspace: "Acme Corp", workspaceHref: "/admin/workspaces/ws_8f92j3k1", provider: "OpenAI GPT-4o", status: "Running", metric: "12 Credits · 42s", progress: 65 },
  { id: "JOB-94820", type: "Research", tool: "Research", workspace: "Alex Morgan", workspaceHref: "/admin/users/usr_5M9P44", provider: "Perplexity", status: "Completed", metric: "5 Credits · 1.2m", progress: 100 },
  { id: "JOB-94819", type: "WP Publishing", tool: "Integrations", workspace: "Global Tech", workspaceHref: "/admin/workspaces/ws_global_tech", provider: "WP Engine", status: "Failed", metric: "Timeout Error · 0 Credits · 5s", progress: 0 },
  { id: "JOB-94818", type: "File Processing", tool: "Knowledge Base", workspace: "Mike Ross", workspaceHref: "/admin/users/usr_2X7L18", provider: "Anthropic Claude 3.5", status: "Retrying", metric: "Attempt 2 of 3 · 8 Credits · 18s", progress: 40 },
];

const statusTone: Record<string, "primary" | "success" | "error" | "warning"> = {
  Running: "primary",
  Completed: "success",
  Failed: "error",
  Retrying: "warning",
};

const tabs = ["All", "Queued", "Running", "Completed", "Failed", "Retrying", "Cancelled"];

function JobsListInner() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("status") === "failed" ? "Failed" : "All";
  const [tab, setTab] = useState(initialTab);

  const filtered = tab === "All" ? jobs : jobs.filter((j) => j.status === tab);

  return (
    <div className="p-stack-lg max-w-[1400px] mx-auto">
      <AdminPageHeader
        title="Jobs"
        subtitle="Monitor generation, processing, research, export and publishing jobs."
        actions={
          <>
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
              <Icon name="refresh" size={18} />
              Refresh
            </button>
            <button className="px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
              Export Jobs
            </button>
            <button className="px-4 py-2 text-error font-body-sm text-body-sm font-medium hover:bg-error/5 rounded-lg transition-colors">
              Pause Queue
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-body-sm text-body-sm font-semibold hover:bg-primary-container transition-colors">
              <Icon name="replay" size={18} />
              Retry Failed Jobs
            </button>
          </>
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {kpis.map((k) => (
          <StatCard key={k.label} {...k} />
        ))}
      </div>

      <div className="border-b border-outline-variant mb-4 overflow-x-auto">
        <nav className="flex gap-6">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 whitespace-nowrap font-body-sm text-body-sm transition-colors border-b-2 -mb-px flex items-center gap-1.5 ${
                tab === t ? "font-bold text-primary border-primary" : "text-on-surface-variant border-transparent hover:text-primary"
              }`}
            >
              {t}
              {t === "Running" && <span className="bg-primary/10 text-primary text-[10px] font-bold px-1.5 rounded-full">126</span>}
              {t === "Failed" && <span className="bg-error/10 text-error text-[10px] font-bold px-1.5 rounded-full">24</span>}
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 mb-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <Icon name="search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
          <input placeholder="Filter by Job ID, User, or Workspace..." className="w-full pl-9 pr-3 py-2 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
        </div>
        {["Job Type: All", "Provider: All"].map((f) => (
          <button key={f} className="flex items-center gap-2 px-3 py-2 bg-white border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface-variant hover:border-primary transition-colors">
            {f}
            <Icon name="expand_more" size={16} />
          </button>
        ))}
        <label className="flex items-center gap-2 text-[13px] text-on-surface-variant">
          <input type="checkbox" className="w-4 h-4 accent-primary" />
          High Cost Only
        </label>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-surface-container-low text-[11px] font-bold text-outline uppercase">
            <tr>
              <th className="px-4 py-3 w-10">
                <input type="checkbox" className="w-4 h-4 accent-primary" />
              </th>
              <th className="px-4 py-3">Job ID</th>
              <th className="px-4 py-3">Type / Tool</th>
              <th className="px-4 py-3">Workspace</th>
              <th className="px-4 py-3">Provider / Model</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Progress / Metrics</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {filtered.map((j) => (
              <tr key={j.id} className="hover:bg-surface-container-low/50 transition-colors">
                <td className="px-4 py-3">
                  <input type="checkbox" className="w-4 h-4 accent-primary" />
                </td>
                <td className="px-4 py-3">
                  <Link href={`/admin/jobs/${j.id}`} className="font-mono text-[12px] text-primary hover:underline">
                    {j.id}
                  </Link>
                </td>
                <td className="px-4 py-3 text-[13px] text-on-surface-variant">
                  {j.type} <span className="text-outline">— {j.tool}</span>
                </td>
                <td className="px-4 py-3">
                  <Link href={j.workspaceHref} className="text-[13px] text-primary hover:underline">
                    {j.workspace}
                  </Link>
                </td>
                <td className="px-4 py-3 text-[13px] text-on-surface-variant">{j.provider}</td>
                <td className="px-4 py-3">
                  <StatusPill label={j.status} tone={statusTone[j.status]} />
                </td>
                <td className="px-4 py-3 w-56">
                  {j.status === "Running" || j.status === "Retrying" ? (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${j.progress}%` }} />
                      </div>
                      <span className="text-[11px] text-outline whitespace-nowrap">{j.metric}</span>
                    </div>
                  ) : (
                    <span className="text-[12px] text-on-surface-variant">{j.metric}</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-outline hover:text-primary transition-colors">
                    <Icon name="more_horiz" size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-4 py-3 border-t border-outline-variant text-[12px] text-on-surface-variant">
          <span>Showing 1 to {filtered.length} of 214 entries</span>
        </div>
      </div>
    </div>
  );
}

export default function AdminJobsPage() {
  return (
    <AdminShell eyebrow="Admin Console" title="Jobs">
      <Suspense fallback={null}>
        <JobsListInner />
      </Suspense>
    </AdminShell>
  );
}
