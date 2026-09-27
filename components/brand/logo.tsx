import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image";

type LogoProps = {
  className?: string
  href?: string
}

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-80",
        className,
      )}
    >
      {/* <span
        aria-hidden
        className="flex size-8 items-center justify-center rounded-md bg-brand text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.7)]"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none">
          <path
            d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span> */}
      <Image
        src="/images/PXO_logos.png"
        alt="PXO AI Logo"
        width={52}
        height={52}
        className="size-8 object-contain"
        priority
      />
      <span className="font-heading text-lg font-semibold tracking-tight sm:text-xl">
        PXO AI
      </span>
    </Link>
  );
}
