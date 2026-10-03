import type { Metadata } from "next";
import { ProPaymentPage } from "@/components/payment/pro-payment-page";
import { proMaxPlanDetails } from "@/lib/payment";

export const metadata: Metadata = {
  title: "Pro Max payment",
  description:
    "Review your Pro Max plan, pay with QR, and confirm your details to activate PXO AI.",
};

export default function ProPaymentRoute() {
  return <ProPaymentPage plan={ proMaxPlanDetails } />;
}
