"use client";

import { use, useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { Breadcrumb, DetailTabs, StatusPill } from "@/components/admin";
import { CreditAdjustmentModal } from "@/components/admin/CreditAdjustmentModal";

const workspaces = [
  { name: "Rankpilot Media", members: 24, role: "Admin", href: "/admin/workspaces/ws_rankpilot_01" },
  { name: "Project Alpha", members: 8, role: "Editor", href: "/admin/workspaces/ws_project_alpha" },
];

const toolDistribution = [
  { name: "Content Creator", runs: 54 },
  { name: "Grammar Checker", runs: 82 },
  { name: "Rewriter", runs: 28 },
];

export default function UserDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [creditModalOpen, setCreditModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AdminShell eyebrow="Admin Console" title="User Details">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <Breadcrumb items={[{ label: "Users", href: "/admin/users" }, { label: "Ariful Islam" }]} />

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shrink-0">
              AI
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-headline-lg text-headline-lg text-on-surface">Ariful Islam</h1>
                <StatusPill label="Active" tone="success" />
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary/10 text-primary">
                  <Icon name="verified" size={12} />
                  Verified
                </span>
              </div>
              <p className="text-on-surface-variant text-[13px] mt-1">
                ariful@rankpilot.io <span className="mx-1.5 text-outline">•</span> ID: {id}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-[12px] text-on-surface-variant">
                <span>Joined <strong className="text-on-surface">May 12, 2026</strong></span>
                <span>Last Active <strong className="text-on-surface">8 minutes ago</strong></span>
                <Link href="/admin/workspaces/ws_rankpilot_01" className="hover:text-primary transition-colors">
                  Workspace <strong className="text-on-surface">Rankpilot Media</strong>
                </Link>
                <span>Plan <strong className="text-on-surface">Premium</strong></span>
                <span>Credits <strong className="text-on-surface">4,064</strong></span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface hover:bg-surface-container transition-colors">
              <Icon name="admin_panel_settings" size={18} />
              Impersonate
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface hover:bg-surface-container transition-colors">
              <Icon name="mail" size={18} />
              Email
            </button>
            <button
              onClick={() => setCreditModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-[13px] font-bold hover:bg-primary-container transition-colors"
            >
              <Icon name="add_circle" size={18} />
              Credits
            </button>
            <div className="relative">
              <button onClick={() => setMenuOpen((v) => !v)} className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
                <Icon name="more_vert" size={18} />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-1 w-56 bg-surface-container-lowest border border-outline-variant rounded-lg shadow-lg z-10 py-1">
                  {[
                    { label: "Reset Password", icon: "lock_reset" },
                    { label: "Sign Out Everywhere", icon: "logout" },
                    { label: "Suspend User", icon: "block", danger: true },
                    { label: "Delete User", icon: "delete_forever", danger: true },
                  ].map((item) => (
                    <button
                      key={item.label}
                      className={`w-full flex items-center gap-2 px-4 py-2 text-[13px] hover:bg-surface-container transition-colors ${item.danger ? "text-error" : "text-on-surface"}`}
                    >
                      <Icon name={item.icon} size={16} />
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <DetailTabs tabs={["Overview", "Workspaces", "Usage", "Credits", "Sessions", "Activity", "Security", "Admin Notes"]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Account Information</h3>
              <div className="grid grid-cols-2 gap-4 text-[13px]">
                <Field label="Full Name" value="Ariful Islam" />
                <Field label="Email Address" value="ariful@rankpilot.io" />
                <Field label="Timezone" value="Asia/Dhaka (UTC+6)" />
                <Field label="Language" value="English (US)" />
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Current Subscription</h3>
              <div className="flex items-center gap-3 mb-3">
                <Icon name="workspace_premium" className="text-primary" size={24} />
                <div>
                  <p className="font-bold text-on-surface">Premium Plan — $79/mo</p>
                  <p className="text-[12px] text-on-surface-variant">Billed Monthly</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-[13px] pt-3 border-t border-outline-variant">
                <span className="text-on-surface-variant">Next Renewal: <strong className="text-on-surface">June 12, 2026</strong></span>
                <a href="#" className="text-primary font-medium hover:underline">Manage Stripe</a>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Workspace Memberships</h3>
              <div className="space-y-2">
                {workspaces.map((w) => (
                  <Link
                    key={w.name}
                    href={w.href}
                    className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="business" className="text-outline" size={20} />
                      <div>
                        <p className="font-semibold text-on-surface text-[13px]">{w.name}</p>
                        <p className="text-[11px] text-outline">{w.members} Members</p>
                      </div>
                    </div>
                    <StatusPill label={w.role} tone="primary" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Usage (Current Period)</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <p className="text-[11px] text-outline uppercase">Words Generated</p>
                  <p className="text-lg font-bold text-on-surface">42,500</p>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <p className="text-[11px] text-outline uppercase">Tool Runs</p>
                  <p className="text-lg font-bold text-on-surface">128</p>
                </div>
              </div>
              <div className="space-y-2">
                {toolDistribution.map((t) => (
                  <div key={t.name} className="flex items-center justify-between text-[13px]">
                    <span className="text-on-surface-variant">{t.name}</span>
                    <span className="font-semibold text-on-surface">{t.runs} runs</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Security &amp; Auth</h3>
              <div className="space-y-3 text-[13px]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-on-surface-variant"><Icon name="password" size={18} /> Password</span>
                  <StatusPill label="Set" tone="success" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-on-surface-variant"><Icon name="g_mobiledata" size={18} /> Google SSO</span>
                  <StatusPill label="Connected" tone="success" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-on-surface-variant"><Icon name="admin_panel_settings" size={18} /> Two-Factor Auth</span>
                  <StatusPill label="Enabled" tone="success" />
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 flex items-center gap-2">
                <Icon name="edit_note" size={18} />
                Admin Notes
              </h3>
              <textarea
                rows={3}
                placeholder="Add private notes about this user..."
                className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px] resize-none"
              />
              <button className="mt-3 px-4 py-2 bg-primary text-on-primary rounded-lg text-[12px] font-bold hover:bg-primary-container transition-colors">
                Save Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <CreditAdjustmentModal
        open={creditModalOpen}
        onClose={() => setCreditModalOpen(false)}
        target={{ type: "User", name: "Ariful Islam (ariful@rankpilot.io)" }}
        currentBalance={4064}
      />
    </AdminShell>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wider text-outline mb-1">{label}</p>
      <p className="text-on-surface font-medium">{value}</p>
    </div>
  );
}
