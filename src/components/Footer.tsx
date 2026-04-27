import Link from "next/link";
import { Logo } from "./Logo";
import { MailIcon, MapPinIcon, PhoneIcon } from "./icons";

const COLS = [
  {
    title: "Leistungen",
    links: [
      { label: "Immobilien kaufen", href: "#immobilien" },
      { label: "Immobilien verkaufen", href: "#prozess" },
      { label: "Bewertung", href: "#bewertung" },
      { label: "Finanzierung", href: "#leistungen" },
      { label: "Vorsorge", href: "#leistungen" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Referenzen", href: "#referenzen" },
      { label: "Karriere", href: "#about" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
      { label: "AGB", href: "#" },
      { label: "Widerrufsbelehrung", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-100/80">
      <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-brand-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="dark" />
            <p className="mt-5 text-sm leading-relaxed text-navy-100/60 max-w-sm">
              Persönlich. Regional. Kompetent. Wir begleiten Menschen in den
              wichtigsten Lebensentscheidungen rund um Immobilien, Finanzen und
              Vorsorge.
            </p>

            <div className="mt-7 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-brand-400 mt-0.5" />
                <div>
                  Warrington-Platz 20
                  <br />
                  40721 Hilden
                </div>
              </div>
              <a
                href="tel:+4921039071590"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <PhoneIcon className="h-5 w-5 text-brand-400" />
                +49 2103 9071590
              </a>
              <a
                href="mailto:hallo@drhero.de"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <MailIcon className="h-5 w-5 text-brand-400" />
                hallo@drhero.de
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <SocialLink label="Facebook" href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M13 22v-8h3l1-4h-4V7.5C13 6.5 13.4 6 14.5 6H17V2.5c-.8-.1-2-.2-3-.2-3 0-5 1.8-5 5V10H6v4h3v8h4Z" />
                </svg>
              </SocialLink>
              <SocialLink label="Instagram" href="#">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </SocialLink>
              <SocialLink label="LinkedIn" href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M5 3.5A1.5 1.5 0 1 0 5 6.5 1.5 1.5 0 0 0 5 3.5ZM3.5 8h3v12h-3V8ZM9 8h2.9v1.7h.05c.4-.75 1.4-1.7 3-1.7 3.2 0 3.8 2 3.8 4.7V20h-3v-5.4c0-1.3 0-3-1.85-3s-2.13 1.4-2.13 2.9V20H9V8Z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <div className="text-sm font-bold text-white">{c.title}</div>
              <ul className="mt-5 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-navy-100/60 hover:text-brand-400 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <div className="text-sm font-bold text-white">Newsletter</div>
            <p className="mt-3 text-xs text-navy-100/60">
              Marktinsights und exklusive Objekte – einmal monatlich.
            </p>
            <form className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                placeholder="E-Mail"
                className="h-11 rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-navy-100/40 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
              />
              <button
                type="submit"
                className="h-11 rounded-full bg-brand-500 text-sm font-bold text-white hover:bg-brand-600 transition-colors"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-navy-100/50">
          <div>
            © {new Date().getFullYear()} Dr HeRo. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-white">
              Impressum
            </Link>
            <Link href="#" className="hover:text-white">
              Datenschutz
            </Link>
            <Link href="#" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-colors"
    >
      {children}
    </a>
  );
}
