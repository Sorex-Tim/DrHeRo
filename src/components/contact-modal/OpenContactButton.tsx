"use client";

import { ChevronRight } from "../icons";
import { type ContactIntent, useContactModal } from "./ContactModalContext";

type Variant = "primary" | "dark" | "white" | "outline" | "ghost";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-[0_14px_30px_-12px_rgba(242,107,54,0.7)]",
  dark:
    "bg-navy-900 text-white hover:bg-navy-700",
  white:
    "bg-white text-navy-900 hover:bg-brand-50 shadow-[0_12px_24px_-12px_rgba(0,0,0,0.4)]",
  outline:
    "bg-white border border-line text-navy-700 hover:border-brand-200 hover:text-brand-500",
  ghost:
    "text-navy-700 hover:text-brand-500",
};

const SIZES: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-sm",
};

export function OpenContactButton({
  children,
  intent,
  variant = "primary",
  size = "md",
  withArrow = true,
  className = "",
}: {
  children: React.ReactNode;
  intent?: ContactIntent;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
}) {
  const { open } = useContactModal();
  return (
    <button
      type="button"
      onClick={() => open(intent)}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
      {withArrow && (
        <ChevronRight
          className={`h-4 w-4 ${
            variant === "primary" || variant === "dark"
              ? "text-white"
              : variant === "white"
                ? "text-brand-500"
                : ""
          }`}
        />
      )}
    </button>
  );
}
