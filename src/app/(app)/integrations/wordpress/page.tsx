"use client";

import Link from "next/link";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";
import { Breadcrumb, DetailTabs, StatCard, StatusPill } from "@/components/admin";

const sites = [
  {
    id: "wordpress-rankpilot",
    name: "Rankpilot HQ",
    domain: "rankpilot.com",
    tag: "Default",
    status: "Healthy" as const,
    version: "6.4.2",
    method: "REST API",
    published: 512,
    lastUsed: "2h ago",
    lastNote: "Healthy",
  },
  {
    id: "wordpress-editorialge",
    name: "Editorialge",
    domain: "editorialge.com",
    status: "Healthy" as const,
    version: "6.3.1",
    method: "Application Pass",
    published: 248,
    lastUsed: "1d ago",
    lastNote: "Healthy",
  },
  {
    id: "wordpress-bn-editorial",
    name: "BN Editorial",
    domain: "bn.editorialge.com",
    status: "Auth Required" as const,
    version: "6.4.1",
    method: "Application Pass",
    published: 82,
    lastUsed: "Failed 1h ago",
    lastNote: "401 Unauthorized",
    warning: true,
  },
  {
    id: "wordpress-imagineview",
    name: "Imagine View",
    domain: "imagineview.art",
    status: "Healthy" as const,
    version: "6.2.0",
    method: "REST API",
    published: 0,
    lastUsed: "Connected 3d ago",
    lastNote: "Healthy",
  },
];

const statusTone: Record<string, "success" | "error"> = {
  Healthy: "success",
  "Auth Required": "error",
};

export default function WordPressSitesPage() {
  return (
    <AppShell eyebrow="Integrations" title="WordPress">
      <div className="p-container-padding max-w-[1400px] mx-auto">
        <Breadcrumb items={[{ label: "Integrations", href: "/integrations" }, { label: "WordPress" }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">WordPress Integration</h1>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Manage your connected WordPress domains and automated publishing settings.
            </p>
          </div>
          <Link
            href="/integrations/wordpress/connect"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-body-sm text-body-sm font-semibold flex items-center gap-2 hover:bg-primary-container transition-all active:scale-95 shadow-sm"
          >
            <Icon name="add" size={18} />
            Connect New Site
          </Link>
        </div>

        <DetailTabs tabs={["Overview", "Connected Sites", "Publishing Defaults", "Activity"]} defaultTab="Connected Sites" />

        <div className="bg-error/10 border border-error/20 rounded-xl p-4 mb-8 flex items-start gap-4">
          <Icon name="warning" className="text-error" size={20} />
          <div className="flex-1">
            <p className="text-on-surface font-body-sm text-body-sm font-semibold">Authentication Attention Required</p>
            <p className="text-on-surface-variant text-body-sm mt-0.5">
              Authentication for <span className="font-mono font-medium">bn.editorialge.com</span> requires attention. Re-authenticate to
              ensure scheduled posts are published.
            </p>
          </div>
          <button className="text-error font-semibold text-body-sm hover:underline shrink-0">Fix Connection</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon="language" label="Connected" value="4" tone="primary" />
          <StatCard icon="check_circle" label="Healthy" value="3" tone="success" />
          <StatCard icon="error_outline" label="Alerts" value="1" tone="error" />
          <StatCard icon="publish" label="Lifetime Posts" value="842" />
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Connected Domains</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Icon name="search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                <input
                  placeholder="Filter sites..."
                  className="pl-10 pr-4 py-2 border border-outline-variant rounded-lg text-[13px] focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all w-full md:w-64"
                />
              </div>
              <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
                <Icon name="filter_list" size={18} />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant text-[11px] font-bold text-outline uppercase">
                  <th className="px-6 py-4">Site</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">WP Version</th>
                  <th className="px-6 py-4">Method</th>
                  <th className="px-6 py-4 text-center">Published</th>
                  <th className="px-6 py-4">Last Used</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {sites.map((s) => (
                  <tr key={s.id} className={`hover:bg-surface-container-low/50 transition-colors ${s.warning ? "bg-error/5" : ""}`}>
                    <td className="px-6 py-4">
                      <Link href={`/integrations/details/${s.id}`} className="flex items-center gap-3 group">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${s.warning ? "bg-error/10 text-error" : "bg-primary/10 text-primary"}`}>
                          <Icon name={s.warning ? "error" : "public"} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-on-surface group-hover:text-primary transition-colors">{s.name}</span>
                            {s.tag && <span className="px-1.5 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">{s.tag}</span>}
                          </div>
                          <div className="text-xs text-on-surface-variant font-mono">{s.domain}</div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <StatusPill label={s.status} tone={statusTone[s.status]} />
                    </td>
                    <td className="px-6 py-4 text-body-sm text-on-surface-variant">{s.version}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-surface-container px-2 py-1 rounded border border-outline-variant">{s.method}</span>
                    </td>
                    <td className="px-6 py-4 text-center text-body-sm font-semibold">{s.published}</td>
                    <td className="px-6 py-4">
                      <div className={`text-body-sm ${s.warning ? "text-error font-medium" : "text-on-surface"}`}>{s.lastUsed}</div>
                      <div className={`text-[11px] ${s.warning ? "text-error" : "text-on-surface-variant"}`}>{s.lastNote}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {s.warning ? (
                        <button className="bg-error text-white text-xs px-3 py-1.5 rounded-md hover:brightness-110 transition-colors">Reconnect</button>
                      ) : (
                        <Link href={`/integrations/details/${s.id}`} className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors inline-flex">
                          <Icon name="more_vert" size={18} />
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
            <span className="text-body-sm text-on-surface-variant">Showing 4 of 4 connected sites</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-outline-variant rounded text-body-sm disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-3 py-1 border border-outline-variant rounded text-body-sm disabled:opacity-50" disabled>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
