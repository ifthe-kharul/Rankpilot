"use client";

import { use, useState } from "react";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { Breadcrumb, DetailTabs, StatusPill } from "@/components/admin";

const models = [
  { alias: "GPT-4o", providerId: "gpt-4o-2024-05-13", tasks: ["Writing", "Chat"], costIn: "$5.00", costOut: "$15.00", multiplier: "1.5x", success: "99.8%", enabled: true },
  { alias: "GPT-4o Mini", providerId: "gpt-4o-mini", tasks: ["Writing", "Fast"], costIn: "$0.15", costOut: "$0.60", multiplier: "1.0x", success: "99.9%", enabled: true },
];

export default function ProviderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const name = id === "openai" ? "OpenAI" : id.charAt(0).toUpperCase() + id.slice(1);
  const [modelStates, setModelStates] = useState(models.map((m) => m.enabled));

  return (
    <AdminShell eyebrow="Admin Console" title="Provider Details">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <Breadcrumb items={[{ label: "Providers", href: "/admin/providers" }, { label: name }]} />

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Icon name="smart_toy" size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-headline-lg text-headline-lg text-on-surface">{name}</h1>
                <StatusPill label="Healthy" tone="success" />
                <StatusPill label="Enabled" tone="primary" />
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[12px] text-on-surface-variant">
                <span>8 Active Models</span>
                <span>99.2% Success Rate</span>
                <span>1.8s Average Latency</span>
                <span>$1,842 Cost Today</span>
                <span>Last Check: 2 minutes ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface hover:bg-surface-container transition-colors">
              <Icon name="network_check" size={18} />
              Test Connection
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-error/30 text-error rounded-lg text-[13px] font-medium hover:bg-error/5 transition-colors">
              Disable Provider
            </button>
            <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
              <Icon name="more_vert" size={18} />
            </button>
          </div>
        </div>

        <DetailTabs tabs={["Overview", "Credentials", "Models", "Routing", "Failover", "Rate Limits", "Usage", "Logs"]} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <Icon name="monitor_heart" className="text-primary mb-2" size={24} />
            <p className="text-2xl font-bold text-on-surface">99%</p>
            <p className="text-[11px] uppercase tracking-wider text-outline mt-1">Connection Health</p>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
            <h4 className="font-body-sm text-body-sm font-bold text-on-surface mb-3 flex items-center gap-2">
              <Icon name="bar_chart" size={18} className="text-primary" />
              Request Volume
            </h4>
            <div className="h-16 flex items-end gap-1">
              {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/40 rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
            <h4 className="font-body-sm text-body-sm font-bold text-on-surface mb-3 flex items-center gap-2">
              <Icon name="route" size={18} className="text-primary" />
              Active Routing
            </h4>
            <div className="space-y-2 text-[12px]">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-on-surface-variant">Default Tier</span>
                  <span className="font-medium text-on-surface">gpt-4o-mini (80%)</span>
                </div>
                <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "80%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-on-surface-variant">Premium Tier</span>
                  <span className="font-medium text-on-surface">gpt-4o (100%)</span>
                </div>
                <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
            <h4 className="font-body-sm text-body-sm font-bold text-on-surface mb-3 flex items-center gap-2">
              <Icon name="shield" size={18} className="text-primary" />
              Failover Status
            </h4>
            <div className="space-y-2 text-[12px]">
              <div className="flex items-center justify-between">
                <span className="text-on-surface">Anthropic <span className="text-outline">Primary Fallback</span></span>
                <StatusPill label="Ready" tone="success" />
              </div>
              <div className="flex items-center justify-between opacity-60">
                <span className="text-on-surface">Google Vertex <span className="text-outline">Secondary Fallback</span></span>
                <StatusPill label="Standby" tone="neutral" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Configured Models</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-[13px] font-bold hover:bg-primary-container transition-colors">
              <Icon name="add" size={18} />
              Add Model
            </button>
          </div>
          <table className="w-full text-left">
            <thead className="bg-surface-container-low text-[11px] font-bold text-outline uppercase">
              <tr>
                <th className="px-4 py-3">Internal Alias</th>
                <th className="px-4 py-3">Provider ID</th>
                <th className="px-4 py-3">Supported Tasks</th>
                <th className="px-4 py-3">Cost (In / Out per 1M)</th>
                <th className="px-4 py-3">Success</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {models.map((m, i) => (
                <tr key={m.alias} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-on-surface text-[13px]">{m.alias}</td>
                  <td className="px-4 py-3 font-mono text-[12px] text-on-surface-variant">{m.providerId}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1 flex-wrap">
                      {m.tasks.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-surface-container rounded text-[11px] text-on-surface-variant">{t}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[12px] text-on-surface-variant">{m.costIn} / {m.costOut} ({m.multiplier})</td>
                  <td className="px-4 py-3 text-[13px] text-success font-semibold">{m.success}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() =>
                        setModelStates((s) => s.map((v, idx) => (idx === i ? !v : v)))
                      }
                      className={`relative w-10 h-5 rounded-full transition-colors ${modelStates[i] ? "bg-primary" : "bg-outline"}`}
                    >
                      <span className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full transition-transform ${modelStates[i] ? "translate-x-full" : ""}`} />
                    </button>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 text-outline hover:text-primary transition-colors">
                        <Icon name="edit" size={16} />
                      </button>
                      <button className="p-1.5 text-outline hover:text-primary transition-colors">
                        <Icon name="play_arrow" size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
