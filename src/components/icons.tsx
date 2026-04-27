import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const SearchIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const ChevronDown = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const HomeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
  </svg>
);

export const EuroIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M18 7a7 7 0 1 0 0 10" />
    <path d="M4 11h9" />
    <path d="M4 15h9" />
  </svg>
);

export const BuildingIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 12 4 4 10-10" />
  </svg>
);

export const CheckCircleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m8 12 3 3 5-6" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
  </svg>
);

export const TrophyIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M8 4h8v3a4 4 0 1 1-8 0V4Z" />
    <path d="M16 5h3a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4" />
    <path d="M8 5H5a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4" />
    <path d="M10 14h4l-1 4h-2l-1-4Z" />
    <path d="M9 21h6" />
  </svg>
);

export const UsersIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" />
    <path d="M3 21a7 7 0 0 1 14 0" />
    <path d="M17 8a3 3 0 1 0 0-6" />
    <path d="M21 21a5 5 0 0 0-4-4.9" />
  </svg>
);

export const TrendingUpIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m3 17 6-6 4 4 8-8" />
    <path d="M14 7h7v7" />
  </svg>
);

export const AwardIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="6" />
    <path d="m8.5 14-2 7 5-3 5 3-2-7" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const HandshakeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m11 17 2 2a1 1 0 1 0 1.5-1.4" />
    <path d="m14 16.6 2.5 2.5a1 1 0 1 0 1.4-1.4l-2.5-2.5" />
    <path d="m17 14.5 2 2a1 1 0 0 0 1.4-1.4L17 11.7l-2.5 2.5" />
    <path d="m21 4-3 3-2-2-7 7-2-2-3 3 5 5 4-4 2 2 4-4 2 2 5-5-5-5Z" />
  </svg>
);

export const SparkleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </svg>
);

export const KeyIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="m11 12 8-8 3 3-2 2 2 2-3 3-2-2-2 2" />
  </svg>
);

export const FileIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
    <path d="M14 3v6h6" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M12 5v14" />
  </svg>
);

export const MinusIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const XIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const BedIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2 17V7" />
    <path d="M22 17v-4a3 3 0 0 0-3-3H8v7" />
    <path d="M2 13h20" />
    <path d="M2 17h20" />
    <circle cx="6" cy="11" r="2" />
  </svg>
);

export const HeartIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const BathIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.5 1.1V11" />
    <path d="M2 11h20v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-3Z" />
    <path d="M5 18l-1 3M19 18l1 3" />
    <path d="M7 8h2" />
  </svg>
);

export const GridIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

export const SlidersIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M18 18h2" />
    <circle cx="16" cy="6" r="2" fill="currentColor" stroke="none" />
    <circle cx="10" cy="12" r="2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="18" r="2" fill="currentColor" stroke="none" />
  </svg>
);

export const RulerIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 14 14 3l7 7L10 21l-7-7Z" />
    <path d="m7 10 2 2M10 7l2 2M13 4l2 2M16 13l2 2M13 16l2 2" />
  </svg>
);
