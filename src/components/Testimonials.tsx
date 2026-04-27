import Image from "next/image";
import { StarIcon } from "./icons";

const REVIEWS = [
  {
    initials: "S.Z.",
    name: "S. Zimmermann",
    role: "Verkäuferin Einfamilienhaus",
    quote:
      "Eine kompetente und absolut zuverlässige Begleitung von der Bewertung bis zur Schlüsselübergabe. Wir haben uns zu jedem Zeitpunkt persönlich beraten gefühlt – und der erzielte Preis hat unsere Erwartungen klar übertroffen.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop",
  },
  {
    initials: "M.A.",
    name: "M. Albrecht",
    role: "Käufer Eigentumswohnung",
    quote:
      "Nicht nur Makler, sondern echte Sparringspartner. Die Finanzierung wurde uns auf den Punkt erklärt, alle Optionen wurden ehrlich verglichen. So macht der Kauf einer Immobilie Spaß.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
  },
  {
    initials: "C.P.",
    name: "Christian Paratsch",
    role: "Vorsorge-Mandant",
    quote:
      "Endlich ein Berater, der nicht in Quartalen, sondern in Lebensjahren denkt. Klare Empfehlungen, transparente Strukturen, unaufdringlich – ich kann Dr HeRo uneingeschränkt empfehlen.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section id="referenzen" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            Kundenstimmen
          </div>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
            Was unsere Kunden sagen
          </h2>
          <div className="mt-5 inline-flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-brand-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </div>
            <span className="text-sm font-bold text-navy-900">4,9/5</span>
            <span className="text-sm text-navy-500">aus 150+ Bewertungen</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="relative flex flex-col rounded-3xl border border-line bg-white p-7 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,24,57,0.25)] transition-all"
            >
              <div className="absolute -top-4 left-7 flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white text-2xl font-serif leading-none">
                &ldquo;
              </div>
              <div className="flex items-center gap-1 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy-700">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <div className="h-11 w-11 overflow-hidden rounded-full bg-navy-100">
                  <Image
                    src={r.img}
                    alt={r.name}
                    width={88}
                    height={88}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-navy-900">{r.name}</div>
                  <div className="text-xs text-navy-500">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
