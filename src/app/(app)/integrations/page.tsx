"use client";

import { useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";

const tabs = ["All Integrations", "CMS", "Social Media", "Connected", "Integration History"];

type IntegrationCard = {
  id: string;
  name: string;
  icon: string;
  iconClass: string;
  status: "Connected" | "Not Connected" | "Expiring Soon";
  href: string;
};

const integrations: IntegrationCard[] = [
  { id: "wordpress", name: "WordPress", icon: "language", iconClass: "bg-primary/10 text-primary", status: "Connected", href: "/integrations/details/wordpress-rankpilot" },
  { id: "webflow", name: "Webflow", icon: "web", iconClass: "bg-surface-container text-on-surface-variant", status: "Not Connected", href: "/integrations/wordpress/connect" },
  { id: "ghost", name: "Ghost", icon: "auto_stories", iconClass: "bg-surface-container text-on-surface-variant", status: "Not Connected", href: "/integrations/wordpress/connect" },
  { id: "facebook", name: "Facebook Pages", icon: "thumb_up", iconClass: "bg-[#1877F2]/10 text-[#1877F2]", status: "Connected", href: "/integrations/details/facebook-pages" },
  { id: "linkedin", name: "LinkedIn", icon: "work", iconClass: "bg-[#0A66C2]/10 text-[#0A66C2]", status: "Connected", href: "/integrations/details/linkedin" },
  { id: "instagram", name: "Instagram", icon: "photo_camera", iconClass: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white", status: "Expiring Soon", href: "/integrations/details/instagram" },
  { id: "youtube", name: "YouTube", icon: "play_circle", iconClass: "bg-surface-container text-on-surface-variant", status: "Not Connected", href: "/integrations/social/connect" },
  { id: "x", name: "X (Twitter)", icon: "tag", iconClass: "bg-black/5 text-on-surface", status: "Connected", href: "/integrations/details/x-twitter" },
];

const statusStyles: Record<IntegrationCard["status"], string> = {
  Connected: "bg-secondary/10 text-secondary",
  "Not Connected": "bg-outline-variant/30 text-outline",
  "Expiring Soon": "bg-error/10 text-error font-bold",
};

export default function IntegrationsOverviewPage() {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <AppShell eyebrow="Workspace" title="Integrations">
      <div className="p-container-padding max-w-[1400px] mx-auto">
        <div className="mb-8">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Integrations</h1>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl">
            Connect your favorite platforms and publish content directly from RankPilot. Streamline your workflow by
            syncing content to your CMS and social channels.
          </p>
        </div>

        <div className="flex items-center gap-1 border-b border-outline-variant mb-8 overflow-x-auto whitespace-nowrap">
          {tabs.map((t) =>
            t === "Integration History" ? (
              <Link
                key={t}
                href="/integrations/history"
                className="px-6 py-4 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm font-medium transition-all"
              >
                {t}
              </Link>
            ) : (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-4 border-b-2 font-body-sm text-body-sm transition-all ${
                  tab === t ? "border-primary text-primary font-semibold" : "border-transparent text-on-surface-variant hover:text-on-surface font-medium"
                }`}
              >
                {t}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
          <div className="lg:col-span-1 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Overview</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-on-surface font-medium text-body-sm">Total</span>
                <span className="text-on-surface font-bold">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface font-medium text-body-sm">Connected</span>
                <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded text-xs font-bold">6</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface font-medium text-body-sm">Expiring</span>
                <span className="bg-error/10 text-error px-2 py-0.5 rounded text-xs font-bold">1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface font-medium text-body-sm">Disconnected</span>
                <span className="bg-outline-variant/30 text-outline px-2 py-0.5 rounded text-xs font-bold">1</span>
              </div>
            </div>
          </div>

          <Link
            href="/integrations/wordpress"
            className="lg:col-span-1 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm group hover:border-primary transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="language" className="text-primary" />
              </div>
              <Icon name="arrow_forward" className="text-outline group-hover:text-primary transition-colors" />
            </div>
            <p className="font-headline-sm text-headline-sm mb-1">WordPress</p>
            <p className="text-on-surface-variant text-body-sm font-medium">4 sites connected</p>
          </Link>

          <Link
            href="/integrations/social"
            className="lg:col-span-1 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm group hover:border-primary transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Icon name="share" className="text-secondary" />
              </div>
              <Icon name="arrow_forward" className="text-outline group-hover:text-primary transition-colors" />
            </div>
            <p className="font-headline-sm text-headline-sm mb-1">Social Media</p>
            <p className="text-on-surface-variant text-body-sm font-medium">5 accounts active</p>
          </Link>

          <div className="lg:col-span-1 bg-surface-container-low border border-outline-variant p-5 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Icon name="history" className="scale-[3]" />
            </div>
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5" />
                <div>
                  <p className="text-xs font-semibold">WP-Sync Success</p>
                  <p className="text-[10px] text-outline">2 mins ago · TechBlog</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-error mt-1.5" />
                <div>
                  <p className="text-xs font-semibold">Auth Failed</p>
                  <p className="text-[10px] text-outline">1 hour ago · Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h3 className="font-headline-sm text-headline-sm mb-6">Available Integrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {integrations.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex items-center justify-between hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${item.iconClass}`}>
                      <Icon name={item.icon} />
                    </div>
                    <div>
                      <p className="font-semibold text-on-surface">{item.name}</p>
                      <span className={`inline-flex items-center gap-1.5 mt-0.5 px-1.5 py-0.5 rounded text-[11px] ${statusStyles[item.status]}`}>
                        {item.status !== "Not Connected" && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
                        {item.status}
                      </span>
                    </div>
                  </div>
                  {item.status === "Connected" ? (
                    <Link href={item.href} className="text-body-sm font-semibold text-primary px-4 py-1.5 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors">
                      Manage
                    </Link>
                  ) : item.status === "Expiring Soon" ? (
                    <Link href={item.href} className="text-body-sm font-semibold text-white bg-error px-4 py-1.5 rounded-lg hover:shadow-lg active:scale-95 transition-all">
                      Reconnect
                    </Link>
                  ) : (
                    <Link href={item.href} className="text-body-sm font-semibold text-white bg-primary px-4 py-1.5 rounded-lg hover:shadow-lg active:scale-95 transition-all">
                      Connect
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-80 space-y-6">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 bg-surface-container-low border-b border-outline-variant">
                <h4 className="font-label-md text-label-md font-bold text-on-surface">Popular Actions</h4>
              </div>
              <div className="p-2 space-y-1">
                <Link href="/integrations/history" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-container transition-colors text-left group">
                  <Icon name="sync" className="text-outline group-hover:text-primary" />
                  <span className="text-body-sm font-medium">Sync All Platforms</span>
                </Link>
                <Link href="/integrations/wordpress" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-container transition-colors text-left group">
                  <Icon name="vpn_key" className="text-outline group-hover:text-primary" />
                  <span className="text-body-sm font-medium">Manage API Keys</span>
                </Link>
                <Link href="/integrations/history" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-container transition-colors text-left group">
                  <Icon name="settings_ethernet" className="text-outline group-hover:text-primary" />
                  <span className="text-body-sm font-medium">Webhooks Setup</span>
                </Link>
              </div>
            </div>

            <div className="bg-primary text-on-primary rounded-xl p-6 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <Icon name="lightbulb" className="text-[120px]" size={120} />
              </div>
              <h4 className="font-headline-sm text-headline-sm mb-4 relative z-10">Integration Help</h4>
              <div className="space-y-4 relative z-10">
                <div className="space-y-1">
                  <p className="text-body-sm font-bold">Need a Custom Connection?</p>
                  <p className="text-xs opacity-90 leading-relaxed">
                    Our Enterprise plan supports custom CMS and internal API connections for specialized workflows.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-body-sm font-bold">Security &amp; Privacy</p>
                  <p className="text-xs opacity-90 leading-relaxed">
                    All integrations use OAuth 2.0. We never store your passwords and only access necessary data permissions.
                  </p>
                </div>
                <button className="w-full mt-4 bg-white text-primary font-bold py-2.5 rounded-lg text-body-sm hover:bg-surface transition-colors shadow-lg">
                  Read documentation
                </button>
              </div>
            </div>

            <div className="border-l-2 border-outline-variant ml-4 pl-6 space-y-6">
              <h4 className="font-label-md text-label-sm font-bold uppercase tracking-widest text-outline">System Log</h4>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-background bg-secondary" />
                <p className="text-xs font-bold">Medium Connected</p>
                <p className="text-[10px] text-outline">Yesterday, 14:20</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-background bg-outline" />
                <p className="text-xs font-bold">Pinterest Token Refreshed</p>
                <p className="text-[10px] text-outline">Oct 12, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
