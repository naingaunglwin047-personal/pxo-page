import Image from "next/image"
import Link from "next/link"
import { Star } from "@phosphor-icons/react/ssr"
import { Logo } from "@/components/brand/logo"
import { SignupForm } from "@/components/signup/signup-form"
import { siteConfig } from "@/lib/site"

export function SignupPage() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-[#f7faff] text-slate-900">
      <Image
        src="/images/register.png"
        alt=""
        fill
        preload
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
        <div className="animate-rise flex h-full flex-col justify-between gap-12 lg:min-h-[34rem] lg:py-4">
          <Logo />

          <div className="max-w-lg">
            <h1 className="font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Stop typing.
              <br />
              Start listening.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {siteConfig.description}
            </p>

            <div className="mt-10 max-w-sm">
              <div className="flex items-center gap-2 text-brand">
                <Star className="size-5" weight="duotone" />
                <p className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
                  Trusted by 23K+ Burmese Professionals
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Join the growing network of teams transcribing Burmese meetings
                with extreme local context accuracy.
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex w-fit items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
          >
            ← Back to Homepage
          </Link>
        </div>

        <div className="animate-rise-delayed flex justify-center lg:justify-end">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}
