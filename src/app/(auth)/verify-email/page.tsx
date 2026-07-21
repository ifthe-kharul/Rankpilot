"use client";

import { useState } from "react";
import { Icon } from "@/components/ui";

export default function VerifyEmailPage() {
  const [resent, setResent] = useState(false);

  function handleResend() {
    setResent(true);
    setTimeout(() => setResent(false), 3000);
  }

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col items-center justify-center p-6">
      <main className="w-full max-w-[480px] flex flex-col items-center">
        <header className="mb-12 flex flex-col items-center gap-2">
          <div className="text-primary font-headline-lg text-headline-lg tracking-tight flex items-center gap-2">
            <Icon name="rocket_launch" filled size={36} />
            <span className="font-extrabold">RankPilot</span>
          </div>
        </header>

        <div className="w-full p-8 md:p-12 rounded-xl border border-outline-variant/30 shadow-sm text-center bg-surface-container-lowest">
          <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
            <Icon name="mark_email_read" filled className="text-primary" size={64} />
            <div className="absolute -top-1 -right-1 bg-secondary text-on-secondary w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
              <Icon name="done_all" size={14} />
            </div>
          </div>

          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">Check your email</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-10 leading-relaxed">
            We&apos;ve sent a verification link to{" "}
            <span className="text-on-surface font-semibold underline decoration-primary/30">
              alex@company.com
            </span>
            . Click the link in the email to verify your account.
          </p>

          <div className="flex flex-col gap-4">
            <button className="w-full bg-primary-container text-on-primary-container font-body-sm text-body-sm font-semibold py-4 px-8 rounded-lg shadow-sm hover:brightness-110 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
              <Icon name="open_in_new" size={18} />
              Open Email App
            </button>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 pt-4">
              <button
                onClick={handleResend}
                className={`font-body-sm text-body-sm hover:underline active:opacity-70 transition-all flex items-center gap-1.5 ${
                  resent ? "text-success" : "text-primary"
                }`}
              >
                <Icon name={resent ? "check" : "refresh"} size={16} />
                {resent ? "Sent!" : "Resend Email"}
              </button>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-outline-variant" />
              <a
                href="/signup"
                className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-all flex items-center gap-1.5"
              >
                <Icon name="settings_backup_restore" size={16} />
                Change Email
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center">
          <p className="font-label-sm text-label-sm text-on-surface-variant mb-4">
            Need help? <a href="#" className="text-primary font-medium hover:underline">Contact support.</a>
          </p>
          <div className="flex items-center justify-center gap-8 text-outline">
            <Icon name="info" className="cursor-help hover:text-primary transition-colors" size={20} />
            <Icon name="security" className="cursor-help hover:text-primary transition-colors" size={20} />
            <Icon name="help_center" className="cursor-help hover:text-primary transition-colors" size={20} />
          </div>
        </footer>

        <div className="mt-16 opacity-50 font-label-sm text-label-sm">© 2026 Rankpilot. All rights reserved.</div>
      </main>
    </div>
  );
}
