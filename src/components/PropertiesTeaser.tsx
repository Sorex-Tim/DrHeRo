import Image from "next/image";
import Link from "next/link";
import { PROPERTIES } from "@/lib/properties";
import {
  BathIcon,
  BedIcon,
  ChevronRight,
  HeartIcon,
  MapPinIcon,
  RulerIcon,
} from "./icons";

const FEATURED_IDS = ["p-1", "p-2", "p-3"];

export function PropertiesTeaser() {
  const items = FEATURED_IDS.map((id) =>
    PROPERTIES.find((p) => p.id === id),
  ).filter((p): p is (typeof PROPERTIES)[number] => Boolean(p));

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            Aktuelle Highlights
          </div>
          <h3 className="mt-2 text-3xl lg:text-4xl font-extrabold tracking-tight text-navy-900">
            Ausgewählte Objekte
          </h3>
          <p className="mt-2 text-navy-500 max-w-xl">
            Drei kuratierte Beispiele aus unserem aktuellen Portfolio – die volle
            Übersicht finden Sie auf der Immobilien-Seite.
          </p>
        </div>
        <Link
          href="/immobilien"
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_-12px_rgba(242,107,54,0.7)] hover:bg-brand-600 transition-colors"
        >
          Alle Objekte ansehen
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link key={p.id} href="/immobilien" className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-100">
              <Image
                src={p.img}
                alt={p.address}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {p.badge && (
                <div className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-500">
                  {p.badge}
                </div>
              )}
              <span
                aria-hidden
                className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur text-navy-700 shadow-sm"
              >
                <HeartIcon className="h-4 w-4" />
              </span>
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-navy-900/80 backdrop-blur px-2.5 py-1 text-[11px] font-bold text-white">
                {p.transaction} · {p.type}
              </div>
            </div>

            <div className="mt-4 flex items-baseline justify-between gap-3">
              <div className="text-xl font-extrabold text-navy-900 group-hover:text-brand-500 transition-colors">
                {p.priceLabel}
              </div>
              <div className="inline-flex items-center gap-1 text-xs text-navy-300">
                <RulerIcon className="h-3.5 w-3.5" />
                {p.sqm} m²
              </div>
            </div>
            <div className="mt-1.5 inline-flex items-center gap-1 text-sm text-navy-500">
              <MapPinIcon className="h-3.5 w-3.5 text-brand-500 shrink-0" />
              <span className="truncate">{p.address}</span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              {p.beds > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-navy-700">
                  <BedIcon className="h-3.5 w-3.5 text-brand-500" />
                  {p.beds} Zi
                </span>
              )}
              {p.baths > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-navy-700">
                  <BathIcon className="h-3.5 w-3.5 text-brand-500" />
                  {p.baths} Bad
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
