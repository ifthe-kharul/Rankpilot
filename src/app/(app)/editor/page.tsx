"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui";

const outline = ["Introduction", "What Is Affiliate Marketing?", "How It Works", "Finding Your Niche", "Conclusion"];

const aiTools = [
  { icon: "face", title: "AI Humanizer", desc: "Make AI-generated text sound natural and human.", href: "/tools/humanizer" },
  { icon: "transform", title: "Paraphraser", desc: "Rewrite sentences while keeping the original meaning.", href: "/tools/paraphraser" },
  { icon: "spellcheck", title: "Grammar & Spell", desc: "Check for technical writing errors instantly.", href: "/tools/grammar-checker" },
  { icon: "translate", title: "Translator", desc: "Localize your content for global audiences.", href: "/tools/translator" },
  { icon: "short_text", title: "Summarizer", desc: "Condense long articles into key bullet points.", href: "/tools/summarizer" },
];

const toolbarButtons = ["undo", "redo", "format_bold", "format_italic", "format_underlined", "format_list_bulleted", "format_list_numbered", "table_view", "image", "link"];

export default function EditorPage() {
  const [tab, setTab] = useState<"write" | "preview">("write");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex items-center justify-between px-8 py-4 border-b border-outline-variant">
        <Link href="/dashboard" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
          <Icon name="arrow_back" size={20} />
          <span className="font-label-md text-label-md">Back to Project</span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {["Configure", "Research & Outline", "Generate", "Editor"].map((step, i) => (
            <div key={step} className="flex items-center gap-4">
              <div className="flex items-center gap-2 shrink-0">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    i < 3 ? "border border-success text-success" : "bg-primary text-white"
                  }`}
                >
                  {i < 3 ? <Icon name="check" size={14} /> : <span className="text-[12px] font-bold">4</span>}
                </div>
                <span className={`font-label-md text-label-md ${i === 3 ? "font-semibold text-on-surface" : "text-on-surface-variant"}`}>
                  {step}
                </span>
              </div>
              {i < 3 && <div className="w-10 h-px bg-outline-variant" />}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 text-on-surface-variant mr-2">
            <Icon name="generating_tokens" filled className="text-primary" size={18} />
            <span className="font-label-md text-label-md">4,058 Credits Remaining</span>
          </div>
          <button className="flex items-center gap-2 px-4 h-10 rounded-lg border border-primary text-primary font-label-md text-label-md hover:bg-primary/5 transition-colors">
            <Icon name="save" size={18} />
            Save
          </button>
          <button className="flex items-center gap-2 px-4 h-10 rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors">
            <Icon name="download" size={18} />
            Export
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container transition-colors">
            <Icon name="more_horiz" size={18} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex gap-6 p-6 overflow-hidden">
        {/* Column 1: Document Explorer */}
        <div className="hidden lg:flex w-[260px] flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shrink-0">
          <div className="p-4 border-b border-outline-variant flex items-center justify-between">
            <h3 className="font-label-md text-label-md font-semibold text-on-surface uppercase tracking-wider">Document</h3>
            <Icon name="keyboard_double_arrow_left" className="text-outline cursor-pointer hover:text-on-surface" size={18} />
          </div>
          <div className="flex-1 overflow-y-auto p-3">
            <div className="flex items-center gap-2 p-2 bg-primary/5 text-primary rounded-lg cursor-pointer mb-4">
              <Icon name="article" size={18} />
              <span className="font-label-md text-label-md font-semibold truncate">How to Start Affiliate Mar…</span>
            </div>
            <div className="flex items-center gap-2 p-2 text-on-surface font-semibold text-label-md mb-1">
              <Icon name="expand_more" className="text-outline" size={18} />
              <span>Outline</span>
            </div>
            <div className="pl-8 space-y-2.5 py-1 border-l border-outline-variant ml-3">
              {outline.map((item) => (
                <div key={item} className="font-label-md text-label-md text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="p-3 border-t border-outline-variant bg-surface-container-low space-y-1">
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white cursor-pointer text-on-surface-variant">
              <div className="flex items-center gap-3">
                <Icon name="source" size={18} />
                <span className="font-label-md text-label-md">Sources</span>
              </div>
              <span className="bg-outline-variant/30 text-xs px-1.5 py-0.5 rounded font-bold">23</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white cursor-pointer text-on-surface-variant">
              <Icon name="history" size={18} />
              <span className="font-label-md text-label-md">Versions</span>
            </div>
          </div>
        </div>

        {/* Column 2: Writing Editor */}
        <div className="flex-1 flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm min-w-0">
          <div className="flex border-b border-outline-variant">
            <button
              onClick={() => setTab("write")}
              className={`px-8 py-3 font-body-sm text-body-sm ${tab === "write" ? "text-primary font-semibold border-b-2 border-primary" : "text-on-surface-variant hover:text-on-surface"}`}
            >
              Write
            </button>
            <button
              onClick={() => setTab("preview")}
              className={`px-8 py-3 font-body-sm text-body-sm ${tab === "preview" ? "text-primary font-semibold border-b-2 border-primary" : "text-on-surface-variant hover:text-on-surface"}`}
            >
              Preview
            </button>
          </div>
          <div className="flex items-center px-4 py-2 border-b border-outline-variant gap-1 overflow-x-auto">
            {toolbarButtons.map((icon) => (
              <button key={icon} className="p-1.5 hover:bg-surface-container rounded transition-colors">
                <Icon name={icon} size={20} />
              </button>
            ))}
            <div className="h-6 w-px bg-outline-variant mx-2" />
            <button className="p-1.5 hover:bg-surface-container rounded transition-colors">
              <Icon name="auto_fix_high" className="text-primary" size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-8 md:p-16">
            <div className="max-w-editor-max-width mx-auto">
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-8">
                How to Start Affiliate Marketing in 2024: A Complete Step-by-Step Guide
              </h1>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-4">Introduction</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                Affiliate marketing remains one of the most accessible ways to build a digital business and
                generate passive income in 2024. Whether you&apos;re a content creator, a blogger, or simply
                someone looking to leverage their online presence, understanding the fundamentals is the
                first step toward success.
              </p>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-4">What Is Affiliate Marketing?</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                At its core, affiliate marketing is a performance-based marketing strategy where a business
                rewards one or more affiliates for each visitor or customer brought by the affiliate&apos;s own
                marketing efforts. It&apos;s a win-win scenario: brands get more sales, and you get a commission
                for your recommendation.
              </p>
              <div className="w-full h-48 rounded-xl bg-surface-container mb-8 flex items-center justify-center text-on-surface-variant">
                <Icon name="image" size={32} />
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                The industry has evolved significantly over the last few years. With the rise of AI-driven
                content and social commerce, the bar for quality has been raised.
              </p>
            </div>
          </div>
          <div className="h-10 px-6 border-t border-outline-variant flex items-center justify-end gap-6 text-on-surface-variant bg-surface-container-low text-[12px] shrink-0">
            <span>Words: 1,842</span>
            <span>Characters: 12,560</span>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Auto-saved 2m ago</span>
            </div>
          </div>
        </div>

        {/* Column 3: AI Writing Assistant */}
        <div className="hidden xl:flex w-[320px] flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shrink-0">
          <div className="p-4 border-b border-outline-variant">
            <h3 className="font-label-md text-label-md font-semibold text-on-surface uppercase tracking-wider">
              AI Writing Assistant
            </h3>
          </div>
          <div className="flex border-b border-outline-variant">
            <div className="flex-1 text-center py-2.5 text-primary font-semibold border-b-2 border-primary text-label-md">Tools</div>
            <div className="flex-1 text-center py-2.5 text-on-surface-variant hover:text-on-surface cursor-pointer text-label-md">History</div>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {aiTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="block p-3 bg-white border border-outline-variant rounded-lg hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="flex gap-3">
                  <div className="w-10 h-10 shrink-0 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name={tool.icon} />
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md font-bold text-on-surface">{tool.title}</h4>
                    <p className="text-[12px] text-on-surface-variant line-clamp-2">{tool.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="p-4 border-t border-outline-variant">
            <button className="w-full py-2.5 rounded-lg border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface transition-all">
              More Tools
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
