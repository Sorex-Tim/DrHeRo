import Link from "next/link";
import { OpenContactButton } from "./contact-modal/OpenContactButton";
import {
  ChevronRight,
  CheckIcon,
  EuroIcon,
  HandshakeIcon,
  HomeIcon,
  PhoneIcon,
  ShieldIcon,
  SparkleIcon,
  UsersIcon,
} from "./icons";

type Service = {
  title: string;
  intro: string;
  bullets: string[];
  icon: React.ReactNode;
  highlight: { icon: React.ReactNode; title: string; text: string };
  href: string;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    title: "Finanzierung",
    intro: "Die passende Finanzierung für Ihre Ziele und Wünsche.",
    bullets: [
      "Maßgeschneiderte Finanzierungskonzepte",
      "Top-Konditionen mit starken Partnern",
      "Persönliche & unabhängige Beratung",
    ],
    icon: <EuroIcon className="h-9 w-9" />,
    highlight: {
      icon: <ShieldIcon className="h-5 w-5" />,
      title: "Sicher & unabhängig",
      text: "Wir finden die beste Lösung für Sie.",
    },
    href: "#leistungen",
  },
  {
    title: "Immobilien",
    intro: "Finden, kaufen oder verkaufen – wir begleiten Sie.",
    bullets: [
      "Große Auswahl an geprüften Immobilien",
      "Professionelle Vermarktung Ihrer Immobilie",
      "Regionale Marktkenntnis & Expertise",
    ],
    icon: <HomeIcon className="h-9 w-9" />,
    highlight: {
      icon: <SparkleIcon className="h-5 w-5" />,
      title: "Der richtige Partner",
      text: "Wir bringen Menschen und Immobilien perfekt zusammen.",
    },
    href: "#immobilien",
    featured: true,
  },
  {
    title: "Vorsorge",
    intro: "Sorgen Sie heute vor für ein sicheres Morgen.",
    bullets: [
      "Individuelle Vorsorgekonzepte",
      "Absicherung für Sie & Ihre Familie",
      "Langfristige Sicherheit & Vertrauen",
    ],
    icon: <HandshakeIcon className="h-9 w-9" />,
    highlight: {
      icon: <UsersIcon className="h-5 w-5" />,
      title: "Zukunft sichern",
      text: "Mit der richtigen Vorsorge entspannt in die Zukunft.",
    },
    href: "#leistungen",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-cream/30 to-white" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            Perfekt beraten
          </div>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
            Unsere Dienstleistungen
          </h2>
          <p className="mt-5 text-lg text-navy-500">
            Wir bieten Ihnen maßgeschneiderte Lösungen in allen Bereichen rund um
            Immobilien, Finanzen und Vorsorge – kompetent, persönlich und
            zuverlässig.
          </p>
          <div className="mt-6 mx-auto h-1 w-16 rounded-full bg-brand-500" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className={`group relative flex flex-col rounded-3xl border bg-white p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(15,24,57,0.25)] ${
                s.featured
                  ? "border-brand-200 shadow-[0_20px_40px_-25px_rgba(242,107,54,0.4)] ring-1 ring-brand-100"
                  : "border-line"
              }`}
            >
              {s.featured && (
                <div className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                  Beliebteste Wahl
                </div>
              )}
              <div className="flex justify-center">
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full ${
                    s.featured
                      ? "bg-brand-50 text-brand-500"
                      : "bg-navy-50 text-navy-700"
                  }`}
                >
                  {s.icon}
                </div>
              </div>
              <h3 className="mt-6 text-center text-2xl font-extrabold text-navy-900">
                {s.title}
              </h3>
              <p className="mt-3 text-center text-navy-500">{s.intro}</p>

              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                      <CheckIcon className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-navy-700">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-center">
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-500 hover:text-brand-700 group/link"
                >
                  Mehr erfahren
                  <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>

              <div
                className={`mt-7 flex items-start gap-3 rounded-2xl p-4 ${
                  s.featured ? "bg-brand-50/60" : "bg-navy-50/60"
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white ${
                    s.featured ? "text-brand-500" : "text-navy-700"
                  }`}
                >
                  {s.highlight.icon}
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-navy-900">
                    {s.highlight.title}
                  </div>
                  <div className="mt-1 text-xs text-navy-500">
                    {s.highlight.text}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom personal banner */}
        <div className="mt-12 flex flex-col lg:flex-row items-start lg:items-center gap-5 rounded-3xl bg-navy-50/60 border border-line p-6 lg:p-7">
          <div className="flex items-center gap-5 flex-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-brand-400">
              <PhoneIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-navy-900">
                Persönlich. Regional. Für Sie da.
              </div>
              <div className="mt-1 text-sm text-navy-500">
                Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch.
              </div>
            </div>
          </div>
          <OpenContactButton intent="Beratung" variant="primary" size="lg">
            Jetzt Beratung anfragen
          </OpenContactButton>
        </div>
      </div>
    </section>
  );
}
