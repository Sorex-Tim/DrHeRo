import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dr HeRo – Ihr Experte für Finanzen & Immobilien",
  description:
    "Persönlich. Regional. Kompetent. Wir begleiten Sie beim Kauf, Verkauf und der Bewertung Ihrer Immobilie – mit über 15 Jahren Erfahrung.",
  metadataBase: new URL("https://dr-hero.de"),
  openGraph: {
    title: "Dr HeRo – Ihr Experte für Finanzen & Immobilien",
    description:
      "Persönlich. Regional. Kompetent. Wir begleiten Sie beim Kauf, Verkauf und der Bewertung Ihrer Immobilie.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-(--color-navy-900)">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
