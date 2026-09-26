import type { Metadata } from "next"
import { SignupPage } from "@/components/signup/signup-page"

export const metadata: Metadata = {
  title: "Create your account",
  description: "Get started with precise Burmese AI meeting notes.",
}

export default function SignupRoute() {
  return <SignupPage />
}
