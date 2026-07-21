"use client";

import { useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { AdminPageHeader, StatCard, StatusPill } from "@/components/admin";

const kpis = [
  { icon: "extension", label: "Total Features", value: "34" },
  { icon: "check_circle", label: "Active", value: "26", tone: "success" as const },
  { icon: "experiment", label: "Beta", value: "4", tone: "primary" as const },
  { icon: "lock", label: "Plan-Gated", value: "22" },
  { icon: "block", label: "Disabled", value: "4", tone: "error" as const },
  { icon: "tune", label: "Custom Limits", value: "18" },
];

const categories = ["All", "Core Platform", "Content Creation", "Writing Tools", "Marketing Tools", "Content Intelligence", "Publishing", "Integrations"];

const features = [
  { id: "content_creator", name: "Content Creator", key: "content_creator", status: "Active", category: "Content Creation", plans: "All Plans", cost: "12 Per Article", provider: "OpenAI GPT-4", dependency: "Research Engine" },
  { id: "rewriter", name: "Rewriter", key: "writing.rewriter", status: "Active", category: "Writing Tools", plans: "All Plans", cost: "4 Per Request", provider: "OpenAI GPT-4o", dependency: "None" },
  { id: "grammar_checker", name: "Grammar Checker", key: "grammar_checker", status: "Active", category: "Writing Tools", plans: "All Plans", cost: "0 Real-time", provider: "Proprietary V2", dependency: "None" },
  { id: "ai_humanizer", name: "AI Humanizer", key: "ai_humanizer", status: "Beta", category: "Writing Tools", plans: "Pro + Enterprise", cost: "5 Per Request", provider: "Anthropic Claude 3", dependency: "Pattern Scan" },
  { id: "seo_optimization", name: "SEO / AEO / GEO", key: "seo_optimization", status: "Active", category: "Content Intelligence", plans: "Enterprise", cost: "25 Per Audit", provider: "Google Search API", dependency: "Knowledge Base" },
  { id: "social_publish", name: "Social Publishing", key: "social_publish", status: "Disabled", category: "Publishing", plans: "Pro + Enterprise", cost: "2 Per Post", provider: "Buffer API", dependency: "Team Management" },
];

const statusTone: Record<string, "success" | "primary" | "neutral"> = { Active: "success", Beta: "primary", Disabled: "neutral" };

export default function AdminFeaturesPage() {
  const [category, setCategory] = useState("All");

  const filtered = category === "All" ? features : features.filter((f) => f.category === category);

  return (
    <AdminShell eyebrow="Admin Console" title="Features">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <AdminPageHeader
          title="Features"
          subtitle="Manage Rankpilot product capabilities, entitlements, credit costs and technical dependencies."
          actions={
            <>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
                Export Configuration
              </button>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
                Compare Entitlements
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-body-sm text-body-sm font-semibold hover:bg-primary-container transition-colors">
                <Icon name="add" size={18} />
                Create Feature
              </button>
            </>
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {kpis.map((k) => (
            <StatCard key={k.label} {...k} />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                category === c ? "bg-primary text-on-primary" : "bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low text-[11px] font-bold text-outline uppercase">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Category &amp; Plans</th>
                <th className="px-4 py-3">Credits / Unit</th>
                <th className="px-4 py-3">Provider &amp; Logic</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.map((f) => (
                <tr key={f.id} className={`hover:bg-surface-container-low/50 transition-colors ${f.status === "Disabled" ? "opacity-60" : ""}`}>
                  <td className="px-4 py-3">
                    <Link href={`/admin/features/${f.id}`} className="group">
                      <p className="font-semibold text-on-surface text-[13px] group-hover:text-primary transition-colors">{f.name}</p>
                      <p className="font-mono text-[11px] text-outline">{f.key}</p>
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <StatusPill label={f.status} tone={statusTone[f.status]} />
                  </td>
                  <td className="px-4 py-3 text-[12px] text-on-surface-variant">
                    {f.category}
                    <br />
                    <span className="text-outline">{f.plans}</span>
                  </td>
                  <td className="px-4 py-3 text-[13px] text-on-surface font-medium">{f.cost}</td>
                  <td className="px-4 py-3 text-[12px] text-on-surface-variant">
                    {f.provider}
                    <br />
                    <span className="text-outline">Dep: {f.dependency}</span>
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
            <span>Showing 1-{filtered.length} of 34 features</span>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
