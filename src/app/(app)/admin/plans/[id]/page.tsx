"use client";

import { use } from "react";
import { AdminShell } from "@/components/shell/AdminShell";
import { Icon } from "@/components/ui";
import { Breadcrumb } from "@/components/admin";

const sections = [
  { id: "basic", label: "1. Basic Information" },
  { id: "pricing", label: "2. Pricing" },
  { id: "credits", label: "3. Credits" },
  { id: "limits", label: "4. Usage Limits" },
];

export default function PlanEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const name = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <AdminShell eyebrow="Admin Console" title="Plan Editor">
      <div className="p-stack-lg max-w-[1400px] mx-auto">
        <Breadcrumb items={[{ label: "Plans", href: "/admin/plans" }, { label: name }]} />

        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Edit Plan — {name}</h1>
        </div>

        <div className="flex items-start gap-3 p-4 bg-warning/10 border border-warning/20 rounded-lg mb-6">
          <Icon name="warning" className="text-warning mt-0.5" size={20} />
          <p className="text-[13px] text-on-surface-variant">Changes may affect 1,842 active subscribers.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <nav className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-24 space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block px-3 py-2 rounded-lg text-[13px] font-medium text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="lg:col-span-7 space-y-6">
            <div id="basic" className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 scroll-mt-24">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Basic Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Plan Name</label>
                  <input defaultValue={name} className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
                </div>
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Description</label>
                  <textarea
                    rows={2}
                    defaultValue="Everything you need to get started."
                    className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px] resize-none"
                  />
                </div>
              </div>
            </div>

            <div id="pricing" className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 scroll-mt-24">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Pricing</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Monthly Price</label>
                  <input defaultValue="$49" className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
                </div>
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Annual Price</label>
                  <input defaultValue="$490" className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
                </div>
              </div>
            </div>

            <div id="credits" className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 scroll-mt-24">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Credits</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Monthly Credit Allowance</label>
                  <input defaultValue="5,000" className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
                </div>
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Overage Rate (per 100)</label>
                  <input defaultValue="$1.20" className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
                </div>
                <label className="flex items-center gap-3 col-span-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                  <span className="text-[13px] text-on-surface">Allow unused credits to roll over (max 1 month)</span>
                </label>
              </div>
            </div>

            <div id="limits" className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 scroll-mt-24">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Usage Limits</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Max Team Members</label>
                  <input defaultValue="25" className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
                </div>
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Max Projects</label>
                  <input defaultValue="100" className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
                </div>
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Storage (GB)</label>
                  <input defaultValue="10" className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg text-[13px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="sticky top-24 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Summary</h3>
              <div className="flex justify-between text-[13px]">
                <span className="text-on-surface-variant">Subscribers</span>
                <span className="font-bold text-on-surface">1,842</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-on-surface-variant">MRR</span>
                <span className="font-bold text-on-surface">$84,320</span>
              </div>
              <div className="pt-4 border-t border-outline-variant space-y-2">
                <button className="w-full py-2.5 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface hover:bg-surface-container transition-colors">
                  Save Draft
                </button>
                <button className="w-full py-2.5 border border-outline-variant rounded-lg text-[13px] font-medium text-on-surface hover:bg-surface-container transition-colors">
                  Preview Changes
                </button>
                <button className="w-full py-2.5 bg-primary text-on-primary rounded-lg text-[13px] font-bold hover:bg-primary-container transition-colors">
                  Publish Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
