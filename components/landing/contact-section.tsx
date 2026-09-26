import {
  CalendarBlank,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "@phosphor-icons/react/ssr"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contactDetails } from "@/lib/site"

const contactIcons = [EnvelopeSimple, Phone, MapPin, CalendarBlank]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white/60 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Let&apos;s talk
          </h2>
          <p className="mt-3 max-w-md text-base text-slate-600">
            Tell us about your team and we&apos;ll help you get precise Burmese
            meeting notes up and running.
          </p>

          <form className="mt-8 space-y-5" action="#">
            <div className="space-y-2">
              <Label htmlFor="contact-name" className="text-sm text-slate-700">
                Name
              </Label>
              <Input
                id="contact-name"
                name="name"
                placeholder="Your name"
                className="h-11 rounded-xl border-slate-200 bg-white px-3.5 text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email" className="text-sm text-slate-700">
                Email
              </Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                className="h-11 rounded-xl border-slate-200 bg-white px-3.5 text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="contact-message"
                className="text-sm text-slate-700"
              >
                What are you looking for?
              </Label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="Share a bit about your use case..."
                className="min-h-28 rounded-xl border-slate-200 bg-white px-3.5 py-3 text-sm"
              />
            </div>
            {/* <Button
              type="submit"
              className="h-11 rounded-full bg-brand px-6 text-sm text-white hover:bg-brand-dark"
            >
              Send Message
            </Button>
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
              We usually reply within one business day.
            </p> */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Button
                type="submit"
                className="h-11 rounded-full bg-brand px-6 text-sm text-white hover:bg-brand-dark"
              >
                Send Message
              </Button>
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                We usually reply within one business day.
              </p>
            </div>
          </form>
        </div>

        <div className="space-y-8 lg:pt-10">
          <div>
            <h3 className="font-heading text-xl font-semibold text-slate-950">
              Ways to get in touch
            </h3>
            <ul className="mt-5 space-y-4">
              {contactDetails.map((item, index) => {
                const Icon = contactIcons[index];
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#2D8CFF] text-white">
                      <Icon className="size-4" weight="duotone" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {item.label}
                      </p>
                      <p className="text-sm text-slate-600">{item.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl bg-brand px-6 py-7 text-white shadow-[0_24px_60px_-28px_rgba(37,99,235,0.8)]">
            <h3 className="font-heading text-xl font-semibold">Need a demo?</h3>
            <p className="mt-2 text-sm leading-relaxed text-blue-100">
              See how PXO handles real Burmese conversations with your team in
              under 20 minutes.
            </p>
            <Button className="mt-5 h-10 rounded-full bg-white px-5 text-sm text-brand hover:bg-blue-50">
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
