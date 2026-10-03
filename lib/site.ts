export const siteConfig = {
  name: "PXO AI",
  description:
    "Advanced AI language models trained to understand, transcribe, and summarize live Burmese conversations instantly.",
  url: "https://pxo.ai",
} as const

export const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it Works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
] as const

export const trustPoints = [
  "No bot in call",
  "Burmese speaker ID",
  "Instant summaries",
] as const;

export const integrations = [
  { name: "Google Meet", icon: "meet" },
  { name: "Zoom", icon: "zoom" },
  { name: "Microsoft Teams", icon: "teams" },
  { name: "Slack", icon: "slack" },
] as const

export const steps = [
  {
    number: "01",
    title: "Join your meeting",
    description:
      "Start your Burmese meeting on Google Meet, Zoom, or Teams. PXO AI listens silently - no intrusive bot joins.",
  },
  {
    number: "02",
    title: "Live transcription",
    description:
      "PXO AI converts spoken Burmese to text in real time with high-accuracy speaker identification and timestamp markers.",
  },
  {
    number: "03",
    title: "AI summary delivered",
    description:
      "The moment your meeting ends, receive an agenda-aligned summary, action items, and key decisions automatically.",
  },
] as const;

export const features = [
  {
    title: "Native AI model",
    description:
      "Built specifically for Burmese speech patterns, dialects, and mixed-language conversation.",
  },
  {
    title: "Speaker identification",
    description:
      "Automatically label who said what so your notes stay clear even in crowded meetings.",
  },
  {
    title: "Structured summaries",
    description:
      "Get decisions, action items, and key topics organized into a shareable brief.",
  },
  {
    title: "Deep search history",
    description:
      "Find any past discussion by keyword, speaker, or topic across your entire meeting library.",
  },
  {
    title: "Enterprise security",
    description:
      "Encryption in transit and at rest, with controls designed for business and team workspaces.",
  },
  {
    title: "Bilingual output",
    description:
      "Generate notes in Burmese, English, or both — without losing local context or nuance.",
  },
] as const

export const pricingPlans = [
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 19,
    annualPrice: 15,
    description: "For individuals and small teams getting started.",
    features: [
      "Up to 20 hours of transcription / month",
      "Live Burmese + English transcripts",
      "AI summaries & action items",
      "30-day searchable history",
      "Email support",
    ],
    cta: "Get Pro",
    popular: false,
  },
  {
    id: "pro-max",
    name: "Pro Max",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "For growing teams that need deeper coverage.",
    features: [
      "Unlimited transcription",
      "Speaker identification",
      "Bilingual summaries",
      "Unlimited searchable history",
      "Priority support",
      "Team workspace & admin controls",
    ],
    cta: "Get Pro Max",
    popular: true,
  },
] as const

export const footerLinks = {
  Product: ["Features", "Integrations", "Pricing", "Changelog"],
  "Use Case": ["Sales teams", "Agencies", "Startups", "Enterprise"],
  Company: ["About", "Careers", "Blog", "Contact"],
} as const

export const contactDetails = [
  { label: "Email", value: "hello@pxo.ai" },
  { label: "Phone", value: "+95 9 123 456 789" },
  { label: "Office", value: "Yangon, Myanmar" },
  { label: "Support", value: "Mon–Fri, 9am–6pm MMT" },
] as const
