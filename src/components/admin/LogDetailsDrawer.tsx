"use client";

import Link from "next/link";
import { Icon } from "@/components/ui";

export type LogEvent = {
  id: string;
  title: string;
  date: string;
  actor: string;
  actorRole: string;
  resource: string;
  resourceId: string;
  workspaceHref?: string;
  workspaceName?: string;
  result: "Success" | "Failed" | "Pending";
  previousValue?: string;
  newValue?: string;
  changeDelta?: string;
  reason?: string;
  ip: string;
  userAgent: string;
  environment: string;
  requestId: string;
  traceId: string;
  related: { label: string; href: string }[];
  timeline: { label: string; time: string; state: "past" | "active" | "future" }[];
};

export function LogDetailsDrawer({ event, onClose }: { event: LogEvent | null; onClose: () => void }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div onClick={onClose} className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm" />
      <div className="relative w-full max-w-[480px] h-full bg-surface-container-lowest shadow-2xl overflow-y-auto">
        <div className="p-6 border-b border-outline-variant">
          <div className="flex items-start justify-between mb-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-warning/10 text-warning text-[10px] font-bold uppercase rounded">
              <Icon name="warning" size={12} />
              Audit Log
            </span>
            <button onClick={onClose} className="p-1.5 hover:bg-surface-container-high rounded-full transition-colors text-on-surface-variant">
              <Icon name="close" />
            </button>
          </div>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">{event.title}</h2>
          <div className="flex items-center gap-2 mt-1 text-[12px] text-on-surface-variant">
            <Icon name="calendar_today" size={14} />
            {event.date}
            <span className="mx-1">•</span>
            {event.id}
            <Icon name="content_copy" size={14} className="cursor-pointer hover:text-primary" />
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <InfoTile label="Actor" value={event.actor} />
            <InfoTile label="Actor Role" value={event.actorRole} />
            <InfoTile label="Resource" value={event.resource} />
            <InfoTile label="Resource ID" value={event.resourceId} mono />
            {event.workspaceName && (
              <InfoTile label="Workspace" value={event.workspaceName} href={event.workspaceHref} />
            )}
            <InfoTile
              label="Result"
              value={event.result}
              tone={event.result === "Success" ? "success" : event.result === "Failed" ? "error" : "warning"}
            />
          </div>

          {(event.previousValue || event.newValue) && (
            <div>
              <h3 className="font-body-sm text-body-sm font-bold text-on-surface mb-2 flex items-center gap-2">
                <Icon name="difference" size={18} className="text-primary" />
                Change Details
              </h3>
              <div className="bg-surface-container-low rounded-lg p-4 flex items-center gap-3 flex-wrap">
                <span className="text-on-surface-variant line-through text-[13px]">{event.previousValue}</span>
                <span className="text-success font-bold text-[13px]">{event.changeDelta}</span>
                <Icon name="arrow_forward" size={16} className="text-outline" />
                <span className="font-bold text-on-surface text-[13px]">{event.newValue}</span>
              </div>
              {event.reason && <p className="text-[12px] text-on-surface-variant mt-2">{event.reason}</p>}
            </div>
          )}

          <div>
            <h3 className="font-body-sm text-body-sm font-bold text-on-surface mb-2 flex items-center gap-2">
              <Icon name="code_blocks" size={18} className="text-primary" />
              Request Context
            </h3>
            <div className="bg-navy-sidebar text-white/80 rounded-lg p-4 font-mono text-[11px] space-y-1 overflow-x-auto">
              <div>IP_Address: <span className="text-secondary-fixed-dim">{event.ip}</span></div>
              <div>User_Agent: <span className="text-secondary-fixed-dim">{event.userAgent}</span></div>
              <div>Environment: <span className="text-secondary-fixed-dim">{event.environment}</span></div>
              <div>Request_ID: <span className="text-secondary-fixed-dim">{event.requestId}</span></div>
              <div>Trace_ID: <span className="text-secondary-fixed-dim">{event.traceId}</span></div>
            </div>
          </div>

          <div>
            <h3 className="font-body-sm text-body-sm font-bold text-on-surface mb-2">Related Resources</h3>
            <div className="flex flex-wrap gap-2">
              {event.related.map((r) => (
                <Link
                  key={r.label}
                  href={r.href}
                  onClick={onClose}
                  className="px-3 py-1.5 bg-surface-container-low border border-outline-variant rounded-full text-[12px] font-medium text-on-surface hover:border-primary transition-colors"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-body-sm text-body-sm font-bold text-on-surface mb-3 flex items-center gap-2">
              <Icon name="timeline" size={18} className="text-primary" />
              Event Sequence
            </h3>
            <div className="space-y-3">
              {event.timeline.map((t) => (
                <div key={t.label} className="flex items-center gap-3">
                  <div
                    className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                      t.state === "active" ? "bg-primary" : t.state === "past" ? "bg-success" : "bg-outline-variant border border-outline"
                    }`}
                  />
                  <span className={`text-[13px] flex-1 ${t.state === "active" ? "font-bold text-on-surface" : "text-on-surface-variant"} ${t.state === "future" ? "opacity-50" : ""}`}>
                    {t.label}
                  </span>
                  <span className="text-[11px] text-outline">{t.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-outline-variant flex justify-between gap-3 sticky bottom-0 bg-surface-container-lowest">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-outline-variant rounded-lg text-on-surface-variant text-[13px] font-medium hover:bg-surface-container transition-colors">
            <Icon name="download" size={16} />
            Download JSON
          </button>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-lg text-[13px] font-bold hover:bg-primary-container transition-colors"
          >
            Open Transaction
            <Icon name="open_in_new" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoTile({
  label,
  value,
  mono,
  href,
  tone,
}: {
  label: string;
  value: string;
  mono?: boolean;
  href?: string;
  tone?: "success" | "error" | "warning";
}) {
  const toneClass = tone === "success" ? "text-success" : tone === "error" ? "text-error" : tone === "warning" ? "text-warning" : "text-on-surface";
  return (
    <div className="bg-surface-container-low rounded-lg p-3">
      <p className="text-[10px] uppercase tracking-wider text-outline mb-1">{label}</p>
      {href ? (
        <Link href={href} className={`text-[13px] font-medium hover:underline ${toneClass} ${mono ? "font-mono" : ""}`}>
          {value}
        </Link>
      ) : (
        <p className={`text-[13px] font-medium ${toneClass} ${mono ? "font-mono" : ""}`}>{value}</p>
      )}
    </div>
  );
}
