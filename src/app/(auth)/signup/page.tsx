"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon, Button, Input, Label } from "@/components/ui";

function passwordStrength(pw: string) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

const strengthLabels = ["Security level: Use 8+ characters", "Weak", "Fair", "Good", "Strong"];
const strengthColors = ["bg-outline-variant/30", "bg-error", "bg-warning", "bg-secondary", "bg-success"];

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const score = useMemo(() => passwordStrength(password), [password]);

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Left: Form */}
      <section className="flex-1 flex flex-col justify-center px-6 py-12 md:px-24 bg-surface-container-lowest">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12">
            <span className="font-headline-md text-headline-md text-primary tracking-tight">
              RankPilot
            </span>
          </div>

          <div className="mb-10">
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-3 leading-tight">
              Supercharge your SEO with the AI Writing Operating System
            </h1>
            <p className="text-on-surface-variant font-body-md text-body-md">
              Join the future of enterprise content intelligence.
            </p>
          </div>

          <Button type="button" variant="outline" className="w-full gap-3">
            <GoogleIcon />
            Sign up with Google
          </Button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/50" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-surface-container-lowest text-outline font-label-sm text-label-sm uppercase tracking-widest">
                or continue with email
              </span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Label htmlFor="full_name">Full Name</Label>
              <Input id="full_name" name="full_name" type="text" placeholder="John Doe" />
            </div>
            <div>
              <Label htmlFor="work_email">Work Email</Label>
              <Input id="work_email" name="work_email" type="email" placeholder="john@company.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-12"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                >
                  <Icon name="visibility" size={20} />
                </button>
              </div>
              <div className="mt-3 flex gap-1 h-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full transition-colors ${
                      i < score ? strengthColors[score] : "bg-outline-variant/30"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-2 font-label-sm text-label-sm text-on-surface-variant">
                {strengthLabels[score]}
              </p>
            </div>
            <Button type="submit" className="w-full py-4">
              Create Free Account
            </Button>
          </form>

          <div className="mt-10 text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-semibold hover:underline decoration-2 underline-offset-4">
                Sign In
              </Link>
            </p>
            <p className="mt-8 font-label-sm text-label-sm text-outline px-4">
              By signing up, you agree to our{" "}
              <a href="#" className="underline hover:text-on-surface transition-colors">Terms of Service</a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-on-surface transition-colors">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Right: Visual */}
      <section className="hidden lg:flex flex-1 bg-surface-container-high relative overflow-hidden items-center justify-center">
        <div className="relative z-10 w-full max-w-2xl p-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 bg-surface-container-lowest/90 backdrop-blur-xl border border-outline-variant rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center">
                  <Icon name="auto_awesome" filled className="text-on-secondary-container" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">AI Writing Operating System</h3>
                  <div className="flex gap-2 mt-1">
                    <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] uppercase tracking-wider">
                      Active
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[10px] uppercase tracking-wider">
                      SEO Optimized
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-surface-container-highest rounded animate-pulse" />
                <div className="h-4 w-full bg-surface-container-highest rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-surface-container-highest rounded animate-pulse" />
                <div className="pt-4 flex justify-between items-center">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                      RP
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-surface bg-secondary/10 flex items-center justify-center text-secondary text-xs font-bold">
                      AI
                    </div>
                  </div>
                  <span className="text-primary font-body-sm text-body-sm flex items-center gap-2">
                    Optimizing keywords...
                    <Icon name="refresh" className="animate-spin" size={16} />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-6 bg-primary-container/10 backdrop-blur-md border border-primary/20 rounded-2xl p-6 shadow-xl">
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">SERP Ranking Boost</p>
              <h4 className="font-headline-lg text-headline-lg text-primary">+124%</h4>
              <div className="mt-4 flex items-end gap-1">
                <div className="flex-1 h-8 bg-primary/20 rounded-sm" />
                <div className="flex-1 h-12 bg-primary/40 rounded-sm" />
                <div className="flex-1 h-16 bg-primary/60 rounded-sm" />
                <div className="flex-1 h-20 bg-primary rounded-sm" />
              </div>
            </div>

            <div className="col-span-6 bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant rounded-2xl p-6 shadow-xl flex flex-col justify-center">
              <Icon name="format_quote" className="text-secondary-container mb-2" />
              <p className="text-sm italic text-on-surface-variant leading-snug">
                &quot;The precision of Rankpilot has tripled our content output without losing quality.&quot;
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-on-surface text-background px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-outline/30">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Icon name="bolt" filled className="text-white" />
            </div>
            <div>
              <p className="font-body-sm text-body-sm">Trusted by 2,000+ Teams</p>
              <p className="text-[11px] opacity-70">Enterprise Security Compliant</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.23l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}
