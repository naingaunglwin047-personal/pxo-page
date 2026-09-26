import { integrations } from "@/lib/site"

// for icons color and icons
function IntegrationIcon({ name }: { name: string }) {
  const common = "size-6";

  switch (name) {
    case "meet":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${common} text-[#00897B]`}
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.5 9.2-2.2 1.5a.8.8 0 0 1-1.3-.6V9.9a.8.8 0 0 1 1.3-.6l2.2 1.5a.8.8 0 0 1 0 1.4Z"
          />
        </svg>
      );
    case "zoom":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${common} text-[#0B5CFF]`}
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M4 8.5A2.5 2.5 0 0 1 6.5 6h7A2.5 2.5 0 0 1 16 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-7Zm13.2 1.1 2.5-1.7a1 1 0 0 1 1.5.8v6.6a1 1 0 0 1-1.5.8l-2.5-1.7v-4.8Z"
          />
        </svg>
      );
    case "teams":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${common} text-[#6264A7]`}
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M14.5 6.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm6.5 5.5c2.2 0 4 1.3 4 3v1.5h-8V15.5c0-1.7 1.8-3 4-3ZM4 13.2c0-1.3 1.4-2.2 3.2-2.2.5 0 1 .1 1.4.2-.7.7-1.1 1.6-1.1 2.6v1.7H4v-2.3Z"
          />
        </svg>
      );
    case "slack":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${common} text-[#E01E5A]`}
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M6 9.5A2.5 2.5 0 1 1 6 14.5 2.5 2.5 0 0 1 6 9.5Zm6-1A2.5 2.5 0 1 1 12 14a2.5 2.5 0 0 1 0-5.5Zm6 1A2.5 2.5 0 1 1 18 14.5 2.5 2.5 0 0 1 18 9.5Z"
          />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${common} text-slate-600`}
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M6 9.5A2.5 2.5 0 1 1 6 14.5 2.5 2.5 0 0 1 6 9.5Zm6-1A2.5 2.5 0 1 1 12 14a2.5 2.5 0 0 1 0-5.5Zm6 1A2.5 2.5 0 1 1 18 14.5 2.5 2.5 0 0 1 18 9.5Z"
          />
        </svg>
      );
  }
}

export function IntegrationsSection() {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase text-center">
        Works with your meeting tools
      </p>
      {/* <section className="mx-auto mt-4 max-w-2xl rounded-3xl border border-slate-200/70 bg-white/60 p-4 backdrop-blur-sm"> */}
        <section className="mx-4 mt-4 rounded-2xl border border-slate-200/70 bg-white/60 p-4 backdrop-blur-sm sm:mx-6 sm:p-6 md:mx-auto md:max-w-2xl">
        <div className="mx-auto max-w-6xl text-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {integrations.map((item) => (
              <li
                key={item.name}
                className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-600"
              >
                <IntegrationIcon name={item.icon} />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
