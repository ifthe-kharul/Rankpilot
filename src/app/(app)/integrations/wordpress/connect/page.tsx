"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";
import { Breadcrumb } from "@/components/admin";

const steps = ["Site Details", "Authentication", "Publishing Defaults", "Test & Complete"];

export default function ConnectWordPressWizardPage() {
  const router = useRouter();
  const [siteUrl, setSiteUrl] = useState("");

  return (
    <AppShell eyebrow="Integrations · WordPress" title="Connect Site">
      <div className="p-container-padding max-w-[1400px] mx-auto">
        <Breadcrumb
          items={[
            { label: "Integrations", href: "/integrations" },
            { label: "WordPress", href: "/integrations/wordpress" },
            { label: "Connect Site" },
          ]}
        />

        <div className="mb-10">
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Connect WordPress Site</h1>
          <p className="text-on-surface-variant font-body-md text-body-md mt-2">
            Set up a secure bridge between RankPilot and your CMS for seamless publishing.
          </p>
        </div>

        <div className="mb-12 border-b border-outline-variant">
          <div className="flex justify-between max-w-3xl">
            {steps.map((s, i) => (
              <div key={s} className={`pb-4 flex items-center gap-2 px-2 ${i === 0 ? "" : "text-on-surface-variant opacity-60"}`}>
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    i === 0 ? "bg-primary text-on-primary" : "border border-outline"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="font-body-sm text-body-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-8 shadow-sm">
              <h3 className="font-headline-sm text-headline-sm mb-6">General Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface">Site Name</label>
                  <input
                    placeholder="e.g. My Tech Blog"
                    className="bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <p className="text-label-sm text-on-surface-variant">Internal label for your site.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface">Connection Method</label>
                  <div className="relative">
                    <select className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option>WP Application Password</option>
                      <option>OAuth 2.0 (Premium)</option>
                      <option>Custom API Key</option>
                    </select>
                    <Icon name="expand_more" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface">WordPress Site URL</label>
                  <div className="relative">
                    <input
                      value={siteUrl}
                      onChange={(e) => setSiteUrl(e.target.value)}
                      placeholder="https://example.com"
                      type="url"
                      className="w-full bg-surface border border-outline-variant rounded-lg pl-12 pr-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    <Icon name="language" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface">Admin URL (Optional)</label>
                  <div className="relative">
                    <input
                      placeholder="https://example.com/wp-admin"
                      type="url"
                      className="w-full bg-surface border border-outline-variant rounded-lg pl-12 pr-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    <Icon name="settings" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-surface-container-low border border-primary/10 rounded-lg p-4 flex gap-4">
                <Icon name="info" className="text-primary shrink-0" />
                <div className="space-y-1">
                  <p className="font-label-md text-label-md text-on-surface">Recommended Connection</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    For maximum security and ease of setup, we recommend using <strong>WordPress Application Passwords</strong>. These are
                    unique 24-character codes that allow RankPilot to connect without sharing your main password. You can manage these in
                    your WP User Profile settings.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link
                href="/integrations/wordpress"
                className="px-6 py-3 font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors flex items-center gap-2"
              >
                <Icon name="arrow_back" size={18} />
                Cancel
              </Link>
              <button
                onClick={() => router.push("/integrations/wordpress")}
                className="bg-primary text-on-primary px-8 py-3 rounded-lg font-body-sm text-body-sm font-semibold hover:shadow-lg active:scale-95 transition-all flex items-center gap-2"
              >
                Continue to Authentication
                <Icon name="arrow_forward" size={18} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
              <div className="bg-surface-container-high px-6 py-4 border-b border-outline-variant">
                <h4 className="font-label-md text-label-md text-on-surface">Connection Summary</h4>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-outline-variant">
                  <span className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Current Step</span>
                  <span className="text-label-md font-bold text-primary">01 / 04</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-outline-variant">
                  <span className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Site URL</span>
                  <span className={`text-label-md truncate max-w-[140px] ${siteUrl ? "text-primary font-bold" : "text-on-surface-variant"}`}>
                    {siteUrl || "Not set"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Status</span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-error/10 text-error rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-error" />
                    <span className="text-xs font-bold">Not Tested</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-sidebar text-white rounded-xl p-6 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <Icon name="lock" className="text-white" />
                  </div>
                  <span className="font-headline-sm text-label-md">Enterprise Security</span>
                </div>
                <p className="text-label-sm text-white/70 leading-relaxed">
                  All credentials are encrypted using AES-256 standard before being stored. Connection logs are audited 24/7 to prevent
                  unauthorized access.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs">
                    <Icon name="check_circle" className="text-secondary-fixed-dim" size={18} />
                    Masked credential inputs
                  </li>
                  <li className="flex items-center gap-2 text-xs">
                    <Icon name="check_circle" className="text-secondary-fixed-dim" size={18} />
                    End-to-end SSL/TLS
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl p-6 border border-outline-variant">
              <h5 className="font-label-md text-on-surface mb-2">Need help?</h5>
              <p className="text-label-sm text-on-surface-variant">
                Check our <span className="text-primary font-semibold cursor-pointer hover:underline">Setup Guide</span> for common
                troubleshooting tips for WordPress REST API issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
