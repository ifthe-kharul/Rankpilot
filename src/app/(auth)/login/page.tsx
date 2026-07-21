"use client";

import Link from "next/link";
import { Icon, Button, Input, Label } from "@/components/ui";

export default function LoginPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[440px]">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <Icon name="rocket_launch" filled className="text-primary" size={32} />
              <span className="font-headline-lg text-headline-lg text-primary tracking-tighter">RankPilot</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Welcome back</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Continue your high-performance content journey.
            </p>
          </div>

          <div className="p-8 rounded-xl shadow-sm bg-surface-container-lowest border border-outline-variant/40">
            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <Label htmlFor="email">Work Email</Label>
                <div className="relative">
                  <Icon
                    name="mail"
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                  />
                  <Input id="email" name="email" type="email" placeholder="name@company.com" className="pl-10" />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <Label htmlFor="password" className="mb-0">
                    Password
                  </Label>
                  <a href="#" className="font-body-sm text-body-sm text-primary hover:text-surface-tint transition-colors">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Icon
                    name="lock"
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                  />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 pr-12"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    <Icon name="visibility" size={20} />
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>

              <div className="relative py-2 flex items-center">
                <div className="flex-grow border-t border-outline-variant" />
                <span className="flex-shrink mx-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                  or
                </span>
                <div className="flex-grow border-t border-outline-variant" />
              </div>

              <Button type="button" variant="outline" className="w-full gap-3">
                <GoogleIcon />
                Sign in with Google
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                New to Rankpilot?{" "}
                <Link href="/signup" className="text-primary font-semibold hover:text-surface-tint transition-colors">
                  Create an account
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6 opacity-60 grayscale hover:opacity-100 transition-opacity duration-500">
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Trusted by content teams at
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {["METRICA", "SPHERE", "QUANTUM"].map((brand) => (
                <div key={brand} className="h-6 flex items-center font-bold text-on-surface-variant tracking-tighter text-xl">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-outline-variant/30 text-center">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          © 2026 Rankpilot. All rights reserved.
          <span className="mx-2 text-outline">|</span>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span className="mx-2 text-outline">|</span>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </p>
      </footer>
    </div>
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
