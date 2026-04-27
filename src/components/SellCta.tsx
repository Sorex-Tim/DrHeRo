import { OpenContactButton } from "./contact-modal/OpenContactButton";
import { CheckIcon, PhoneIcon } from "./icons";

const POINTS = [
  "Kostenlose Wertermittlung",
  "Persönliche Beratung",
  "Diskrete & schnelle Abwicklung",
];

export function SellCta() {
  return (
    <section id="bewertung" className="mt-12 lg:mt-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 lg:px-10 py-8 lg:py-9 text-white shadow-[0_30px_70px_-30px_rgba(15,24,57,0.7)]">
          {/* decorative shapes */}
          <div className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 items-center gap-6">
            <div className="lg:col-span-5 flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <PhoneIcon className="h-7 w-7 text-brand-400" />
              </div>
              <div>
                <div className="text-2xl font-bold leading-tight">
                  Sie möchten verkaufen?
                </div>
                <div className="mt-1 text-sm text-navy-100/80">
                  Wir erzielen den besten Preis für Ihre Immobilie.
                </div>
              </div>
            </div>

            <ul className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-1 gap-2 text-sm">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-navy-100">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>

            <div className="lg:col-span-3 flex lg:justify-end">
              <OpenContactButton intent="Bewertung" variant="white" size="lg">
                Kostenlose Bewertung starten
              </OpenContactButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
