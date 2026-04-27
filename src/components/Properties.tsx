import {
  HomeIcon,
  KeyIcon,
  SparkleIcon,
  TrendingUpIcon,
} from "./icons";
import { PropertiesTeaser } from "./PropertiesTeaser";

const CATEGORIES = [
  {
    title: "Kaufen & Verkaufen",
    text: "Vom ersten Exposé bis zur Schlüsselübergabe – wir vermitteln zum besten Preis.",
    icon: <HomeIcon className="h-7 w-7" />,
  },
  {
    title: "Mieten & Vermieten",
    text: "Wir finden zuverlässige Mieter und sorgen für reibungslose Abläufe.",
    icon: <KeyIcon className="h-7 w-7" />,
  },
  {
    title: "Immobilien­bewertung",
    text: "Marktgerechte, fundierte Wertermittlung von erfahrenen Profis.",
    icon: <TrendingUpIcon className="h-7 w-7" />,
  },
  {
    title: "Beratung & Consulting",
    text: "Strategisch beraten – ob Investment, Erbschaft oder Sanierung.",
    icon: <SparkleIcon className="h-7 w-7" />,
  },
];

export function Properties() {
  return (
    <section id="immobilien" className="py-24 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
              Immobilien­leistungen
            </div>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
              Eine Adresse. Alle Wege zur Immobilie.
            </h2>
            <p className="mt-4 text-lg text-navy-500">
              Ob Sie kaufen, verkaufen, vermieten oder bewerten lassen wollen –
              wir sind der Partner, der Ihnen zur Seite steht.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-line bg-white p-6 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(15,24,57,0.25)] hover:border-brand-200 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                {c.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{c.title}</h3>
              <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <PropertiesTeaser />
        </div>
      </div>
    </section>
  );
}
