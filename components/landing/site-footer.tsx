import Link from "next/link"
import {
  FacebookLogo,
  LinkedinLogo,
  DribbbleLogo,
  XLogo,
} from "@phosphor-icons/react/ssr"
import { Logo } from "@/components/brand/logo"
import { footerLinks, siteConfig } from "@/lib/site"

const socials = [
  { label: "X", icon: XLogo, href: "#" },
  { label: "LinkedIn", icon: LinkedinLogo, href: "#" },
  { label: "Dribbble", icon: DribbbleLogo, href: "#" },
  { label: "Facebook", icon: FacebookLogo, href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white px-4 pt-14 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="text-sm font-semibold text-slate-900">{title}</p>
                <ul className="mt-3 space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-slate-600 transition-colors hover:text-slate-950"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex size-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <social.icon className="size-4" weight="bold" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
