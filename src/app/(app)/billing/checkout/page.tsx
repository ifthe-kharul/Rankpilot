"use client";

import { useState } from "react";
import { AppShell } from "@/components/shell/AppShell";
import { Icon } from "@/components/ui";

const packages = [
  { credits: 50, price: 49, desc: "Ideal for 10-15 deep-search SEO articles." },
  { credits: 150, price: 129, desc: "Best for small teams shipping weekly content." },
  { credits: 500, price: 399, desc: "For agencies running multiple client accounts." },
];

export default function CheckoutPage() {
  const [selected, setSelected] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const pkg = packages[selected];

  return (
    <AppShell eyebrow="Billing" title="Buy Credits" credits={2500}>
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="mb-10 text-center md:text-left">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Add Credits to your Account</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Top up your writing fuel to continue generating high-ranking SEO content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
              <h2 className="font-headline-sm text-headline-sm mb-4">Choose a Package</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {packages.map((p, i) => (
                  <button
                    key={p.credits}
                    onClick={() => setSelected(i)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      selected === i ? "border-2 border-primary bg-primary/5" : "border-outline-variant hover:border-primary/40"
                    }`}
                  >
                    <p className="font-headline-sm text-headline-sm text-on-surface">{p.credits}</p>
                    <p className="text-[11px] text-on-surface-variant uppercase tracking-wide mb-2">Credits</p>
                    <p className="font-bold text-primary">${p.price}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
              <h2 className="font-headline-sm text-headline-sm mb-4">Express Checkout</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 px-4 bg-on-background text-white rounded-lg hover:opacity-90 transition-all font-medium">
                  <Icon name="apps" filled />
                  Apple Pay
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all font-medium">
                  <Icon name="account_balance_wallet" />
                  Google Pay
                </button>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline-sm text-headline-sm">Credit Card Details</h2>
                <div className="flex gap-2 opacity-60">
                  <Icon name="credit_card" />
                  <Icon name="shield" />
                </div>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-body-sm text-body-sm font-medium text-on-surface-variant mb-1.5">Card Number</label>
                  <input
                    className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md text-body-md"
                    placeholder="0000 0000 0000 0000"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body-sm text-body-sm font-medium text-on-surface-variant mb-1.5">Expiry Date</label>
                    <input
                      className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md text-body-md"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div>
                    <label className="block font-body-sm text-body-sm font-medium text-on-surface-variant mb-1.5">CVC</label>
                    <input
                      className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md text-body-md"
                      placeholder="123"
                    />
                  </div>
                </div>
                <label className="flex items-center gap-3 cursor-pointer pt-2">
                  <input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-primary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Save card details for faster checkout next time.</span>
                </label>
              </form>
            </div>

            <div className="flex items-start gap-4 p-4 bg-surface-container-low rounded-lg border border-primary/10">
              <Icon name="verified_user" filled className="text-primary" />
              <div>
                <p className="font-body-sm text-body-sm text-on-surface font-semibold">Secure checkout powered by Stripe.</p>
                <p className="text-[12px] text-on-surface-variant">
                  Your transaction is encrypted. Credits are added instantly upon successful payment.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-md">
              <div className="p-6 bg-navy-sidebar text-white relative overflow-hidden">
                <Icon name="token" className="absolute -right-4 -bottom-4 opacity-10" size={120} />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 text-primary-fixed-dim border border-primary/30 mb-3">
                    <Icon name="bolt" size={16} />
                    <span className="text-[12px] uppercase tracking-wider">Top-Up</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm mb-1">{pkg.credits} Credits Package</h3>
                  <p className="font-body-sm text-body-sm opacity-80">{pkg.desc}</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant font-body-md text-body-md">{pkg.credits} Credits Top-up</span>
                  <span className="text-on-surface font-semibold">${pkg.price}.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant font-body-md text-body-md">Tax (GST/VAT)</span>
                  <span className="text-on-surface font-semibold">$0.00</span>
                </div>
                <div className="border-t border-outline-variant pt-4 flex justify-between items-center">
                  <span className="text-on-surface font-bold text-lg">Total</span>
                  <span className="text-primary font-extrabold text-2xl">${pkg.price}.00</span>
                </div>
              </div>
              <div className="p-6 bg-surface-container-low border-t border-outline-variant space-y-3">
                <button
                  onClick={() => setShowConfirm(true)}
                  className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  Complete Purchase
                  <Icon name="arrow_forward" />
                </button>
                <button className="w-full py-3 rounded-lg font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all">
                  Cancel
                </button>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-on-surface-variant font-label-sm text-label-sm">
                Need help? <a href="#" className="text-primary hover:underline">Chat with support</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-surface-container-lowest w-full max-w-[480px] rounded-xl shadow-2xl overflow-hidden">
            <div className="px-6 pt-6 pb-4 flex justify-between items-center border-b border-outline-variant/50">
              <h1 className="font-headline-sm text-headline-sm text-on-surface">Purchase Confirmed</h1>
              <button onClick={() => setShowConfirm(false)} className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-on-surface-variant">
                <Icon name="close" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 text-success">
                <Icon name="check_circle" filled size={32} />
                <p className="font-body-md text-body-md text-on-surface">
                  {pkg.credits} credits added to your balance.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/30 flex justify-between">
                <span className="text-on-surface-variant font-body-sm text-body-sm">New Balance</span>
                <span className="font-bold text-on-surface">{(2500 + pkg.credits).toLocaleString()} Credits</span>
              </div>
              <button
                onClick={() => setShowConfirm(false)}
                className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold hover:brightness-110 transition-all"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
