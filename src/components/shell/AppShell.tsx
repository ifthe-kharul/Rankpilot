"use client";

import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";

export function AppShell({
  eyebrow,
  title,
  children,
  credits,
  creditPct,
  lowCredit,
  notifications,
  status,
  jobRunning,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  credits?: number;
  creditPct?: number;
  lowCredit?: boolean;
  notifications?: number;
  status?: "saved" | "saving" | "unsaved" | "offline";
  jobRunning?: boolean;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        credits={credits}
        creditPct={creditPct}
        lowCredit={lowCredit}
        mobileOpen={mobileNavOpen}
        onCloseMobile={() => setMobileNavOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav
          eyebrow={eyebrow}
          title={title}
          credits={credits}
          notifications={notifications}
          status={status}
          jobRunning={jobRunning}
          onMenuClick={() => setMobileNavOpen(true)}
        />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
