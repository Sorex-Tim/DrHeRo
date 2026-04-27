"use client";

import { useRouter } from "next/navigation";
import {
  PRICE_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
  RENT_PRICE_OPTIONS,
  TRANSACTION_OPTIONS,
} from "@/lib/properties";
import {
  BuildingIcon,
  EuroIcon,
  HomeIcon,
  SearchIcon,
} from "../icons";
import { Dropdown } from "./Dropdown";
import { LocationField } from "./LocationField";
import { useSearch } from "./SearchContext";

const QUICK_CHIPS: { label: string; type: "Haus" | "Wohnung" | "Grundstück" | "Gewerbe" }[] = [
  { label: "Einfamilienhaus", type: "Haus" },
  { label: "Eigentumswohnung", type: "Wohnung" },
  { label: "Grundstück", type: "Grundstück" },
  { label: "Gewerbe", type: "Gewerbe" },
];

export function HeroSearch() {
  const { draft, setDraft, apply } = useSearch();
  const router = useRouter();

  const submit = () => {
    apply();
    router.push("/immobilien");
  };

  const priceOptions =
    draft.transaction === "Mieten" ? RENT_PRICE_OPTIONS : PRICE_OPTIONS;

  return (
    <div className="rounded-3xl border border-line bg-white p-3 shadow-[0_30px_60px_-30px_rgba(15,24,57,0.25)]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
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
      </div>

      <div className="mt-2 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2">
        <Dropdown
          icon={<BuildingIcon className="h-5 w-5" />}
          label="Immobilientyp"
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
          className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 text-sm font-bold text-white shadow-[0_14px_30px_-12px_rgba(242,107,54,0.7)] hover:bg-brand-600 transition-colors"
        >
          <SearchIcon className="h-5 w-5" />
          Immobilien finden
        </button>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 px-1 pb-1">
        <span className="text-xs font-semibold text-navy-300 mr-1">
          Beliebt:
        </span>
        {QUICK_CHIPS.map((c) => {
          const active = draft.propertyType === c.type;
          return (
            <button
              key={c.label}
              type="button"
              onClick={() => {
                const next = active ? "" : c.type;
                setDraft({ propertyType: next });
                apply({ propertyType: next });
                router.push("/immobilien");
              }}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                active
                  ? "bg-brand-500 border-brand-500 text-white"
                  : "border-line bg-white text-navy-700 hover:border-brand-200 hover:text-brand-500"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
