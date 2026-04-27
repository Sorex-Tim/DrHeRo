"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "@/components/icons";

const FAQS = [
  {
    q: "Wie viel Geld muss ich für die Altersvorsorge zurücklegen?",
    a: "Das hängt von Ihrem Lebensstil, Ihren Zielen und Ihrer aktuellen Situation ab. Als Faustregel gilt: Sie sollten im Ruhestand etwa 70–80 % Ihres letzten Nettoeinkommens zur Verfügung haben. Wir rechnen mit Ihnen verschiedene Szenarien durch und ermitteln eine Sparrate, die wirklich tragbar ist – und die Lücke verlässlich schließt.",
  },
  {
    q: "Welche Rolle spielt die Lebenserwartung in der Altersvorsorge?",
    a: "Eine zentrale. Wer mit 65 in Rente geht, hat statistisch noch 20 bis 25 Jahre vor sich – Tendenz steigend. Eine zu knapp kalkulierte Vorsorge führt zur Versorgungslücke gerade dann, wenn man sie am wenigsten korrigieren kann. Wir planen so, dass Ihre Mittel auch bei langer Lebenszeit reichen.",
  },
  {
    q: "Welche Steuervorteile bietet die Altersvorsorge?",
    a: "In Deutschland gibt es zahlreiche Möglichkeiten – von Sonderausgabenabzug (Rürup, Riester, bAV) bis zu nachgelagerter Besteuerung im Ruhestand. Wir holen für Sie das Maximum heraus, ohne unnötige Risiken einzugehen, und dokumentieren jeden steuerlichen Effekt transparent.",
  },
  {
    q: "Kann ich meine Vermögensplanung anpassen, wenn sich meine Lebensumstände ändern?",
    a: "Unbedingt – und Sie sollten es regelmäßig tun. Heirat, Kinder, Karrierewechsel, Erbschaft, Immobilienkauf: Jedes dieser Ereignisse verändert Ihre Strategie. Wir überprüfen Ihre Planung jährlich und passen sie flexibel an.",
  },
  {
    q: "Wie kann ich sicherstellen, dass meine Altersvorsorge auf Kurs ist?",
    a: "Durch ein klares Reporting, regelmäßige Reviews und eine ehrliche Einschätzung. Wir begleiten Sie langfristig – als Partner, nicht als Verkäufer – und geben Ihnen jederzeit eine ungeschönte Antwort darauf, ob Ihre Vorsorge noch zu Ihren Zielen passt.",
  },
];

export function VorsorgeFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-cream/40">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-line px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            Häufige Fragen
          </div>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
            Antworten zur Vorsorgeplanung
          </h2>
          <p className="mt-5 text-lg text-navy-500">
            Die Fragen, die unsere Mandanten am häufigsten stellen – ehrlich
            beantwortet, ohne Marketing-Sprech.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border bg-white transition-colors ${
                  isOpen ? "border-brand-200" : "border-line"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 lg:px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base lg:text-lg font-bold ${
                      isOpen ? "text-brand-500" : "text-navy-900"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      isOpen
                        ? "bg-brand-500 text-white"
                        : "bg-brand-50 text-brand-500"
                    }`}
                  >
                    {isOpen ? (
                      <MinusIcon className="h-4 w-4" />
                    ) : (
                      <PlusIcon className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 lg:px-6 pb-6 text-navy-500 leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
