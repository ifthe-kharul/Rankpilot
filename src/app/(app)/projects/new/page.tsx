"use client";

import { useState } from "react";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";

const steps = ["Method", "Info", "Settings", "Knowledge", "Review"];

const methods = [
  { id: "blank", icon: "draft", title: "Blank Project", desc: "Start from scratch with total control over every setting and content piece." },
  {
    id: "content",
    icon: "edit_document",
    title: "Content Writing Project",
    desc: "Optimized for articles, blogs, and high-performance SEO content generation.",
    recommended: true,
  },
  { id: "url", icon: "link", title: "Rewrite from URL", desc: "Import a live URL and transform it into a fresh, unique new draft instantly." },
  { id: "import", icon: "upload_file", title: "Import Existing Content", desc: "Upload DOCX, PDF, or MD files to start your project with existing research." },
  { id: "template", icon: "description", title: "Create from Template", desc: "Use a pre-built industry or content-type brief to jumpstart your SEO strategy." },
  { id: "sample", icon: "science", title: "Explore Sample Project", desc: "Load a demo project with pre-filled data to learn the ropes of Rankpilot." },
];

export default function NewProjectPage() {
  const [selected, setSelected] = useState("content");
  const selectedMethod = methods.find((m) => m.id === selected)!;

  return (
    <AppShell eyebrow="Projects" title="New Project Wizard">
      <div className="min-h-[calc(100vh-64px)] p-container-padding pb-32">
        <div className="max-w-editor-max-width mx-auto mb-10">
          <nav className="flex items-center justify-between w-full relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2 -z-10" />
            {steps.map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-2 bg-background px-2 md:px-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-headline-sm ${
                    i === 0
                      ? "bg-primary text-white"
                      : "bg-surface-container-high border-2 border-outline-variant text-on-surface-variant"
                  }`}
                >
                  {i + 1}
                </div>
                <span className={`font-label-md text-label-md ${i === 0 ? "text-primary font-bold" : "text-on-surface-variant"}`}>
                  {step}
                </span>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-stack-lg max-w-[1200px] mx-auto">
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">How would you like to start?</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Choose a starting method to help us pre-configure your workspace with the right tools and
                templates for your workflow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {methods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelected(m.id)}
                  className={`relative text-left group cursor-pointer bg-surface-container-lowest rounded-xl p-6 transition-all ${
                    selected === m.id
                      ? "border-2 border-primary shadow-sm"
                      : "border border-outline-variant hover:border-primary hover:shadow-md"
                  }`}
                >
                  {m.recommended && (
                    <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-[10px] font-bold uppercase tracking-wider">
                      Recommended
                    </div>
                  )}
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                      selected === m.id ? "bg-primary/10 text-primary" : "bg-surface-container-high text-primary group-hover:bg-primary/10"
                    }`}
                  >
                    <Icon name={m.icon} size={28} filled={selected === m.id} />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{m.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{m.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <aside className="w-full lg:w-[320px]">
            <div className="sticky top-24 bg-surface-container-low rounded-xl border border-outline-variant p-6 h-fit">
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-4 border-b border-outline-variant pb-2">
                Project Summary
              </h4>
              <div className="space-y-6">
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">
                    Current Step
                  </p>
                  <p className="font-body-md text-body-md font-bold text-primary">Step 1: Selecting Method</p>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">
                    Selected Method
                  </p>
                  <div className="flex items-center gap-2 text-on-surface font-medium">
                    <Icon name="check_circle" className="text-secondary" size={20} />
                    <span>{selectedMethod.title}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-outline-variant">
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                    Next: You&apos;ll provide basic project details like name and goals.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-label-sm font-bold text-on-surface-variant">
                    <span>Total Progress</span>
                    <span>20%</span>
                  </div>
                  <div className="w-full h-1.5 bg-outline-variant rounded-full overflow-hidden">
                    <div className="w-1/5 h-full bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 md:left-sidebar-width-expanded right-0 h-20 bg-surface-container-lowest border-t border-outline-variant px-container-padding flex items-center justify-between z-40">
        <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary font-label-md text-label-md transition-colors px-4 py-2">
          <Icon name="save" size={20} />
          Save Draft
        </button>
        <div className="flex items-center gap-4">
          <button
            disabled
            className="flex items-center gap-2 bg-surface-container-high text-on-surface-variant/40 px-6 py-2.5 rounded-lg font-label-md text-label-md cursor-not-allowed"
          >
            <Icon name="arrow_back" size={20} />
            Back
          </button>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-8 py-2.5 rounded-lg font-label-md text-label-md font-bold hover:bg-primary-container active:scale-95 transition-all shadow-sm">
            Continue
            <Icon name="arrow_forward" size={20} />
          </button>
        </div>
      </footer>
    </AppShell>
  );
}
