"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "./icons";

type FaqItem = { q: string; a: string };

const FAQS: Record<string, FaqItem[]> = {
  Finanzierung: [
    {
      q: "Welche Unterlagen benötige ich für die Beantragung einer Baufinanzierung?",
      a: "Für die Beantragung eines Immobilienkredits benötigen Sie in der Regel Einkommensnachweise, einen aktuellen Schufa-Auszug, eine Liste Ihres Vermögens und Ihrer Verbindlichkeiten sowie Unterlagen zur Wunschimmobilie. Wir erstellen mit Ihnen eine vollständige Checkliste – damit nichts vergessen wird.",
    },
    {
      q: "Wie kann ich meine Chancen auf niedrigere Zinsen verbessern?",
      a: "Ihre Konditionen verbessern sich mit einer höheren Bonität, einer größeren Eigenkapitalquote und einem objektiven Vergleich vieler Kreditgeber. Genau das machen wir – und holen für Sie das beste Marktangebot heraus.",
    },
    {
      q: "Gibt es staatliche Förderprogramme in Hilden, Mettmann, Erkrath und Düsseldorf?",
      a: "Ja, es gibt sowohl bundesweite (z. B. KfW) als auch regionale Förderprogramme. Diese reichen von zinsgünstigen Darlehen bis zu Tilgungs- und Modernisierungszuschüssen. Wir prüfen, welche für Sie in Frage kommen.",
    },
    {
      q: "Wie lange dauert die Rückzahlung eines Baufinanzierungsdarlehens?",
      a: "Die Laufzeit liegt üblicherweise zwischen 15 und 30 Jahren. Welche Variante zu Ihnen passt, hängt von Ihrem Einkommen, Ihrem Tilgungswunsch und Ihrer Lebensplanung ab.",
    },
    {
      q: "Ist es ratsam, einen Finanzberater in Anspruch zu nehmen?",
      a: "Definitiv. Ein erfahrener Berater findet die passendste Finanzierungsstruktur, optimiert Zinsen und berücksichtigt langfristige steuerliche und private Effekte. Genau dafür sind wir da.",
    },
  ],
  Immobilien: [
    {
      q: "Was ist meine Immobilie wert?",
      a: "Verlassen Sie sich nicht auf Einschätzungen aus dem Bekanntenkreis. Eine fundierte Bewertung berücksichtigt Lage, Substanz, Marktvergleich und Trends. Wir bewerten Ihre Immobilie kostenlos und marktgerecht.",
    },
    {
      q: "Was kostet die Dienstleistung eines Immobilienmaklers?",
      a: "Die Provision orientiert sich am Verkaufs- oder Mietpreis und wird erst nach erfolgreichem Vertragsabschluss fällig – kein Erfolg, keine Kosten. Die genaue Höhe besprechen wir transparent vorab.",
    },
    {
      q: "Kann ich meine Immobilie selbst verkaufen?",
      a: "Grundsätzlich ja. Allerdings erfordert ein erfolgreicher Verkauf Marktwissen, Verhandlungsgeschick, rechtliche Sicherheit und Zeit. Wir übernehmen den gesamten Prozess – damit Sie zum besten Preis verkaufen.",
    },
    {
      q: "Welche Qualitäten sollte ein guter Makler haben?",
      a: "Marktkenntnis, Verhandlungsstärke, kommunikative Klarheit und Integrität. Dazu eine fundierte Ausbildung, ein belastbares Netzwerk und die Fähigkeit, diskret zu arbeiten.",
    },
    {
      q: "Wie lange dauert eine Immobilienvermittlung?",
      a: "Bei optimaler Aufstellung und marktgerechtem Preis dauert ein Verkauf in der Regel einige Wochen bis wenige Monate. Wir geben Ihnen vorab einen ehrlichen Zeitplan – ohne falsche Versprechen.",
    },
  ],
  Vorsorge: [
    {
      q: "Wie viel Geld muss ich für die Altersvorsorge zurücklegen?",
      a: "Das hängt von Ihrem Lebensstil, Ihren Zielen und Ihrer aktuellen Situation ab. Wir rechnen mit Ihnen verschiedene Szenarien durch und ermitteln eine Sparrate, die wirklich tragbar ist.",
    },
    {
      q: "Welche Rolle spielt die Lebenserwartung in der Altersvorsorge?",
      a: "Eine zentrale. Eine zu knapp kalkulierte Vorsorge führt zur Versorgungslücke. Wir planen so, dass Ihre Mittel auch bei langer Lebenszeit reichen.",
    },
    {
      q: "Welche Steuervorteile bietet die Altersvorsorge?",
      a: "In Deutschland gibt es zahlreiche Möglichkeiten – von Sonderausgabenabzug bis zu nachgelagerter Besteuerung. Wir holen für Sie das Maximum heraus, ohne unnötige Risiken.",
    },
    {
      q: "Kann ich meine Vermögensplanung anpassen?",
      a: "Ja – und das sollten Sie regelmäßig tun. Lebensumstände ändern sich. Wir überprüfen Ihre Strategie in festen Intervallen und passen sie flexibel an.",
    },
    {
      q: "Wie kann ich sicherstellen, dass meine Altersvorsorge auf Kurs ist?",
      a: "Durch ein klares Reporting, regelmäßige Reviews und eine ehrliche Einschätzung. Wir begleiten Sie langfristig – als Partner, nicht als Verkäufer.",
    },
  ],
};

const TABS = Object.keys(FAQS) as (keyof typeof FAQS)[];

export function Faq() {
  const [tab, setTab] = useState<keyof typeof FAQS>("Finanzierung");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-cream/40">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-line px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-500">
            Wissen
          </div>
          <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900">
            Antworten auf Ihre Fragen
          </h2>
          <p className="mt-5 text-lg text-navy-500">
            Die häufigsten Fragen rund um Finanzierung, Immobilien und Vorsorge –
            kompakt, ehrlich und auf den Punkt beantwortet.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full bg-white border border-line p-1 shadow-sm">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setTab(t);
                  setOpen(0);
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                  tab === t
                    ? "bg-brand-500 text-white shadow-[0_8px_20px_-10px_rgba(242,107,54,0.7)]"
                    : "text-navy-700 hover:text-brand-500"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS[tab].map((item, i) => {
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
