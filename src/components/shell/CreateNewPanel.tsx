"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/cn";

type ActionItem = {
  icon: string;
  iconClass: string;
  title: string;
  desc: string;
  href?: string;
};

const quickStart: ActionItem[] = [
  { icon: "folder", iconClass: "bg-primary/10 text-primary", title: "New Project", desc: "Organize your work in a new project", href: "/projects/new" },
  { icon: "article", iconClass: "bg-secondary/10 text-secondary", title: "Create Article", desc: "Generate SEO-optimized articles with AI", href: "/tools/article-generator" },
  { icon: "description", iconClass: "bg-tertiary/10 text-tertiary", title: "Blank Document", desc: "Start writing from a blank page", href: "/editor" },
  { icon: "cloud_upload", iconClass: "bg-primary/10 text-primary", title: "Upload File", desc: "Upload and analyze documents" },
];

const createItems: ActionItem[] = [
  { icon: "folder", iconClass: "bg-primary/10 text-primary", title: "New Project", desc: "Create a new project to organize your content", href: "/projects/new" },
  { icon: "article", iconClass: "bg-secondary/10 text-secondary", title: "Create Article", desc: "Generate long-form, SEO-optimized articles", href: "/tools/article-generator" },
  { icon: "description", iconClass: "bg-tertiary/10 text-tertiary", title: "Blank Document", desc: "Start with a clean slate and write anything", href: "/editor" },
  { icon: "space_dashboard", iconClass: "bg-primary/10 text-primary", title: "Create from Template", desc: "Use a template to speed up your workflow", href: "/templates" },
  { icon: "database", iconClass: "bg-secondary/10 text-secondary", title: "Add Knowledge Source", desc: "Add data sources to power AI with your content" },
];

const importItems: ActionItem[] = [
  { icon: "upload_file", iconClass: "bg-primary/10 text-primary", title: "Upload File", desc: "Import files from your device" },
  { icon: "link", iconClass: "bg-secondary/10 text-secondary", title: "Import URL", desc: "Import content from any web page" },
  { icon: "content_paste", iconClass: "bg-tertiary/10 text-tertiary", title: "Paste Content", desc: "Paste text to get started" },
];

const recentlyUsed: ActionItem[] = [
  { icon: "sync_alt", iconClass: "text-secondary", title: "Rewriter", desc: "", href: "/tools/rewriter" },
  { icon: "short_text", iconClass: "text-primary", title: "Summarizer", desc: "", href: "/tools/summarizer" },
  { icon: "mail", iconClass: "text-tertiary", title: "Marketing Email Writer", desc: "", href: "/tools/marketing-email" },
];

const tabs = [
  { key: "create", label: "Create", icon: "add_circle" },
  { key: "import", label: "Import", icon: "upload" },
  { key: "ai", label: "AI Tools", icon: "auto_awesome" },
] as const;

function ActionCard({ item, onNavigate }: { item: ActionItem; onNavigate: () => void }) {
  const inner = (
    <>
      <span className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0", item.iconClass)}>
        <Icon name={item.icon} size={20} />
      </span>
      <div className="min-w-0">
        <p className="font-body-sm text-body-sm font-semibold text-on-surface truncate">{item.title}</p>
        <p className="text-[12px] text-on-surface-variant leading-snug">{item.desc}</p>
      </div>
    </>
  );
  const className = "flex flex-col items-start gap-3 p-4 rounded-xl border border-outline-variant hover:border-primary hover:shadow-sm transition-all text-left bg-surface-container-lowest";
  return item.href ? (
    <Link href={item.href} onClick={onNavigate} className={className}>
      {inner}
    </Link>
  ) : (
    <button type="button" onClick={onNavigate} className={className}>
      {inner}
    </button>
  );
}

