import type { Metadata } from "next"
import { ProPaymentPage } from "@/components/payment/pro-payment-page"

export const metadata: Metadata = {
  title: "Pro payment",
  description:
    "Review your Pro plan, pay with QR, and confirm your details to activate PXO AI.",
}

export default function ProPaymentRoute() {
  return <ProPaymentPage />
}
