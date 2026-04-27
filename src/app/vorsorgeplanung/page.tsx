import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OpenContactButton } from "@/components/contact-modal/OpenContactButton";
import {
  AwardIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronRight,
  EuroIcon,
  FileIcon,
  HandshakeIcon,
  HomeIcon,
  PhoneIcon,
  ShieldIcon,
  SparkleIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@/components/icons";
import { VorsorgeFaq } from "./VorsorgeFaq";

export const metadata: Metadata = {
  title: "Altersvorsorge & Vermögensplanung – Dr HeRo",
  description:
    "Maßgeschneiderte Vorsorgekonzepte für einen sorgenfreien Ruhestand. Persönlich, unabhängig und langfristig. Jetzt unverbindlich beraten lassen.",
};

export default function VorsorgePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <WhyImportant />
        <Partnership />
        <Pillars />
        <Process />
        <Benefits />
        <VorsorgeFaq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[640px] bg-gradient-to-br from-brand-50 via-white to-white" />
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -top-20 right-20 h-[320px] w-[320px] rounded-full bg-navy-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-10 lg:pt-16 pb-24 lg:pb-32">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-navy-300"
        >
          <Link href="/" className="hover:text-brand-500 transition-colors">
            Startseite
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-navy-700">Vorsorgeplanung</span>
        </nav>

        <div className="mt-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-line px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Altersvorsorge & Vermögensplanung
            </div>

            <h1 className="mt-6 font-extrabold tracking-tight text-navy-900 text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05]">
              Ihre Zukunft.
              <br />
              Unsere Verantwortung
              <span className="text-brand-500">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-navy-500 leading-relaxed">
              Die Altersvorsorge entscheidet darüber, ob Sie Ihren Ruhestand
              sorgenfrei genießen oder finanzielle Engpässe fürchten müssen. Wir
              entwickeln gemeinsam mit Ihnen einen klaren Plan – persönlich,
              unabhängig und auf Ihr Leben abgestimmt.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <OpenContactButton intent="Vorsorge" variant="primary" size="lg">
                Jetzt beraten lassen
              </OpenContactButton>
              <OpenContactButton intent="Vorsorge" variant="outline" size="lg">
                Kostenloser Vorsorgecheck
              </OpenContactButton>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                <ShieldIcon className="h-5 w-5 text-brand-500" />
                <span className="text-sm font-semibold text-navy-700">
                  Unabhängig &amp; partnerschaftlich
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <CheckCircleIcon className="h-5 w-5 text-brand-500" />
                <span className="text-sm font-semibold text-navy-700">
                  Erstgespräch kostenlos
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[32px] bg-navy-100 shadow-[0_40px_80px_-40px_rgba(15,24,57,0.45)]">
              <Image
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1400&q=80&auto=format&fit=crop"
                alt="Beratungssituation rund um Altersvorsorge"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>

            {/* Floating savings card */}
            <div className="absolute -top-4 right-2 lg:-right-4 flex items-center gap-3 rounded-2xl border border-line bg-white/95 backdrop-blur px-4 py-3 shadow-[0_18px_40px_-18px_rgba(15,24,57,0.35)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                <TrendingUpIcon className="h-6 w-6" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] text-navy-300 uppercase tracking-wider font-semibold">
                  Versorgungslücke schließen
                </div>
                <div className="text-sm font-bold text-navy-900">
                  Bis zu € 1.200 / Monat extra
                </div>
                <div className="text-[11px] text-navy-500">
                  durch optimierte Strategie
                </div>
              </div>
            </div>

            {/* Floating mini highlight */}
            <div className="absolute -bottom-8 left-2 lg:-left-6 max-w-[260px] rounded-2xl border border-line bg-navy-900 text-white p-4 shadow-[0_18px_40px_-18px_rgba(15,24,57,0.5)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-400">
                  <HandshakeIcon className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] uppercase tracking-wider text-navy-100/70 font-semibold">
                    Eine starke Partnerschaft
                  </div>
                  <div className="text-sm font-bold">
                    Wir denken in Lebensjahren – nicht in Quartalen.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */

