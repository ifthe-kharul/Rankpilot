"use client";

import { ReactNode, useState } from "react";

export function SettingSection({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mb-6">
      <label className="font-label-md text-label-md text-on-surface-variant block mb-3 uppercase tracking-wider">
        {label}
      </label>
      {children}
    </div>
  );
}

export function SegmentedTabs({ options, defaultValue }: { options: string[]; defaultValue?: string }) {
  const [active, setActive] = useState(defaultValue ?? options[0]);
  return (
    <div className="grid grid-cols-2 gap-2 p-1 bg-surface-container-low rounded-lg border border-outline-variant">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setActive(opt)}
          className={`py-2 text-xs font-bold rounded transition-colors ${
            active === opt
              ? "bg-white text-primary shadow-sm border border-outline-variant/50"
              : "text-on-surface-variant hover:bg-white/50"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function ChipGrid({ options, defaultValue }: { options: string[]; defaultValue?: string }) {
  const [active, setActive] = useState(defaultValue ?? options[0]);
  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setActive(opt)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all border ${
            active === opt
              ? "border-primary bg-primary/5 text-primary"
              : "border-outline-variant text-on-surface-variant hover:border-primary/50"
          }`}
        >
          {active === opt && <span className="w-2 h-2 rounded-full bg-primary" />}
          {opt}
        </button>
      ))}
    </div>
  );
}

export function CheckboxList({ options }: { options: string[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(options.map((o, i) => [o, i < 2]))
  );
  return (
    <div className="space-y-3">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={!!checked[opt]}
            onChange={() => setChecked((c) => ({ ...c, [opt]: !c[opt] }))}
            className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20"
          />
          <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
            {opt}
          </span>
        </label>
      ))}
    </div>
  );
}

export function InfoNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-auto pt-4 border-t border-outline-variant">
      <div className="p-3 bg-surface-container-low rounded-lg flex items-start gap-2">
        <span className="material-symbols-outlined text-primary text-sm">info</span>
        <p className="text-[10px] leading-tight text-on-surface-variant">{children}</p>
      </div>
    </div>
  );
}
