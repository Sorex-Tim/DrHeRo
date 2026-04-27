"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "../icons";

type Option = { label: string; value: string };

export function Dropdown({
  icon,
  label,
  value,
  placeholder,
  options,
  onChange,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  placeholder: string;
  options: Option[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative h-14">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex h-full w-full items-center gap-3 rounded-xl border bg-white px-3 pr-2 text-left transition-colors ${
          open
            ? "border-brand-500 ring-4 ring-brand-100"
            : "border-line hover:border-brand-200"
        }`}
      >
        {icon && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
            {icon}
          </span>
        )}
        <span className="flex-1 min-w-0 leading-tight">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-navy-300">
            {label}
          </span>
          <span
            className={`block truncate text-sm font-bold ${
              selected ? "text-navy-900" : "text-navy-300"
            }`}
          >
            {selected ? selected.label : placeholder}
          </span>
        </span>
        <ChevronDown
          className={`h-4 w-4 text-navy-300 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-[0_24px_60px_-24px_rgba(15,24,57,0.3)]"
        >
          {options.map((o) => {
            const isActive = o.value === value;
            return (
              <button
                key={o.value || "_none_"}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-brand-50 text-brand-700"
                    : "text-navy-700 hover:bg-brand-50/60"
                }`}
              >
                <span>{o.label}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
