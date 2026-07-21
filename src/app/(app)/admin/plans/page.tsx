import Link from "next/link";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { AdminPageHeader, StatusPill } from "@/components/admin";

const plans = [
  { id: "trial", name: "Trial", price: "Free", period: "14 days", subscribers: 624, mrr: "$0" },
  { id: "micro", name: "Micro", price: "$19", period: "/mo", subscribers: 1204, mrr: "$22,876" },
  { id: "standard", name: "Standard", price: "$49", period: "/mo", subscribers: 1842, mrr: "$84,320" },
  { id: "bridge", name: "Bridge", price: "$99", period: "/mo", subscribers: 386, mrr: "$38,214" },
  { id: "enterprise", name: "Enterprise", price: "Custom", period: "", subscribers: 96, mrr: "$142,500" },
];

export default function AdminPlansPage() {
  return (
    <AdminShell eyebrow="Admin Console" title="Plans">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <AdminPageHeader
          title="Plans"
          subtitle="Configure pricing tiers, credit allowances, and usage limits."
          actions={
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-body-sm text-body-sm font-semibold hover:bg-primary-container transition-colors">
              <Icon name="add" size={18} />
              Create Plan
            </button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {plans.map((p) => (
            <Link
              key={p.id}
              href={`/admin/plans/${p.id}`}
              className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:border-primary transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{p.name}</h3>
                <StatusPill label="Active" tone="success" />
              </div>
              <p className="mb-4">
                <span className="text-2xl font-bold text-on-surface">{p.price}</span>
                <span className="text-on-surface-variant text-[13px]">{p.period}</span>
              </p>
              <div className="mt-auto pt-4 border-t border-outline-variant space-y-1.5 text-[12px]">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Subscribers</span>
                  <span className="font-semibold text-on-surface">{p.subscribers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">MRR</span>
                  <span className="font-semibold text-on-surface">{p.mrr}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