function ActionRow({ item, onNavigate }: { item: ActionItem; onNavigate: () => void }) {
  const inner = (
    <>
      <span className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0", item.iconClass)}>
        <Icon name={item.icon} size={20} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-body-sm text-body-sm font-semibold text-on-surface truncate">{item.title}</p>
        <p className="text-[12px] text-on-surface-variant truncate">{item.desc}</p>
      </div>
      <Icon name="chevron_right" className="text-outline shrink-0" size={20} />
    </>
  );
  const className = "flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container transition-colors text-left w-full";
  return item.href ? (
    <Link href={item.href} onClick={onNavigate} className={className}>
      {inner}
    </Link>
  ) : (
    <button type="button" onClick={onNavigate} className={className}>
      {inner}
    </button>
  );
}

export function CreateNewPanel({
  open,
  onClose,
  collapsed = false,
}: {
  open: boolean;
  onClose: () => void;
  collapsed?: boolean;
}) {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("create");
  const [search, setSearch] = useState("");

  if (!open) return null;

  const sidebarOffset = collapsed ? "md:left-sidebar-width-collapsed" : "md:left-sidebar-width-expanded";

  return (
    <>
      <div onClick={onClose} className={cn("fixed inset-0 z-40 bg-on-surface/20", sidebarOffset)} />
      <div className={cn("fixed left-0 top-0 h-screen w-full sm:w-[460px] bg-surface-container-lowest z-50 shadow-2xl overflow-y-auto", sidebarOffset)}>
        <div className="sticky top-0 bg-surface-container-lowest px-6 pt-6 pb-4 border-b border-outline-variant z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Create New</h2>
              <p className="text-[13px] text-on-surface-variant mt-0.5">What would you like to create?</p>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
              <Icon name="close" size={22} />
            </button>
          </div>

          <div className="relative mb-4">
            <Icon name="search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects, content types, tools or templates..."
              className="w-full pl-10 pr-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div className="flex items-center gap-1 p-1 bg-surface-container rounded-lg">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-[13px] font-semibold transition-colors",
                  tab === t.key ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:bg-white/50"
                )}
              >
                <Icon name={t.icon} size={16} />
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 py-5 space-y-6">
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-outline mb-3">Quick Start</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickStart.map((item) => (
                <ActionCard key={item.title + item.desc} item={item} onNavigate={onClose} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-outline mb-2">Create</h3>
            <div className="space-y-1">
              {createItems.map((item) => (
                <ActionRow key={item.title + item.desc} item={item} onNavigate={onClose} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-outline mb-3">Import</h3>
            <div className="grid grid-cols-3 gap-3">
              {importItems.map((item) => {
                const inner = (
                  <>
                    <Icon name={item.icon} className={item.iconClass.includes("text-") ? item.iconClass.split(" ").pop() : "text-primary"} size={22} />
                    <p className="font-body-sm text-[12px] font-semibold text-on-surface mt-2 text-center">{item.title}</p>
                    <p className="text-[11px] text-on-surface-variant text-center leading-snug mt-0.5">{item.desc}</p>
                  </>
                );
                return (
                  <button
                    key={item.title}
                    onClick={onClose}
                    className="flex flex-col items-center p-3 rounded-xl border border-outline-variant hover:border-primary transition-colors bg-surface-container-lowest"
                  >
                    {inner}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-outline mb-3">Recently Used</h3>
            <div className="flex flex-wrap gap-2">
              {recentlyUsed.map((item) => (
                <Link
                  key={item.title}
                  href={item.href!}
                  onClick={onClose}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-outline-variant hover:border-primary transition-colors text-[12px] font-medium text-on-surface"
                >
                  <Icon name={item.icon} className={item.iconClass} size={16} />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 bg-primary/5 border border-primary/10 rounded-lg">
            <Icon name="lightbulb" className="text-primary mt-0.5" size={18} />
            <p className="text-[12px] text-on-surface-variant">Outputs can be saved to a project or Personal Drafts.</p>
          </div>
        </div>
      </div>
    </>
  );
}
