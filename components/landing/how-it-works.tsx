import {
  VideoCameraIcon,
  NotePencil,
  Sparkle,
} from "@phosphor-icons/react/ssr";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { steps } from "@/lib/site"

const stepIcons = [VideoCameraIcon, NotePencil, Sparkle];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Three steps to effortless notes
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            From live call to polished summary — without the busywork.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <Card
                key={step.number}
                className="rounded-2xl bg-white/90 py-0 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)] ring-slate-200/80"
              >
                <CardHeader className="gap-4 pt-6 pb-6">
                  <div className="flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-[#2D8CFF] text-white">
                      <Icon className="size-5" weight="duotone" />
                    </span>
                    <span className="font-heading text-3xl font-semibold text-slate-200">
                      {step.number}
                    </span>
                  </div>
                  <CardTitle className="font-heading text-xl font-semibold text-slate-950">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}
