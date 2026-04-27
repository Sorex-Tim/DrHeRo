import { FileIcon, HandshakeIcon, KeyIcon, PhoneIcon } from "./icons";

const STEPS = [
  {
    n: "01",
    title: "Kostenloses Erstgespräch",
    text: "Wir verstehen Ihre Situation, Ziele und Wünsche – kostenlos und unverbindlich.",
    icon: <PhoneIcon className="h-6 w-6" />,
  },
  {
    n: "02",
    title: "Bewertung & Strategie",
    text: "Marktgerechte Bewertung Ihrer Immobilie und maßgeschneiderte Vermarktung.",
    icon: <FileIcon className="h-6 w-6" />,
  },
  {
    n: "03",
    title: "Vermarktung & Verhandlung",
    text: "Wir präsentieren professionell, finden den richtigen Käufer und verhandeln den besten Preis.",
    icon: <HandshakeIcon className="h-6 w-6" />,
  },
  {
    n: "04",
    title: "Notar & Übergabe",
    text: "Wir begleiten Sie bis zur reibungslosen Schlüsselübergabe – diskret und sicher.",
    icon: <KeyIcon className="h-6 w-6" />,
  },
];

export function Process() {
  return (
    <section id="prozess" className="py-24 lg:py-32 relative overflow-hidden isolate bg-navy-900">
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
            Unser Prozess
          </div>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            In 4 Schritten zum Erfolg
          </h2>
          <p className="mt-5 text-lg text-navy-100/70">
            Klar strukturiert, transparent und mit einem festen Ansprechpartner –
            so machen wir Ihren Immobilientraum wahr.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-3xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-400">
                  {s.icon}
                </div>
                <span className="text-3xl font-extrabold text-white/10 tracking-tight">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-100/70">
                {s.text}
              </p>

              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
