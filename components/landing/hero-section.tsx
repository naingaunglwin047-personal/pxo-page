import Link from "next/link"
import { Check, Play } from "@phosphor-icons/react/ssr"
import { Button } from "@/components/ui/button"
import { HeroMockup } from "@/components/landing/hero-mockup"
import { trustPoints } from "@/lib/site"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="animate-rise max-w-xl">
          <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand">
            Burmese Language AI
          </span>

          <h1 className="mt-5 font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
            Stop Typing.
            <br />
            Start Listening.
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
            PXO AI captures, transcribes, and summarizes your Burmese meetings
            in real time — so your team can stay present and never miss a
            decision.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm text-white hover:bg-brand-dark">
              No Card Needed
            </div>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-full border-slate-200 bg-white/70 px-6 text-sm text-slate-800 backdrop-blur-sm"
            >
              Watch Demo
              <Play className="size-4" weight="fill" />
            </Button>
          </div>

          <ul className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-2 text-sm text-slate-600"
              >
                <span className="flex size-5 items-center justify-center text-brand">
                  <Check className="size-3" weight="bold" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise-delayed relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
