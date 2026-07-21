"use client";

import { use } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { Breadcrumb, DetailTabs, StatusPill } from "@/components/admin";

const plans = [
  { id: "trial", label: "Trial" },
  { id: "micro", label: "Micro" },
  { id: "standard", label: "Standard" },
  { id: "bridge", label: "Bridge" },
  { id: "enterprise", label: "Enterprise" },
];

const dependencies = [
  { name: "Credit System", status: "Healthy" },
  { name: "AI Provider API", status: "Healthy" },
  { name: "Document Service", status: "Healthy" },
];

export default function FeatureDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const name = id.charAt(0).toUpperCase() + id.slice(1).replace(/_/g, " ");

  return (
    <AdminShell eyebrow="Admin Console" title="Feature Details">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <Breadcrumb items={[{ label: "Features", href: "/admin/features" }, { label: name }]} />

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Icon name="transform" size={28} />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface">{name}</h1>
                  <StatusPill label="Active" tone="success" />
                </div>
                <p className="text-on-surface-variant text-[13px] mt-1 font-mono">
                  writing.{id} <span className="mx-1.5 text-outline font-sans">•</span>
                  <span className="font-sans">Writing Tools</span>
                  <span className="mx-1.5 text-outline font-sans">•</span>
                  <span className="font-sans">Available on 4 Plans</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button className="px-4 py-2 border border-error/30 text-error rounded-lg text-[13px] font-medium hover:bg-error/5 transition-colors">
                Disable Feature
              </button>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface hover:bg-surface-container transition-colors">
                View Usage
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-[13px] font-bold hover:bg-primary-container transition-colors">
                <Icon name="edit" size={18} />
                Edit Feature
              </button>
              <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
                <Icon name="more_vert" size={18} />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[12px] text-on-surface-variant pt-4 border-t border-outline-variant">
            <span>Default Cost <strong className="text-on-surface">4 Credits</strong></span>
            <span>Primary Provider <strong className="text-on-surface">OpenAI GPT-4o</strong></span>
            <span>Last Updated <strong className="text-on-surface">2 hours ago</strong></span>
          </div>
        </div>

        <DetailTabs tabs={["Overview", "Plan Entitlements", "Credit Configuration", "Providers & Models", "Input & Output", "Dependencies", "Usage Analytics"]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Feature Details</h3>
              <div className="space-y-3 text-[13px]">
                <Row label="Name" value={name} />
                <Row label="Key" value={`writing.${id}`} mono />
                <Row label="Category" value="Writing Tools" />
                <Row label="Route" value={`/tools/${id}`} mono />
              </div>
              <p className="text-[13px] text-on-surface-variant mt-4 pt-4 border-t border-outline-variant">
                A multi-mode rewriting engine that restructures sentences and vocabulary while preserving original
                meaning, tone, and key facts.
              </p>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">AI Provider Settings</h3>
                <a href="#" className="text-primary text-[12px] font-medium hover:underline">Configure</a>
              </div>
              <div className="space-y-3 text-[13px]">
                <Row label="Primary" value="OpenAI (GPT-4o)" />
                <Row label="Fallback Model" value="Claude 3.5 Sonnet" />
                <Row label="Timeout" value="60s" />
                <Row label="Retry Logic" value="3 Attempts" />
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Processing Limits</h3>
              <div className="grid grid-cols-3 gap-4 text-[13px] mb-4">
                <Row label="Max Words" value="5,000" />
                <Row label="Supported Languages" value="42" />
                <Row label="Output Variants" value="3 Max" />
              </div>
              <div className="flex gap-2">
                {["Text", "MD", "URL"].map((t) => (
                  <span key={t} className="px-2 py-1 bg-surface-container rounded text-[11px] text-on-surface-variant">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Cost Structure</h3>
              <div className="space-y-3 text-[13px]">
                <Row label="Fixed Cost" value="4 cr" />
                <Row label="Min / Max Charge" value="1 - 10 cr" />
                <Row label="Model Multiplier" value="1.0x" />
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Plan Availability</h3>
              <div className="space-y-2">
                {plans.map((p) => (
                  <Link
                    key={p.id}
                    href={`/admin/plans/${p.id}`}
                    className={`flex items-center justify-between p-2 rounded-lg text-[13px] transition-colors hover:bg-surface-container ${
                      p.id === "standard" ? "bg-primary/5 font-semibold text-primary" : "text-on-surface"
                    }`}
                  >
                    {p.label}
                    <Icon name={p.id === "enterprise" ? "corporate_fare" : "check_circle"} size={18} className={p.id === "standard" ? "text-primary" : "text-success"} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Dependencies</h3>
              <div className="space-y-2">
                {dependencies.map((d) => (
                  <div key={d.name} className="flex items-center justify-between text-[13px]">
                    <span className="flex items-center gap-2 text-on-surface-variant">
                      <span className="w-2 h-2 rounded-full bg-success" />
                      {d.name}
                    </span>
                    <span className="text-success font-medium">{d.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Usage (Last 30 Days)</h3>
            <a href="#" className="text-primary text-[12px] font-medium hover:underline">View Full Analytics</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Stat label="Total Runs" value="12.4k" />
            <Stat label="Active Users" value="842" />
            <Stat label="Success Rate" value="99.2%" />
            <Stat label="Avg Credits" value="4.2" />
            <Stat label="Avg Latency" value="1.8s" />
            <Stat label="Provider Cost" value="$412.50" />
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-on-surface-variant">{label}</span>
      <span className={`text-on-surface font-medium ${mono ? "font-mono text-[12px]" : ""}`}>{value}</span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 bg-surface-container-low rounded-lg text-center">
      <p className="text-lg font-bold text-on-surface">{value}</p>
      <p className="text-[11px] text-outline uppercase mt-0.5">{label}</p>
    </div>
  );
}
