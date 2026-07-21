"use client";

import { use } from "react";
import Link from "next/link";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";
import { Breadcrumb, DetailTabs } from "@/components/admin";

const kpis = [
  { label: "Published Posts", value: "1,284", note: "+12% this month", tone: "success" as const, icon: "trending_up" },
  { label: "Scheduled", value: "42", note: "Next: Tomorrow, 9:00 AM" },
  { label: "Drafts", value: "156", note: "Requires review", tone: "primary" as const },
  { label: "Failures", value: "0", note: "All systems normal", tone: "success" as const },
  { label: "Avg Time", value: "1.4s", note: "API latency" },
];

const health = ["REST API Access", "OAuth2 Token", "Webhook Payload", "SSL Certificate"];

const capabilities = [
  { icon: "featured_video", title: "Featured Images", desc: "Auto-mapping enabled for primary generated media." },
  { icon: "category", title: "Taxonomy Mapping", desc: "Syncs Categories and Tags automatically." },
  { icon: "link", title: "Permalink Control", desc: "Custom slug generation based on SEO scores." },
  { icon: "shield_lock", title: "Yoast SEO Sync", desc: "Meta title and descriptions write-back enabled." },
];

const activity = [
  { icon: "article", iconClass: "text-primary", action: "Published Post", target: "10 Ways to Scale AI Writing...", user: "Automated Scheduler", time: "2 mins ago" },
  { icon: "sync", iconClass: "text-primary", action: "Taxonomy Sync", target: "New Tags Created (5)", user: "System Process", time: "42 mins ago" },
  { icon: "upload_file", iconClass: "text-warning", action: "Media Upload", target: "hero_banner_01.png", user: "John Doe", time: "2 hours ago" },
  { icon: "settings_suggest", iconClass: "text-on-surface-variant", action: "Config Updated", target: "Updated Default Author", user: "John Doe", time: "Yesterday" },
];

