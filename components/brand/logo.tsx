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
