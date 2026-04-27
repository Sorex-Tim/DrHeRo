"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useContactModal } from "./contact-modal/ContactModalContext";
import {
  ChevronDown,
  ChevronRight,
  MenuIcon,
  SearchIcon,
  XIcon,
} from "./icons";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

const NAV: NavItem[] = [
  {
    label: "Immobilien",
    href: "/immobilien",
    children: [
      { label: "Alle Objekte", href: "/immobilien", description: "Komplettes Portfolio mit Filter" },
      { label: "Häuser kaufen", href: "/immobilien", description: "Eigenheime in der Region" },
      { label: "Wohnungen kaufen", href: "/immobilien", description: "Eigentumswohnungen finden" },
      { label: "Grundstücke", href: "/immobilien", description: "Bauland & Investments" },
      { label: "Gewerbe", href: "/immobilien", description: "Büros, Praxen, Hallen" },
    ],
  },
  {
    label: "Verkaufen",
    href: "/#verkaufen",
    children: [
      { label: "Verkaufsprozess", href: "/#prozess", description: "In 5 Schritten zum Erfolg" },
      { label: "Marketing-Pakete", href: "/#leistungen", description: "Premium-Vermarktung" },
      { label: "Maklerprovision", href: "/#faq", description: "Transparente Kosten" },
    ],
  },
  { label: "Bewerten", href: "/#bewertung" },
  { label: "Finanzieren", href: "/#leistungen" },
  { label: "Vorsorge", href: "/vorsorgeplanung" },
  {
    label: "Über uns",
    href: "#about",
    children: [
      { label: "Unser Team", href: "#about", description: "Lernen Sie uns kennen" },
      { label: "Referenzen", href: "#referenzen", description: "Was Kunden sagen" },
      { label: "Karriere", href: "#about", description: "Werde Teil von Dr HeRo" },
    ],
  },
  { label: "Wissen", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { open: openContact } = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-line shadow-[0_4px_20px_-12px_rgba(15,24,57,0.15)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActive(item.label)}
                onMouseLeave={() => setActive(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-[15px] font-semibold text-navy-700 hover:text-brand-500 transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        active === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                {item.children && active === item.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="w-72 rounded-2xl border border-line bg-white p-2 shadow-[0_24px_60px_-24px_rgba(15,24,57,0.25)]">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-brand-50 transition-colors"
                        >
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-navy-900 group-hover:text-brand-700">
                              {c.label}
                            </div>
                            {c.description && (
                              <div className="text-xs text-navy-300 mt-0.5">
                                {c.description}
                              </div>
                            )}
                          </div>
                          <ChevronRight className="h-4 w-4 text-navy-200 group-hover:text-brand-500 transition-colors mt-2" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              aria-label="Suche"
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy-700 hover:bg-brand-50 hover:text-brand-500 transition-colors"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => openContact()}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(242,107,54,0.7)] hover:bg-brand-600 transition-colors"
            >
              Jetzt kontaktieren
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full text-navy-700 hover:bg-brand-50"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
          >
            {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <div className="mx-auto max-w-7xl px-5 py-6 space-y-1">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-navy-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
                <ChevronRight className="h-4 w-4 opacity-60" />
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openContact();
              }}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white w-full"
            >
              Jetzt kontaktieren
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
