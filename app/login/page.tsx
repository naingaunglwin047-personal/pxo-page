import type { Metadata } from "next"
import { LoginPage } from "@/components/login/login-page"

export const metadata: Metadata = {
  title: "Welcome back",
  description: "Sign in to your PXO AI workspace.",
}

export default function LoginRoute() {
  return <LoginPage />
}
