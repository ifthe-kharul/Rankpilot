"use client";

import { useState } from "react";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";

const sourceParagraphs = [
  "Rankpilot.io is a comprehensive writing operating system designed for enterprise content production. Our AI-driven algorithms analyze semantic relevance and SEO trends in real-time to ensure maximum visibility.",
  "The platform integrates cutting-edge neural machine translation to preserve the nuances of brand voice across multiple languages. By prioritizing precision and context, Rankpilot helps businesses scale their international outreach without losing quality.",
  "Optimized for search engines and human readability, the output is consistently high-performing. Our goal is to bridge the gap between artificial intelligence and human creativity through seamless collaboration.",
];

const translatedParagraphs = [
  "Rankpilot.io হল একটি বিস্তৃত রাইটিং অপারেটিং সিস্টেম যা এন্টারপ্রাইজ কন্টেন্ট প্রোডাকশনের জন্য ডিজাইন করা হয়েছে। আমাদের AI-চালিত অ্যালগরিদমগুলি রিয়েল-টাইমে শব্দার্থিক প্রাসঙ্গিকতা এবং SEO ট্রেন্ডগুলি বিশ্লেষণ করে সর্বোচ্চ দৃশ্যমানতা নিশ্চিত করে।",
  "প্ল্যাটফর্মটি একাধিক ভাষায় ব্র্যান্ড ভয়েসের সূক্ষ্মতা বজায় রাখতে অত্যাধুনিক নিউরাল মেশিন ট্রান্সলেশনকে একীভূত করে। নির্ভুলতা এবং প্রেক্ষাপটকে অগ্রাধিকার দিয়ে, Rankpilot ব্যবসাগুলিকে গুণমান না হারিয়ে তাদের আন্তর্জাতিক আউটরিচ স্কেল করতে সহায়তা করে।",
];

const inputTabs = ["Paste Text", "Upload", "Select Document", "Import URL"];

const translationModes = [
  { label: "Standard", active: true },
  { label: "Formal" },
  { label: "Natural" },
  { label: "Marketing", starred: true },
  { label: "Technical" },
];

const glossaryTerms = [
  { source: "SEO", target: "এসইও" },
  { source: "Operating System", target: "অপারেটিং সিস্টেম" },
];

