import { features } from "@/lib/site"

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="scroll-mt-24 bg-white/50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Built for Burmese teams
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Local language accuracy, meeting-ready structure, and security your
            organization can trust.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="max-w-sm">
              <h3 className="font-heading text-lg font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
