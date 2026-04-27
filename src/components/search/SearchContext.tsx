"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_FILTERS,
  type SearchFilters,
} from "@/lib/properties";

type Ctx = {
  filters: SearchFilters;
  draft: SearchFilters;
  setDraft: (next: Partial<SearchFilters>) => void;
  apply: (next?: Partial<SearchFilters>) => void;
  reset: () => void;
};

const SearchContext = createContext<Ctx | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS);
  const [draft, setDraftState] = useState<SearchFilters>(DEFAULT_FILTERS);

  const setDraft = useCallback((next: Partial<SearchFilters>) => {
    setDraftState((prev) => ({ ...prev, ...next }));
  }, []);

  const apply = useCallback(
    (next?: Partial<SearchFilters>) => {
      setDraftState((prev) => {
        const merged = { ...prev, ...(next ?? {}) };
        setFilters(merged);
        return merged;
      });
    },
    [],
  );

  const reset = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
    setDraftState(DEFAULT_FILTERS);
  }, []);

  const value = useMemo(
    () => ({ filters, draft, setDraft, apply, reset }),
    [filters, draft, setDraft, apply, reset],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within SearchProvider");
  return ctx;
}
