import Image from "next/image";
import { HeroSearch } from "./search/HeroSearch";
import { StarIcon, TrophyIcon } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[640px] bg-gradient-to-br from-brand-50 via-white to-white" />
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -top-20 right-20 h-[320px] w-[320px] rounded-full bg-navy-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-10 lg:pt-16 pb-28 lg:pb-40">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy + search */}
          <div className="lg:col-span-6 relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-line px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Persönlich. Regional. Kompetent.
            </div>

            <h1 className="mt-6 font-extrabold tracking-tight text-navy-900 text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.02]">
              Ihr Immobilien­ziel.
              <br />
              Unsere Mission
              <span className="text-brand-500">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-navy-500 leading-relaxed">
              Ob Kauf, Verkauf oder Bewertung – wir begleiten Sie mit Erfahrung,
              Leidenschaft und einem starken Netzwerk zu Ihrer Traumimmobilie.
            </p>

            <div className="mt-8">
              <HeroSearch />
            </div>

            {/* Trust line */}
            <div className="mt-7 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&q=80&auto=format&fit=crop",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 overflow-hidden rounded-full border-2 border-white ring-1 ring-line"
                  >
                    <Image
                      src={src}
                      width={48}
                      height={48}
                      alt="Zufriedener Kunde"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-brand-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                  <span className="ml-1 font-bold text-navy-900">4,9/5</span>
                </div>
                <div className="text-navy-300">
                  von <span className="font-semibold text-navy-700">150+</span> zufriedenen Kunden
                </div>
              </div>
            </div>
          </div>

          {/* Right: image with badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[32px] bg-navy-100 shadow-[0_40px_80px_-40px_rgba(15,24,57,0.45)]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop"
                alt="Modernes Wohnzimmer einer Premium-Immobilie"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>

            {/* Quality badge */}
            <div className="absolute -top-4 right-4 lg:-right-4 flex items-center gap-3 rounded-2xl border border-line bg-white/95 backdrop-blur px-4 py-3 shadow-[0_18px_40px_-18px_rgba(15,24,57,0.35)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                <TrophyIcon className="h-6 w-6" />
              </div>
              <div className="leading-tight">
                <div className="text-[13px] font-bold text-navy-900">
                  Ausgezeichnete Qualität
                </div>
                <div className="text-[11px] text-navy-300">
                  Top bewertet von unseren Kunden
                </div>
                <div className="mt-1 flex items-center gap-1 text-brand-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-3 w-3" />
                  ))}
                  <span className="ml-1 text-[11px] font-bold text-navy-900">4,9/5</span>
                </div>
              </div>
            </div>

            {/* Floating property mini-card */}
            <div className="absolute -bottom-8 left-4 lg:-left-6 max-w-[260px] rounded-2xl border border-line bg-white p-3 shadow-[0_18px_40px_-18px_rgba(15,24,57,0.3)]">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-xl bg-navy-100">
                  <Image
                    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=200&q=80&auto=format&fit=crop"
                    alt="Beispielhaus"
                    width={120}
                    height={120}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 leading-tight">
                  <div className="text-[11px] font-semibold text-brand-500 uppercase tracking-wider">
                    Neu im Angebot
                  </div>
                  <div className="text-sm font-bold text-navy-900">Villa am Stadtpark</div>
                  <div className="text-xs text-navy-300">€ 875.000 · 6 Zi · 220 m²</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
