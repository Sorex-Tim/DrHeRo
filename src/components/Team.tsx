import Image from "next/image";
import { MailIcon, PhoneIcon } from "./icons";

const TEAM = [
  {
    name: "Andreas Driefmeier",
    role: "Finanzexperte",
    bio: "Über 15 Jahre Bank- und Finanzsektor. Ihr Spezialist für Baufinanzierung und Konditionsoptimierung.",
    img: "/team/driefmeier.webp",
  },
  {
    name: "Ingo Heidrich",
    role: "Immobilienexperte",
    bio: "Tiefe regionale Marktkenntnis in Hilden, Mettmann, Erkrath und Düsseldorf. Vermarktet diskret und schnell.",
    img: "/team/heidrich.webp",
  },
  {
    name: "Torsten Roth",
    role: "Finanzexperte",
    bio: "Fokus auf Vorsorgeplanung und langfristigen Vermögensaufbau. Denkt in Lebenszeiträumen, nicht in Quartalen.",
    img: "/team/roth.webp",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-cream/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-line px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            Das Team
          </div>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
            Driefmeier. Heidrich. Roth.
          </h2>
          <p className="mt-5 text-lg text-navy-500">
            Drei Gründer. 30 Jahre gebündelte Erfahrung in Immobilien, Bank-
            und Finanzsektor. Ein gemeinsames Versprechen: Fairness, Kompetenz
            und Seriosität.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="group rounded-3xl bg-white border border-line p-6 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,24,57,0.25)] transition-all"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-navy-100">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-3 bottom-3 flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={`E-Mail an ${m.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur text-navy-900 hover:bg-brand-500 hover:text-white transition-colors"
                  >
                    <MailIcon className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={`${m.name} anrufen`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur text-navy-900 hover:bg-brand-500 hover:text-white transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-500">
                  {m.role}
                </div>
                <h3 className="mt-1 text-xl font-extrabold text-navy-900">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {m.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
