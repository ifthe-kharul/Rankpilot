"use client";

import { useState } from "react";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";

const tabs = ["All Templates", "Favorites", "My Templates", "Team Templates", "Recently Used"];
const filters = ["Category: All", "Language: English (US)", "Content type: Any", "Word range: 1k - 5k"];

const templates = [
  { icon: "article", tags: ["Blog", "SEO"], title: "SEO Pillar Article", desc: "A comprehensive 2,500-word blueprint designed to rank for high-competition keywords with semantic structure.", credits: 180, words: "2,500" },
  { icon: "campaign", tags: ["Ads", "Marketing"], title: "Social Ad Copy Bundle", desc: "Five platform-optimized ad variations built for high click-through and conversion rates.", credits: 60, words: "300" },
  { icon: "mail", tags: ["Email"], title: "Product Launch Sequence", desc: "A 5-email nurture sequence template for announcing new features or products to your list.", credits: 90, words: "1,200" },
  { icon: "shopping_bag", tags: ["E-commerce"], title: "Product Description Pack", desc: "Conversion-focused product copy with benefit-led bullet points and SEO metadata.", credits: 45, words: "400" },
  { icon: "auto_stories", tags: ["Guide"], title: "Ultimate How-To Guide", desc: "Long-form educational structure with FAQ schema and step-by-step formatting.", credits: 220, words: "3,200" },
  { icon: "summarize", tags: ["Internal"], title: "Executive Summary Brief", desc: "Condense long reports and research into a crisp, decision-ready summary.", credits: 35, words: "500" },
];

export default function TemplatesPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <AppShell eyebrow="Workspace Assets" title="Templates Library">
      <div className="p-container-padding">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Templates Library</h2>
            <p className="text-on-surface-variant font-body-md text-body-md mt-1">
              Accelerate your content workflow with AI-powered blueprints.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={20} />
              <input
                className="pl-10 pr-4 py-2.5 w-full md:w-[300px] bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-sm text-body-sm"
                placeholder="Search templates… (⌘K)"
                type="text"
              />
            </div>
            <button className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-body-sm text-body-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm shrink-0">
              <Icon name="add" size={20} />
              New Template
            </button>
          </div>
        </div>

        <div className="border-b border-outline-variant mb-6 overflow-x-auto">
          <nav className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 whitespace-nowrap font-body-sm text-body-sm transition-colors border-b-2 -mb-px ${
                  activeTab === tab
                    ? "font-bold text-primary border-primary"
                    : "text-on-surface-variant border-transparent hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          {filters.map((f) => {
            const [label, value] = f.split(": ");
            return (
              <div
                key={f}
                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-outline-variant rounded-lg font-body-sm text-body-sm cursor-pointer hover:bg-surface-container-low transition-colors"
              >
                <span className="text-on-surface-variant font-medium">{label}:</span>
                <span className="font-bold">{value}</span>
                <Icon name="expand_more" size={16} />
              </div>
            );
          })}
          <button className="ml-auto text-primary font-bold text-sm flex items-center gap-1">
            <Icon name="restart_alt" size={16} />
            Reset Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {templates.map((t) => (
            <div
              key={t.title}
              className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 bg-primary/10 rounded-xl">
                  <Icon name={t.icon} filled className="text-primary" />
                </div>
                <button className="text-outline hover:text-error transition-colors">
                  <Icon name="favorite" size={20} />
                </button>
              </div>
              <div className="flex gap-2 mb-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold px-2 py-0.5 bg-primary-container/20 text-primary border border-primary/20 rounded-full uppercase tracking-tighter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{t.title}</h3>
              <p className="text-on-surface-variant text-sm line-clamp-2 mb-6">{t.desc}</p>
              <div className="mt-auto space-y-3">
                <div className="flex items-center justify-between text-xs font-medium text-outline">
                  <div className="flex items-center gap-1.5">
                    <Icon name="description" size={16} />
                    {t.words} words
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="bolt" size={16} />
                    {t.credits} credits
                  </div>
                </div>
                <button className="w-full py-2.5 rounded-lg border border-outline-variant font-body-sm text-body-sm font-semibold text-on-surface group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-colors">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
