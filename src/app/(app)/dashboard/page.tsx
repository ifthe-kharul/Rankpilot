"use client";

import { useState } from "react";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";

const quickActions = [
  { icon: "add_circle", iconClass: "text-primary bg-primary-fixed", title: "Create Project", desc: "Start a new project to organize your content assets." },
  { icon: "auto_awesome", iconClass: "text-secondary bg-secondary-container", title: "Generate Content", desc: "Use the AI Creator to draft an article in minutes." },
  { icon: "file_upload", iconClass: "text-tertiary bg-tertiary-fixed", title: "Import Document", desc: "Bring in existing drafts for AI-powered optimization." },
  { icon: "spellcheck", iconClass: "text-primary bg-primary-fixed", title: "Try Grammar Checker", desc: "Polish your prose with our linguistic analysis engine." },
  { icon: "psychology", iconClass: "text-secondary bg-secondary-container", title: "Try AI Humanizer", desc: "Make AI content read naturally and pass detection." },
];

const stats = [
  { icon: "folder", iconClass: "bg-primary-container/10 text-primary", label: "Active Projects", value: "12" },
  { icon: "speed", iconClass: "bg-success/10 text-success", label: "Readability", value: "82", badge: "GOOD" },
  { icon: "description", iconClass: "bg-primary/10 text-primary", label: "Total Words", value: "142k" },
  { icon: "payments", iconClass: "bg-secondary-container/40 text-secondary", label: "Credits Left", value: "2,420" },
];

const activity = [
  { name: "SaaS Strategy 2024", type: "Project", updated: "2h ago", status: "Optimized", tone: "success" },
  { name: "AI Market Trends", type: "Document", updated: "5h ago", status: "Drafting", tone: "primary" },
  { name: "Cloud Security Guide", type: "Project", updated: "Yesterday", status: "Reviewing", tone: "warning" },
  { name: "Brand Voice V2", type: "Document", updated: "2 days ago", status: "Optimized", tone: "success" },
] as const;

const statusTone: Record<string, string> = {
  success: "bg-success/10 text-success",
  primary: "bg-primary/10 text-primary",
  warning: "bg-warning/10 text-warning",
};

const checklist = [
  "Create your first project",
  "Set your Brand Voice",
  "Generate an article",
  "Optimize for SEO",
  "Install the browser extension",
];

