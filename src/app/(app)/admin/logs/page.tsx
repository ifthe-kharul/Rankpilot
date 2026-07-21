"use client";

import { useState } from "react";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { AdminPageHeader, StatCard, StatusPill } from "@/components/admin";
import { LogDetailsDrawer, type LogEvent } from "@/components/admin/LogDetailsDrawer";

const kpis = [
  { icon: "error", label: "Total Errors Today", value: "2,418", tone: "error" as const },
  { icon: "report", label: "Critical Errors", value: "18", tone: "error" as const },
  { icon: "shield", label: "Security Events", value: "42", tone: "warning" as const },
  { icon: "webhook", label: "Failed Webhooks", value: "86", tone: "warning" as const },
  { icon: "cloud_off", label: "Provider Errors", value: "1,826" },
  { icon: "admin_panel_settings", label: "Admin Actions", value: "324", tone: "primary" as const },
];

const tabs = ["Audit Logs", "System Logs", "Error Logs", "Security Logs", "Provider Logs", "Webhook Logs", "Authentication Logs"];

const logRows: { id: string; action: string; actor: string; actorRole?: string; resource: string; result: "Success" | "Failed" | "Pending"; event: LogEvent }[] = [
  {
    id: "log_1",
    action: "User Suspended",
    actor: "Sarah Chen",
    actorRole: "Admin",
    resource: "alex@example.com",
    result: "Success",
    event: {
      id: "LOG_88201",
      title: "User Suspended",
      date: "Oct 24, 2024, 14:40 UTC",
      actor: "Sarah Chen",
      actorRole: "Workspace Admin",
      resource: "User Account",
      resourceId: "usr_2X7L18",
      result: "Success",
      ip: "192.168.***.***",
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
      environment: "Production",
      requestId: "req_88K2A1",
      traceId: "tr_44F9Q2",
      related: [{ label: "User: Mike Ross", href: "/admin/users/usr_2X7L18" }],
      timeline: [
        { label: "Suspension Requested", time: "14:39:50", state: "past" },
        { label: "User Suspended", time: "14:40:02", state: "active" },
        { label: "Notification Sent", time: "pending", state: "future" },
      ],
    },
  },
  {
    id: "log_2",
    action: "Credits Adjusted",
    actor: "System",
    resource: "Workspace Alpha (ID: WS_92831)",
    result: "Success",
    event: {
      id: "LOG_88291",
      title: "Credits Adjusted",
      date: "Oct 24, 2024, 14:15 UTC",
      actor: "Sarah Chen",
      actorRole: "Workspace Admin",
      resource: "Workspace Credits",
      resourceId: "WS_92831",
      workspaceName: "Workspace Alpha",
      workspaceHref: "/admin/workspaces/ws_8f92j3k1",
      result: "Success",
      previousValue: "1,200 Credits",
      newValue: "1,700 Credits",
      changeDelta: "+500",
      reason: "Manual adjustment due to subscription upgrade sync delay.",
      ip: "192.168.***.***",
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      environment: "Production",
      requestId: "req_92K4F1X",
      traceId: "tr_827F3Q",
      related: [
        { label: "User: Sarah Chen", href: "/admin/users/usr_9T1K55" },
        { label: "Workspace: Workspace Alpha", href: "/admin/workspaces/ws_8f92j3k1" },
        { label: "Credit TXN: TXN_88291", href: "/admin/credits" },
      ],
      timeline: [
        { label: "Subscription Upgrade Started", time: "14:10:05", state: "past" },
        { label: "Credits Adjusted", time: "14:15:22", state: "active" },
        { label: "Notification Sent", time: "pending", state: "future" },
      ],
    },
  },
  {
    id: "log_3",
    action: "Provider Disabled",
    actor: "Mike Ross",
    actorRole: "Admin",
    resource: "Anthropic Claude 3",
    result: "Success",
    event: {
      id: "LOG_88305",
      title: "Provider Disabled",
      date: "Oct 24, 2024, 13:58 UTC",
      actor: "Mike Ross",
      actorRole: "Super Admin",
      resource: "AI Provider",
      resourceId: "anthropic",
      result: "Success",
      ip: "10.0.***.***",
      userAgent: "Mozilla/5.0 (X11; Linux x86_64)",
      environment: "Production",
      requestId: "req_71B8C3",
      traceId: "tr_10D2E5",
      related: [{ label: "Provider: Anthropic", href: "/admin/providers/anthropic" }],
      timeline: [
        { label: "Health Check Failed", time: "13:57:40", state: "past" },
        { label: "Provider Disabled", time: "13:58:02", state: "active" },
        { label: "Failover Activated", time: "pending", state: "future" },
      ],
    },
  },
];

