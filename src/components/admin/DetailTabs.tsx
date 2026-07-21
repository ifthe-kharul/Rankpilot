"use client";

import { useState } from "react";

export function DetailTabs({ tabs, defaultTab }: { tabs: string[]; defaultTab?: string }) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]);
  return (
    <div className="border-b border-outline-variant mb-6 overflow-x-auto">
      <nav className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-3 whitespace-nowrap font-body-sm text-body-sm transition-colors border-b-2 -mb-px ${
              active === tab
                ? "font-bold text-primary border-primary"
                : "text-on-surface-variant border-transparent hover:text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}
