"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/shell/AppShell";
import { Icon, Button } from "@/components/ui";

const steps = ["Configure", "Generate", "Editor"];

const outlineTree = [
  {
    level: "H2",
    text: "What is Affiliate Marketing?",
    children: ["How the Ecosystem Works", "Key Terminology"],
  },
  {
    level: "H2",
    text: "How to Start in 4 Steps",
    children: ["1. Choose a Niche", "2. Find Affiliate Programs"],
  },
];

const genTasks = [
  "Analyzing Keywords and Search Intent",
  "Building Internal Link Map",
  "Drafting Introduction Hook",
  "Generating Technical Definitions",
  "Writing Section 4: Why Affiliate Marketing is Great in 2024",
  "Developing Core Comparison Tables",
  "Optimizing On-Page SEO Elements",
  "Curating External Citations",
  "Final Flow & Transition Check",
  "Generating Featured Image Alt Text",
];

export default function ArticleGeneratorPage() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step !== 1) return;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          return 100;
        }
        return Math.min(100, p + Math.random() * 8 + 3);
      });
    }, 500);
    return () => clearInterval(id);
  }, [step]);

  useEffect(() => {
    if (step === 1 && progress >= 100) {
      const t = setTimeout(() => setStep(2), 600);
      return () => clearTimeout(t);
    }
  }, [progress, step]);

  function goToStep(next: number) {
    if (next === 1) setProgress(0);
    setStep(next);
  }

  const completedTasks = Math.floor((progress / 100) * genTasks.length);

  return (
    <AppShell eyebrow="Content Creator" title="New Article">
      <div className="p-gutter flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center flex-1 last:flex-none">
                <div className={`flex items-center gap-3 ${i > step ? "opacity-60 grayscale" : ""}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold font-label-md text-label-md shrink-0 ${
                      i <= step ? "bg-primary-container text-white" : "bg-surface-container-highest text-on-surface-variant"
                    }`}
                  >
                    {i < step ? <Icon name="check" size={16} /> : i + 1}
                  </div>
                  <span className={`font-label-md text-label-md whitespace-nowrap ${i === step ? "text-primary font-bold" : "text-on-surface-variant"}`}>
                    {s}
                  </span>
                </div>
                {i < steps.length - 1 && <div className="h-px bg-outline-variant flex-1 mx-4" />}
              </div>
            ))}
          </div>

          {step === 0 && (
            <div className="flex flex-col lg:flex-row gap-6 items-start pb-8">
              <div className="flex-1 min-w-0 max-w-[780px] flex flex-col gap-6">
                <ConfigureStep />
                <ArticleOutlinePreview />
              </div>
              <ConfigureSummarySidebar onStart={() => goToStep(1)} />
            </div>
          )}
          {step === 1 && (
            <GenerateStep progress={progress} completedTasks={completedTasks} />
          )}
          {step === 2 && (
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-12 text-center">
              <Icon name="task_alt" filled className="text-success mb-4" size={48} />
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Article ready!</h2>
              <p className="text-on-surface-variant font-body-md text-body-md mb-6">
                Your draft has been generated and saved to the Writing Workspace.
              </p>
              <div className="flex justify-center gap-3">
                <Button variant="outline" onClick={() => setStep(0)}>Generate Another</Button>
                <Link
                  href="/editor"
                  className="inline-flex items-center justify-center rounded-lg font-body-sm font-semibold px-6 py-2.5 bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow-md active:scale-95 transition-all"
                >
                  Open in Editor
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}

function ConfigureStep() {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm">
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center gap-2">
        <Icon name="tune" className="text-primary" />
        Article Configuration
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">
            Topic or Title <span className="text-error">*</span>
          </label>
          <input
            className="w-full px-4 py-2.5 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            defaultValue="The Ultimate Guide to Affiliate Marketing in 2024"
          />
        </div>
        {[
          { label: "AI Model", options: ["GPT-4 (Recommended)", "Claude 3 Opus"] },
          { label: "Main Keyword", input: true, defaultValue: "affiliate marketing guide" },
          { label: "Content Type", options: ["Long-form Guide", "Listicle", "Review"] },
          { label: "Target Word Count", options: ["2000 - 2500 words", "1000 - 1500 words", "3000+ words"] },
          { label: "Point of View", options: ["First Person (I/We)", "Second Person (You)", "Third Person (He/She/They)"] },
          { label: "Tone of Voice", options: ["Professional & Authoritative", "Conversational & Friendly", "Academic"] },
        ].map((field) =>
          field.input ? (
            <div key={field.label}>
              <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">{field.label}</label>
              <input
                className="w-full px-4 py-2.5 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                defaultValue={field.defaultValue}
              />
            </div>
          ) : (
            <div key={field.label}>
              <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">{field.label}</label>
              <div className="relative">
                <select className="w-full appearance-none pl-4 pr-10 py-2.5 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
                  {field.options!.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <Icon name="expand_more" className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" size={20} />
              </div>
            </div>
          )
        )}

        <div className="md:col-span-2 pt-4 border-t border-outline-variant mt-2">
          <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">Factual Data Strategy</label>
          <div className="relative">
            <select
              defaultValue="Custom Factual Data"
              className="w-full h-11 appearance-none pl-4 pr-10 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
            >
              <option>Live Web Search</option>
              <option>Custom Factual Data</option>
              <option>Standard AI Knowledge</option>
            </select>
            <Icon name="expand_more" className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" size={20} />
          </div>
          <div className="mt-3 bg-surface-container-low p-4 rounded-lg border border-outline-variant">
            <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2 flex items-center justify-between gap-4">
              Factual Data Source (Optional)
              <span className="font-label-sm text-label-sm text-outline font-normal whitespace-nowrap">
                Paste urls, text, or stats to ground the AI
              </span>
            </label>
            <textarea
              className="w-full h-[90px] px-4 py-2.5 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              placeholder="Paste trusted facts, source notes, URLs, statistics, quotations, or reference material."
            />
          </div>
        </div>

        <div className="md:col-span-2 pt-4 border-t border-outline-variant mt-2">
          <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2">Secondary Keywords</label>
          <div className="flex flex-wrap gap-2">
            {["affiliate marketing", "make money online", "passive income streams"].map((kw) => (
              <div
                key={kw}
                className="px-3 py-1 bg-surface-container rounded-full border border-outline-variant flex items-center gap-1 font-label-sm text-label-sm text-on-surface"
              >
                {kw}
                <Icon name="close" size={14} className="text-outline hover:text-error transition-colors cursor-pointer" />
              </div>
            ))}
            <div className="px-3 py-1 border border-dashed border-outline-variant rounded-full flex items-center gap-1 font-label-sm text-label-sm text-outline hover:border-primary hover:text-primary transition-colors cursor-pointer bg-surface-bright">
              <Icon name="add" size={14} />
              Add Keyword
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleOutlinePreview() {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col relative">
      <div className="p-6 border-b border-outline-variant">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
            <Icon name="account_tree" className="text-secondary" />
            Article Outline
          </h2>
          <span className="font-label-sm text-label-sm px-2 py-1 bg-secondary-container text-on-secondary-container rounded-md font-medium border border-secondary/20">
            AI Assisted
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">
          Generate an AI outline based on top SERP results, or paste your own structure.
        </p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-secondary text-white rounded-lg font-body-sm text-body-sm font-semibold flex items-center gap-2 hover:bg-on-secondary-container transition-colors shadow-sm">
            <Icon name="auto_awesome" size={18} />
            Generate Outline
          </button>
          <button className="px-4 py-2 bg-surface-bright border border-outline-variant text-on-surface rounded-lg font-body-sm text-body-sm hover:bg-surface-container-low transition-colors">
            Paste Custom
          </button>
        </div>
      </div>

      <div className="p-6 bg-surface-container-low">
        <div className="bg-surface-bright border border-outline-variant rounded-lg p-5">
          <div className="flex items-center gap-3 mb-4 group cursor-move">
            <Icon name="drag_indicator" className="text-outline-variant group-hover:text-primary transition-colors" size={20} />
            <div className="px-2 py-1 bg-surface-container-high rounded text-on-surface-variant font-bold text-[10px] uppercase tracking-wider">H1</div>
            <span className="font-body-sm text-body-sm text-on-surface font-bold">
              The Ultimate Guide to Affiliate Marketing in 2024
            </span>
            <Icon name="edit" className="ml-auto opacity-0 group-hover:opacity-100 text-outline hover:text-primary transition-all" size={18} />
          </div>

          <div className="pl-8 border-l-2 border-outline-variant ml-2.5 flex flex-col gap-4">
            {outlineTree.map((section) => (
              <div key={section.text}>
                <div className="flex items-center gap-3 group cursor-move relative">
                  <Icon name="drag_indicator" className="text-outline-variant group-hover:text-primary transition-colors" size={20} />
                  <div className="px-2 py-1 bg-surface-container rounded text-on-surface-variant font-bold text-[10px] uppercase tracking-wider">
                    H2
                  </div>
                  <span className="font-body-md text-body-md text-on-surface font-semibold">{section.text}</span>
                  <Icon name="edit" className="ml-auto opacity-0 group-hover:opacity-100 text-outline hover:text-primary transition-all" size={18} />
                </div>
                <div className="pl-8 border-l-2 border-outline-variant/50 ml-2.5 flex flex-col gap-3 mt-3">
                  {section.children.map((child) => (
                    <div key={child} className="flex items-center gap-3 group cursor-move relative">
                      <Icon name="drag_indicator" className="text-outline-variant group-hover:text-primary transition-colors" size={18} />
                      <div className="px-2 py-1 bg-surface-container-low rounded text-outline font-bold text-[10px] uppercase tracking-wider border border-outline-variant">
                        H3
                      </div>
                      <span className="font-body-md text-body-md text-on-surface-variant">{child}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <button className="flex items-center gap-3 mt-1 text-outline hover:text-primary transition-colors">
              <Icon name="add_circle" size={20} />
              <span className="font-body-sm text-body-sm font-medium">Add Section</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfigureSummarySidebar({ onStart }: { onStart: () => void }) {
  return (
    <div className="w-full lg:w-[304px] shrink-0 flex flex-col gap-6 lg:sticky lg:top-6">
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
        <div className="bg-primary p-4 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <h3 className="font-headline-sm text-headline-sm font-semibold mb-1 relative z-10">Project Summary</h3>
          <p className="font-label-sm text-label-sm text-white/80 relative z-10">Review before generation</p>
        </div>
        <div className="p-5 flex flex-col gap-4">
          {[
            { label: "Project", value: "Q3 Marketing" },
            { label: "Est. Length", value: "~2,200 words" },
          ].map((row) => (
            <div key={row.label} className="flex justify-between items-start border-b border-outline-variant pb-3">
              <span className="font-label-sm text-label-sm text-outline">{row.label}</span>
              <span className="font-label-md text-label-md text-on-surface text-right max-w-[140px] truncate">{row.value}</span>
            </div>
          ))}
          <div className="flex justify-between items-start border-b border-outline-variant pb-3">
            <span className="font-label-sm text-label-sm text-outline">Est. Credits</span>
            <div className="flex items-center gap-1">
              <Icon name="generating_tokens" className="text-primary" size={16} />
              <span className="font-label-md text-label-md text-on-surface font-bold">12</span>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-label-sm text-label-sm text-outline">Est. Time</span>
            <span className="font-label-md text-label-md text-on-surface text-right">~2 mins</span>
          </div>
        </div>
        <div className="mx-5 mb-5 p-3 bg-surface-container-low border border-secondary/30 rounded-lg flex items-start gap-3">
          <Icon name="check_circle" className="text-secondary mt-0.5" size={20} />
          <div>
            <span className="block font-body-sm text-body-sm text-on-surface font-semibold">Ready to Start</span>
            <span className="block font-label-sm text-label-sm text-on-surface-variant mt-0.5">
              All required fields completed.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={onStart}
          className="w-full py-3 bg-primary text-white rounded-lg font-body-sm text-body-sm font-bold hover:bg-primary-container transition-colors shadow-premium flex items-center justify-center gap-2"
        >
          <Icon name="play_circle" size={20} />
          Start Research &amp; Generate
        </button>
        <div className="flex gap-3">
          <button className="flex-1 py-2.5 bg-surface-bright border border-outline-variant text-on-surface rounded-lg font-body-sm text-body-sm hover:bg-surface-container-low transition-colors text-center">
            Preview
          </button>
          <button className="flex-1 py-2.5 bg-surface-bright border border-outline-variant text-on-surface rounded-lg font-body-sm text-body-sm hover:bg-surface-container-low transition-colors text-center">
            Save Draft
          </button>
        </div>

        <div className="bg-navy-sidebar text-white p-4 rounded-xl shadow-sm relative overflow-hidden mt-2">
          <Icon name="lightbulb" className="absolute right-2 bottom-2 opacity-10 text-white" size={64} />
          <div className="flex items-center gap-2 mb-2 relative z-10">
            <Icon name="tips_and_updates" className="text-secondary-fixed-dim" size={18} />
            <span className="font-label-md text-label-md font-bold text-white">Pro Tip</span>
          </div>
          <p className="font-label-sm text-label-sm text-white/80 relative z-10 leading-relaxed">
            Providing a highly detailed custom factual data source drastically reduces AI hallucinations and
            aligns the output with your unique brand voice.
          </p>
        </div>
      </div>
    </div>
  );
}

function GenerateStep({ progress, completedTasks }: { progress: number; completedTasks: number }) {
  const circumference = useMemo(() => 2 * Math.PI * 42, []);
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
      <div className="text-center py-10 px-6">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Generating Your Article…</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
          Our AI is writing a high-quality, humanized article for you.
        </p>
      </div>
      <div className="px-6 md:px-12 pb-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 flex flex-col items-center justify-center">
          <div className="relative w-[160px] h-[160px]">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle className="text-surface-container stroke-current" cx="50" cy="50" fill="transparent" r="42" strokeWidth="8" />
              <circle
                className="text-primary stroke-current transition-all duration-500"
                cx="50"
                cy="50"
                fill="transparent"
                r="42"
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-on-surface">{Math.round(progress)}%</span>
              <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Complete</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-on-surface flex items-center gap-2">
                <Icon name="list_alt" className="text-primary" size={20} />
                Current Progress
              </h3>
              <span className="bg-primary/10 text-primary text-[11px] font-bold px-2 py-0.5 rounded">Active</span>
            </div>
            <div className="space-y-3">
              {genTasks.map((task, i) => {
                const done = i < completedTasks;
                const active = i === completedTasks;
                return (
                  <div
                    key={task}
                    className={
                      active
                        ? "flex items-start gap-3 bg-surface-container-lowest p-3 rounded-lg border border-primary/20 shadow-sm"
                        : "flex items-center gap-3"
                    }
                  >
                    {done ? (
                      <Icon name="check_circle" filled className="text-success shrink-0" size={20} />
                    ) : active ? (
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin shrink-0 mt-0.5" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-outline-variant shrink-0" />
                    )}
                    <span
                      className={
                        done
                          ? "font-body-sm text-body-sm text-on-surface-variant line-through"
                          : active
                          ? "font-body-sm text-body-sm font-bold text-primary"
                          : "font-body-sm text-body-sm text-outline"
                      }
                    >
                      {task}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