const resultTone: Record<string, "success" | "error" | "warning"> = { Success: "success", Failed: "error", Pending: "warning" };

export default function AdminLogsPage() {
  const [tab, setTab] = useState(tabs[0]);
  const [liveTail, setLiveTail] = useState(false);
  const [selected, setSelected] = useState<LogEvent | null>(null);

  return (
    <AdminShell eyebrow="Admin Console" title="Logs">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <AdminPageHeader
          title="Logs"
          subtitle="Investigate audit, system, security, provider and webhook events."
          actions={
            <>
              <label className="flex items-center gap-2 px-3 py-2 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface-variant cursor-pointer">
                <input type="checkbox" checked={liveTail} onChange={(e) => setLiveTail(e.target.checked)} className="w-4 h-4 accent-primary" />
                Live Tail
              </label>
              <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
                <Icon name="refresh" size={18} />
              </button>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
                Create Saved View
              </button>
              <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-body-sm text-body-sm font-semibold hover:bg-primary-container transition-colors">
                Export Logs
              </button>
            </>
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
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
                className={`pb-3 whitespace-nowrap font-body-sm text-body-sm transition-colors border-b-2 -mb-px ${
                  tab === t ? "font-bold text-primary border-primary" : "text-on-surface-variant border-transparent hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </nav>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 mb-4 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Icon name="search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input placeholder="Search message, resource, user or ID" className="w-full pl-9 pr-3 py-2 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
          </div>
          {["Date & Time", "Severity"].map((f) => (
            <button key={f} className="flex items-center gap-2 px-3 py-2 bg-white border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface-variant hover:border-primary transition-colors">
              {f}
              <Icon name="arrow_drop_down" size={18} />
            </button>
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
                <th className="px-4 py-3">Timestamp</th>
                <th className="px-4 py-3">Action</th>
                <th className="px-4 py-3">Actor</th>
                <th className="px-4 py-3">Resource</th>
                <th className="px-4 py-3">Result</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {logRows.map((row) => (
                <tr key={row.id} onClick={() => setSelected(row.event)} className="hover:bg-surface-container-low/50 transition-colors cursor-pointer">
                  <td className="px-4 py-3 text-[12px] text-on-surface-variant">{row.event.date}</td>
                  <td className="px-4 py-3 font-semibold text-on-surface text-[13px]">{row.action}</td>
                  <td className="px-4 py-3 text-[13px]">
                    {row.actor === "System" ? (
                      <span className="italic text-outline">System</span>
                    ) : (
                      <span className="text-on-surface-variant">
                        {row.actor} <span className="text-[10px] font-bold uppercase text-primary bg-primary/10 px-1.5 py-0.5 rounded ml-1">{row.actorRole}</span>
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-[13px] text-on-surface-variant">{row.resource}</td>
                  <td className="px-4 py-3">
                    <StatusPill label={row.result} tone={resultTone[row.result]} />
                  </td>
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
            <span>Showing 1 to {logRows.length} of 2,418 entries</span>
          </div>
        </div>
      </div>

      <LogDetailsDrawer event={selected} onClose={() => setSelected(null)} />
    </AdminShell>
  );
}
