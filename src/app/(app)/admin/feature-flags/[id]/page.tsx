"use client";

import { use, useState } from "react";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { Breadcrumb } from "@/components/admin";

const sections = ["Basic Information", "Default State", "Rollout", "Targeting Rules", "Variants", "Dependencies", "Schedule", "Audit History"];

const initialRules = [
  { field: "Plan", operator: "equals", value: "Standard or higher" },
  { field: "Workspace", operator: "is", value: "Beta Tester" },
  { field: "User Email", operator: "matches", value: "*@editorialge.com" },
];

export default function FeatureFlagEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [defaultState, setDefaultState] = useState<"enabled" | "disabled">("enabled");
  const [rollout, setRollout] = useState(25);
  const [rules, setRules] = useState(initialRules);

  return (
    <AdminShell eyebrow="Admin Console" title="Feature Flag Editor">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <Breadcrumb items={[{ label: "Feature Flags", href: "/admin/feature-flags" }, { label: id }]} />

        <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg mb-6">
          <Icon name="info" className="text-primary mt-0.5" size={20} />
          <p className="text-[13px] text-on-surface-variant">
            This flag currently affects approximately <strong className="text-on-surface">1,246 users</strong> across{" "}
            <strong className="text-on-surface">318 workspaces</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <nav className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-24 space-y-1">
              {sections.map((s, i) => (
                <a
                  key={s}
                  href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`block px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                    i < 4 ? "text-on-surface-variant hover:bg-surface-container hover:text-primary" : "text-outline"
                  }`}
                >
                  {s}
                </a>
              ))}
            </div>
          </nav>

          <div className="lg:col-span-7 space-y-6">
            <div id="basic-information" className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 scroll-mt-24">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Basic Information</h3>
                <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded uppercase">Production Environment</span>
                <span className="px-2 py-0.5 bg-success/10 text-success text-[10px] font-bold rounded uppercase">Active Status</span>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Display Name</label>
                  <input defaultValue="Social Publishing Beta" className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
                </div>
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Flag Key</label>
                  <div className="flex items-center gap-2 px-3 py-2.5 bg-surface-container-low border border-outline-variant rounded-lg text-[13px] font-mono text-on-surface-variant">
                    {id}
                    <Icon name="content_copy" size={14} className="ml-auto cursor-pointer hover:text-primary" />
                  </div>
                </div>
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Description</label>
                  <textarea
                    rows={2}
                    defaultValue="Enables scheduled publishing to connected social accounts directly from the editor."
                    className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px] resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Related Feature</label>
                    <select className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]">
                      <option>Marketing Tools</option>
                      <option>Core Editor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Owner</label>
                    <select className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]">
                      <option>Sarah Chen</option>
                      <option>Admin Team</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div id="default-state" className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 scroll-mt-24">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Default State</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setDefaultState("disabled")}
                  className={`p-4 rounded-lg border-2 text-left transition-colors ${defaultState === "disabled" ? "border-primary bg-primary/5" : "border-outline-variant"}`}
                >
                  <p className="font-bold text-on-surface text-[13px]">Disabled (False)</p>
                </button>
                <button
                  onClick={() => setDefaultState("enabled")}
                  className={`p-4 rounded-lg border-2 text-left transition-colors ${defaultState === "enabled" ? "border-primary bg-primary/5" : "border-outline-variant"}`}
                >
                  <p className="font-bold text-on-surface text-[13px]">Enabled (True)</p>
                </button>
              </div>
            </div>

            <div id="rollout" className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 scroll-mt-24">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Rollout Configuration</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-1.5">
                    <label className="font-body-sm text-body-sm font-medium text-on-surface">Percentage Rollout</label>
                    <span className="text-primary font-bold text-[13px]">{rollout}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={rollout}
                    onChange={(e) => setRollout(Number(e.target.value))}
                    className="w-full h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-body-sm text-body-sm text-on-surface">Stable Assignment</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Start Date</label>
                    <input placeholder="YYYY-MM-DD" className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
                  </div>
                  <div>
                    <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">End Date</label>
                    <input placeholder="YYYY-MM-DD" className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
                  </div>
                </div>
              </div>
            </div>

            <div id="targeting-rules" className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 scroll-mt-24">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Targeting Rules</h3>
              <div className="space-y-3">
                {rules.map((r, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-surface-container-low rounded-lg">
                    <Icon name="drag_indicator" size={18} className="text-outline shrink-0" />
                    <select defaultValue={r.field} className="px-2 py-1.5 bg-white border border-outline-variant rounded text-[12px] shrink-0">
                      <option>Plan</option>
                      <option>Workspace</option>
                      <option>User Email</option>
                    </select>
                    <select defaultValue={r.operator} className="px-2 py-1.5 bg-white border border-outline-variant rounded text-[12px] shrink-0">
                      <option>equals</option>
                      <option>is</option>
                      <option>matches</option>
                    </select>
                    <input defaultValue={r.value} className="flex-1 px-2 py-1.5 bg-white border border-outline-variant rounded text-[12px] min-w-0" />
                    <button onClick={() => setRules((rs) => rs.filter((_, idx) => idx !== i))} className="text-outline hover:text-error transition-colors shrink-0">
                      <Icon name="delete" size={18} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setRules((rs) => [...rs, { field: "Plan", operator: "equals", value: "" }])}
                  className="flex items-center gap-1.5 text-primary text-[13px] font-semibold hover:underline"
                >
                  <Icon name="add" size={16} />
                  Add Rule
                </button>
                <button className="flex items-center gap-1.5 text-on-surface-variant text-[13px] font-semibold hover:underline">
                  <Icon name="folder_open" size={16} />
                  Add Rule Group
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="sticky top-24 space-y-4">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Impact Summary</h3>
                <SummaryRow label="Estimated Users" value="1,246" />
                <SummaryRow label="Estimated Workspaces" value="318" />
                <SummaryRow label="Current Overrides" value="14" />
                <SummaryRow label="Dependencies" value="None" />
                <div className="pt-3 border-t border-outline-variant text-[11px] text-outline">
                  Last Published 2h ago by Sarah Chen
                </div>
                <button className="w-full py-2 border border-outline-variant rounded-lg text-[12px] font-medium text-on-surface hover:bg-surface-container transition-colors">
                  Preview Matching Users
                </button>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 space-y-2">
                <button className="w-full py-2.5 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface hover:bg-surface-container transition-colors">
                  Save Draft
                </button>
                <button className="w-full py-2.5 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface hover:bg-surface-container transition-colors">
                  Preview Impact
                </button>
                <button className="w-full py-2.5 bg-primary text-on-primary rounded-lg text-[13px] font-bold hover:bg-primary-container transition-colors">
                  Publish Changes
                </button>
                <button className="w-full py-2.5 text-error text-[13px] font-medium hover:bg-error/5 rounded-lg transition-colors">
                  Emergency Disable
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-[13px]">
      <span className="text-on-surface-variant">{label}</span>
      <span className="font-bold text-on-surface">{value}</span>
    </div>
  );
}
