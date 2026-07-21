"use client";

import { use } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { Breadcrumb, DetailTabs, StatusPill } from "@/components/admin";

const stages = [
  { label: "Created", state: "done" },
  { label: "Validated", state: "done" },
  { label: "Queued", state: "done" },
  { label: "Started", state: "done" },
  { label: "Provider Called", state: "done" },
  { label: "Output Validation", state: "failed" },
] as const;

const attempts = [
  { n: 3, time: "14:22:08", status: "Failed", note: "upstream_timeout_504" },
  { n: 2, time: "14:20:41", status: "Failed", note: "upstream_timeout_504" },
  { n: 1, time: "14:18:55", status: "Failed", note: "network_reset" },
];

export default function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <AdminShell eyebrow="Admin Console" title="Job Details">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <Breadcrumb items={[{ label: "Jobs", href: "/admin/jobs" }, { label: id }]} />

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 mb-4">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-3">
            <div className="flex items-center gap-3">
              <h1 className="font-headline-lg text-headline-lg text-on-surface">Content Generation Job</h1>
              <StatusPill label="Failed" tone="error" />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-[13px] font-bold hover:bg-primary-container transition-colors">
                <Icon name="refresh" size={18} />
                Retry Job
              </button>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface hover:bg-surface-container transition-colors">
                Retry with Another Provider
              </button>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface hover:bg-surface-container transition-colors">
                Refund Credits
              </button>
              <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
                <Icon name="more_vert" size={18} />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[12px] text-on-surface-variant">
            <Link href="/admin/users/usr_8K4R92" className="hover:text-primary transition-colors">User <strong className="text-on-surface">Ariful Islam</strong></Link>
            <Link href="/admin/workspaces/ws_rankpilot_01" className="hover:text-primary transition-colors">Workspace <strong className="text-on-surface">Rankpilot Media</strong></Link>
            <span>Tool <strong className="text-on-surface">Content Creator</strong></span>
            <span>Provider <strong className="text-on-surface">OpenAI</strong></span>
            <span>Model <strong className="text-on-surface">GPT-5.5</strong></span>
            <span>Created <strong className="text-on-surface">14 minutes ago</strong></span>
            <span>Duration <strong className="text-on-surface">2m 18s</strong></span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-error/10 border border-error/20 rounded-lg mb-6">
          <Icon name="warning" className="text-error mt-0.5" size={20} />
          <div>
            <p className="font-bold text-error text-[13px]">Generation Failed</p>
            <p className="text-[13px] text-on-surface-variant">Generation failed after 3 attempts. Credits are currently reserved.</p>
          </div>
        </div>

        <DetailTabs tabs={["Overview", "Input", "Output", "Attempts", "Logs", "Credits"]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Job Stage</h3>
              <div className="space-y-4">
                {stages.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                        s.state === "failed" ? "bg-error text-white" : "bg-success/10 text-success"
                      }`}
                    >
                      <Icon name={s.state === "failed" ? "close" : "check"} size={14} />
                    </div>
                    <span className={`text-[13px] ${s.state === "failed" ? "font-bold text-error" : "text-on-surface"}`}>{s.label}</span>
                    {i < stages.length - 1 && <div className="flex-1 h-px bg-outline-variant" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 flex items-center gap-2">
                <Icon name="bug_report" size={18} className="text-error" />
                Error Details
              </h3>
              <div className="space-y-3 text-[13px]">
                <Field label="User Facing Error" value="Connection timeout during generation." />
                <Field label="Technical Code" value="upstream_timeout_504" mono />
                <Field label="Category" value="Provider Error" />
                <Field label="Retry Eligibility" value="Yes (Auto-retry exhausted)" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Configuration</h3>
                <div className="space-y-3 text-[13px]">
                  <Field label="Topic" value="B2B SaaS Pricing Strategies" />
                  <Field label="Language" value="English (US)" />
                  <Field label="Target Word Count" value="~1500 words" />
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Provider Details</h3>
                <div className="space-y-3 text-[13px]">
                  <Field label="Provider / Model" value="OpenAI GPT-5.5" />
                  <Field label="Request ID" value="req_8273xQ9K" mono copy />
                  <Field label="Trace ID" value="tr_9281pq4Z" mono copy />
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Credit Summary</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-lg font-bold text-on-surface">12</p>
                  <p className="text-[11px] text-outline uppercase">Estimated</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-error">12</p>
                  <p className="text-[11px] text-outline uppercase">Reserved</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-on-surface">0</p>
                  <p className="text-[11px] text-outline uppercase">Charged</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-on-surface">0</p>
                  <p className="text-[11px] text-outline uppercase">Refunded</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Related Entities</h3>
              <div className="space-y-2">
                <Link href="/admin/users/usr_8K4R92" className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary transition-colors">
                  <span className="text-[13px] text-on-surface">Ariful Islam <span className="text-outline">User Profile</span></span>
                  <Icon name="chevron_right" size={18} className="text-outline" />
                </Link>
                <Link href="/admin/workspaces/ws_rankpilot_01" className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary transition-colors">
                  <span className="text-[13px] text-on-surface">Rankpilot Media <span className="text-outline">Workspace</span></span>
                  <Icon name="open_in_new" size={16} className="text-outline" />
                </Link>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
              <h3 className="font-headline-sm text-headline-sm text-on-surface p-6 pb-0">Attempt History</h3>
              <table className="w-full text-left mt-4">
                <thead className="bg-surface-container-low text-[11px] font-bold text-outline uppercase">
                  <tr>
                    <th className="px-6 py-3">Attempt #</th>
                    <th className="px-6 py-3">Timestamp</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Error Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {attempts.map((a) => (
                    <tr key={a.n}>
                      <td className="px-6 py-3 text-[13px] text-on-surface">{a.n}</td>
                      <td className="px-6 py-3 text-[13px] text-on-surface-variant">{a.time}</td>
                      <td className="px-6 py-3">
                        <StatusPill label={a.status} tone="error" />
                      </td>
                      <td className="px-6 py-3 font-mono text-[12px] text-on-surface-variant">{a.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

function Field({ label, value, mono, copy }: { label: string; value: string; mono?: boolean; copy?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-on-surface-variant">{label}</span>
      <span className={`text-on-surface font-medium flex items-center gap-1.5 ${mono ? "font-mono text-[12px]" : ""}`}>
        {value}
        {copy && <Icon name="content_copy" size={14} className="text-outline cursor-pointer hover:text-primary" />}
      </span>
    </div>
  );
}
