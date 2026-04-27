"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircleIcon,
  ChevronRight,
  MailIcon,
  PhoneIcon,
  ShieldIcon,
  XIcon,
} from "../icons";
import { type ContactIntent, useContactModal } from "./ContactModalContext";

const INTENTS: ContactIntent[] = [
  "Immobilie verkaufen",
  "Immobilie kaufen",
  "Bewertung",
  "Finanzierung",
  "Vorsorge",
  "Beratung",
];

export function ContactModal() {
  const { isOpen, intent, close } = useContactModal();
  const [selected, setSelected] = useState<ContactIntent>(intent);
  const [submitted, setSubmitted] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) setSelected(intent);
  }, [intent, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current?.focus(), 80);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setSubmitted(false), 200);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <button
        type="button"
        aria-label="Schließen"
        onClick={close}
        className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm animate-[fadeIn_180ms_ease]"
        style={{ animation: "fadeIn 180ms ease" }}
      />

      <div
        className="relative w-full sm:max-w-2xl max-h-[95vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white shadow-[0_40px_80px_-30px_rgba(15,24,57,0.5)]"
        style={{ animation: "modalIn 220ms cubic-bezier(.2,.8,.2,1)" }}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Schließen"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-line text-navy-700 hover:bg-brand-50 hover:text-brand-500 hover:border-brand-200 transition-colors"
        >
          <XIcon className="h-5 w-5" />
        </button>

        {submitted ? (
          <SuccessView onClose={close} />
        ) : (
          <FormView
            selected={selected}
            setSelected={setSelected}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            firstFieldRef={firstFieldRef}
          />
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

function FormView({
  selected,
  setSelected,
  onSubmit,
  firstFieldRef,
}: {
  selected: ContactIntent;
  setSelected: (i: ContactIntent) => void;
  onSubmit: (e: React.FormEvent) => void;
  firstFieldRef: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <div>
      <div className="relative overflow-hidden rounded-t-3xl bg-navy-900 px-6 sm:px-8 pt-9 pb-7 text-white">
        <div className="pointer-events-none absolute -top-20 -right-10 h-60 w-60 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-400">
            Kostenlos & unverbindlich
          </div>
          <h2
            id="contact-modal-title"
            className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight"
          >
            Lassen Sie uns reden.
          </h2>
          <p className="mt-2 text-sm text-navy-100/75 max-w-md">
            Wir melden uns innerhalb eines Werktags – persönlich, mit klaren
            nächsten Schritten.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            <a
              href="tel:+4921039071590"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/15 transition-colors"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-brand-400" />
              +49 2103 9071590
            </a>
            <a
              href="mailto:hallo@drhero.de"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/15 transition-colors"
            >
              <MailIcon className="h-3.5 w-3.5 text-brand-400" />
              hallo@drhero.de
            </a>
          </div>
        </div>
      </div>

      <form className="px-6 sm:px-8 pb-8 pt-6" onSubmit={onSubmit}>
        <fieldset>
          <legend className="text-sm font-bold text-navy-900 mb-3">
            Mein Anliegen
          </legend>
          <div className="flex flex-wrap gap-2">
            {INTENTS.map((c) => {
              const active = selected === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelected(c)}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-brand-500 border-brand-500 text-white"
                      : "border-line bg-white text-navy-700 hover:border-brand-200"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <Field
            label="Vorname"
            id="modal-firstName"
            placeholder="Max"
            inputRef={firstFieldRef}
          />
          <Field label="Nachname" id="modal-lastName" placeholder="Mustermann" />
          <Field
            label="E-Mail"
            id="modal-email"
            type="email"
            placeholder="max@beispiel.de"
            required
          />
          <Field
            label="Telefon"
            id="modal-phone"
            type="tel"
            placeholder="+49 …"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="modal-message" className="text-sm font-bold text-navy-900">
            Ihre Nachricht{" "}
            <span className="font-medium text-navy-300">(optional)</span>
          </label>
          <textarea
            id="modal-message"
            rows={3}
            placeholder="Erzählen Sie uns kurz, worum es geht …"
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-colors resize-none"
          />
        </div>

        <label className="mt-4 flex items-start gap-3 text-xs text-navy-500">
          <input
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 accent-brand-500"
          />
          <span>
            Ich stimme der Verarbeitung meiner Daten gemäß{" "}
            <a href="#" className="underline hover:text-brand-500">
              Datenschutzerklärung
            </a>{" "}
            zu. Keine Weitergabe an Dritte.
          </span>
        </label>

        <button
          type="submit"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-bold text-white shadow-[0_14px_30px_-12px_rgba(242,107,54,0.7)] hover:bg-brand-600 transition-colors"
        >
          Anfrage senden
          <ChevronRight className="h-4 w-4" />
        </button>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-navy-300">
          <ShieldIcon className="h-4 w-4 text-brand-500" />
          DSGVO-konform · 100 % vertraulich
        </div>
      </form>
    </div>
  );
}

function SuccessView({ onClose }: { onClose: () => void }) {
  return (
    <div className="px-6 sm:px-8 py-14 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-500">
        <CheckCircleIcon className="h-10 w-10" strokeWidth={2} />
      </div>
      <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-900">
        Vielen Dank!
      </h2>
      <p className="mt-3 text-navy-500 max-w-md mx-auto">
        Ihre Nachricht ist bei uns. Ein Mitglied unseres Teams meldet sich
        innerhalb eines Werktags persönlich bei Ihnen.
      </p>

      <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="tel:+4921039071590"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-bold text-navy-900 hover:border-brand-200 hover:text-brand-500 transition-colors"
        >
          <PhoneIcon className="h-4 w-4 text-brand-500" />
          Sofort anrufen
        </a>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-bold text-white hover:bg-navy-700 transition-colors"
        >
          Schließen
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  required,
  inputRef,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-navy-900">
        {label}
        {required && <span className="ml-0.5 text-brand-500">*</span>}
      </label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 h-11 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-navy-900 placeholder:text-navy-300 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-colors"
      />
    </div>
  );
}
