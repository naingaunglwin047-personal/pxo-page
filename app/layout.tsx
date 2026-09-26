import type { Metadata } from "next"
import { Inria_Serif } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site"

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria",
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Stop Typing. Start Listening.`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", inriaSerif.variable)}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  )
}
