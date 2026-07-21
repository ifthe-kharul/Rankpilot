"use client";

import { useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";

const ranges = ["Last 24 Hours", "7 Days", "30 Days"];

const kpis = [
  { icon: "person", iconClass: "bg-primary/10 text-primary", label: "Active Users", value: "12,450", delta: "+5.2%", bar: "bg-primary" },
  { icon: "person_add", iconClass: "bg-secondary-container/30 text-secondary", label: "New Users", value: "842", delta: "+12.1%", bar: "bg-secondary" },
  { icon: "apps", iconClass: "bg-tertiary-fixed/30 text-tertiary", label: "Active Workspaces", value: "3,120", bar: "bg-tertiary" },
  { icon: "trending_up", iconClass: "bg-secondary-container/30 text-secondary", label: "Subscriptions MRR", value: "$142,500", bar: "bg-secondary" },
];

const chartBars = [
  { revenue: 80, cost: 15 },
  { revenue: 70, cost: 20 },
  { revenue: 90, cost: 10 },
  { revenue: 75, cost: 25 },
  { revenue: 95, cost: 12 },
  { revenue: 85, cost: 18 },
];

const healthPanels = [
  { label: "Credits Consumed", icon: "bolt", value: "1.2M", pct: 78, note: "78% of monthly allocation", tone: "primary" },
  { label: "AI Provider Cost", icon: "cloud", value: "$14,200", pct: 42, note: "Projection: $61k (EOM)", tone: "secondary" },
];

export default function AdminConsolePage() {
  const [range, setRange] = useState("7 Days");

  return (
    <AdminShell eyebrow="Admin Console" title="System Overview" credits={2420} notifications={3}>
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">System Overview</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Real-time infrastructure and user analytics across all clusters.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-surface-container rounded-lg p-1 border border-outline-variant">
              {ranges.map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  className={`px-4 py-1.5 font-label-md text-label-md rounded-md transition-all ${
                    range === r ? "bg-white shadow-sm text-primary font-semibold" : "hover:bg-white/60"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
            <Link
              href="/admin/logs"
              className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors"
            >
              <Icon name="receipt_long" size={18} />
              View Audit Log
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((k) => (
            <div key={k.label} className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg ${k.iconClass}`}>
                  <Icon name={k.icon} />
                </div>
                {k.delta && (
                  <span className="font-label-sm text-label-sm text-on-secondary-container bg-secondary-container/30 px-2 py-0.5 rounded-full">
                    {k.delta}
                  </span>
                )}
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{k.label}</p>
              <h3 className="font-display-lg text-display-lg text-on-surface mt-1">{k.value}</h3>
              <div className={`absolute bottom-0 left-0 w-full h-1 ${k.bar}`} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 p-6 rounded-xl bg-surface-container-lowest border border-outline-variant flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-headline-sm text-headline-sm text-on-surface">Revenue vs AI Provider Costs</h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span className="font-label-sm text-label-sm">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error" />
                  <span className="font-label-sm text-label-sm">Costs</span>
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-[250px] bg-surface-container-low rounded-lg relative overflow-hidden flex items-end px-4 py-8 gap-3">
              {chartBars.map((bar, i) => (
                <div key={i} className="w-full bg-primary/20 rounded-t relative" style={{ height: `${bar.revenue}%` }}>
                  <div className="absolute bottom-0 left-0 w-full bg-primary rounded-t" style={{ height: "85%" }} />
                  <div
                    className="absolute bottom-0 left-0 w-full bg-error rounded-t opacity-80"
                    style={{ height: `${bar.cost}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {healthPanels.map((p) => (
              <div
                key={p.label}
                className={`p-5 rounded-xl bg-surface-container-lowest border border-outline-variant border-l-4 ${
                  p.tone === "primary" ? "border-l-primary" : "border-l-secondary"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-md text-label-md text-on-surface-variant">{p.label}</span>
                  <Icon name={p.icon} className={p.tone === "primary" ? "text-primary" : "text-secondary"} size={18} />
                </div>
                <h4 className="font-headline-md text-headline-md">{p.value}</h4>
                <div className="mt-4 w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${p.tone === "primary" ? "bg-primary" : "bg-secondary"}`}
                    style={{ width: `${p.pct}%` }}
                  />
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">{p.note}</p>
              </div>
            ))}

            <Link
              href="/admin/jobs?status=failed"
              className="block p-5 rounded-xl bg-error-container/10 border border-outline-variant border-l-4 border-l-error hover:border-error transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-md text-label-md text-error font-semibold">Failed Jobs (24h)</span>
                <Icon name="warning" className="text-error" size={18} />
              </div>
              <h4 className="font-headline-md text-headline-md text-error">24</h4>
              <div className="mt-4 flex gap-1">
                {[1, 1, 0.3, 1, 0.3, 1].map((opacity, i) => (
                  <div key={i} className="h-1 flex-1 bg-error rounded-full" style={{ opacity }} />
                ))}
              </div>
              <p className="text-[11px] text-error font-medium mt-2">View details →</p>
            </Link>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
