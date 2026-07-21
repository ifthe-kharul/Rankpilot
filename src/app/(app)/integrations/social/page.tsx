"use client";

import { useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";
import { Breadcrumb, DetailTabs, StatCard, StatusPill } from "@/components/admin";

const platforms = ["All Platforms", "LinkedIn", "Instagram", "X (Twitter)", "Facebook"];

const accounts = [
  {
    id: "instagram",
    name: "Rankpilot_Official",
    handle: "@rankpilot_hq",
    platform: "Instagram",
    type: "Business Account",
    iconClass: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white",
    icon: "photo_camera",
    status: "Token Expiring" as const,
    expiration: "5 days remaining",
    expirationNote: "Oct 24, 2023",
    scheduled: "12 posts",
    lastUsed: "2 hours ago",
    warning: true,
  },
  {
    id: "linkedin",
    name: "Rankpilot Tech Lab",
    handle: "Organization Page",
    platform: "LinkedIn",
    type: "Company Page",
    iconClass: "bg-[#0077B5] text-white",
    icon: "work",
    status: "Healthy" as const,
    expiration: "54 days remaining",
    expirationNote: "Dec 12, 2023",
    scheduled: "8 posts",
    lastUsed: "Yesterday, 14:20",
  },
  {
    id: "x-twitter",
    name: "Rankpilot News",
    handle: "@RankpilotNews",
    platform: "X (Twitter)",
    type: "Professional Profile",
    iconClass: "bg-black text-white",
    icon: "tag",
    status: "Healthy" as const,
    expiration: "Auto-renewing",
    expirationNote: "API v2 Stable",
    scheduled: "4 posts",
    lastUsed: "15 mins ago",
  },
];

const statusTone: Record<string, "error" | "success"> = {
  "Token Expiring": "error",
  Healthy: "success",
};

export default function SocialAccountsPage() {
  const [platform, setPlatform] = useState(platforms[0]);

  return (
    <AppShell eyebrow="Integrations" title="Social Media">
      <div className="p-container-padding max-w-[1400px] mx-auto">
        <Breadcrumb items={[{ label: "Integrations", href: "/integrations" }, { label: "Social Media Accounts" }]} />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Social Media Integrations</h1>
          <Link
            href="/integrations/social/connect"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-body-sm text-body-sm font-semibold flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md"
          >
            <Icon name="add" size={18} />
            Connect Account
          </Link>
        </div>

        <div className="mb-8 p-4 rounded-xl border border-error/20 bg-error/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Icon name="warning" className="text-error" />
            <p className="font-body-sm text-body-sm text-on-surface">
              <span className="font-bold">Action Required:</span> Your Instagram Business (Rankpilot_Official) token expires in{" "}
              <span className="font-bold">5 days</span>. Reconnect now to avoid scheduling interruptions.
            </p>
          </div>
          <button className="text-error font-bold text-body-sm hover:underline shrink-0">Reconnect Now</button>
        </div>

        <DetailTabs tabs={["Overview", "Connected Accounts", "Permissions", "Activity"]} defaultTab="Connected Accounts" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon="link" label="Total Connected" value="05" tone="primary" />
          <StatCard icon="check_circle" label="Status Healthy" value="04" tone="success" />
          <StatCard icon="alarm" label="Token Expiring" value="01" tone="error" />
          <StatCard icon="calendar_month" label="Scheduled Posts" value="28" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {platforms.map((p) => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={`px-4 py-2 rounded-full font-body-sm text-body-sm whitespace-nowrap transition-all ${
                  platform === p ? "bg-primary text-on-primary" : "border border-outline-variant hover:border-primary text-on-surface-variant"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Icon name="search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              placeholder="Search accounts..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary/20 focus:border-primary text-body-sm outline-none transition-all"
            />
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low border-b border-outline-variant">
                <tr className="text-[11px] font-bold text-outline uppercase">
                  <th className="px-6 py-4">Account Name</th>
                  <th className="px-6 py-4">Platform / Type</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Expiration</th>
                  <th className="px-6 py-4">Scheduled</th>
                  <th className="px-6 py-4">Last Used</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {accounts.map((a) => (
                  <tr key={a.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-6 py-5">
                      <Link href={`/integrations/details/${a.id}`} className="flex items-center gap-3 group">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${a.iconClass}`}>
                          <Icon name={a.icon} />
                        </div>
                        <div>
                          <p className="font-label-md text-on-surface group-hover:text-primary transition-colors">{a.name}</p>
                          <p className="text-label-sm text-outline">{a.handle}</p>
                        </div>
                      </Link>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-on-surface font-medium text-body-sm">{a.platform}</span>
                        <span className="text-xs text-outline">{a.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <StatusPill label={a.status} tone={statusTone[a.status]} />
                    </td>
                    <td className="px-6 py-5">
                      <p className={`font-medium text-body-sm ${a.warning ? "text-error" : "text-on-surface-variant"}`}>{a.expiration}</p>
                      <p className="text-[10px] text-outline">{a.expirationNote}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-on-surface font-medium">{a.scheduled}</span>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-on-surface-variant text-body-sm">{a.lastUsed}</p>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-2">
                        {a.warning ? (
                          <button className="p-2 hover:bg-error/10 text-error rounded-lg transition-colors" title="Reconnect">
                            <Icon name="refresh" size={18} />
                          </button>
                        ) : (
                          <button className="p-2 hover:bg-surface-container-highest text-outline rounded-lg transition-colors">
                            <Icon name="settings_applications" size={18} />
                          </button>
                        )}
                        <Link href={`/integrations/details/${a.id}`} className="p-2 hover:bg-surface-container-highest text-outline rounded-lg transition-colors inline-flex">
                          <Icon name="more_vert" size={18} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 p-8 border-2 border-dashed border-outline-variant rounded-2xl flex flex-col items-center text-center bg-surface-container-lowest/50">
          <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
            <Icon name="add_link" size={36} />
          </div>
          <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Connect more platforms</h4>
          <p className="text-outline text-body-sm max-w-sm mb-6">
            Automate your content distribution by connecting Facebook, TikTok, or Pinterest accounts to your workflow.
          </p>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-body-sm font-medium border border-outline-variant rounded-lg hover:bg-white transition-all">
              View API Docs
            </button>
            <Link
              href="/integrations/social/connect"
              className="px-4 py-2 text-body-sm font-medium bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all flex items-center gap-2"
            >
              <Icon name="rocket_launch" size={18} />
              Start Automation
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
