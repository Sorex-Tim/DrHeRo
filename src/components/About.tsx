import Image from "next/image";
import Link from "next/link";
import {
  AwardIcon,
  CheckCircleIcon,
  ChevronRight,
  ShieldIcon,
  UsersIcon,
} from "./icons";

const PILLARS = [
  {
    icon: <AwardIcon className="h-5 w-5" />,
    title: "15+ Jahre Erfahrung",
    text: "Tiefe regionale Expertise und ein Netzwerk, das Türen öffnet.",
  },
  {
    icon: <ShieldIcon className="h-5 w-5" />,
    title: "Diskret & vertrauensvoll",
    text: "Alle Schritte – vom Erstgespräch bis zur Übergabe – transparent und sicher.",
  },
  {
    icon: <UsersIcon className="h-5 w-5" />,
    title: "Persönlich begleitet",
    text: "Ein fester Ansprechpartner, der Sie individuell und auf Augenhöhe berät.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[5/3] max-w-2xl mx-auto lg:mx-0 overflow-hidden rounded-[32px] bg-navy-100 shadow-[0_40px_80px_-40px_rgba(15,24,57,0.45)]">
              <Image
                src="/team/gruppe.webp"
                alt="Team Dr HeRo"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-6 -right-2 lg:right-10 hidden sm:flex items-center gap-3 rounded-2xl bg-white border border-line p-4 shadow-[0_18px_40px_-18px_rgba(15,24,57,0.3)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                <CheckCircleIcon className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-xs text-navy-300">Vermittlungen</div>
                <div className="text-lg font-extrabold text-navy-900">250+ erfolgreich</div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-2 lg:left-10 flex items-center gap-3 rounded-2xl bg-navy-900 text-white p-4 shadow-[0_18px_40px_-18px_rgba(15,24,57,0.5)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-400">
                <UsersIcon className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-xs text-navy-100/70">Bewertung</div>
                <div className="text-lg font-extrabold">4,9/5 Sterne</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
              Über Dr HeRo
            </div>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
              Ihr regionaler Partner – mit Herz, Hirn und Handschlag.
            </h2>
            <p className="mt-5 text-lg text-navy-500">
              Wir sind kein anonymes Maklerbüro. Wir kennen die Region, die
              Menschen und die Marktmechanismen. Genau deshalb erzielen wir
              Preise, die andere versprechen – und liefern eine Begleitung, die
              wirklich persönlich ist.
            </p>

            <div className="mt-8 space-y-4">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-white p-4 hover:border-brand-200 hover:bg-brand-50/40 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-brand-400">
                    {p.icon}
                  </div>
                  <div>
                    <div className="font-bold text-navy-900">{p.title}</div>
                    <div className="text-sm text-navy-500 mt-0.5">{p.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-navy-700 transition-colors"
              >
                Team kennenlernen
                <ChevronRight className="h-4 w-4 text-brand-400" />
              </Link>
              <Link
                href="#referenzen"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-700 hover:text-brand-500"
              >
                Referenzen ansehen
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
