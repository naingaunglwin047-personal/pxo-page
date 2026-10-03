"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeSlash } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
      <path
        fill="#EA4335"
        d="M12 10.2v3.6h5.1c-.2 1.2-.9 2.3-1.9 3l3.1 2.4c1.8-1.7 2.9-4.1 2.9-7 0-.7-.1-1.3-.2-1.9H12z"
      />
      <path
        fill="#34A853"
        d="M12 21c2.6 0 4.8-.9 6.4-2.4l-3.1-2.4c-.9.6-2 .9-3.3.9-2.5 0-4.6-1.7-5.4-4l-3.2 2.5C5.2 18.9 8.3 21 12 21z"
      />
      <path
        fill="#FBBC05"
        d="M6.6 13.1c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9L3.4 6.8C2.7 8.2 2.3 9.8 2.3 11.2s.4 3 1.1 4.4l3.2-2.5z"
      />
      <path
        fill="#4285F4"
        d="M12 5.3c1.4 0 2.7.5 3.7 1.4l2.8-2.8C16.8 2.3 14.6 1.4 12 1.4 8.3 1.4 5.2 3.5 3.4 6.8l3.2 2.5c.8-2.3 2.9-4 5.4-4z"
      />
    </svg>
  )
}

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Card className="w-full max-w-[420px] rounded-2xl bg-white py-0 shadow-[0_24px_80px_-28px_rgba(37,99,235,0.35)] ring-slate-200/80">
      <CardHeader className="gap-0 px-6 pt-8 sm:px-8">
        <CardTitle className="font-heading text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]">
          Welcome back
        </CardTitle>
      </CardHeader>

      <CardContent className="px-6 pb-8 sm:px-8">
        <form className="mt-6 space-y-5" action="#">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className="h-11 rounded-none border-0 border-b border-slate-300 bg-transparent px-0 text-base shadow-none focus-visible:border-brand focus-visible:ring-0"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </Label>
              <Link
                href="#"
                className="text-sm font-medium text-brand transition-colors hover:text-brand-dark"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                // className="h-11 rounded-xl border-slate-200 bg-white px-3.5 pr-11 text-sm md:text-sm"
                className="h-11 rounded-none border-0 border-b border-slate-300 bg-transparent px-0 text-base shadow-none focus-visible:border-brand focus-visible:ring-0"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeSlash className="size-5" weight="regular" />
                ) : (
                  <Eye className="size-5" weight="regular" />
                )}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="h-11 w-full rounded-xl bg-brand text-sm font-medium text-white hover:bg-brand-dark"
          >
            Sign in
          </Button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <Separator className="flex-1" />
          <span className="text-sm text-slate-400">or</span>
          <Separator className="flex-1" />
        </div>

        <Button
          type="button"
          variant="outline"
          className="h-11 w-full rounded-xl border-slate-200 bg-white text-sm font-medium text-slate-800 hover:bg-slate-50"
        >
          <GoogleIcon />
          Continue with Google
        </Button>

        <p className="mt-6 text-center text-sm text-slate-600">
          New to PXO?{" "}
          <Link
            href="/signup"
            className="font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Create an account
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
