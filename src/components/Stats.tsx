import {
  AwardIcon,
  HomeIcon,
  TrendingUpIcon,
  UsersIcon,
} from "./icons";

const STATS = [
  {
    value: "150+",
    label: "Zufriedene Kunden",
    icon: <UsersIcon className="h-6 w-6" />,
  },
  {
    value: "250+",
    label: "Erfolgreich vermittelt",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    value: "15+",
    label: "Jahre Erfahrung",
    icon: <TrendingUpIcon className="h-6 w-6" />,
  },
  {
    value: "100%",
    label: "Engagement für Sie",
    icon: <AwardIcon className="h-6 w-6" />,
  },
];

export function Stats() {
  return (
    <section className="relative -mt-24 lg:-mt-32 z-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-3xl border border-line bg-white px-4 sm:px-6 lg:px-10 py-6 sm:py-8 shadow-[0_30px_60px_-30px_rgba(15,24,57,0.2)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-3 sm:gap-x-6 lg:gap-4 lg:divide-x divide-line">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:px-6"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                  {s.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-navy-900 leading-none">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-xs sm:text-sm text-navy-500 leading-snug">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
