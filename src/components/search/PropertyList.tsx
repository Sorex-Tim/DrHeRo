"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import {
  filterProperties,
  PRICE_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
  PROPERTIES,
  RENT_PRICE_OPTIONS,
  TRANSACTION_OPTIONS,
} from "@/lib/properties";
import {
  BathIcon,
  BedIcon,
  BuildingIcon,
  ChevronRight,
  EuroIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
  RulerIcon,
  SearchIcon,
} from "../icons";
import { Dropdown } from "./Dropdown";
import { LocationField } from "./LocationField";
import { useSearch } from "./SearchContext";

export function PropertyList() {
  const { filters, draft, setDraft, apply, reset } = useSearch();

  const list = useMemo(() => filterProperties(PROPERTIES, filters), [filters]);

  const priceOptions =
    draft.transaction === "Mieten" ? RENT_PRICE_OPTIONS : PRICE_OPTIONS;

  const submit = () => apply();

  return (
    <div id="aktuelle-objekte" className="scroll-mt-28">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            Aktuelle Highlights
          </div>
          <h3 className="mt-2 text-3xl lg:text-4xl font-extrabold tracking-tight text-navy-900">
            Aktuelle Objekte
          </h3>
          <div className="mt-2 text-sm text-navy-500">
            <span className="font-bold text-navy-900">{list.length}</span>{" "}
            {list.length === 1 ? "Treffer" : "Treffer"} aus{" "}
            <span className="font-semibold">{PROPERTIES.length}</span>{" "}
            verfügbaren Objekten
          </div>
        </div>
        <div className="flex items-center gap-3">
          {hasActiveFilters(filters) && (
            <button
              type="button"
              onClick={reset}
              className="text-sm font-bold text-navy-500 hover:text-brand-500"
            >
              Filter zurücksetzen
            </button>
          )}
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold text-navy-700 hover:border-brand-200 hover:text-brand-500 transition-colors"
          >
            Alle ansehen
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Filter bar */}
      <div className="rounded-3xl border border-line bg-white p-3 shadow-[0_20px_50px_-30px_rgba(15,24,57,0.18)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-2">
          <LocationField
            value={draft.query}
            onChange={(v) => setDraft({ query: v })}
            onSubmit={submit}
          />
          <Dropdown
            icon={<HomeIcon className="h-5 w-5" />}
            label="Vorhaben"
            value={draft.transaction}
            placeholder="Kaufen oder Mieten"
            onChange={(v) => {
              setDraft({
                transaction: (v as typeof draft.transaction) || "",
                maxPrice: 0,
              });
            }}
            options={[
              { label: "Beliebig", value: "" },
              ...TRANSACTION_OPTIONS.map((t) => ({ label: t, value: t })),
            ]}
          />
          <Dropdown
            icon={<EuroIcon className="h-5 w-5" />}
            label="Preis"
            value={String(draft.maxPrice)}
            placeholder="Preis bis"
            onChange={(v) => setDraft({ maxPrice: Number(v) })}
            options={priceOptions.map((p) => ({
              label: p.label,
              value: String(p.value),
            }))}
          />
          <Dropdown
            icon={<BuildingIcon className="h-5 w-5" />}
            label="Typ"
            value={draft.propertyType}
            placeholder="Alle Typen"
            onChange={(v) =>
              setDraft({ propertyType: (v as typeof draft.propertyType) || "" })
            }
            options={[
              { label: "Alle Typen", value: "" },
              ...PROPERTY_TYPE_OPTIONS.map((t) => ({ label: t, value: t })),
            ]}
          />
          <button
            type="button"
            onClick={submit}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-navy-900 px-6 text-sm font-bold text-white hover:bg-navy-700 transition-colors"
          >
            <SearchIcon className="h-5 w-5" />
            Suchen
          </button>
        </div>
      </div>

      {/* Cards */}
      {list.length === 0 ? (
        <EmptyState onReset={reset} />
      ) : (
        <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <article key={p.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-100">
                <Image
                  src={p.img}
                  alt={p.address}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {p.badge && (
                  <div className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-500">
                    {p.badge}
                  </div>
                )}
                <button
                  type="button"
                  aria-label="Merken"
                  className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur text-navy-700 hover:bg-brand-500 hover:text-white transition-colors shadow-sm"
                >
                  <HeartIcon className="h-4 w-4" />
                </button>
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-navy-900/80 backdrop-blur px-2.5 py-1 text-[11px] font-bold text-white">
                  {p.transaction} · {p.type}
                </div>
              </div>

              <div className="mt-4 flex items-baseline justify-between gap-3">
                <div className="text-xl font-extrabold text-navy-900">
                  {p.priceLabel}
                </div>
                <div className="inline-flex items-center gap-1 text-xs text-navy-300">
                  <RulerIcon className="h-3.5 w-3.5" />
                  {p.sqm} m²
                </div>
              </div>
              <div className="mt-1.5 inline-flex items-center gap-1 text-sm text-navy-500 max-w-full">
                <MapPinIcon className="h-3.5 w-3.5 text-brand-500 shrink-0" />
                <span className="truncate">{p.address}</span>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
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
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

function hasActiveFilters(f: ReturnType<typeof useSearch>["filters"]): boolean {
  return (
    f.query.trim().length > 0 ||
    f.transaction !== "Kaufen" ||
    f.maxPrice > 0 ||
    f.propertyType.length > 0
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="mt-8 rounded-3xl border border-dashed border-line bg-white p-12 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-500">
        <SearchIcon className="h-6 w-6" />
      </div>
      <h4 className="mt-4 text-xl font-extrabold text-navy-900">
        Keine Treffer für diese Filter
      </h4>
      <p className="mt-2 text-sm text-navy-500 max-w-md mx-auto">
        Setzen Sie die Filter zurück oder erweitern Sie die Suche – wir helfen
        Ihnen auch persönlich, das richtige Objekt zu finden.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-600 transition-colors"
      >
        Filter zurücksetzen
      </button>
    </div>
  );
}
