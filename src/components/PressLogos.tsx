type LogoProps = { className?: string; style?: React.CSSProperties };

const Faz = ({ className, style }: LogoProps) => (
  <svg
    viewBox="0 0 200 56"
    className={className} style={style}
    aria-label="Frankfurter Allgemeine Zeitung"
  >
    <text
      x="100"
      y="22"
      textAnchor="middle"
      fontFamily='"Times New Roman", "Playfair Display", Georgia, serif'
      fontSize="22"
      fontWeight="900"
      letterSpacing="-0.5"
      fill="currentColor"
    >
      Frankfurter
    </text>
    <text
      x="100"
      y="44"
      textAnchor="middle"
      fontFamily='"Times New Roman", "Playfair Display", Georgia, serif'
      fontSize="22"
      fontWeight="900"
      letterSpacing="-0.5"
      fill="currentColor"
    >
      Allgemeine
    </text>
    <line
      x1="20"
      y1="50"
      x2="180"
      y2="50"
      stroke="currentColor"
      strokeWidth="0.7"
    />
    <text
      x="100"
      y="56"
      textAnchor="middle"
      fontFamily='"Times New Roman", Georgia, serif'
      fontSize="6"
      fontWeight="600"
      letterSpacing="6"
      fill="currentColor"
    >
      ZEITUNG
    </text>
  </svg>
);

const Handelsblatt = ({ className, style }: LogoProps) => (
  <svg viewBox="0 0 240 40" className={className} style={style} aria-label="Handelsblatt">
    <text
      x="0"
      y="29"
      fontFamily='"Times New Roman", Georgia, serif'
      fontSize="26"
      fontWeight="700"
      letterSpacing="-0.5"
      fill="currentColor"
    >
      Handelsblatt
    </text>
  </svg>
);

const Welt = ({ className, style }: LogoProps) => (
  <svg viewBox="0 0 180 40" className={className} style={style} aria-label="DIE WELT">
    <rect x="0" y="6" width="34" height="28" fill="currentColor" />
    <text
      x="6"
      y="27"
      fontFamily='"Times New Roman", Georgia, serif'
      fontSize="13"
      fontWeight="700"
      letterSpacing="2"
      fill="white"
    >
      DIE
    </text>
    <text
      x="44"
      y="30"
      fontFamily='"Times New Roman", Georgia, serif'
      fontSize="28"
      fontWeight="900"
      letterSpacing="3"
      fill="currentColor"
    >
      WELT
    </text>
  </svg>
);

const Focus = ({ className, style }: LogoProps) => (
  <svg viewBox="0 0 200 40" className={className} style={style} aria-label="FOCUS Money">
    <text
      x="0"
      y="28"
      fontFamily='"Helvetica Neue", Arial, sans-serif'
      fontSize="28"
      fontWeight="900"
      letterSpacing="1"
      fill="currentColor"
    >
      FOCUS
    </text>
    <text
      x="105"
      y="28"
      fontFamily='"Helvetica Neue", Arial, sans-serif'
      fontSize="16"
      fontWeight="400"
      letterSpacing="1"
      fontStyle="italic"
      fill="currentColor"
    >
      Money
    </text>
  </svg>
);

const Capital = ({ className, style }: LogoProps) => (
  <svg viewBox="0 0 200 40" className={className} style={style} aria-label="Capital">
    <text
      x="0"
      y="30"
      fontFamily='Georgia, "Times New Roman", serif'
      fontSize="30"
      fontWeight="400"
      letterSpacing="6"
      fill="currentColor"
    >
      Capital
    </text>
  </svg>
);

const ManagerMagazin = ({ className, style }: LogoProps) => (
  <svg viewBox="0 0 260 40" className={className} style={style} aria-label="manager magazin">
    <text
      x="0"
      y="28"
      fontFamily='Georgia, "Times New Roman", serif'
      fontSize="22"
      fontStyle="italic"
      fontWeight="700"
      letterSpacing="-0.5"
      fill="currentColor"
    >
      manager
    </text>
    <text
      x="113"
      y="28"
      fontFamily='Georgia, "Times New Roman", serif'
      fontSize="22"
      fontWeight="400"
      letterSpacing="-0.5"
      fill="currentColor"
    >
      magazin
    </text>
  </svg>
);

