"use client";

import { useState } from "react";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";
import { Breadcrumb, StatusPill } from "@/components/admin";

const tabs = [
  { label: "All Activity", count: "2.8k" },
  { label: "Connections" },
  { label: "Authentication" },
  { label: "Publishing" },
  { label: "Errors", count: "12", tone: "error" as const },
];

const kpis = [
  { label: "Total Events", value: "2,842", delta: "+12%", tone: "success" as const },
  { label: "Successful", value: "2,788", delta: "98.1% Rate", tone: "success" as const },
  { label: "Warnings", value: "42", delta: "-4 this week" },
  { label: "Failed Events", value: "12", delta: "+2", tone: "error" as const },
];

type EventRow = {
  id: string;
  date: string;
  time: string;
  platform: string;
  icon: string;
  event: string;
  resource: string;
  status: "Failed" | "Successful" | "Warning";
  userInitials: string;
  user: string;
  detail?: {
    title: string;
    statusCode: string;
    retry: string;
    requestId: string;
    environment: string;
    payload: string;
  };
};

const events: EventRow[] = [
  {
    id: "evt-1",
    date: "Oct 24, 2023",
    time: "14:22:10 UTC",
    platform: "Webflow",
    icon: "web",
    event: "Publish Content",
    resource: 'CMS: "Why AI Matters"',
    status: "Failed",
    userInitials: "SM",
    user: "Scheduler",
    detail: {
      title: "Webflow Content Sync Failed",
      statusCode: "401 Unauthorized",
      retry: "3 of 3",
      requestId: "req_2841_99ax2",
      environment: "Production",
      payload: `{
  "error": "token_expired",
  "message": "The provided OAuth token has expired and could not be automatically refreshed.",
  "platform_ref": "wf_auth_882",
  "timestamp": "2023-10-24T14:22:10.452Z"
}`,
    },
  },
  {
    id: "evt-2",
    date: "Oct 24, 2023",
    time: "14:15:45 UTC",
    platform: "WordPress",
    icon: "language",
    event: "Auth Refresh",
    resource: "OAuth Token #921",
    status: "Successful",
    userInitials: "JD",
    user: "James D.",
  },
  {
    id: "evt-3",
    date: "Oct 24, 2023",
    time: "13:58:12 UTC",
    platform: "Shopify",
    icon: "storefront",
    event: "Bulk Upload",
    resource: "50 Products",
    status: "Warning",
    userInitials: "SM",
    user: "System",
  },
];

const statusTone: Record<EventRow["status"], "error" | "success" | "warning"> = {
  Failed: "error",
  Successful: "success",
  Warning: "warning",
};

