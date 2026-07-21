"use client";

import { useState } from "react";
import { AppShell } from "@/components/shell/AppShell";
import { Button, Icon } from "@/components/ui";

type Issue = {
  id: string;
  type: "Spelling" | "Grammar" | "Clarity";
  badgeClass: string;
  borderClass: string;
  desc: string;
  detail?: string;
  suggestions: string[];
};

const issues: Issue[] = [
  {
    id: "1",
    type: "Spelling",
    badgeClass: "bg-error-container text-on-error-container",
    borderClass: "border-l-error",
    desc: "Found misspelling of “concice”.",
    suggestions: ["concise"],
  },
  {
    id: "2",
    type: "Grammar",
    badgeClass: "bg-primary-fixed text-on-primary-fixed",
    borderClass: "border-l-primary",
    desc: "Subject-verb agreement issue.",
    detail: '"workflow allow users" should be "workflow allows users".',
    suggestions: ["allows"],
  },
  {
    id: "3",
    type: "Clarity",
    badgeClass: "bg-secondary-container text-on-secondary-container",
    borderClass: "border-l-secondary",
    desc: 'Wordy phrase found. "constantly in a state of flux and changing"',
    suggestions: ["evolving", "dynamic"],
  },
];

const filters = ["All (12)", "Grammar", "Spelling", "Style", "Tone"];

export default function GrammarCheckerPage() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <AppShell eyebrow="Writing Tools" title="Grammar & Spell Checker">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
        <section className="flex-1 flex flex-col bg-surface-container-lowest overflow-y-auto">
          <div className="px-6 md:px-10 py-8 border-b border-outline-variant flex flex-col gap-6 sticky top-0 bg-surface-container-lowest z-10">
            <div className="flex justify-between items-end flex-wrap gap-4">
              <div>
                <h1 className="font-headline-lg text-headline-lg text-on-background">Grammar & Spell Checker</h1>
                <p className="text-on-surface-variant mt-1 font-body-md text-body-md">
                  Refine your writing with AI-powered precision and SEO-aligned clarity.
                </p>
              </div>
              <Button size="lg">
                <Icon name="bolt" />
                Scan Document
              </Button>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex p-1 bg-surface-container rounded-xl gap-1">
                <button className="px-5 py-2 bg-white text-primary font-label-md text-label-md rounded-lg shadow-sm">Paste Text</button>
                <button className="px-5 py-2 text-on-surface-variant font-label-md text-label-md rounded-lg hover:bg-white/50 transition-colors flex items-center gap-2">
                  <Icon name="upload_file" size={18} />
                  Upload File
                </button>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant">
                <span className="font-label-md text-label-md">1,248 Words</span>
                <div className="w-px h-4 bg-outline-variant" />
                <span className="font-label-md text-label-md">English (US)</span>
              </div>
            </div>
          </div>

          <div className="flex-1 px-6 md:px-10 py-12 max-w-editor-max-width mx-auto w-full">
            <div className="font-body-lg text-body-lg text-on-surface min-h-[400px] leading-relaxed space-y-6">
              <p>
                The modern digital landscape is{" "}
                <mark className="bg-secondary-container/40 text-on-surface rounded px-0.5" title="Clarity: Wordy. Consider 'evolving'.">
                  constantly in a state of flux and changing
                </mark>{" "}
                rapidly. As content creators, we must ensure that our messaging is{" "}
                <mark className="bg-error-container/60 text-on-surface rounded px-0.5 underline decoration-error decoration-wavy" title="Spelling: 'concice'">
                  concice
                </mark>{" "}
                and impactful. Rankpilot aims to streamline this process by providing a{" "}
                <mark className="bg-primary-fixed/50 text-on-surface rounded px-0.5" title="Grammar">
                  highly advanced and sophisticated
                </mark>{" "}
                toolset that caters to the needs of professional editors.
              </p>
              <p>
                When you{" "}
                <mark className="bg-error-container/60 text-on-surface rounded px-0.5 underline decoration-error decoration-wavy" title="Spelling: 'wright'">
                  wright
                </mark>{" "}
                content, it&apos;s easy to overlook minor{" "}
                <mark className="bg-error-container/60 text-on-surface rounded px-0.5 underline decoration-error decoration-wavy" title="Spelling: 'puncuation'">
                  puncuation
                </mark>{" "}
                errors or awkward phrasing. Our AI analysis engine works in real-time to identify these issues{" "}
                <mark className="bg-primary-fixed/50 text-on-surface rounded px-0.5" title="Grammar">
                  as well as provide
                </mark>{" "}
                actionable suggestions.
              </p>
            </div>
          </div>
        </section>

        <aside className="w-full lg:w-[400px] bg-surface-container-low border-l border-outline-variant flex flex-col shrink-0">
          <div className="p-6 bg-surface-container-lowest border-b border-outline-variant">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Writing Quality</h3>
              <Icon name="info" className="text-outline" size={20} />
            </div>
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
                  <circle className="text-surface-container-high" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" strokeWidth="8" />
                  <circle className="text-primary" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" strokeDasharray="264" strokeDashoffset="47" strokeWidth="8" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-headline-md text-headline-md text-primary">82</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Great</span>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <div className="flex justify-between text-label-md font-label-md mb-1">
                    <span>Readability</span>
                    <span>74%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: "74%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-label-md font-label-md mb-1">
                    <span>SEO Optimization</span>
                    <span>89%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "89%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-b border-outline-variant flex flex-wrap gap-2 bg-surface-container-lowest">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-label-sm font-label-sm rounded-full transition-colors ${
                  filter === f
                    ? "bg-primary text-white"
                    : "bg-white text-on-surface-variant border border-outline-variant hover:border-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {issues.map((issue) => (
              <div key={issue.id} className={`bg-surface-container-lowest rounded-xl border-l-4 ${issue.borderClass} p-4 shadow-sm hover:shadow-md transition-all`}>
                <div className="flex justify-between items-start mb-2">
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded ${issue.badgeClass}`}>{issue.type}</span>
                  <Icon name="more_vert" className="text-on-surface-variant" size={18} />
                </div>
                <p className="text-body-sm text-on-surface mb-1">{issue.desc}</p>
                {issue.detail && <p className="text-body-sm text-on-surface-variant mb-3">{issue.detail}</p>}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {issue.suggestions.map((s) => (
                    <button key={s} className="px-3 py-1 bg-primary/10 text-primary font-bold text-body-sm rounded hover:bg-primary/20 transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-outline-variant">
                  <div className="flex gap-2">
                    <button className="text-primary font-label-md text-label-md hover:underline">Accept</button>
                    <button className="text-on-surface-variant font-label-md text-label-md hover:underline">Dismiss</button>
                  </div>
                  <a href="#" className="text-outline text-label-sm font-label-sm hover:text-primary transition-colors">
                    View Explanation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
