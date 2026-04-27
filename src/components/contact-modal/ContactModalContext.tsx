"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

export type ContactIntent =
  | "Immobilie verkaufen"
  | "Immobilie kaufen"
  | "Bewertung"
  | "Finanzierung"
  | "Vorsorge"
  | "Beratung";

type Ctx = {
  isOpen: boolean;
  intent: ContactIntent;
  open: (intent?: ContactIntent) => void;
  close: () => void;
};

const ContactModalContext = createContext<Ctx | null>(null);

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(false);
  const [intent, setIntent] = useState<ContactIntent>("Beratung");

  const open = useCallback((next?: ContactIntent) => {
    if (next) setIntent(next);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, intent, open, close }),
    [isOpen, intent, open, close],
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}
