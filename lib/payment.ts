export const paymentMethods = [
  {
    id: "kbzpay",
    name: "KBZPAY",
    accountName: "PXO AI Co., Ltd.",
    accountNumber: "09 123 456 789",
    accent: "#1d4ed8",
  },
  {
    id: "ayapay",
    name: "AYAPAY",
    accountName: "PXO AI Co., Ltd.",
    accountNumber: "09 987 654 321",
    accent: "#7c3aed",
  },
  {
    id: "cbpay",
    name: "CBPAY",
    accountName: "PXO AI Co., Ltd.",
    accountNumber: "09 555 111 222",
    accent: "#0f766e",
  },
  {
    id: "wavepay",
    name: "WAVEPAY",
    accountName: "PXO AI Co., Ltd.",
    accountNumber: "09 777 888 999",
    accent: "#ea580c",
  },
] as const

export type PaymentMethodId = (typeof paymentMethods)[number]["id"]

export const proPlanDetails = {
  name: "Pro",
  description:
    "For individuals and small teams who need reliable Burmese transcription.",
  monthlyPrice: 19,
  badge: "Monthly plan",
  features: [
    "Up to 20 meetings / month",
    "Live Burmese transcription",
    "Speaker identification (up to 5)",
    "AI meeting summaries",
    "Searchable 3-month history",
    "Export to PDF & Docs",
    "Google Meet & Zoom support",
    "Email support",
  ],
} as const

export const proMaxPlanDetails = {
  name: "Pro Max",
  description:
    "For larger teams and organizations who need advanced features and higher limits.",
  monthlyPrice: 49,
  badge: "Monthly plan",
  features: [
    "Up to 100 meetings / month",
    "Live Burmese transcription",
    "Speaker identification (up to 20)",
    "AI meeting summaries",
    "Searchable 12-month history",
    "Export to PDF & Docs",
    "Google Meet, Zoom & Microsoft Teams support",
    "Priority email support",
  ],
} as const
