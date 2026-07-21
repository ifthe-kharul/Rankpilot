"use client";

import { useState } from "react";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";

const categories = [
  { label: "General", icon: "settings", active: true },
  { label: "Authentication", icon: "lock" },
  { label: "Security", icon: "shield" },
  { label: "Rate Limits", icon: "speed" },
  { label: "Credits", icon: "account_balance_wallet" },
  { label: "AI Generation", icon: "smart_toy" },
  { label: "Files & Storage", icon: "folder" },
  { label: "Email", icon: "mail" },
  { label: "Notifications", icon: "notifications" },
  { label: "Billing", icon: "payments" },
  { label: "Integrations", icon: "hub" },
  { label: "Publishing", icon: "publish" },
  { label: "Legal", icon: "gavel" },
  { label: "Maintenance", icon: "build", danger: true },
  { label: "Data & Retention", icon: "database" },
  { label: "Admin Access", icon: "admin_panel_settings" },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">{title}</h3>
      <div className="flex items-center gap-1">
        <button title="View Change History" className="p-1.5 text-outline hover:text-primary transition-colors">
          <Icon name="history" size={18} />
        </button>
        <button title="Reset Section" className="p-1.5 text-outline hover:text-error transition-colors">
          <Icon name="restart_alt" size={18} />
        </button>
      </div>
    </div>
  );
}

export default function AdminSettingsPage() {
  const [dirty, setDirty] = useState(false);

  return (
    <AdminShell eyebrow="Admin Console" title="System Settings">
      <div className="p-stack-lg max-w-[1500px] mx-auto pb-24">
        <div className="mb-6">
          <h1 className="font-headline-lg text-headline-lg text-on-surface">System Settings</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Configure global RankPilot security, credits, AI, billing and platform behavior.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <nav className="lg:col-span-2">
            <div className="relative mb-3">
              <Icon name="search" size={16} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-outline" />
              <input placeholder="Search settings..." className="w-full pl-8 pr-2 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-[12px]" />
            </div>
            <div className="space-y-0.5">
              {categories.map((c) => (
                <button
                  key={c.label}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-left transition-colors ${
                    c.active
                      ? "bg-primary/10 text-primary font-bold"
                      : c.danger
                      ? "text-error hover:bg-error/5"
                      : "text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  <Icon name={c.icon} size={16} />
                  {c.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="lg:col-span-7 space-y-6" onChange={() => setDirty(true)}>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <SectionHeader title="Application" />
              <div className="grid grid-cols-2 gap-4">
                <TextField label="Product Name" defaultValue="RankPilot" />
                <TextField label="App URL" defaultValue="https://app.rankpilot.io" mono />
                <TextField label="Support Email" defaultValue="support@rankpilot.io" />
                <SelectField label="Default Language" options={["English (US)", "English (UK)", "Spanish", "French"]} />
                <SelectField label="Default Timezone" options={["UTC", "EST", "PST"]} />
                <SelectField label="Date Format" options={["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"]} />
                <SelectField label="Default Currency" options={["USD", "EUR", "GBP"]} />
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <SectionHeader title="Environment" />
              <div className="grid grid-cols-2 gap-4">
                <TextField label="Environment Name" defaultValue="Production" disabled />
                <SelectField label="Default Workspace Region" options={["US East", "EU Frankfurt", "Asia Pacific (Tokyo)"]} />
                <TextField label="Public App URL" defaultValue="https://app.rankpilot.io" mono />
                <TextField label="API Base URL" defaultValue="https://api.rankpilot.io/v1" mono />
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <SectionHeader title="Workspace Defaults" />
              <div className="grid grid-cols-2 gap-4">
                <TextField label="Default Workspace Name" defaultValue="{{User}}'s Workspace" />
                <SelectField label="Default Member Role" options={["Viewer", "Editor", "Admin"]} />
                <TextField label="Default Project Limit" defaultValue="10" />
                <SelectField label="Default Language" options={["Inherit from System", "English (US)"]} />
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <SectionHeader title="System Identity" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FileUpload label="Application Logo" hint="SVG or PNG, max 2MB" icon="image" />
                <FileUpload label="Favicon" hint="ICO or PNG, 32×32" icon="favorite" />
                <FileUpload label="Email Logo" hint="PNG or JPG, max 2MB" icon="mail" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="sticky top-24 space-y-4">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5">
                <h4 className="font-body-sm text-body-sm font-bold text-on-surface mb-3">Configuration Context</h4>
                <div className="space-y-2 text-[12px]">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Environment</span>
                    <span className="font-semibold text-on-surface">Production</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Version</span>
                    <span className="font-semibold text-on-surface">v2.4.1</span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5">
                <h4 className="font-body-sm text-body-sm font-bold text-on-surface mb-3">Audit Trail</h4>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[11px]">SC</div>
                  <div>
                    <p className="text-[12px] font-medium text-on-surface">Sarah Chen</p>
                    <p className="text-[11px] text-outline">sarah.chen@rankpilot.io</p>
                  </div>
                </div>
                <p className="text-[11px] text-outline mb-3">Updated Oct 24, 2024, 14:32 UTC</p>
                <button className="w-full py-2 border border-outline-variant rounded-lg text-[12px] font-medium text-on-surface hover:bg-surface-container transition-colors">
                  View Global History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {dirty && (
        <div className="fixed bottom-0 left-0 md:left-sidebar-width-expanded right-0 bg-surface-container-lowest border-t border-outline-variant px-6 py-4 flex items-center justify-between shadow-lg z-30">
          <p className="text-[13px] text-on-surface-variant">
            <strong className="text-on-surface">Unsaved changes</strong> — You have modified 3 settings in this section.
          </p>
          <div className="flex items-center gap-3">
            <button onClick={() => setDirty(false)} className="px-4 py-2 text-on-surface-variant text-[13px] font-medium hover:bg-surface-container rounded-lg transition-colors">
              Discard Changes
            </button>
            <button onClick={() => setDirty(false)} className="px-5 py-2 bg-primary text-on-primary rounded-lg text-[13px] font-bold hover:bg-primary-container transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      )}
    </AdminShell>
  );
}

function TextField({ label, defaultValue, mono, disabled }: { label: string; defaultValue: string; mono?: boolean; disabled?: boolean }) {
  return (
    <div>
      <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">{label}</label>
      <input
        defaultValue={defaultValue}
        disabled={disabled}
        className={`w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px] disabled:opacity-60 disabled:cursor-not-allowed ${mono ? "font-mono" : ""}`}
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">{label}</label>
      <select className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function FileUpload({ label, hint, icon }: { label: string; hint: string; icon: string }) {
  return (
    <div>
      <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">{label}</label>
      <div className="border-2 border-dashed border-outline-variant rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
        <Icon name={icon} className="text-outline mx-auto mb-2" size={24} />
        <p className="text-[11px] text-outline">{hint}</p>
      </div>
    </div>
  );
}
