"use client";

import { useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { AdminPageHeader, StatCard, StatusPill } from "@/components/admin";
import { CreditAdjustmentModal } from "@/components/admin/CreditAdjustmentModal";

const kpis = [
  { icon: "account_balance", label: "Credits Issued", value: "42.8M" },
  { icon: "bolt", label: "Credits Consumed", value: "31.6M", tone: "primary" as const },
  { icon: "savings", label: "Credits Remaining", value: "11.2M", tone: "success" as const },
  { icon: "shopping_cart", label: "Purchased Credits", value: "18.4M" },
  { icon: "redeem", label: "Bonus Credits", value: "2.6M" },
  { icon: "timer_off", label: "Expired Credits", value: "840K", tone: "warning" as const },
  { icon: "currency_exchange", label: "Refunded Credits", value: "126K" },
  { icon: "warning", label: "Credit Liability", value: "$118,400", tone: "error" as const },
];

const transactions = [
  { id: "TX_94821", date: "Oct 24, 14:22", who: "Acme Corp", whoHref: "/admin/workspaces/ws_8f92j3k1", type: "Purchase", amount: 5000, balance: 12400, source: "Stripe", status: "Completed" },
  { id: "TX_94820", date: "Oct 24, 14:10", who: "Alex Morgan", whoHref: "/admin/users/usr_5M9P44", type: "Job Reservation", amount: -12, balance: 7400, source: "Internal", status: "Pending" },
  { id: "TX_94819", date: "Oct 24, 13:58", who: "Global Tech", whoHref: "/admin/workspaces/ws_global_tech", type: "Plan Allocation", amount: 25000, balance: 25000, source: "Subscription", status: "Completed" },
  { id: "TX_94818", date: "Oct 24, 13:45", who: "Mike Ross", whoHref: "/admin/users/usr_2X7L18", type: "Bonus", amount: 500, balance: 1200, source: "Admin", status: "Completed" },
];

const statusTone: Record<string, "success" | "warning" | "error"> = {
  Completed: "success",
  Pending: "warning",
  Failed: "error",
};

const toolUsage = [
  { name: "Content Creator", pct: 45 },
  { name: "Rewriter", pct: 30 },
  { name: "Humanizer", pct: 15 },
  { name: "Other", pct: 10 },
];

export default function AdminCreditsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <AdminShell eyebrow="Admin Console" title="Credits">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <AdminPageHeader
          title="Credits"
          subtitle="Monitor and manage the complete Rankpilot credit economy."
          actions={
            <>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
                Export Ledger
              </button>
              <button className="px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container transition-colors">
                Process Refund
              </button>
              <button className="px-4 py-2 border border-secondary text-secondary rounded-lg font-body-sm text-body-sm font-semibold hover:bg-secondary/5 transition-colors">
                Issue Bonus
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-body-sm text-body-sm font-semibold hover:bg-primary-container transition-colors"
              >
                <Icon name="add_circle" size={18} />
                Adjust Credits
              </button>
            </>
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {kpis.map((k) => (
            <StatCard key={k.label} {...k} />
          ))}
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 mb-4 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Icon name="search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input placeholder="Search TX, user, or ID..." className="w-full pl-9 pr-3 py-2 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
          </div>
          {["Type: All", "Status: All", "Date: Last 7 Days"].map((f) => (
            <button key={f} className="flex items-center gap-2 px-3 py-2 bg-white border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface-variant hover:border-primary transition-colors">
              {f}
              <Icon name="expand_more" size={16} />
            </button>
          ))}
          <button className="text-primary text-[13px] font-medium hover:underline">Clear</button>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden mb-6">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low text-[11px] font-bold text-outline uppercase">
              <tr>
                <th className="px-4 py-3">Transaction ID</th>
                <th className="px-4 py-3">Date &amp; Time</th>
                <th className="px-4 py-3">User / Workspace</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3 text-right">Amount</th>
                <th className="px-4 py-3 text-right">Balance After</th>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-4 py-3 font-mono text-[12px] text-on-surface">{tx.id}</td>
                  <td className="px-4 py-3 text-[13px] text-on-surface-variant">{tx.date}</td>
                  <td className="px-4 py-3">
                    <Link href={tx.whoHref} className="text-[13px] text-primary hover:underline">
                      {tx.who}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-[13px] text-on-surface-variant">{tx.type}</td>
                  <td className={`px-4 py-3 text-right text-[13px] font-bold ${tx.amount < 0 ? "text-error" : "text-success"}`}>
                    {tx.amount > 0 ? "+" : ""}
                    {tx.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right text-[13px] text-on-surface">{tx.balance.toLocaleString()}</td>
                  <td className="px-4 py-3 text-[13px] text-on-surface-variant">{tx.source}</td>
                  <td className="px-4 py-3">
                    <StatusPill label={tx.status} tone={statusTone[tx.status]} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-outline hover:text-primary transition-colors">
                      <Icon name="more_vert" size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between px-4 py-3 border-t border-outline-variant text-[12px] text-on-surface-variant">
            <span>Showing 1-4 of 284,120 transactions</span>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded hover:bg-surface-container transition-colors">
                <Icon name="chevron_left" size={18} />
              </button>
              <button className="p-1.5 rounded hover:bg-surface-container transition-colors">
                <Icon name="chevron_right" size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Daily Credit Consumption</h3>
            <div className="h-40 bg-surface-container-low rounded-lg flex items-end px-4 py-4 gap-2">
              {[40, 55, 48, 70, 62, 80, 90].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/60 rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Usage by Tool</h3>
            <div className="space-y-3">
              {toolUsage.map((t) => (
                <div key={t.name}>
                  <div className="flex justify-between text-[13px] mb-1">
                    <span className="text-on-surface-variant">{t.name}</span>
                    <span className="font-semibold text-on-surface">{t.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: `${t.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CreditAdjustmentModal open={modalOpen} onClose={() => setModalOpen(false)} target={{ type: "User", name: "Search for user or workspace..." }} currentBalance={0} />
    </AdminShell>
  );
}