export default function TranslatorPage() {
  const [source, setSource] = useState("Auto-detect");
  const [target, setTarget] = useState("Bangla (Bangladesh)");
  const [activeTab, setActiveTab] = useState(inputTabs[0]);
  const [configEnabled, setConfigEnabled] = useState(true);
  const [tone, setTone] = useState(85);

  return (
    <AppShell eyebrow="Writing Tools" title="Translator">
      <div className="flex flex-col min-h-[calc(100vh-64px)]">
        {/* Tool & Metadata Bar */}
        <div className="px-6 md:px-8 py-4 bg-surface-container-lowest flex items-center justify-between border-b border-outline-variant flex-wrap gap-4">
          <div className="flex items-center gap-2 p-1 bg-surface-container-low rounded-xl border border-outline-variant">
            {inputTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-body-sm text-body-sm transition-all ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-variant/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary-container/10 border border-secondary/20 rounded-lg">
              <span className="text-[12px] font-semibold text-secondary">Project: Alpha</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-lg">
              <span className="text-[12px] font-medium text-on-surface-variant">Doc: Product Launch Copy</span>
            </div>
            <div className="h-6 w-px bg-outline-variant hidden sm:block" />
            <div className="flex flex-col items-end">
              <span className="text-[11px] text-on-surface-variant">Source: {source}</span>
              <span className="text-[11px] font-medium text-primary">126 words • Saved 1 min ago</span>
            </div>
          </div>
        </div>

        {/* Language Selector Row */}
        <div className="px-6 md:px-8 py-4 bg-surface-bright flex items-center justify-center border-b border-outline-variant gap-4 flex-wrap">
          <div className="flex-1 flex items-center justify-end min-w-[200px]">
            <button className="flex items-center gap-3 px-6 py-2.5 bg-white border border-outline-variant rounded-xl shadow-sm min-w-[220px] justify-between hover:border-primary transition-all">
              <span className="font-medium text-on-surface">{source}</span>
              <Icon name="keyboard_arrow_down" className="text-outline" size={20} />
            </button>
          </div>
          <button
            onClick={() => {
              setSource(target);
              setTarget(source);
            }}
            className="w-10 h-10 rounded-full bg-white border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm shrink-0"
          >
            <Icon name="swap_horiz" size={20} />
          </button>
          <div className="flex-1 flex items-center justify-start min-w-[200px]">
            <button className="flex items-center gap-3 px-6 py-2.5 bg-white border border-primary rounded-xl shadow-sm min-w-[220px] justify-between ring-2 ring-primary/10">
              <span className="font-medium text-on-surface">{target}</span>
              <Icon name="expand_more" className="text-primary" size={20} />
            </button>
          </div>
        </div>

        {/* Main 3-Column Working Area */}
        <div className="flex-1 p-6 md:p-8 flex flex-col lg:flex-row gap-6 bg-background">
          {/* Column 1: Source Text */}
          <div className="flex-1 flex flex-col gap-4 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-body-sm text-body-sm font-semibold text-on-surface-variant flex items-center gap-2">
                <Icon name="description" size={18} />
                Source Text
              </h3>
              <button className="text-primary text-[13px] font-medium hover:underline">Clear all</button>
            </div>
            <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 overflow-y-auto shadow-sm space-y-4">
              {sourceParagraphs.map((p, i) => (
                <p key={i} className="font-body-md text-body-md leading-relaxed text-on-surface">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Column 2: Translated Output */}
          <div className="flex-1 flex flex-col gap-4 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-body-sm text-body-sm font-semibold text-primary flex items-center gap-2">
                <Icon name="auto_awesome" filled size={18} />
                Translated Output
              </h3>
              <span className="px-2 py-1 bg-success/10 border border-success/20 rounded-md text-[11px] font-bold text-success">
                98% ACCURACY
              </span>
            </div>
            <div className="flex-1 bg-surface-container-lowest border border-primary/20 rounded-xl p-6 overflow-y-auto shadow-md space-y-4">
              {translatedParagraphs.map((p, i) => (
                <p key={i} className="font-body-md text-[18px] leading-loose text-on-surface" dir="ltr">
                  {p}
                </p>
              ))}
              <div className="mt-8 p-4 bg-surface-container-low rounded-xl border border-outline-variant space-y-3">
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-on-surface-variant font-medium">Fluency Check</span>
                  <span className="text-secondary font-bold">High Fluency</span>
                </div>
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-on-surface-variant font-medium">Formatting Preservation</span>
                  <div className="flex items-center gap-1 text-success">
                    <Icon name="check_circle" size={14} />
                    <span className="font-bold">Formatted</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-on-surface-variant font-medium">Glossary Match</span>
                  <span className="text-primary font-bold">{glossaryTerms.length} terms matched</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Configuration */}
          <div className="w-full lg:w-[320px] flex flex-col gap-4 shrink-0">
            <div className="flex items-center justify-between">
              <h3 className="font-body-sm text-body-sm font-semibold text-on-surface-variant">Configuration</h3>
              <button
                onClick={() => setConfigEnabled((v) => !v)}
                className={`relative w-10 h-5 rounded-full transition-colors ${configEnabled ? "bg-primary" : "bg-outline"}`}
              >
                <span
                  className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full transition-transform ${
                    configEnabled ? "translate-x-full" : ""
                  }`}
                />
              </button>
            </div>
            <div
              className={`flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-6 overflow-y-auto shadow-sm transition-opacity ${
                configEnabled ? "opacity-100" : "opacity-50 pointer-events-none"
              }`}
            >
              <div className="space-y-3">
                <span className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">
                  Translation Mode
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {translationModes.map((mode) => (
                    <div
                      key={mode.label}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg border border-outline-variant cursor-pointer transition-colors ${
                        mode.active
                          ? "bg-surface-container-high"
                          : "bg-surface-container-low hover:bg-surface-container"
                      } ${mode.starred ? "text-primary" : ""}`}
                    >
                      <span className={`text-[13px] ${mode.active || mode.starred ? "font-bold" : "font-medium"}`}>
                        {mode.label}
                      </span>
                      {mode.active && <Icon name="check_circle" size={18} />}
                      {mode.starred && <Icon name="star" filled size={18} />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">
                    Tone Preservation
                  </span>
                  <span className="text-primary font-bold text-[12px]">{tone}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={tone}
                  onChange={(e) => setTone(Number(e.target.value))}
                  className="w-full h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] text-outline">
                  <span>Flexible</span>
                  <span>Strict</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">
                    Glossary Matched
                  </span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded-full font-bold">
                    {glossaryTerms.length} Found
                  </span>
                </div>
                <div className="space-y-2">
                  {glossaryTerms.map((term) => (
                    <div
                      key={term.source}
                      className="flex items-center justify-between text-[12px] p-2 bg-surface-container-lowest border border-outline-variant rounded-md"
                    >
                      <span className="font-medium italic">{term.source}</span>
                      <Icon name="sync" className="text-success" size={14} />
                      <span className="font-medium">{term.target}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">
                  Output Format
                </span>
                <div className="relative">
                  <select className="w-full bg-white border border-outline-variant rounded-lg px-3 py-2 text-[13px] focus:ring-primary focus:border-primary appearance-none">
                    <option>Rich Text (.rtf)</option>
                    <option>Markdown (.md)</option>
                    <option>JSON Document (.json)</option>
                  </select>
                  <Icon name="unfold_more" className="absolute right-3 top-2.5 text-outline pointer-events-none" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Toolbar */}
        <footer className="h-20 bg-surface-container-lowest border-t border-outline-variant flex items-center justify-between px-6 md:px-8 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)] flex-wrap gap-3">
          <div className="flex items-center gap-2 sm:gap-4">
            <button title="Undo" className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container transition-colors">
              <Icon name="undo" className="text-on-surface-variant" />
            </button>
            <div className="h-6 w-px bg-outline-variant hidden sm:block" />
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-surface-container rounded-lg text-on-surface-variant text-[14px] font-medium transition-colors">
              <Icon name="content_copy" size={20} />
              Copy
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-surface-container rounded-lg text-on-surface-variant text-[14px] font-medium transition-colors">
              <Icon name="save" size={20} />
              Save Draft
            </button>
            <button className="hidden md:flex items-center gap-2 px-4 py-2 hover:bg-surface-container rounded-lg text-on-surface-variant text-[14px] font-medium transition-colors">
              <Icon name="download" size={20} />
              Download
              <Icon name="expand_more" size={18} />
            </button>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden lg:block px-5 py-2.5 border border-outline-variant text-on-surface-variant rounded-xl font-medium text-[14px] hover:bg-surface-container transition-all">
              Send to Grammar Checker
            </button>
            <button className="hidden lg:block px-5 py-2.5 border border-primary/20 text-primary rounded-xl font-medium text-[14px] hover:bg-primary/5 transition-all">
              Send to AI Humanizer
            </button>
            <button className="px-6 md:px-8 py-2.5 bg-primary-container text-white rounded-xl font-bold text-[14px] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
              <Icon name="bolt" filled size={20} />
              Translate Content
            </button>
          </div>
        </footer>
      </div>
    </AppShell>
  );
}
