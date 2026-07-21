"use client";

import { ReactNode, useState } from "react";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";

export type SummaryRow = { label: string; value: string };

export function FormToolWorkspace({
  toolTitle,
  toolIcon,
  description,
  fields,
  summary,
  credits,
  tips,
  resultPreview,
}: {
  toolTitle: string;
  toolIcon: string;
  description: string;
  fields: ReactNode;
  summary: SummaryRow[];
  credits: number;
  tips: string[];
  resultPreview: ReactNode;
}) {
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);

  function handleGenerate() {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 1000);
  }

  return (
    <AppShell eyebrow="Content Intelligence" title={toolTitle} credits={2500}>
      <div className="p-6 md:p-8 bg-surface-container-low/30 min-h-[calc(100vh-64px)]">
        <div className="mb-8">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">{toolTitle}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-[1200px]">
          <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-outline-variant flex items-center gap-3 bg-surface-container-low/40">
              <div className="w-8 h-8 rounded-lg bg-primary-container/10 flex items-center justify-center">
                <Icon name={toolIcon} className="text-primary" size={20} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Configuration</h3>
            </div>

            <div className="p-6 space-y-6">{fields}</div>

            {generated && (
              <div className="px-6 pb-6">
                <div className="border-t border-outline-variant pt-6">
                  <h4 className="font-body-sm text-body-sm font-bold text-on-surface mb-3 flex items-center gap-2">
                    <Icon name="auto_awesome" className="text-primary" size={18} />
                    Generated Result
                  </h4>
                  <div className="bg-surface-container-low border border-outline-variant rounded-lg p-5 font-body-md text-body-md text-on-surface leading-relaxed">
                    {resultPreview}
                  </div>
                </div>
              </div>
            )}

            <div className="px-6 py-4 bg-surface-container-low/40 border-t border-outline-variant flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <Icon name="local_activity" size={18} />
                <span className="font-label-md text-label-md">
                  Estimated Credits: <strong className="text-on-surface">{credits} Credits</strong>
                </span>
              </div>
              <button
                onClick={handleGenerate}
                disabled={generating}
                className="bg-primary hover:bg-primary-container text-on-primary font-body-sm text-body-sm font-semibold px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-sm disabled:opacity-60"
              >
                <Icon name={generating ? "progress_activity" : "auto_awesome"} className={generating ? "animate-spin" : ""} size={18} />
                {generating ? "Generating…" : generated ? "Regenerate" : `Generate ${toolTitle.split(" ")[0]}`}
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[304px] flex flex-col gap-6 shrink-0">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-5">
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">Content Summary</h4>
              <div className="space-y-3 text-[13px]">
                {summary.map((row) => (
                  <div key={row.label} className="flex justify-between gap-2">
                    <span className="text-on-surface-variant">{row.label}</span>
                    <span className="text-on-surface font-medium truncate max-w-[140px] text-right" title={row.value}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <hr className="my-4 border-outline-variant" />
              <div className="flex justify-between items-center text-[13px] mb-5">
                <span className="text-on-surface-variant">Est. Time</span>
                <span className="text-on-surface font-medium">2-3 mins</span>
              </div>
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-3 flex gap-2">
                <Icon name="check_circle" className="text-secondary mt-0.5" size={16} />
                <p className="text-[12px] text-on-secondary-container leading-tight">
                  <strong>Ready to Generate</strong> — all required fields are complete.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="lightbulb" className="text-tertiary" size={20} />
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Tips</h4>
              </div>
              <ul className="text-[13px] text-on-surface-variant space-y-2.5 list-disc pl-4 marker:text-outline-variant">
                {tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

export function FieldRow({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>;
}

export function TextField({ label, defaultValue, hint }: { label: string; defaultValue: string; hint?: string }) {
  return (
    <div className="space-y-1.5">
      <label className="font-body-sm text-body-sm font-medium text-on-surface block">{label}</label>
      <input
        defaultValue={defaultValue}
        className="w-full px-3 py-2 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
      />
      {hint && <p className="text-[11px] text-on-surface-variant">{hint}</p>}
    </div>
  );
}

export function TextAreaField({ label, defaultValue, badge }: { label: string; defaultValue: string; badge?: string }) {
  return (
    <div className="space-y-1.5">
      <label className="font-body-sm text-body-sm font-medium text-on-surface flex justify-between">
        {label}
        {badge && <span className="text-outline-variant text-[11px]">{badge}</span>}
      </label>
      <textarea
        defaultValue={defaultValue}
        rows={3}
        className="w-full px-3 py-2 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
      />
    </div>
  );
}

export function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="space-y-1.5">
      <label className="font-body-sm text-body-sm font-medium text-on-surface block">{label}</label>
      <div className="relative">
        <select className="w-full pl-3 pr-10 py-2 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <Icon name="expand_more" className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none" size={20} />
      </div>
    </div>
  );
}
