export function HeroMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand/15 via-sky-100/40 to-transparent blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-28px_rgba(37,99,235,0.45)] ring-1 ring-slate-200/80">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
          <div>
            <p className="text-sm font-semibold text-slate-900">Meeting Summary</p>
            <p className="text-xs text-slate-500">Product sync · 32 min</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
            Live
          </span>
        </div>

        <div className="space-y-3 px-4 py-4 sm:px-5">
          <div className="flex gap-3">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
              AY
            </span>
            <div className="rounded-2xl rounded-tl-md bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700">
              Can we finalize the Yangon rollout timeline today?
            </div>
          </div>

          <div className="flex gap-3">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">
              MK
            </span>
            <div className="rounded-2xl rounded-tl-md bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700">
              Yes — marketing needs the Burmese script by Friday.
            </div>
          </div>

          <div className="rounded-xl bg-brand/5 p-3.5 ring-1 ring-brand/15">
            <p className="text-[11px] font-semibold tracking-wide text-brand uppercase">
              AI Summary
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
              Team aligned on Yangon rollout. Marketing will deliver the Burmese
              script by Friday. Next checkpoint set for Monday standup.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