export default function DashboardPage() {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <AppShell eyebrow="Personal Workspace" title="Dashboard" credits={2420} creditPct={48} status="saved">
      <div className="p-8 max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-start gap-4 flex-wrap">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface">
              {isNewUser ? "Welcome to Rankpilot, Alex! Let's get your first piece of content ranked." : "Welcome back, Alex."}
            </h1>
            <p className="text-on-surface-variant font-body-md text-body-md mt-1">
              {isNewUser
                ? "Your AI-powered writing operating system is ready to help you scale."
                : "Here's what's happening with your content today."}
            </p>
          </div>
          <button
            onClick={() => setIsNewUser((v) => !v)}
            className="text-[11px] uppercase tracking-wide font-bold text-outline border border-outline-variant rounded-full px-3 py-1.5 hover:bg-surface-container transition-colors shrink-0"
          >
            Demo: {isNewUser ? "Show populated state" : "Show new-user state"}
          </button>
        </div>

        {isNewUser ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickActions.map((a) => (
                  <button
                    key={a.title}
                    className="flex flex-col p-6 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary transition-all text-left shadow-sm"
                  >
                    <span className={`inline-flex p-2 rounded-lg w-fit mb-4 ${a.iconClass}`}>
                      <Icon name={a.icon} />
                    </span>
                    <h3 className="font-headline-sm text-headline-sm mb-2">{a.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{a.desc}</p>
                  </button>
                ))}
                <div className="p-6 bg-surface-variant/30 border border-dashed border-outline-variant rounded-xl flex items-center justify-center text-center">
                  <p className="font-label-md text-label-md text-on-surface-variant italic">New tools coming soon…</p>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-headline-md text-headline-md">Recent Documents</h3>
                  <a href="#" className="text-primary font-label-md text-label-md hover:underline">View all drafts</a>
                </div>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-4">
                    <Icon name="description" className="text-on-surface-variant" size={28} />
                  </div>
                  <p className="font-headline-sm text-headline-sm mb-2 text-on-surface">No documents yet</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 max-w-xs">
                    Your drafts and published articles will appear here once you start creating.
                  </p>
                  <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-body-sm text-body-sm font-semibold hover:opacity-90 active:scale-95 transition-all">
                    Create New Draft
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-navy-sidebar text-white rounded-xl p-6 shadow-premium">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline-sm text-headline-sm">Activation Checklist</h3>
                  <span className="font-label-md text-label-md bg-primary-container px-2 py-1 rounded">0/5</span>
                </div>
                <div className="mb-6 space-y-2">
                  <div className="flex justify-between text-xs opacity-70">
                    <span>Onboarding Progress</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-fixed rounded-full" style={{ width: "0%" }} />
                  </div>
                </div>
                <ul className="space-y-4">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 group cursor-pointer">
                      <div className="w-5 h-5 rounded border border-white/20 mt-0.5 group-hover:border-primary-fixed shrink-0" />
                      <span className="font-body-sm text-body-sm opacity-80 group-hover:opacity-100 transition-opacity">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant border-l-4 border-l-secondary rounded-lg p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <Icon name="tips_and_updates" className="text-secondary" />
                  <div>
                    <h5 className="font-body-sm text-body-sm font-bold text-on-surface mb-1">AI Optimization Tip</h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
                      Upload your company&apos;s tone of voice guide to immediately improve article quality.
                    </p>
                    <button className="bg-surface-container-low text-secondary px-3 py-1.5 rounded font-label-sm text-label-sm hover:bg-secondary-container transition-colors uppercase tracking-tight">
                      Setup Brand Voice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${s.iconClass}`}>
                    <Icon name={s.icon} size={24} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-outline uppercase tracking-wider">{s.label}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <h3 className="text-2xl font-bold text-on-surface">{s.value}</h3>
                      {s.badge && (
                        <span className="px-2 py-0.5 bg-success/10 text-success text-[10px] font-bold rounded">
                          {s.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
                <div className="px-6 py-5 border-b border-outline-variant flex justify-between items-center">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Recent Activity</h2>
                  <button className="text-primary text-sm font-semibold hover:underline">View all</button>
                </div>
                <div className="flex-1 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low text-[11px] font-bold text-outline uppercase">
                      <tr>
                        <th className="px-6 py-3">Entity Name</th>
                        <th className="px-6 py-3">Type</th>
                        <th className="px-6 py-3">Last Updated</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/30 text-sm">
                      {activity.map((row) => (
                        <tr key={row.name} className="hover:bg-surface-container-low/50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-on-surface">{row.name}</td>
                          <td className="px-6 py-4 text-on-surface-variant">{row.type}</td>
                          <td className="px-6 py-4 text-on-surface-variant">{row.updated}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusTone[row.tone]}`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-outline hover:text-primary transition-colors">
                              <Icon name="more_horiz" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Writing Insights</h2>
                    <Icon name="info" className="text-outline" size={20} />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-outline uppercase">Grammar Issue Trend</span>
                        <span className="text-xs font-bold text-success flex items-center gap-1">
                          <Icon name="trending_down" size={16} />
                          -12%
                        </span>
                      </div>
                      <div className="h-10 flex items-end gap-1">
                        {[80, 65, 70, 50, 45, 30, 25].map((h, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-t ${i === 6 ? "bg-primary-container" : "bg-primary/10"}`}
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-outline-variant/30">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-outline uppercase">Originality Scan History</span>
                        <span className="text-xs font-medium text-on-surface-variant">Avg. 98.4%</span>
                      </div>
                      <div className="flex gap-1.5">
                        {[1, 1, 1, 0.4, 1].map((opacity, i) => (
                          <div key={i} className="w-full h-1.5 bg-success rounded-full" style={{ opacity }} />
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-outline-variant/30">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-outline uppercase">AI Pattern Scan</span>
                        <span className="text-xs font-medium text-on-surface-variant">Low Activity</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-3 bg-surface-container rounded-full overflow-hidden">
                          <div className="h-full bg-secondary-fixed-dim" style={{ width: "15%" }} />
                        </div>
                        <span className="text-xs font-bold text-on-surface">15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </AppShell>
  );
}
