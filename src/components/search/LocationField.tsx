"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CITIES } from "@/lib/properties";
import { MapPinIcon } from "../icons";

export function LocationField({
  value,
  onChange,
  onSubmit,
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const matches = useMemo(() => {
    const q = value.trim().toLowerCase();
    if (!q) return CITIES;
    return CITIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.zip.toLowerCase().includes(q),
    );
  }, [value]);

  return (
    <div ref={ref} className="relative h-14">
      <div
        className={`flex h-full w-full items-center gap-3 rounded-xl border bg-white px-3 pr-2 transition-colors ${
          open
            ? "border-brand-500 ring-4 ring-brand-100"
            : "border-line hover:border-brand-200"
        }`}
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
          <MapPinIcon className="h-5 w-5" />
        </span>
        <div className="flex-1 min-w-0 leading-tight">
          <label
            htmlFor="hero-location"
            className="block text-[10px] font-bold uppercase tracking-wider text-navy-300"
          >
            Standort
          </label>
          <input
            id="hero-location"
            type="text"
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setOpen(false);
                onSubmit?.();
              }
            }}
            placeholder="Stadt, Region oder PLZ"
            className="block w-full bg-transparent text-sm font-bold text-navy-900 placeholder:font-semibold placeholder:text-navy-300 outline-none"
            autoComplete="off"
          />
        </div>
      </div>

      {open && matches.length > 0 && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-[0_24px_60px_-24px_rgba(15,24,57,0.3)]"
        >
          <div className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-navy-300">
            Vorschläge
          </div>
          {matches.map((c) => (
            <button
              key={c.zip}
              type="button"
              onClick={() => {
                onChange(c.name);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-navy-700 hover:bg-brand-50/60"
            >
              <MapPinIcon className="h-4 w-4 text-brand-500" />
              <span>{c.name}</span>
              <span className="ml-auto text-xs text-navy-300">{c.zip}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
