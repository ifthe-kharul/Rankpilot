"use client";

import { useState } from "react";
import { AppShell } from "@/components/shell/AppShell";
import { Button, Icon } from "@/components/ui";

const members = [
  { initials: "JB", avatarClass: "bg-primary-fixed text-primary", name: "Jordan Banks", email: "jordan@rankpilot.io", role: "Owner", roleClass: "bg-primary/10 text-primary", access: "All Projects", action: "Transfer Ownership" },
  { initials: "ER", avatarClass: "bg-secondary-container text-on-secondary-container", name: "Elena Rodriguez", email: "elena.r@rankpilot.io", role: "Admin", roleClass: "bg-surface-container-highest text-on-surface-variant", access: "All Projects", action: "Manage Access" },
  { initials: "MK", avatarClass: "bg-tertiary-fixed text-tertiary", name: "Marcus Knight", email: "marcus@contractor.com", role: "Writer", roleClass: "bg-surface-container-highest text-on-surface-variant", access: "3 Projects", action: "Manage Access" },
  { initials: "SP", avatarClass: "bg-primary-fixed text-primary", name: "Sofia Petrova", email: "sofia@rankpilot.io", role: "Editor", roleClass: "bg-surface-container-highest text-on-surface-variant", access: "5 Projects", action: "Manage Access" },
  { initials: "TW", avatarClass: "bg-tertiary-fixed text-tertiary", name: "Tom Walsh", email: "tom@rankpilot.io", role: "Viewer", roleClass: "bg-surface-container-highest text-on-surface-variant", access: "1 Project", action: "Manage Access" },
];

const invitations = [
  { email: "priya@rankpilot.io", role: "Writer", sent: "2 days ago" },
  { email: "diego@rankpilot.io", role: "Editor", sent: "5 days ago" },
  { email: "hannah@contractor.com", role: "Viewer", sent: "1 week ago" },
];

const tabs = ["Members", "Invitations", "Permission Matrix", "Activity Log"];

export default function TeamPage() {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <AppShell eyebrow="Workspace" title="Team Management">
      <div className="p-container-padding max-w-[1200px] mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Team Management</h2>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-surface-container-high px-3 py-1 rounded-full border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-label-md font-label-md text-on-surface-variant">Total Seats Used: 12/15</span>
              </div>
              <span className="text-[12px] text-outline">3 seats remaining in your Enterprise Plan</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Icon name="upload" size={18} />
              Bulk Import
            </Button>
            <Button>
              <Icon name="person_add" size={18} />
              Invite Member
            </Button>
          </div>
        </div>

        <div className="border-b border-outline-variant">
          <nav className="flex gap-8 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-4 whitespace-nowrap font-label-md text-label-md flex items-center transition-colors border-b-2 -mb-px ${
                  tab === t ? "text-primary border-primary font-semibold" : "text-on-surface-variant border-transparent hover:text-primary"
                }`}
              >
                {t}
                {t === "Members" && <span className="ml-2 bg-surface-container-highest px-2 py-0.5 rounded-full text-[10px]">{members.length}</span>}
                {t === "Invitations" && <span className="ml-2 bg-surface-container-highest px-2 py-0.5 rounded-full text-[10px]">{invitations.length}</span>}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="px-6 py-4 text-label-md font-semibold text-on-surface-variant">Member</th>
                    <th className="px-6 py-4 text-label-md font-semibold text-on-surface-variant">Role</th>
                    <th className="px-6 py-4 text-label-md font-semibold text-on-surface-variant">Status</th>
                    <th className="px-6 py-4 text-label-md font-semibold text-on-surface-variant hidden md:table-cell">Access</th>
                    <th className="px-6 py-4 text-label-md font-semibold text-on-surface-variant text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {members.map((m) => (
                    <tr key={m.email} className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 font-bold shrink-0 ${m.avatarClass}`}>
                            {m.initials}
                          </div>
                          <div className="min-w-0">
                            <div className="text-label-md font-semibold text-on-surface truncate">{m.name}</div>
                            <div className="text-[12px] text-outline truncate">{m.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-[11px] font-bold rounded-full uppercase ${m.roleClass}`}>{m.role}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center text-[12px] text-secondary font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-body-md text-on-surface-variant hidden md:table-cell">{m.access}</td>
                      <td className="px-6 py-4 text-right space-x-3 whitespace-nowrap">
                        <button className="text-primary font-label-md text-label-md hover:underline">{m.action}</button>
                        <button className="text-on-surface-variant font-label-md text-label-md hover:text-primary">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Pending Invitations</h3>
              <div className="space-y-3">
                {invitations.map((inv) => (
                  <div key={inv.email} className="flex items-center justify-between gap-2 py-2 border-b border-outline-variant/40 last:border-0">
                    <div className="min-w-0">
                      <p className="font-body-sm text-body-sm text-on-surface truncate">{inv.email}</p>
                      <p className="text-[11px] text-outline">
                        {inv.role} • Sent {inv.sent}
                      </p>
                    </div>
                    <button className="text-outline hover:text-error transition-colors shrink-0">
                      <Icon name="close" size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Roles</h3>
              <div className="space-y-2 text-[13px] text-on-surface-variant">
                <p><strong className="text-on-surface">Owner</strong> — full billing & workspace control.</p>
                <p><strong className="text-on-surface">Admin</strong> — manage members and all projects.</p>
                <p><strong className="text-on-surface">Editor</strong> — create and edit assigned projects.</p>
                <p><strong className="text-on-surface">Viewer</strong> — read-only access.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
