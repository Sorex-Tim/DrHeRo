import {
  CheckCircleIcon,
  HandshakeIcon,
  ShieldIcon,
  SparkleIcon,
} from "./icons";

const ITEMS = [
  {
    icon: <ShieldIcon className="h-7 w-7" />,
    title: "Erfolgsbasierte Vergütung",
    text: "Sie zahlen erst, wenn der Vertrag steht. Kein Erfolg, keine Provision – ohne Wenn und Aber.",
  },
  {
    icon: <CheckCircleIcon className="h-7 w-7" />,
    title: "Kostenlose Wertermittlung",
    text: "Marktgerechte, fundierte Bewertung – unverbindlich und in der Regel innerhalb von 48 Stunden.",
  },
  {
    icon: <HandshakeIcon className="h-7 w-7" />,
    title: "Fester Ansprechpartner",
    text: "Ein Mensch, ein Name, eine Handynummer. Persönliche Begleitung von A bis Z.",
  },
  {
    icon: <SparkleIcon className="h-7 w-7" />,
    title: "Premium-Vermarktung",
    text: "Professionelle Fotos, 3D-Touren, Drohnenaufnahmen, gezielte Käuferansprache – inklusive.",
  },
];

export function Promise() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            Unser Versprechen
          </div>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
            Vier Garantien. Null Kompromisse.
          </h2>
          <p className="mt-5 text-lg text-navy-500">
            Wir versprechen nur, was wir halten – und halten alles, was wir
            versprechen.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <div
              key={it.title}
              className={`group relative rounded-3xl p-7 transition-all hover:-translate-y-1 ${
                i % 2 === 0
                  ? "bg-navy-900 text-white hover:shadow-[0_30px_60px_-30px_rgba(15,24,57,0.5)]"
                  : "bg-white border border-line text-navy-900 hover:shadow-[0_30px_60px_-30px_rgba(15,24,57,0.25)] hover:border-brand-200"
              }`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  i % 2 === 0
                    ? "bg-white/10 text-brand-400"
                    : "bg-brand-50 text-brand-500"
                }`}
              >
                {it.icon}
              </div>
              <div
                className={`mt-6 text-xs font-bold uppercase tracking-wider ${
                  i % 2 === 0 ? "text-brand-400" : "text-brand-500"
                }`}
              >
                Garantie {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-1 text-lg font-extrabold">{it.title}</h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  i % 2 === 0 ? "text-navy-100/70" : "text-navy-500"
                }`}
              >
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
