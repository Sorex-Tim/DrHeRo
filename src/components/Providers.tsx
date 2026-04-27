"use client";

import { ContactModal } from "./contact-modal/ContactModal";
import { ContactModalProvider } from "./contact-modal/ContactModalContext";
import { SearchProvider } from "./search/SearchContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <ContactModalProvider>
        {children}
        <ContactModal />
      </ContactModalProvider>
    </SearchProvider>
  );
}
