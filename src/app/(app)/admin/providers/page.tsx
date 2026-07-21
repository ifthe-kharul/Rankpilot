import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { AdminPageHeader, StatusPill } from "@/components/admin";

const providers = [
  { id: "openai", name: "OpenAI", models: 8, success: "99.9%", latency: "450ms", costToday: "$1,842", status: "Healthy" },
  { id: "anthropic", name: "Anthropic", models: 5, success: "99.8%", latency: "600ms", costToday: "$1,120", status: "Healthy" },
  { id: "gemini", name: "Google Vertex (Gemini)", models: 4, success: "99.5%", latency: "420ms", costToday: "$640", status: "Healthy" },
  { id: "perplexity", name: "Perplexity", models: 2, success: "98.9%", latency: "980ms", costToday: "$240", status: "Degraded" },
];

const statusTone: Record<string, "success" | "warning"> = { Healthy: "success", Degraded: "warning" };

export default function AdminProvidersPage() {
  return (
    <AdminShell eyebrow="Admin Console" title="AI Providers">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <AdminPageHeader
          title="AI Providers"
          subtitle="Manage AI connections, models, routing, costs, latency and failover."
          actions={
            <>
              <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
                <Icon name="refresh" size={18} />
                Refresh Health
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
                <Icon name="network_check" size={18} />
                Test All Connections
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-body-sm text-body-sm font-semibold hover:bg-primary-container transition-colors">
                <Icon name="add" size={18} />
                Add Provider
              </button>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {providers.map((p) => (
            <Link
              key={p.id}
              href={`/admin/providers/${p.id}`}
              className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:border-primary transition-colors flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Icon name="smart_toy" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">{p.name}</h3>
                  <StatusPill label={p.status} tone={statusTone[p.status]} />
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-[12px] text-on-surface-variant">
                  <span>{p.models} Active Models</span>
                  <span>{p.success} Success</span>
                  <span>{p.latency} Latency</span>
                  <span>{p.costToday} Today</span>
                </div>
              </div>
              <Icon name="chevron_right" className="text-outline shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
