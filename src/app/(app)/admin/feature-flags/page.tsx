"use client";

import { useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { AdminPageHeader, StatusPill } from "@/components/admin";

const flags = [
  { id: "ai_detector_v2", name: "AI Content Detector V2", key: "ai_detector_v2", status: "Enabled", env: "Production", targeting: "All Users", updatedBy: "Alex Editor", updatedAt: "2h ago" },
  { id: "social_publishing_beta", name: "Social Publishing", key: "social_publishing_beta", status: "Beta", env: "Production", targeting: "Agency Plan", updatedBy: "Sarah Chen", updatedAt: "5h ago" },
  { id: "bulk_humanizer", name: "Bulk Humanizer", key: "bulk_humanizer", status: "Disabled", env: "Staging", targeting: "Internal Only", updatedBy: "Mike Ross", updatedAt: "1d ago" },
];

const statusTone: Record<string, "success" | "primary" | "neutral"> = { Enabled: "success", Beta: "primary", Disabled: "neutral" };

const envs = ["Production", "Staging", "Development"];

export default function FeatureFlagsListPage() {
  const [env, setEnv] = useState(envs[0]);

  return (
    <AdminShell eyebrow="Admin Console" title="Feature Flags">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <AdminPageHeader
          title="Feature Flags"
          subtitle="Control feature rollout, targeting, beta access and emergency shutdown."
          actions={
            <>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
                Export Configuration
              </button>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
                Import Flags
              </button>
              <Link href="/admin/feature-flags/new" className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-body-sm text-body-sm font-semibold hover:bg-primary-container transition-colors">
                <Icon name="add" size={18} />
                Create Feature Flag
              </Link>
            </>
          }
        />

        <div className="flex gap-2 mb-4">
          {envs.map((e) => (
            <button
              key={e}
              onClick={() => setEnv(e)}
              className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                env === e ? "bg-primary text-on-primary" : "bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              {e}
            </button>
          ))}
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low text-[11px] font-bold text-outline uppercase">
              <tr>
                <th className="px-4 py-3 w-10">
                  <input type="checkbox" className="w-4 h-4 accent-primary" />
                </th>
                <th className="px-4 py-3">Flag Details</th>
                <th className="px-4 py-3">Status &amp; Env</th>
                <th className="px-4 py-3">Targeting</th>
                <th className="px-4 py-3">Updated</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {flags
                .filter((f) => f.env === env)
                .map((f) => (
                  <tr key={f.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="w-4 h-4 accent-primary" />
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/feature-flags/${f.id}`} className="group">
                        <p className="font-semibold text-on-surface text-[13px] group-hover:text-primary transition-colors">{f.name}</p>
                        <p className="font-mono text-[11px] text-outline">{f.key}</p>
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <StatusPill label={f.status} tone={statusTone[f.status]} />
                        <span className="text-[11px] text-outline">{f.env}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-on-surface-variant">{f.targeting}</td>
                    <td className="px-4 py-3 text-[12px] text-on-surface-variant">
                      {f.updatedBy} <span className="text-outline">· {f.updatedAt}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button title="Emergency Off" className="p-1.5 text-error hover:bg-error/10 rounded transition-colors">
                          <Icon name="power_settings_new" size={18} />
                        </button>
                        <Link href={`/admin/feature-flags/${f.id}`} className="p-1.5 text-outline hover:text-primary transition-colors">
                          <Icon name="edit" size={18} />
                        </Link>
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
