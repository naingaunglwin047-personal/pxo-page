"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const languages = [
  { id: "en", label: "EN" },
  { id: "my", label: "MY" },
] as const

type Language = (typeof languages)[number]["id"]

export function LanguageToggle({ className }: { className?: string }) {
  const [lang, setLang] = useState<Language>("en")

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex rounded-full bg-white/70 p-1 ring-1 ring-slate-200/80 backdrop-blur-sm",
        className
      )}
    >
      {languages.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setLang(item.id)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium transition-all",
            lang === item.id
              ? "bg-brand text-white shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
