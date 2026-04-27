import {
  ChevronRight,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
} from "./icons";

export function Contact() {
  return (
    <section id="kontakt" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-cream/30 to-white" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Info side */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500 self-start">
              Kontakt
            </div>
            <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
              Lassen Sie uns reden.
            </h2>
            <p className="mt-5 text-lg text-navy-500">
              Ein unverbindliches Erstgespräch kostet nichts – außer 30 Minuten
              Ihrer Zeit. Wir freuen uns, Sie kennenzulernen.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+4921039071590"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 hover:border-brand-200 hover:bg-brand-50/40 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-300">
                    Telefon
                  </div>
                  <div className="text-base font-bold text-navy-900">
                    +49 2103 9071590
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-navy-300 group-hover:text-brand-500 transition-colors" />
              </a>

              <a
                href="mailto:hallo@drhero.de"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 hover:border-brand-200 hover:bg-brand-50/40 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-brand-400">
                  <MailIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-300">
                    E-Mail
                  </div>
                  <div className="text-base font-bold text-navy-900">
                    hallo@drhero.de
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-navy-300 group-hover:text-brand-500 transition-colors" />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-300">
                    Adresse
                  </div>
                  <div className="text-base font-bold text-navy-900">
                    Warrington-Platz 20, 40721 Hilden
                  </div>
                  <div className="text-xs text-navy-500 mt-0.5">
                    Mo–Fr 10–17 Uhr (oder nach Vereinbarung)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-navy-500">
              <ShieldIcon className="h-5 w-5 text-brand-500" />
              Ihre Anfrage wird vertraulich behandelt – DSGVO-konform.
            </div>
          </div>

          {/* Form side */}
          <div className="lg:col-span-7">
            <form className="rounded-3xl border border-line bg-white p-7 lg:p-9 shadow-[0_30px_60px_-30px_rgba(15,24,57,0.18)]">
              <h3 className="text-2xl font-extrabold text-navy-900">
                Kostenfreies Erstgespräch anfragen
              </h3>
              <p className="mt-2 text-sm text-navy-500">
                Wir melden uns innerhalb eines Werktags bei Ihnen zurück.
              </p>

              {/* Anliegen chips */}
              <fieldset className="mt-6">
                <legend className="text-sm font-bold text-navy-900 mb-3">
                  Mein Anliegen
                </legend>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Immobilie verkaufen",
                    "Immobilie kaufen",
                    "Bewertung",
                    "Finanzierung",
                    "Vorsorge",
                  ].map((c, i) => (
                    <label
                      key={c}
                      className="cursor-pointer rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-navy-700 hover:border-brand-200 has-[:checked]:bg-brand-500 has-[:checked]:border-brand-500 has-[:checked]:text-white transition-colors"
                    >
                      <input
                        type="radio"
                        name="anliegen"
                        defaultChecked={i === 0}
                        className="sr-only"
                      />
                      {c}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Vorname" id="firstName" placeholder="Max" />
                <Field label="Nachname" id="lastName" placeholder="Mustermann" />
                <Field label="E-Mail" id="email" type="email" placeholder="max@beispiel.de" />
                <Field label="Telefon" id="phone" type="tel" placeholder="+49 …" />
              </div>

              <div className="mt-4">
                <label className="text-sm font-bold text-navy-900" htmlFor="message">
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Erzählen Sie uns kurz, worum es geht …"
                  className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-colors resize-none"
                />
              </div>

              <label className="mt-5 flex items-start gap-3 text-sm text-navy-500">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 accent-brand-500"
                />
                <span>
                  Ich stimme der Verarbeitung meiner Daten gemäß
                  Datenschutzerklärung zu.
                </span>
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-bold text-white shadow-[0_14px_30px_-12px_rgba(242,107,54,0.7)] hover:bg-brand-600 transition-colors"
              >
                Anfrage senden
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-navy-900">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-xl border border-line bg-white px-4 text-sm text-navy-900 placeholder:text-navy-300 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-colors"
      />
    </div>
  );
}
