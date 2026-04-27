import Image from "next/image";
import Link from "next/link";

export function Logo({
  tagline = true,
  variant = "light",
}: {
  tagline?: boolean;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const src = isDark ? "/logo-light.svg" : "/logo.svg";

  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
      aria-label="Dr HeRo Startseite"
    >
      <Image
        src={src}
        alt="Dr HeRo"
        width={56}
        height={54}
        priority
        className="h-12 w-auto transition-transform group-hover:-rotate-3"
      />
      {tagline && (
        <span
          className={`hidden sm:block text-[11px] font-medium leading-tight max-w-[150px] ${
            isDark ? "text-white/60" : "text-navy-300"
          }`}
        >
          Dein Experte für
          <br />
          Finanzen &amp; Immobilien
        </span>
      )}
    </Link>
  );
}