const WiWo = ({ className, style }: LogoProps) => (
  <svg viewBox="0 0 240 40" className={className} style={style} aria-label="WirtschaftsWoche">
    <text
      x="0"
      y="28"
      fontFamily='"Helvetica Neue", Arial, sans-serif'
      fontSize="22"
      fontWeight="800"
      letterSpacing="-0.5"
      fill="currentColor"
    >
      Wirtschafts
    </text>
    <text
      x="124"
      y="28"
      fontFamily='"Helvetica Neue", Arial, sans-serif'
      fontSize="22"
      fontWeight="300"
      letterSpacing="-0.5"
      fill="currentColor"
    >
      Woche
    </text>
  </svg>
);

const SZ = ({ className, style }: LogoProps) => (
  <svg
    viewBox="0 0 200 56"
    className={className} style={style}
    aria-label="Süddeutsche Zeitung"
  >
    <text
      x="100"
      y="26"
      textAnchor="middle"
      fontFamily='"Times New Roman", "Playfair Display", Georgia, serif'
      fontSize="26"
      fontWeight="900"
      letterSpacing="-0.5"
      fill="currentColor"
    >
      Süddeutsche
    </text>
    <text
      x="100"
      y="50"
      textAnchor="middle"
      fontFamily='"Times New Roman", "Playfair Display", Georgia, serif'
      fontSize="22"
      fontWeight="400"
      fontStyle="italic"
      letterSpacing="0"
      fill="currentColor"
    >
      Zeitung
    </text>
  </svg>
);

const ImmoScout = ({ className, style }: LogoProps) => (
  <svg viewBox="0 0 240 40" className={className} style={style} aria-label="ImmobilienScout24">
    <circle cx="18" cy="20" r="14" fill="currentColor" />
    <text
      x="18"
      y="25"
      textAnchor="middle"
      fontFamily='"Helvetica Neue", Arial, sans-serif'
      fontSize="13"
      fontWeight="900"
      fill="white"
    >
      IS24
    </text>
    <text
      x="40"
      y="27"
      fontFamily='"Helvetica Neue", Arial, sans-serif'
      fontSize="18"
      fontWeight="700"
      letterSpacing="-0.3"
      fill="currentColor"
    >
      ImmoScout24
    </text>
  </svg>
);

const Immowelt = ({ className, style }: LogoProps) => (
  <svg viewBox="0 0 200 40" className={className} style={style} aria-label="Immowelt">
    <rect x="0" y="8" width="24" height="24" rx="4" fill="currentColor" />
    <path d="M5 22 L12 14 L19 22 Z M9 22 H15 V28 H9 Z" fill="white" />
    <text
      x="32"
      y="27"
      fontFamily='"Helvetica Neue", Arial, sans-serif'
      fontSize="20"
      fontWeight="800"
      letterSpacing="-0.5"
      fill="currentColor"
    >
      immowelt
    </text>
  </svg>
);

const LOGOS = [
  { Cmp: Faz, w: 160, h: 50 },
  { Cmp: Handelsblatt, w: 170, h: 36 },
  { Cmp: Welt, w: 130, h: 36 },
  { Cmp: Focus, w: 150, h: 36 },
  { Cmp: Capital, w: 130, h: 36 },
  { Cmp: ManagerMagazin, w: 175, h: 36 },
  { Cmp: WiWo, w: 170, h: 36 },
  { Cmp: SZ, w: 170, h: 50 },
  { Cmp: ImmoScout, w: 175, h: 36 },
  { Cmp: Immowelt, w: 145, h: 36 },
];

export function PressLogos() {
  return (
    <section
      aria-label="Bekannt aus"
      className="py-16 border-y border-line bg-white/60 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-brand-500">
            Bekannt aus
          </div>
          <p className="mt-2 text-sm text-navy-300">
            Über unsere Arbeit wurde berichtet in
          </p>
        </div>
      </div>

      <div className="relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <div className="marquee group">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                className="marquee-set"
                aria-hidden={dup === 1}
              >
                {LOGOS.map(({ Cmp, w, h }, i) => (
                  <div
                    key={`${dup}-${i}`}
                    className="marquee-item text-navy-200/90 hover:text-navy-700 transition-colors"
                    style={{ width: `${w}px`, height: "56px" }}
                  >
                    <Cmp
                      className="w-full"
                      style={{ height: `${h}px` }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee {
          display: flex;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 38s linear infinite;
        }
        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-set {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          gap: 64px;
          padding-right: 64px;
        }
        .marquee-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
