import Image from "next/image";
import Link from "next/link";
import { LockSimple, Question } from "@phosphor-icons/react/ssr";
import { Logo } from "@/components/brand/logo";
import { LoginForm } from "@/components/login/login-form";
import { siteConfig } from "@/lib/site";

export function LoginPage() {
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

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-between px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        {/* Header matched to SignupPage left column top position */}
        <header className="flex items-center justify-between gap-4">
          <Logo />
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
          >
            <Question className="size-4" weight="fill" />
            Need help?
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col items-center justify-center py-8">
          <div className="animate-rise w-full max-w-[420px]">
            <LoginForm />

            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500">
              <LockSimple className="size-4 text-brand" weight="fill" />
              Your workspace, securely connected.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