export default function IntegrationHistoryPage() {
  const [tab, setTab] = useState(tabs[0].label);
  const [selected, setSelected] = useState<EventRow | null>(null);

  return (
    <AppShell eyebrow="Integrations" title="History">
      <div className="p-container-padding max-w-[1400px] mx-auto relative">
        <Breadcrumb items={[{ label: "Integrations", href: "/integrations" }, { label: "Integration History" }]} />

        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-6">Integration History</h1>

        <div className="border-b border-outline-variant mb-6 overflow-x-auto">
          <nav className="flex gap-8">
            {tabs.map((t) => (
              <button
                key={t.label}
                onClick={() => setTab(t.label)}
                className={`py-4 border-b-2 font-body-sm text-body-sm flex items-center gap-2 shrink-0 transition-colors ${
                  tab === t.label ? "border-primary text-primary font-medium" : "border-transparent text-on-surface-variant hover:text-on-surface font-medium"
                }`}
              >
                {t.label}
                {t.count && (
                  <span
                    className={`px-2 py-0.5 text-[10px] rounded-full ${
                      t.tone === "error" ? "bg-error/10 text-error" : "bg-primary text-on-primary"
                    }`}
                  >
                    {t.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {kpis.map((k) => (
            <div key={k.label} className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-1">
              <span className="text-on-surface-variant text-label-sm">{k.label}</span>
              <div className="flex items-baseline gap-2">
                <span className={`text-3xl font-bold ${k.tone === "error" ? "text-error" : "text-on-surface"}`}>{k.value}</span>
                <span className={`text-xs font-medium ${k.tone === "success" ? "text-success" : k.tone === "error" ? "text-error" : "text-on-surface-variant"}`}>
                  {k.delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm flex flex-wrap items-center gap-3 mb-6">
          <div className="flex-1 min-w-[200px] relative">
            <Icon name="search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              placeholder="Search Request ID or User..."
              className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-body-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <select className="bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 text-sm font-medium text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none">
              <option>Platform: All</option>
              <option>Webflow</option>
              <option>WordPress</option>
              <option>Shopify</option>
            </select>
            <select className="bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 text-sm font-medium text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none">
              <option>Status: All</option>
              <option>Success</option>
              <option>Warning</option>
              <option>Error</option>
            </select>
            <button className="bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-container transition-colors flex items-center gap-2">
              <Icon name="calendar_today" size={18} />
              Last 7 Days
            </button>
            <button className="bg-surface-container-lowest border border-outline-variant rounded-lg p-2 text-on-surface-variant hover:bg-surface-container transition-colors">
              <Icon name="filter_list" size={18} />
            </button>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low border-b border-outline-variant">
                <tr className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">
                  <th className="px-6 py-4">Timestamp</th>
                  <th className="px-6 py-4">Platform</th>
                  <th className="px-6 py-4">Event</th>
                  <th className="px-6 py-4">Resource</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Performed By</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {events.map((e) => (
                  <tr
                    key={e.id}
                    onClick={() => e.detail && setSelected(e)}
                    className={`transition-colors ${e.detail ? "cursor-pointer hover:bg-primary/5" : "hover:bg-surface-container-low/50"}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-on-surface">{e.date}</span>
                        <span className="text-xs text-on-surface-variant">{e.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-on-background flex items-center justify-center">
                          <Icon name={e.icon} size={14} className="text-white" />
                        </div>
                        <span className="text-sm text-on-surface">{e.platform}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-on-surface font-medium">{e.event}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-on-surface-variant">{e.resource}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusPill label={e.status} tone={statusTone[e.status]} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-[10px] font-bold">
                          {e.userInitials}
                        </div>
                        <span className="text-sm text-on-surface">{e.user}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="p-1 hover:bg-surface-container rounded text-on-surface-variant">
                        <Icon name="more_vert" size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-outline-variant flex items-center justify-between">
            <span className="text-xs text-on-surface-variant font-medium">Showing 1-15 of 2,842 events</span>
            <div className="flex gap-2">
              <button className="p-2 border border-outline-variant rounded hover:bg-surface-container disabled:opacity-50" disabled>
                <Icon name="chevron_left" size={18} />
              </button>
              <button className="p-2 border border-outline-variant rounded hover:bg-surface-container">
                <Icon name="chevron_right" size={18} />
              </button>
            </div>
          </div>
        </div>

        {selected?.detail && (
          <>
            <div className="fixed inset-0 bg-on-surface/20 z-40" onClick={() => setSelected(null)} />
            <div className="fixed right-0 top-0 bottom-0 w-full sm:w-[400px] bg-surface-container-lowest border-l border-outline-variant shadow-2xl z-50 flex flex-col">
              <div className="p-6 border-b border-outline-variant flex items-center justify-between">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Event Details</h3>
                <button className="p-2 hover:bg-surface-container rounded-lg transition-colors" onClick={() => setSelected(null)}>
                  <Icon name="close" size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                <section className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center text-error">
                      <Icon name="error" size={28} />
                    </div>
                    <div>
                      <p className="text-body-sm font-semibold text-on-surface">{selected.detail.title}</p>
                      <p className="text-xs text-on-surface-variant">
                        {selected.date} · {selected.time}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-outline-variant">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Status Code</p>
                      <p className="text-sm font-medium text-error">{selected.detail.statusCode}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Retry Attempt</p>
                      <p className="text-sm font-medium text-on-surface">{selected.detail.retry}</p>
                    </div>
                  </div>
                </section>
                <section className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-on-surface-variant uppercase mb-3">Identity &amp; Tracking</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-on-surface-variant">User</span>
                        <span className="text-sm font-medium text-on-surface">{selected.user}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-on-surface-variant">Request ID</span>
                        <span className="text-sm font-mono bg-surface-container px-2 py-1 rounded text-primary">{selected.detail.requestId}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-on-surface-variant">Environment</span>
                        <span className="text-xs px-2 py-0.5 bg-secondary/10 text-secondary rounded-full">{selected.detail.environment}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-on-surface-variant uppercase mb-3">Error Payload</h4>
                    <div className="bg-on-background text-[#E2E8F0] p-4 rounded-lg font-mono text-[12px] leading-relaxed">
                      <pre className="whitespace-pre-wrap">{selected.detail.payload}</pre>
                    </div>
                  </div>
                </section>
                <div className="pt-4 flex flex-col gap-3">
                  <button className="w-full py-3 bg-primary text-on-primary rounded-lg font-body-sm text-body-sm hover:bg-primary-container transition-all active:scale-95">
                    Manual Retry Sync
                  </button>
                  <button className="w-full py-3 border border-outline-variant text-on-surface rounded-lg font-body-sm text-body-sm hover:bg-surface-container transition-all">
                    Reconnect Integration
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </AppShell>
  );
}
