"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { pricingPlans } from "@/lib/site"
import { cn } from "@/lib/utils"

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Simple, honest pricing
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Start free, then choose the plan that matches your meeting volume.
          </p>

          <div className="mt-8 inline-flex items-center rounded-full bg-white p-1 ring-1 ring-slate-200">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                !annual
                  ? "bg-brand text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                annual
                  ? "bg-brand text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              Annual
              <span className="ml-1.5 text-xs opacity-80">(20% off)</span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {pricingPlans.map((plan) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice
            return (
              <Card
                key={plan.id}
                className={cn(
                  "relative rounded-2xl bg-white py-0 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]",
                  plan.popular
                    ? "ring-2 ring-brand"
                    : "ring-1 ring-slate-200/80"
                )}
              >
                {plan.popular ? (
                  <span className="absolute top-4 right-4 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-white">
                    Most Popular
                  </span>
                ) : null}
                <CardHeader className="gap-2 pt-7">
                  <CardTitle className="font-heading text-2xl font-semibold text-slate-950">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600">
                    {plan.description}
                  </CardDescription>
                  <p className="pt-3">
                    <span className="font-heading text-4xl font-semibold text-slate-950">
                      ${price}
                    </span>
                    <span className="text-sm text-slate-500">/mo</span>
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-slate-700"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-brand"
                          weight="bold"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="border-0 pb-7">
                  <Link
                    href={plan.id === "pro" ? "/payment/pro" : "/signup"}
                    className="w-full"
                  >
                    <Button
                      className={cn(
                        "h-11 w-full rounded-full text-sm",
                        plan.popular
                          ? "bg-brand text-white hover:bg-brand-dark"
                          : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                      )}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
