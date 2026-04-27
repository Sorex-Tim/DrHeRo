import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OpenContactButton } from "@/components/contact-modal/OpenContactButton";
import { PropertyList } from "@/components/search/PropertyList";
import { ChevronRight, PhoneIcon, ShieldIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Aktuelle Immobilien – Dr HeRo",
  description:
    "Geprüfte Immobilien in Hilden, Düsseldorf, Mettmann und Erkrath. Häuser, Wohnungen, Grundstücke und Gewerbeflächen – persönlich von Dr HeRo vermittelt.",
};

export default function ImmobilienPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero />
        <ListingsSection />
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-br from-brand-50 via-white to-white" />
        <div className="absolute -top-32 -left-32 h-[360px] w-[360px] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -top-10 right-10 h-[280px] w-[280px] rounded-full bg-navy-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-10 lg:pt-14 pb-10 lg:pb-14">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-navy-300"
        >
          <Link href="/" className="hover:text-brand-500 transition-colors">
            Startseite
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-navy-700">Immobilien</span>
        </nav>

        <div className="mt-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-line px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Aktuelles Immobilienangebot
          </div>
          <h1 className="mt-5 font-extrabold tracking-tight text-navy-900 text-[40px] sm:text-[52px] leading-[1.05]">
            Geprüft, kuratiert,
            <br />
            persönlich vermittelt
            <span className="text-brand-500">.</span>
          </h1>
          <p className="mt-5 text-lg text-navy-500 max-w-xl">
            Filtern Sie nach Lage, Typ, Vorhaben und Preis. Jedes Objekt wird
            persönlich von Dr HeRo betreut – diskret und mit Marktkenntnis aus
            erster Hand.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-navy-700">
              <ShieldIcon className="h-5 w-5 text-brand-500" />
              Geprüfte Objekte
            </div>
            <div className="hidden sm:block h-4 w-px bg-line" />
            <a
              href="tel:+4921039071590"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-brand-500 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 text-brand-500" />
              +49 2103 9071590
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ListingsSection() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <PropertyList />
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 text-white p-8 lg:p-10 shadow-[0_30px_70px_-30px_rgba(15,24,57,0.7)]">
          <div className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 items-center gap-6">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
                Nicht das richtige dabei?
              </div>
              <h2 className="mt-4 text-2xl lg:text-3xl font-extrabold tracking-tight">
                Wir kennen Objekte, die nicht öffentlich gelistet sind.
              </h2>
              <p className="mt-3 text-navy-100/75 max-w-2xl">
                Sagen Sie uns, was Sie suchen – wir prüfen unser Off-Market-Netzwerk
                und melden uns mit passenden Vorschlägen.
              </p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <OpenContactButton intent="Beratung" variant="primary" size="lg">
                Suchprofil anlegen
              </OpenContactButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
