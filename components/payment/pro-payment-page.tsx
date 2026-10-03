import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/ssr";

import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import {
  PlanSummaryCard,
  ProPaymentForm,
} from "@/components/payment/pro-payment-form";

type PlanDetails = {
  name: string;
  description: string;
  monthlyPrice: number;
  badge: string;
  features: readonly string[];
};

type ProPaymentPageProps = {
  plan: PlanDetails;
};

export function ProPaymentPage({ plan }: ProPaymentPageProps) {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-[#f4f8ff] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[min(100svh,920px)]">
        <Image
          src="/images/page.png"
          alt=""
          fill
          preload
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#f4f8ff]" />
      </div>

      <div className="relative z-10">
        <SiteHeader />

        <main className="px-4 pb-16 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
            >
              <ArrowLeft className="size-4" />
              Back to pricing
            </Link>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="font-heading text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  {plan.name} payment
                </h1>

                <p className="mt-2 max-w-xl text-base text-slate-600">
                  Review your plan, pay with QR, and confirm your details so we
                  can activate {plan.name}.
                </p>
              </div>

              <span className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand">
                {plan.badge}
              </span>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start">
              <PlanSummaryCard plan={plan} />

              <ProPaymentForm plan={plan} />
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
