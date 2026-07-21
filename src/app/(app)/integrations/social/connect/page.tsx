"use client";

import { useState } from "react";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";
import { Breadcrumb } from "@/components/admin";

const platforms = [
  { id: "facebook", name: "Facebook", desc: "Pages & Groups", icon: "thumb_up", iconClass: "bg-blue-600" },
  { id: "linkedin", name: "LinkedIn", desc: "Profiles & Companies", icon: "work", iconClass: "bg-[#0077b5]" },
  { id: "x", name: "X / Twitter", desc: "Standard Accounts", icon: "tag", iconClass: "bg-black" },
  { id: "instagram", name: "Instagram", desc: "Business Profiles", icon: "photo_camera", iconClass: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]" },
  { id: "pinterest", name: "Pinterest", desc: "Boards & Catalogs", icon: "push_pin", iconClass: "bg-[#E60023]" },
  { id: "youtube", name: "YouTube", desc: "Video Channels", icon: "play_circle", iconClass: "bg-[#FF0000]" },
];

const wizardSteps = [
  { icon: "key", label: "Authorize" },
  { icon: "fact_check", label: "Select Pages" },
  { icon: "rule", label: "Review" },
  { icon: "check", label: "Complete" },
];

const pages = [
  { name: "TechVentures Official", followers: "34.2k Followers" },
  { name: "GreenLife Community", followers: "12.8k Followers" },
];

export default function ConnectSocialAccountPage() {
  const [selected, setSelected] = useState("facebook");
  const [checked, setChecked] = useState<Record<string, boolean>>({ "TechVentures Official": true });

  return (
    <AppShell eyebrow="Integrations · Social" title="Connect Account">
      <div className="p-container-padding max-w-[1400px] mx-auto">
        <Breadcrumb
          items={[
            { label: "Integrations", href: "/integrations" },
            { label: "Social Media", href: "/integrations/social" },
            { label: "Connect Account" },
          ]}
        />

        <div className="mb-10">
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Connect Social Account</h1>
          <p className="text-on-surface-variant font-body-md text-body-md mt-2 max-w-2xl">
            Integrate your brand&rsquo;s social ecosystems with RankPilot&rsquo;s AI to automate content distribution and gather real-time
            performance intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {platforms.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  className={`p-6 bg-surface-container-lowest rounded-xl text-left transition-all hover:shadow-sm ${
                    selected === p.id ? "border-2 border-primary" : "border border-outline-variant hover:border-primary/50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${p.iconClass}`}>
                      <Icon name={p.icon} />
                    </div>
                    {selected === p.id && <Icon name="check_circle" className="text-primary" />}
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{p.name}</h3>
                  <p className="text-label-sm text-on-surface-variant">{p.desc}</p>
                </button>
              ))}
            </section>

            <section>
              <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Coming Soon</h4>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-4 bg-surface-container border border-dashed border-outline-variant rounded-xl flex items-center gap-3 opacity-60">
                  <Icon name="alternate_email" size={20} />
                  <span className="font-label-md text-on-surface-variant">Threads</span>
                </div>
                <div className="px-6 py-4 bg-surface-container border border-dashed border-outline-variant rounded-xl flex items-center gap-3 opacity-60">
                  <Icon name="music_note" size={20} />
                  <span className="font-label-md text-on-surface-variant">TikTok</span>
                </div>
              </div>
            </section>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
              <div className="bg-surface-container-low px-8 py-6 border-b border-outline-variant">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Icon name="thumb_up" size={20} />
                    </div>
                    <h3 className="font-headline-sm text-headline-sm">Configure Facebook Pages</h3>
                  </div>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-label-sm font-medium rounded-full">Step 1 of 4</span>
                </div>
                <div className="mt-8 flex items-center w-full">
                  {wizardSteps.map((s, i) => (
                    <div key={s.label} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                            i === 0 ? "bg-primary text-white" : "bg-outline-variant text-white"
                          }`}
                        >
                          <Icon name={s.icon} size={18} />
                        </div>
                        <span className={`mt-2 text-label-sm font-semibold ${i === 0 ? "text-primary" : "text-on-surface-variant font-normal"}`}>
                          {s.label}
                        </span>
                      </div>
                      {i < wizardSteps.length - 1 && <div className="h-0.5 flex-1 bg-outline-variant -mt-6" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-label-md text-label-md text-on-surface font-semibold">Detected Pages</h4>
                    <button className="text-primary text-label-sm font-medium hover:underline">Refresh List</button>
                  </div>
                  <div className="space-y-3">
                    {pages.map((p) => (
                      <label
                        key={p.name}
                        className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${
                          checked[p.name] ? "bg-primary/5 border-primary/30" : "border-outline-variant hover:bg-surface-container-low"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant">
                            <Icon name="storefront" className="text-on-surface-variant" size={18} />
                          </div>
                          <div>
                            <p className="font-label-md text-on-surface">{p.name}</p>
                            <p className="text-label-sm text-on-surface-variant">{p.followers}</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={!!checked[p.name]}
                          onChange={(e) => setChecked((c) => ({ ...c, [p.name]: e.target.checked }))}
                          className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-surface-container-low border border-outline-variant rounded-lg p-6">
                  <h4 className="font-label-md text-label-md text-on-surface font-semibold mb-4">Requested Permissions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["Manage page content", "Read page analytics", "Post updates to timeline", "Access private messages"].map((perm) => (
                      <div key={perm} className="flex items-center gap-3">
                        <Icon name="task_alt" className="text-secondary" size={20} />
                        <span className="text-label-sm text-on-surface-variant">{perm}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 py-6 bg-surface-container-low border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-4">
                <button className="w-full sm:w-auto px-6 py-2.5 text-on-surface font-body-sm text-body-sm hover:bg-surface-container transition-colors rounded-lg">
                  Cancel
                </button>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 py-2.5 border border-primary text-primary font-body-sm text-body-sm rounded-lg hover:bg-primary/5 transition-colors">
                    Authorize Facebook
                  </button>
                  <button className="w-full sm:w-auto px-6 py-2.5 bg-primary text-on-primary font-body-sm text-body-sm rounded-lg hover:shadow-lg active:scale-95 transition-all">
                    Connect Selected Pages
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                  <Icon name="security" />
                </div>
                <h3 className="font-headline-sm text-headline-sm">Secure Authentication</h3>
              </div>
              <p className="text-on-surface-variant text-label-sm leading-relaxed mb-4">
                RankPilot uses industry-standard <strong>OAuth 2.0</strong> to connect. We never store your social passwords.
              </p>
              <ul className="space-y-3">
                {["Encrypted token storage (AES-256)", "Revoke access at any time via platform settings", "Multi-factor authentication supported"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-2 text-label-sm text-on-surface-variant">
                      <Icon name="verified" className="text-secondary mt-0.5" size={18} />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <h4 className="font-label-md text-label-md text-primary font-semibold mb-2">Need Assistance?</h4>
              <p className="text-label-sm text-on-surface-variant mb-4">
                If your page isn&rsquo;t appearing, ensure you are the Administrator of the page you are trying to connect.
              </p>
              <button className="flex items-center gap-2 text-primary font-body-sm text-body-sm hover:underline group">
                Read Connection Guide
                <Icon name="arrow_forward" size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
