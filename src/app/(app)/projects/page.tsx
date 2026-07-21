"use client";

import { useState } from "react";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";

type Project = {
  id: string;
  icon: string;
  iconClass: string;
  title: string;
  status: string;
  statusClass: string;
  tag: string;
  progress: number;
  docs: number;
  updated: string;
  starred?: boolean;
};

const projects: Project[] = [
  { id: "1", icon: "analytics", iconClass: "bg-primary/5 text-primary border-primary/10", title: "SaaS Strategy 2024", status: "In Progress", statusClass: "bg-secondary-container/30 text-on-secondary-container", tag: "SEO Campaign", progress: 65, docs: 12, updated: "Updated 2h ago" },
  { id: "2", icon: "neurology", iconClass: "bg-secondary/5 text-secondary border-secondary/10", title: "AI Market Trends", status: "Reviewing", statusClass: "bg-primary-container/10 text-primary", tag: "Research", progress: 40, docs: 6, updated: "Updated 5h ago", starred: true },
  { id: "3", icon: "shield", iconClass: "bg-tertiary/5 text-tertiary border-tertiary/10", title: "Cloud Security Guide", status: "Drafting", statusClass: "bg-warning/10 text-warning", tag: "Technical", progress: 20, docs: 3, updated: "Updated yesterday" },
  { id: "4", icon: "record_voice_over", iconClass: "bg-primary/5 text-primary border-primary/10", title: "Brand Voice V2", status: "Optimized", statusClass: "bg-success/10 text-success", tag: "Guidelines", progress: 100, docs: 9, updated: "Updated 2 days ago" },
  { id: "5", icon: "storefront", iconClass: "bg-secondary/5 text-secondary border-secondary/10", title: "Q3 Product Launch", status: "In Progress", statusClass: "bg-secondary-container/30 text-on-secondary-container", tag: "Marketing", progress: 55, docs: 18, updated: "Updated 3 days ago" },
  { id: "6", icon: "school", iconClass: "bg-tertiary/5 text-tertiary border-tertiary/10", title: "Onboarding Knowledge Base", status: "Archived", statusClass: "bg-surface-container text-on-surface-variant", tag: "Internal", progress: 100, docs: 24, updated: "Updated 2 weeks ago" },
];

export default function ProjectsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <AppShell eyebrow="Workspace" title="Projects">
      <div className="p-container-padding">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Projects</h1>
            <p className="text-on-surface-variant font-body-md text-body-md mt-1">
              Manage and organize your content strategy workflows.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-body-sm text-body-sm font-semibold active:scale-95 duration-100 shadow-premium hover:bg-primary-container transition-colors">
            <Icon name="add" size={20} />
            Create Project
          </button>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 mb-8 flex flex-col lg:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={20} />
            <input
              className="w-full pl-10 pr-4 py-2.5 border border-outline-variant rounded-lg font-body-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white"
              placeholder="Search projects…"
              type="text"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {["Owner: All", "Status: Active", "Tag: All", "Last 30 days"].map((label) => (
              <select
                key={label}
                className="bg-white border border-outline-variant rounded-lg px-3 py-2.5 font-body-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none min-w-[120px]"
                defaultValue={label}
              >
                <option>{label}</option>
              </select>
            ))}
          </div>
          <div className="h-8 w-px bg-outline-variant hidden lg:block mx-2" />
          <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-lg border border-outline-variant">
            <button
              onClick={() => setView("grid")}
              className={`p-1.5 rounded transition-colors ${view === "grid" ? "bg-white shadow-sm text-primary" : "text-outline hover:text-on-surface"}`}
            >
              <Icon name="grid_view" size={20} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-1.5 rounded transition-colors ${view === "list" ? "bg-white shadow-sm text-primary" : "text-outline hover:text-on-surface"}`}
            >
              <Icon name="format_list_bulleted" size={20} />
            </button>
          </div>
        </div>

        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
              : "flex flex-col gap-3"
          }
        >
          {projects.map((p) => (
            <div
              key={p.id}
              className={
                view === "grid"
                  ? "bg-surface-container-lowest border border-outline-variant rounded-xl p-5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer flex flex-col"
                  : "bg-surface-container-lowest border border-outline-variant rounded-xl p-4 hover:border-primary/40 transition-all group cursor-pointer flex items-center gap-4"
              }
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center border shrink-0 ${p.iconClass}`}>
                <Icon name={p.icon} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1 gap-2">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors truncate">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <Icon name="star" filled={p.starred} className={p.starred ? "text-amber-500" : "text-outline"} size={18} />
                    <Icon name="more_vert" className="text-outline" size={18} />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${p.statusClass}`}>
                    {p.status}
                  </span>
                  <span className="text-outline text-[11px]">{p.tag}</span>
                </div>
                <div className="pt-4 border-t border-outline-variant/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] text-outline">Progress</span>
                    <span className="text-[11px] font-bold text-primary">{p.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${p.progress}%` }} />
                  </div>
                  <div className="flex items-center justify-between text-outline">
                    <div className="flex items-center gap-1.5">
                      <Icon name="description" size={16} />
                      <span className="text-[11px]">{p.docs} docs</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="schedule" size={16} />
                      <span className="text-[11px] italic">{p.updated}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
