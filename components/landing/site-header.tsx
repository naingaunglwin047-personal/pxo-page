"use client"

import Link from "next/link"
import { useState } from "react"
import { List, X } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/brand/logo"
import { LanguageToggle } from "@/components/brand/language-toggle"
import { navLinks } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <Link href="/login">
            <Button
              variant="ghost"
              className="h-9 rounded-full px-4 text-sm text-slate-700"
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="h-9 rounded-full bg-brand px-5 text-sm text-white hover:bg-brand-dark">
              Register
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full bg-white/70 text-slate-800 ring-1 ring-slate-200 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <List className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "absolute inset-x-4 top-full origin-top rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-slate-200 backdrop-blur-md transition-all md:hidden",
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
          <LanguageToggle className="self-start" />
          <Link href="/login">
            <Button
              variant="outline"
              className="h-10 w-full rounded-full"
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              className="h-10 w-full rounded-full bg-brand text-white hover:bg-brand-dark"
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
