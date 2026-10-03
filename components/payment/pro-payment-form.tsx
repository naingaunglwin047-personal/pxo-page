
"use client"

import { useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import {
  ArrowLeft,
  Check,
  Info,
  UploadSimple,
  X,
} from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  paymentMethods,
  proPlanDetails,
  type PaymentMethodId,
} from "@/lib/payment"
import { cn } from "@/lib/utils"
import { PaymentDialog } from "../payment-dialog/payment-dialog"

export type PaymentConfirmPayload = {
  fullName: string
  email: string
  phone: string
  transactionId: string
  notes: string
  paymentMethod: PaymentMethodId
  screenshotName: string
  plan: "pro"
  amount: number
  submittedAt: string
}

type PaymentFormValues = {
  fullName: string
  email: string
  phone: string
  transactionId: string
  notes: string
  screenshot: FileList
}

function QrPreview({
  methodId,
  name,
  accountName,
  accountNumber,
  accent,
}: {
  methodId: string
  name: string
  accountName: string
  accountNumber: string
  accent: string
}) {
  const cells = useMemo(
    () =>
      Array.from({ length: 121 }, (_, index) => {
        const seed =
          methodId.charCodeAt(index % methodId.length) + index * 17

        return seed % 3 !== 0
      }),
    [methodId]
  )

  return (
    <div
      className="overflow-hidden rounded-2xl text-white shadow-lg"
      style={{ backgroundColor: accent }}
    >
      <div className="px-4 pt-4 text-center">
        <p className="text-sm font-semibold tracking-wide">
          Scan with {name}
        </p>

        <p className="mt-1 text-xs text-white/80">
          Scan to pay · PXO AI Pro
        </p>
      </div>

      <div className="mx-4 my-4 rounded-xl bg-white p-3">
        <div className="grid aspect-square grid-cols-11 gap-[2px]">
          {cells.map((filled, index) => (
            <span
              key={index}
              className={cn(
                "rounded-[1px]",
                filled ? "bg-slate-900" : "bg-white"
              )}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-white/20 px-4 py-3 text-center">
        <p className="text-sm font-semibold">{accountName}</p>

        <p className="mt-0.5 text-xs text-white/85">
          {accountNumber}
        </p>

        <p className="mt-2 text-[11px] font-medium tracking-[0.16em] uppercase text-white/90">
          {name}
        </p>
      </div>
    </div>
  )
}

export function ProPaymentForm() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmedPayload, setConfirmedPayload] =
    useState<PaymentConfirmPayload | null>(null);

  const [method, setMethod] =
    useState<PaymentMethodId>("kbzpay")

  const [screenshotName, setScreenshotName] =
    useState<string | null>(null)

  const screenshotRef = useRef<HTMLInputElement>(null)

  const selected = paymentMethods.find(
    (item) => item.id === method
  )!

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
    },
  } = useForm<PaymentFormValues>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      transactionId: "",
      notes: "",
    },
  })

  const screenshotField = register("screenshot", {
    required: "Payment screenshot is required",
    validate: {
      fileType: (files) => {
        const file = files?.[0]

        if (!file) {
          return "Payment screenshot is required"
        }

        const allowedTypes = [
          "image/png",
          "image/jpeg",
          "image/webp",
        ]

        if (!allowedTypes.includes(file.type)) {
          return "Only PNG, JPG, or WEBP images are allowed"
        }

        if (file.size > 5 * 1024 * 1024) {
          return "Screenshot must be 5MB or smaller"
        }

        return true
      },
    },
  })

  const canSubmit = isValid && Boolean(screenshotName)

  function clearScreenshot() {
    setScreenshotName(null)

    if (screenshotRef.current) {
      screenshotRef.current.value = ""
    }
  }

  function onSubmit(data: PaymentFormValues) {
    const screenshot = data.screenshot?.[0];

    if (!screenshot) return;

    const payload: PaymentConfirmPayload = {
      fullName: data.fullName.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      transactionId: data.transactionId.trim(),
      notes: data.notes.trim(),
      paymentMethod: method,
      screenshotName: screenshot.name,
      plan: "pro",
      amount: proPlanDetails.monthlyPrice,
      submittedAt: new Date().toISOString(),
    };

    // 1. Save data locally or send to backend API
    sessionStorage.setItem("payment_confirm", JSON.stringify(payload));

    // 2. Pass payload and open dialog
    setConfirmedPayload(payload);
    setDialogOpen(true);
  }

  return (
    <div className="space-y-6">
      <Card className="rounded-2xl bg-white/95 py-0 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] ring-slate-200/80">
        <CardHeader className="gap-1 pt-6">
          <CardTitle className="font-heading text-xl font-semibold text-slate-950">
            Choose your payment method
          </CardTitle>

          <CardDescription className="text-sm text-slate-600">
            Scan the QR with your selected payment app, then confirm your
            details below.
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-6">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,220px)_1fr]">
            <QrPreview
              methodId={selected.id}
              name={selected.name}
              accountName={selected.accountName}
              accountNumber={selected.accountNumber}
              accent={selected.accent}
            />

            <div className="space-y-3">
              <div
                role="radiogroup"
                aria-label="Payment method"
                className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1"
              >
                {paymentMethods.map((item) => {
                  const active = item.id === method;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setMethod(item.id)}
                      className={cn(
                        "flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all",
                        active
                          ? "border-brand bg-brand text-white shadow-sm"
                          : "border-brand/30 bg-white text-slate-800 hover:border-brand hover:bg-brand/5",
                      )}
                    >
                      <span>{item.name}</span>

                      <span
                        className={cn(
                          "flex size-4 items-center justify-center rounded-full border-2",
                          active
                            ? "border-white bg-white"
                            : "border-brand/40 bg-transparent",
                        )}
                      >
                        {active ? (
                          <span className="size-1.5 rounded-full bg-brand" />
                        ) : null}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-slate-500">
                {selected.name} is selected. Transfer exactly{" "}
                <span className="font-semibold text-slate-700">
                  ${proPlanDetails.monthlyPrice}
                </span>{" "}
                for this plan.
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-2 rounded-xl bg-brand/5 px-3.5 py-3 text-sm text-slate-700 ring-1 ring-brand/10">
            <Info className="mt-0.5 size-4 shrink-0 text-brand" weight="fill" />

            <p>
              Preview only — verify payment details before sending money, then
              upload your transfer screenshot below.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl bg-white/95 py-0 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] ring-slate-200/80">
        <CardHeader className="gap-1 pt-6">
          <CardTitle className="font-heading text-xl font-semibold text-slate-950">
            Confirm your details
          </CardTitle>

          <CardDescription className="text-sm text-slate-600">
            We’ll use this information to verify your payment and activate Pro.
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-6">
          <form
            className="space-y-5"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Full name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm text-slate-700">
                  Full name
                </Label>

                <Input
                  id="fullName"
                  placeholder="Your full name"
                  className="h-11 rounded-xl border-slate-200 bg-white px-3.5 text-sm md:text-sm"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Full name must be at least 2 characters",
                    },
                  })}
                />

                {errors.fullName ? (
                  <p className="text-xs text-red-500">
                    {errors.fullName.message}
                  </p>
                ) : null}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-slate-700">
                  Email
                </Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="h-11 rounded-xl border-slate-200 bg-white px-3.5 text-sm md:text-sm"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />

                {errors.email ? (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                ) : null}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm text-slate-700">
                  Phone number
                </Label>

                <Input
                  id="phone"
                  type="tel"
                  placeholder="+95 9 xxx xxx xxx"
                  className="h-11 rounded-xl border-slate-200 bg-white px-3.5 text-sm md:text-sm"
                  {...register("phone", {
                    required: "Phone number is required",
                    minLength: {
                      value: 7,
                      message: "Please enter a valid phone number",
                    },
                  })}
                />

                {errors.phone ? (
                  <p className="text-xs text-red-500">{errors.phone.message}</p>
                ) : null}
              </div>

              {/* Transaction ID */}
              <div className="space-y-2">
                <Label
                  htmlFor="transactionId"
                  className="text-sm text-slate-700"
                >
                  Transaction ID{" "}
                  <span className="font-normal text-slate-400">(optional)</span>
                </Label>

                <Input
                  id="transactionId"
                  placeholder="From your payment receipt"
                  className="h-11 rounded-xl border-slate-200 bg-white px-3.5 text-sm md:text-sm"
                  {...register("transactionId")}
                />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes" className="text-sm text-slate-700">
                Notes{" "}
                <span className="font-normal text-slate-400">(optional)</span>
              </Label>

              <Textarea
                id="notes"
                placeholder="Anything we should know about this payment..."
                className="min-h-24 rounded-xl border-slate-200 bg-white px-3.5 py-3 text-sm md:text-sm"
                {...register("notes")}
              />
            </div>

            {/* Screenshot */}
            <div className="space-y-2">
              <Label htmlFor="screenshot" className="text-sm text-slate-700">
                Payment screenshot
              </Label>

              <label
                htmlFor="screenshot"
                className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 px-4 py-8 text-center transition-colors hover:border-brand hover:bg-brand/5"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <UploadSimple className="size-5" weight="bold" />
                </span>

                <span className="text-sm font-medium text-slate-800">
                  {screenshotName
                    ? screenshotName
                    : "Upload transfer screenshot"}
                </span>

                <span className="text-xs text-slate-500">
                  PNG, JPG, or WEBP up to 5MB
                </span>

                <Input
                  id="screenshot"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="sr-only"
                  {...screenshotField}
                  ref={(element) => {
                    screenshotField.ref(element);
                    screenshotRef.current = element;
                  }}
                  onChange={(event) => {
                    screenshotField.onChange(event);

                    const file = event.target.files?.[0];

                    setScreenshotName(file ? file.name : null);
                  }}
                />
              </label>

              {errors.screenshot ? (
                <p className="text-xs text-red-500">
                  {errors.screenshot.message}
                </p>
              ) : null}

              {screenshotName ? (
                <button
                  type="button"
                  onClick={clearScreenshot}
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-800"
                >
                  <X className="size-3.5" />
                  Remove file
                </button>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-600">
                Paying with{" "}
                <span className="font-semibold text-slate-900">
                  {selected.name}
                </span>{" "}
                · ${proPlanDetails.monthlyPrice}/month
              </p>

              <Button
                type="submit"
                disabled={!canSubmit}
                className="h-11 rounded-full bg-brand px-6 text-sm text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
              >
                Payment Confirmation
              </Button>

              <PaymentDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                payload={confirmedPayload}
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export function PlanSummaryCard() {
  return (
    <Card className="h-fit rounded-2xl bg-white/95 py-0 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] ring-slate-200/80">
      <CardHeader className="gap-2 pt-6">
        <CardTitle className="font-heading text-2xl font-semibold text-slate-950">
          {proPlanDetails.name}
        </CardTitle>

        <CardDescription className="text-sm leading-relaxed text-slate-600">
          {proPlanDetails.description}
        </CardDescription>

        <p className="pt-2">
          <span className="font-heading text-4xl font-semibold text-slate-950">
            ${proPlanDetails.monthlyPrice}
          </span>

          <span className="text-sm text-slate-500">
            {" "}
            /month
          </span>
        </p>
      </CardHeader>

      <CardContent className="pb-7">
        <ul className="space-y-2.5">
          {proPlanDetails.features.map((feature) => (
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

        <Link
          href="/#pricing"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
        >
          <ArrowLeft className="size-4" />
          Change plan
        </Link>
      </CardContent>
    </Card>
  )
}
