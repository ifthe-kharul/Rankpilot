"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/ui";

const adjustmentTypes = ["Add Credits", "Deduct Credits", "Refund", "Promotional Bonus", "Correction"];
const reasons = ["Promotional Bonus (Promo)", "Billing Correction", "Support Resolution", "Other"];

export function CreditAdjustmentModal({
  open,
  onClose,
  target,
  currentBalance = 4064,
}: {
  open: boolean;
  onClose: () => void;
  target: { type: "User" | "Workspace"; name: string };
  currentBalance?: number;
}) {
  const [targetType, setTargetType] = useState<"User" | "Workspace">(target.type);
  const [amount, setAmount] = useState(5000);
  const [type, setType] = useState(adjustmentTypes[0]);
  const [confirmText, setConfirmText] = useState("");

  const resulting = useMemo(() => {
    const sign = type === "Deduct Credits" ? -1 : 1;
    return currentBalance + sign * amount;
  }, [currentBalance, amount, type]);

  if (!open) return null;

  const canConfirm = confirmText.trim().toUpperCase() === "CONFIRM";

  return (
    <div className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-surface-container-lowest w-full max-w-[520px] rounded-xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="px-6 pt-6 pb-4 flex justify-between items-start border-b border-outline-variant/50">
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Adjust Credits</h2>
            <p className="text-[12px] text-on-surface-variant mt-0.5">Modify account balance directly.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-on-surface-variant">
            <Icon name="close" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2 p-1 bg-surface-container-low rounded-lg border border-outline-variant">
              {(["User", "Workspace"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTargetType(t)}
                  className={`py-2 text-xs font-bold rounded transition-colors ${
                    targetType === t ? "bg-white text-primary shadow-sm" : "text-on-surface-variant hover:bg-white/50"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="relative">
              <Icon name="search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
              <input
                readOnly
                value={target.name}
                className="w-full pl-9 pr-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md"
              />
            </div>
            <div className="flex justify-between text-[12px] text-on-surface-variant px-1">
              <span>Current Balance</span>
              <span className="font-bold text-on-surface">{currentBalance.toLocaleString()}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Adjustment Type</label>
              <div className="relative">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full appearance-none pl-3 pr-9 py-2.5 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md cursor-pointer"
                >
                  {adjustmentTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <Icon name="expand_more" size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">Credit Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md"
              />
            </div>
          </div>

          <div className="bg-surface-container-low rounded-lg p-4 flex items-center justify-between text-[13px]">
            <span className="text-on-surface-variant">{currentBalance.toLocaleString()}</span>
            <Icon name="arrow_forward" size={16} className="text-outline" />
            <span className={type === "Deduct Credits" ? "text-error font-bold" : "text-success font-bold"}>
              {type === "Deduct Credits" ? "-" : "+"}
              {amount.toLocaleString()}
            </span>
            <Icon name="arrow_forward" size={16} className="text-outline" />
            <span className="font-bold text-on-surface">{resulting.toLocaleString()}</span>
          </div>

          <div>
            <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">
              Reason <span className="text-error">*</span>
            </label>
            <div className="relative">
              <select className="w-full appearance-none pl-3 pr-9 py-2.5 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md cursor-pointer">
                {reasons.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
              <Icon name="expand_more" size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">
              Internal Note <span className="text-error">*</span>
            </label>
            <textarea
              rows={2}
              defaultValue="Authorized Q3 promotional upgrade for enterprise pilot."
              className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md resize-none"
            />
          </div>

          <label className="flex items-center justify-between cursor-pointer">
            <span className="font-body-sm text-body-sm text-on-surface">Notify User via Email</span>
            <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
          </label>

          <div className="flex items-start gap-2 p-3 bg-warning/10 border border-warning/20 rounded-lg">
            <Icon name="info" size={18} className="text-warning mt-0.5" />
            <p className="text-[12px] text-on-surface-variant">
              This action will create an immutable credit-ledger transaction.
            </p>
          </div>

          <div>
            <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5">
              Type CONFIRM to proceed
            </label>
            <input
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="CONFIRM"
              className="w-full px-3 py-2.5 bg-surface-bright border border-outline-variant rounded-lg font-body-md text-body-md"
            />
          </div>
        </div>

        <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-low/40 flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2.5 rounded-lg font-body-sm text-body-sm font-medium text-on-surface-variant hover:bg-surface-container transition-colors">
            Cancel
          </button>
          <button
            disabled={!canConfirm}
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg font-body-sm text-body-sm font-bold bg-primary text-on-primary hover:bg-primary-container transition-colors disabled:opacity-50 disabled:pointer-events-none"
          >
            Confirm Adjustment
          </button>
        </div>
      </div>
    </div>
  );
}
