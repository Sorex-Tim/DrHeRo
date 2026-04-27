import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "./icons";

const ARTICLES = [
  {
    cat: "Marktbericht",
    title: "Immobilienmarkt 2026: Wohin sich Preise in NRW entwickeln",
    excerpt:
      "Welche Lagen Wert halten, wo Chancen entstehen – und was Käufer jetzt beachten sollten.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80&auto=format&fit=crop",
    minutes: 6,
    date: "April 2026",
  },
  {
    cat: "Finanzierung",
    title: "Zinsen verstehen: So sichern Sie sich heute die besten Konditionen",
    excerpt:
      "Forward-Darlehen, Volltilger oder Kombikredit – ein klarer Leitfaden ohne Bankjargon.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=80&auto=format&fit=crop",
    minutes: 8,
    date: "März 2026",
  },
  {
    cat: "Hilden im Fokus",
    title: "Wohnen in Hilden: Quartiere, Preise, Geheimtipps",
    excerpt:
      "Wo Sie heute noch unter Marktwert kaufen können – und wo sich der Aufpreis lohnt.",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1000&q=80&auto=format&fit=crop",
    minutes: 5,
    date: "März 2026",
  },
];

export function Insights() {
  return (
    <section id="wissen" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
              Wissen & Insights
            </div>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
              Klar denken. Klüger entscheiden.
            </h2>
            <p className="mt-5 text-lg text-navy-500">
              Aktuelle Analysen aus dem Markt – kompakt, ehrlich und ohne
              Verkaufsdruck.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-bold text-navy-700 hover:border-brand-200 hover:text-brand-500 transition-colors"
          >
            Alle Beiträge
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,24,57,0.25)] transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-100">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-500">
                  {a.cat}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-navy-300">
                  <span>{a.date}</span>
                  <span className="h-1 w-1 rounded-full bg-navy-200" />
                  <span>{a.minutes} Min. Lesezeit</span>
                </div>
                <h3 className="mt-3 text-lg font-extrabold text-navy-900 leading-snug group-hover:text-brand-500 transition-colors">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {a.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-500 hover:text-brand-700 mt-auto"
                >
                  Weiterlesen
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
