import Image from "next/image"
import { SiteHeader } from "@/components/landing/site-header"
import { HeroSection } from "@/components/landing/hero-section"
import { IntegrationsSection } from "@/components/landing/integrations"
import { HowItWorksSection } from "@/components/landing/how-it-works"
import { FeaturesSection } from "@/components/landing/features-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { ContactSection } from "@/components/landing/contact-section"
import { SiteFooter } from "@/components/landing/site-footer"

export function LandingPage() {
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
        <main>
          <HeroSection />
          <IntegrationsSection />
          <HowItWorksSection />
          <FeaturesSection />
          <PricingSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