function TrustBar() {
  const ITEMS = [
    {
      v: "30+",
      l: "Jahre kumulierte Erfahrung",
      i: <AwardIcon className="h-6 w-6" />,
    },
    {
      v: "100%",
      l: "Individuelle Konzepte",
      i: <SparkleIcon className="h-6 w-6" />,
    },
    {
      v: "0 €",
      l: "Kosten für das Erstgespräch",
      i: <CheckCircleIcon className="h-6 w-6" />,
    },
    {
      v: "4,9 / 5",
      l: "Kundenbewertung",
      i: <StarIcon className="h-6 w-6" />,
    },
  ];

  return (
    <section className="relative -mt-12 lg:-mt-16 z-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-3xl border border-line bg-white px-6 lg:px-10 py-7 shadow-[0_30px_60px_-30px_rgba(15,24,57,0.2)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-line">
            {ITEMS.map((s) => (
              <div
                key={s.l}
                className="flex items-center gap-4 px-2 lg:px-6 py-3 lg:py-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                  {s.i}
                </div>
                <div>
                  <div className="text-2xl lg:text-[28px] font-extrabold tracking-tight text-navy-900 leading-none">
                    {s.v}
                  </div>
                  <div className="mt-1 text-sm text-navy-500">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY IMPORTANT ---------- */

function WhyImportant() {
  const POINTS = [
    {
      t: "Versorgungslücke schließen",
      d: "Die gesetzliche Rente reicht selten aus. Wir berechnen Ihre individuelle Lücke – und füllen sie strategisch.",
    },
    {
      t: "Inflation aktiv begegnen",
      d: "Geldwert sinkt, Lebenshaltungskosten steigen. Eine durchdachte Strategie schützt vor schleichender Entwertung.",
    },
    {
      t: "Steuern legal optimieren",
      d: "Sonderausgaben, nachgelagerte Besteuerung, Rürup, Riester – wir holen heraus, was Ihnen zusteht.",
    },
    {
      t: "Familie absichern",
      d: "Berufsunfähigkeit, Hinterbliebenenschutz, Pflege – Vorsorge ist mehr als nur Rente.",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
              Warum Vorsorge unerlässlich ist
            </div>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
              Wer heute nicht vorsorgt, verschenkt morgen Lebensqualität.
            </h2>
            <p className="mt-5 text-lg text-navy-500">
              Die Realität: Die gesetzliche Rente deckt im Schnitt nur etwa 48 %
              des letzten Nettoeinkommens. Wer den gewohnten Lebensstil halten
              will, braucht einen Plan – am besten heute.
            </p>

            <div className="mt-8 rounded-2xl bg-navy-50/60 border border-line p-5">
              <div className="flex items-start gap-3">
                <ShieldIcon className="h-6 w-6 text-brand-500 shrink-0" />
                <div>
                  <div className="font-bold text-navy-900">Unser Versprechen</div>
                  <p className="mt-1 text-sm text-navy-500">
                    Unabhängig, transparent und ohne Verkaufsdruck. Wir empfehlen
                    nur, was wir guten Gewissens auch unserer Familie raten würden.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {POINTS.map((p, i) => (
              <div
                key={p.t}
                className="rounded-3xl border border-line bg-white p-6 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(15,24,57,0.25)] hover:border-brand-200 transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-brand-500">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-lg font-extrabold text-navy-900">
                  {p.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PARTNERSHIP ---------- */

function Partnership() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
              Eine starke Partnerschaft
            </div>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight">
              Mehr als Beratung.
              <br />
              Eine Begleitung fürs Leben.
            </h2>
            <p className="mt-5 text-lg text-navy-100/75">
              Vorsorge ist nichts, was man einmal abhakt. Lebensumstände ändern
              sich – und Ihre Strategie muss mitwachsen. Genau hier setzen wir
              an: Wir bleiben an Ihrer Seite, überprüfen regelmäßig den Kurs und
              justieren, wenn das Leben es verlangt.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Fester Ansprechpartner – ein Mensch, ein Name",
                "Jährliche Strategie-Reviews inklusive",
                "Transparente Reportings und klare Sprache",
                "Anpassung bei Heirat, Kindern, Karrierewechsel",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-navy-100/85">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px]">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <OpenContactButton intent="Vorsorge" variant="white" size="lg">
                Strategie-Termin vereinbaren
              </OpenContactButton>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[32px] bg-white/5 ring-1 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80&auto=format&fit=crop"
                alt="Vertrauensvolle Beratung"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/70 via-navy-900/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white">
                    <UsersIcon className="h-5 w-5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs uppercase tracking-wider text-white/70 font-semibold">
                      Persönlich begleitet
                    </div>
                    <div className="text-base font-bold">
                      Ein fester Ansprechpartner. Vom ersten Termin bis in den
                      Ruhestand.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PILLARS ---------- */

function Pillars() {
  const ITEMS = [
    {
      icon: <HomeIcon className="h-7 w-7" />,
      title: "Was ist Vermögensplanung?",
      text: "Vermögensplanung ist die ganzheitliche Steuerung Ihrer Finanzen – von der Liquidität über Investments bis zur Immobilie. Ziel: Lebensziele finanzieren, nicht nur Geld verwalten.",
    },
    {
      icon: <EuroIcon className="h-7 w-7" />,
      title: "Wie funktioniert Altersvorsorge?",
      text: "Drei Schichten: gesetzlich, betrieblich, privat. Jede Schicht hat eigene Regeln, Vor- und Nachteile. Wir kombinieren sie so, dass Steuer-, Rendite- und Sicherheitsaspekte optimal greifen.",
    },
    {
      icon: <FileIcon className="h-7 w-7" />,
      title: "Wie entsteht ein Vermögensplan?",
      text: "Wir erfassen Status quo, Ziele und Risikoprofil. Daraus modellieren wir Szenarien, prüfen Steuereffekte und schreiben Ihre Strategie als verbindlichen, dokumentierten Plan.",
    },
    {
      icon: <ShieldIcon className="h-7 w-7" />,
      title: "Was sichert Sie zusätzlich ab?",
      text: "Berufsunfähigkeit, Hinterbliebenenschutz, Pflegevorsorge und vermögende Risiken. Wir prüfen, was Sie wirklich brauchen – und was nur Versicherungen verkaufen wollen.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-cream/30 to-white" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            Klar erklärt
          </div>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
            Vorsorge ohne Bankjargon
          </h2>
          <p className="mt-5 text-lg text-navy-500">
            Vier Fragen, die jeder vor der Vorsorgeplanung stellt – und unsere
            Antworten in einfachen Worten.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {ITEMS.map((it, i) => (
            <div
              key={it.title}
              className={`group flex gap-5 rounded-3xl p-7 transition-all hover:-translate-y-1 ${
                i % 2 === 0
                  ? "bg-white border border-line hover:shadow-[0_30px_60px_-30px_rgba(15,24,57,0.25)] hover:border-brand-200"
                  : "bg-navy-900 text-white hover:shadow-[0_30px_60px_-30px_rgba(15,24,57,0.5)]"
              }`}
            >
              <div
                className={`shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl ${
                  i % 2 === 0
                    ? "bg-brand-50 text-brand-500"
                    : "bg-white/10 text-brand-400"
                }`}
              >
                {it.icon}
              </div>
              <div>
                <h3 className="text-xl font-extrabold">{it.title}</h3>
                <p
                  className={`mt-2 leading-relaxed ${
                    i % 2 === 0 ? "text-navy-500" : "text-navy-100/70"
                  }`}
                >
                  {it.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */

function Process() {
  const STEPS = [
    {
      n: "01",
      icon: <PhoneIcon className="h-6 w-6" />,
      t: "Erstgespräch",
      d: "Wir lernen uns kennen, verstehen Ihre Situation und sammeln die wichtigsten Eckdaten – kostenlos und unverbindlich.",
    },
    {
      n: "02",
      icon: <FileIcon className="h-6 w-6" />,
      t: "Status-Analyse",
      d: "Wir analysieren bestehende Verträge, Lücken und Optimierungspotenziale. Inkl. unabhängiger Markt­vergleich.",
    },
    {
      n: "03",
      icon: <SparkleIcon className="h-6 w-6" />,
      t: "Strategie-Entwurf",
      d: "Sie erhalten Ihren persönlichen Vorsorgeplan – verständlich, transparent und mit klar dokumentierten Empfehlungen.",
    },
    {
      n: "04",
      icon: <HandshakeIcon className="h-6 w-6" />,
      t: "Umsetzung & Pflege",
      d: "Wir setzen den Plan gemeinsam um und überprüfen ihn jährlich – damit Ihre Vorsorge mit Ihrem Leben mitwächst.",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            So arbeiten wir
          </div>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
            In 4 Schritten zu Ihrem Vorsorgeplan
          </h2>
          <p className="mt-5 text-lg text-navy-500">
            Klar strukturiert, transparent und mit einem festen
            Ansprechpartner – ohne Verkaufsdruck und ohne Überraschungen.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-line bg-white p-6 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(15,24,57,0.25)] hover:border-brand-200 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                  {s.icon}
                </div>
                <span className="text-3xl font-extrabold text-navy-100 tracking-tight">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy-900">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{s.d}</p>

              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-gradient-to-r from-brand-200 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFITS ---------- */

function Benefits() {
  const BENEFITS = [
    "Ganzheitliche Beratung – nicht nur Versicherungen",
    "100 % unabhängig: kein Bank-, kein Versicherungs-Vertrieb",
    "Steueroptimiert: Rürup, Riester, bAV, ETF-Sparpläne",
    "Inflation aktiv mitgedacht",
    "Berufsunfähigkeits- & Hinterbliebenenschutz inklusive",
    "Jährliche Reviews – ohne Mehrkosten",
    "Klare Sprache statt Bankenjargon",
    "Volle Transparenz bei Provisionen und Kosten",
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-line px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
              Was Sie bei uns bekommen
            </div>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
              Acht Dinge, die echte Vorsorge ausmachen.
            </h2>
            <p className="mt-5 text-navy-500 text-lg">
              Wir beraten ohne Bindung an Banken oder Versicherungen. Das macht
              uns frei – und Sie unabhängig.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-3xl bg-white border border-line p-3">
            <ul className="grid sm:grid-cols-2 gap-1">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-2xl px-4 py-3 hover:bg-brand-50/40 transition-colors"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold text-navy-700">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */

function FinalCta() {
  return (
    <section id="vorsorge-cta" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 text-white p-8 lg:p-14 shadow-[0_30px_70px_-30px_rgba(15,24,57,0.7)]">
          <div className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 items-center gap-8">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
                Heute beginnen, morgen entspannen
              </div>
              <h2 className="mt-5 text-3xl lg:text-5xl font-extrabold tracking-tight">
                Ein Termin. Ein Plan. Eine sorgenfreie Zukunft.
              </h2>
              <p className="mt-5 text-lg text-navy-100/75 max-w-xl">
                Vereinbaren Sie jetzt Ihr kostenfreies Erstgespräch. Wir nehmen
                uns Zeit – persönlich, in Hilden oder digital.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <OpenContactButton intent="Vorsorge" variant="primary" size="lg">
                  Termin anfragen
                </OpenContactButton>
                <a
                  href="tel:+4921039071590"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
                >
                  <PhoneIcon className="h-4 w-4 text-brand-400" />
                  +49 2103 9071590
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/10 p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-400">
                  Im Erstgespräch klären wir
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    "Ihre individuelle Versorgungslücke",
                    "Optimierungspotenzial Ihrer Verträge",
                    "Steuervorteile, die Sie heute schon nutzen können",
                    "Konkrete nächste Schritte – schriftlich dokumentiert",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-3 text-navy-100/85"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
