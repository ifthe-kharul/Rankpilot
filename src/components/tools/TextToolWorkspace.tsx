"use client";

import { ReactNode, useState } from "react";
import { AppShell } from "@/components/shell/AppShell";
import { Button, Icon } from "@/components/ui";

export function TextToolWorkspace({
  toolTitle,
  toolIcon,
  settingsPanel,
  inputLabel = "Original Input",
  outputLabel,
  defaultInput,
  outputText,
  outputMeta,
  actionLabel,
  onRun,
}: {
  toolTitle: string;
  toolIcon: string;
  settingsPanel: ReactNode;
  inputLabel?: string;
  outputLabel: string;
  defaultInput: string;
  outputText: string;
  outputMeta?: ReactNode;
  actionLabel: string;
  onRun?: () => void;
}) {
  const [input, setInput] = useState(defaultInput);
  const [running, setRunning] = useState(false);
  const [hasResult, setHasResult] = useState(true);

  function handleRun() {
    setRunning(true);
    setHasResult(false);
    onRun?.();
    setTimeout(() => {
      setRunning(false);
      setHasResult(true);
    }, 1200);
  }

  return (
    <AppShell eyebrow="Writing Tools" title={toolTitle}>
      <div className="flex-1 flex flex-col md:flex-row bg-background p-6 gap-6 min-h-[calc(100vh-64px)]">
        <aside className="w-full md:w-72 shrink-0 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm flex flex-col p-5">
          {settingsPanel}
        </aside>

        <div className="flex-1 flex flex-col gap-4 min-w-0">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
              <Icon name={toolIcon} className="text-primary" />
              {toolTitle} Canvas
            </h3>
            <Button onClick={handleRun} disabled={running}>
              {running ? (
                <>
                  <Icon name="progress_activity" className="animate-spin" size={18} />
                  Processing…
                </>
              ) : (
                <>
                  <Icon name="auto_awesome" size={18} />
                  {actionLabel}
                </>
              )}
            </Button>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline-variant border border-outline-variant rounded-xl overflow-hidden shadow-sm min-h-[500px]">
            <div className="flex flex-col bg-surface-container-lowest">
              <div className="h-12 flex items-center justify-between px-4 border-b border-outline-variant bg-surface-container-low/50 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-on-surface-variant" />
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    {inputLabel}
                  </span>
                </div>
                <span className="text-xs text-on-surface-variant">
                  {input.trim().split(/\s+/).filter(Boolean).length} words
                </span>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-6 resize-none outline-none font-body-md text-body-md leading-relaxed text-on-surface-variant bg-transparent"
              />
            </div>

            <div className="flex flex-col bg-surface-container-lowest relative">
              <div className="h-12 flex items-center justify-between px-4 border-b border-outline-variant bg-surface-container-low/50 shrink-0">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-primary ${running ? "animate-pulse" : ""}`} />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{outputLabel}</span>
                </div>
                {outputMeta}
              </div>
              <div className="flex-1 p-6 overflow-y-auto font-body-md text-body-md leading-relaxed text-on-surface">
                {running ? (
                  <div className="space-y-3 animate-pulse">
                    <div className="h-4 w-full bg-surface-container rounded" />
                    <div className="h-4 w-11/12 bg-surface-container rounded" />
                    <div className="h-4 w-full bg-surface-container rounded" />
                    <div className="h-4 w-4/5 bg-surface-container rounded" />
                  </div>
                ) : hasResult ? (
                  outputText
                ) : (
                  <p className="text-on-surface-variant italic">Run the tool to see results here.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