export default function IntegrationDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const label = id
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <AppShell eyebrow="Integrations" title={label}>
      <div className="p-container-padding max-w-[1400px] mx-auto space-y-8">
        <Breadcrumb
          items={[
            { label: "Integrations", href: "/integrations" },
            { label: "WordPress", href: "/integrations/wordpress" },
            { label: "rankpilot.com" },
          ]}
        />

        <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-surface-container-lowest border border-outline-variant rounded-xl flex items-center justify-center shadow-sm">
              <Icon name="language" className="text-primary" size={32} />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="font-headline-lg text-headline-lg">rankpilot.com</h1>
                <span className="bg-success/10 text-success text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                  Connected
                </span>
                <span className="bg-primary/10 text-primary text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border border-primary/20">
                  Default Site
                </span>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant text-label-sm">
                <span className="flex items-center gap-1">
                  <Icon name="tag" size={14} />
                  v6.4.2
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="sync" size={14} />
                  Last checked: 4 mins ago
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-outline-variant hover:bg-surface-container rounded-lg font-body-sm text-body-sm flex items-center gap-2 transition-all active:scale-95">
              <Icon name="analytics" size={18} />
              Test Connection
            </button>
            <button className="px-4 py-2 border border-outline-variant hover:bg-surface-container rounded-lg font-body-sm text-body-sm flex items-center gap-2 transition-all active:scale-95">
              <Icon name="publish" size={18} />
              Publish Test Draft
            </button>
            <button className="px-4 py-2 bg-primary text-on-primary hover:bg-primary-container rounded-lg font-body-sm text-body-sm flex items-center gap-2 transition-all active:scale-95 shadow-md">
              <Icon name="edit" size={18} />
              Edit
            </button>
          </div>
        </section>

        <DetailTabs tabs={["Overview", "Permissions", "Publishing Defaults", "Activity", "Errors", "Security"]} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl">
              <p className="text-on-surface-variant text-label-sm">{k.label}</p>
              <h3 className="text-2xl font-bold mt-1 text-on-surface">{k.value}</h3>
              <div className={`mt-2 text-xs flex items-center gap-1 font-medium ${k.tone === "success" ? "text-success" : k.tone === "primary" ? "text-primary" : "text-on-surface-variant"}`}>
                {k.icon && <Icon name={k.icon} size={14} />}
                {k.note}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-sm text-headline-sm">Connection Health</h2>
              <Icon name="health_metrics" className="text-primary" />
            </div>
            <div className="space-y-4">
              {health.map((h) => (
                <div key={h} className="flex items-center justify-between p-3 bg-surface rounded-lg border border-outline-variant">
                  <span className="font-body-sm text-body-sm">{h}</span>
                  <Icon name="check_circle" className="text-success" size={20} />
                </div>
              ))}
            </div>
            <button className="mt-auto w-full py-2 bg-surface-container hover:bg-surface-container-highest transition-colors rounded-lg font-body-sm text-body-sm text-primary">
              Re-authenticate Site
            </button>
          </div>

          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-outline-variant flex items-center justify-between">
              <h2 className="font-headline-sm text-headline-sm">Publishing Capabilities</h2>
              <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded">SUPPORTED</span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {capabilities.map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                    <Icon name={c.icon} className="text-on-surface-variant" />
                  </div>
                  <div>
                    <p className="font-label-md">{c.title}</p>
                    <p className="text-xs text-on-surface-variant">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto p-6 bg-surface/50 border-t border-outline-variant flex items-center justify-between">
              <span className="text-xs text-on-surface-variant">Plugin conflict check: No issues detected.</span>
              <button className="text-xs font-bold text-primary hover:underline">View All Hooks</button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline-sm text-headline-sm">Default Configuration</h2>
              <button className="text-primary font-body-sm text-body-sm">Edit Defaults</button>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">Application Username</label>
                <div className="p-3 bg-surface rounded-lg border border-outline-variant font-mono text-sm">rankpilot_bot_wp</div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">Application Password</label>
                <div className="p-3 bg-surface rounded-lg border border-outline-variant font-mono text-sm flex justify-between items-center">
                  <span>•••• •••• •••• ••••</span>
                  <Icon name="visibility" className="text-on-surface-variant cursor-pointer" size={18} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">Default Author</label>
                  <p className="font-label-md">Admin (ID: 1)</p>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">Post Status</label>
                  <p className="font-label-md">Pending Review</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-outline-variant flex items-center justify-between">
              <h2 className="font-headline-sm text-headline-sm">Security Summary</h2>
              <div className="bg-primary/5 p-2 rounded-lg">
                <Icon name="security" className="text-primary" />
              </div>
            </div>
            <div className="p-6 flex-1">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-container" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8" />
                    <circle
                      className="text-primary"
                      cx="48"
                      cy="48"
                      fill="transparent"
                      r="40"
                      stroke="currentColor"
                      strokeDasharray="251.2"
                      strokeDashoffset="25.12"
                      strokeWidth="8"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold">90%</span>
                    <span className="text-[8px] uppercase font-bold text-on-surface-variant">Score</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <p className="font-label-md">Encryption Level: AES-256-GCM</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Your credentials are encrypted at rest and during transit. We use dedicated application passwords to minimize risk to
                    your main WordPress login.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs">
                  <Icon name="verified_user" className="text-success" size={18} />
                  <span>No IP whitelisting required (using Global Mesh)</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Icon name="warning" className="text-warning" size={18} />
                  <span className="text-on-surface-variant">
                    XML-RPC is enabled but REST API is preferred. <button className="text-primary hover:underline">Fix now.</button>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
            <div className="p-6 border-b border-outline-variant flex items-center justify-between">
              <h2 className="font-headline-sm text-headline-sm">Recent Activity</h2>
              <Link href="/integrations/history" className="text-primary font-body-sm text-body-sm flex items-center gap-1">
                View Full Log
                <Icon name="open_in_new" size={16} />
              </Link>
            </div>
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low">
                <tr className="text-[11px] font-bold text-outline uppercase">
                  <th className="px-6 py-3 border-b border-outline-variant">Action</th>
                  <th className="px-6 py-3 border-b border-outline-variant">Target</th>
                  <th className="px-6 py-3 border-b border-outline-variant">User</th>
                  <th className="px-6 py-3 border-b border-outline-variant">Time</th>
                  <th className="px-6 py-3 border-b border-outline-variant">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {activity.map((a) => (
                  <tr key={a.action + a.time} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Icon name={a.icon} className={a.iconClass} />
                        <span className="font-label-md">{a.action}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-body-sm font-medium">{a.target}</td>
                    <td className="px-6 py-4 text-body-sm text-on-surface-variant">{a.user}</td>
                    <td className="px-6 py-4 text-body-sm text-on-surface-variant">{a.time}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-success/10 text-success text-[10px] font-bold rounded">SUCCESS</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
