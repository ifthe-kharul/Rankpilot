"use client";

import { ReactNode, useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { TopNav } from "./TopNav";

export function AdminShell({
  eyebrow,
  title,
  children,
  credits,
  notifications,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  credits?: number;
  notifications?: number;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar mobileOpen={mobileNavOpen} onCloseMobile={() => setMobileNavOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav
          eyebrow={eyebrow}
          title={title}
          credits={credits}
          notifications={notifications}
          onMenuClick={() => setMobileNavOpen(true)}
        />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
