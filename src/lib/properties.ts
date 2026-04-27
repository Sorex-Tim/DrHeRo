export type PropertyType = "Haus" | "Wohnung" | "Grundstück" | "Gewerbe";
export type Transaction = "Kaufen" | "Mieten";
export type City = "Hilden" | "Düsseldorf" | "Mettmann" | "Erkrath";

export type Property = {
  id: string;
  img: string;
  title: string;
  price: number;
  priceLabel: string;
  sqm: number;
  beds: number;
  baths: number;
  city: City;
  zip: string;
  address: string;
  type: PropertyType;
  transaction: Transaction;
  badge?: string;
};

export const CITIES: { name: City; zip: string }[] = [
  { name: "Hilden", zip: "40721" },
  { name: "Düsseldorf", zip: "40213" },
  { name: "Mettmann", zip: "40822" },
  { name: "Erkrath", zip: "40699" },
];

export const PROPERTIES: Property[] = [
  {
    id: "p-1",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80&auto=format&fit=crop",
    title: "Modernes Einfamilienhaus",
    price: 745000,
    priceLabel: "€ 745.000",
    sqm: 184,
    beds: 5,
    baths: 2,
    city: "Hilden",
    zip: "40721",
    address: "Düsseldorfer Str. 14, Hilden",
    type: "Haus",
    transaction: "Kaufen",
    badge: "Neu",
  },
  {
    id: "p-2",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&auto=format&fit=crop",
    title: "Villa mit Gartenoase",
    price: 1150000,
    priceLabel: "€ 1.150.000",
    sqm: 280,
    beds: 7,
    baths: 3,
    city: "Mettmann",
    zip: "40822",
    address: "Stadtwald 7, Mettmann",
    type: "Haus",
    transaction: "Kaufen",
    badge: "Exklusiv",
  },
  {
    id: "p-3",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80&auto=format&fit=crop",
    title: "Premium Loft mit Skyline-Blick",
    price: 690000,
    priceLabel: "€ 690.000",
    sqm: 132,
    beds: 3,
    baths: 2,
    city: "Düsseldorf",
    zip: "40213",
    address: "Medienhafen 22, Düsseldorf",
    type: "Wohnung",
    transaction: "Kaufen",
    badge: "Loft",
  },
  {
    id: "p-4",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&auto=format&fit=crop",
    title: "Familienfreundlicher Bungalow",
    price: 540000,
    priceLabel: "€ 540.000",
    sqm: 118,
    beds: 4,
    baths: 2,
    city: "Erkrath",
    zip: "40699",
    address: "Erkrath-Hochdahl, Sandheide",
    type: "Haus",
    transaction: "Kaufen",
  },
  {
    id: "p-5",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80&auto=format&fit=crop",
    title: "Designer-Villa Oberkassel",
    price: 1380000,
    priceLabel: "€ 1.380.000",
    sqm: 315,
    beds: 6,
    baths: 4,
    city: "Düsseldorf",
    zip: "40549",
    address: "Oberkassel, Düsseldorf",
    type: "Haus",
    transaction: "Kaufen",
    badge: "Premium",
  },
  {
    id: "p-6",
    img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&q=80&auto=format&fit=crop",
    title: "Charmante Altbauwohnung",
    price: 425000,
    priceLabel: "€ 425.000",
    sqm: 94,
    beds: 3,
    baths: 1,
    city: "Hilden",
    zip: "40721",
    address: "Itterpark 3, Hilden",
    type: "Wohnung",
    transaction: "Kaufen",
  },
  {
    id: "p-7",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80&auto=format&fit=crop",
    title: "Architektenhaus am Goldberg",
    price: 825000,
    priceLabel: "€ 825.000",
    sqm: 205,
    beds: 5,
    baths: 3,
    city: "Mettmann",
    zip: "40822",
    address: "Goldberg 18, Mettmann",
    type: "Haus",
    transaction: "Kaufen",
  },
  {
    id: "p-8",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&q=80&auto=format&fit=crop",
    title: "Stadthaus mit Dachterrasse",
    price: 615000,
    priceLabel: "€ 615.000",
    sqm: 146,
    beds: 4,
    baths: 2,
    city: "Erkrath",
    zip: "40699",
    address: "Bürgerhausstr. 12, Erkrath",
    type: "Haus",
    transaction: "Kaufen",
  },
  {
    id: "p-9",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80&auto=format&fit=crop",
    title: "3-Zimmer Mietwohnung",
    price: 1450,
    priceLabel: "€ 1.450 / Monat",
    sqm: 82,
    beds: 3,
    baths: 1,
    city: "Hilden",
    zip: "40724",
    address: "Walder Str. 5, Hilden",
    type: "Wohnung",
    transaction: "Mieten",
  },
  {
    id: "p-10",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80&auto=format&fit=crop",
    title: "Sonniges Baugrundstück",
    price: 285000,
    priceLabel: "€ 285.000",
    sqm: 620,
    beds: 0,
    baths: 0,
    city: "Mettmann",
    zip: "40822",
    address: "Am Kalkofen, Mettmann",
    type: "Grundstück",
    transaction: "Kaufen",
    badge: "Bauland",
  },
  {
    id: "p-11",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop",
    title: "Bürofläche im Medienhafen",
    price: 4200,
    priceLabel: "€ 4.200 / Monat",
    sqm: 220,
    beds: 0,
    baths: 2,
    city: "Düsseldorf",
    zip: "40221",
    address: "Speditionstr. 19, Düsseldorf",
    type: "Gewerbe",
    transaction: "Mieten",
    badge: "Gewerbe",
  },
  {
    id: "p-12",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80&auto=format&fit=crop",
    title: "Penthouse mit Rheinblick",
    price: 1750000,
    priceLabel: "€ 1.750.000",
    sqm: 240,
    beds: 4,
    baths: 3,
    city: "Düsseldorf",
    zip: "40213",
    address: "Cecilienallee 4, Düsseldorf",
    type: "Wohnung",
    transaction: "Kaufen",
    badge: "Penthouse",
  },
];

export type SearchFilters = {
  query: string;
  transaction: Transaction | "";
  maxPrice: number;
  propertyType: PropertyType | "";
};

export const DEFAULT_FILTERS: SearchFilters = {
  query: "",
  transaction: "Kaufen",
  maxPrice: 0,
  propertyType: "",
};

export const PRICE_OPTIONS: { label: string; value: number }[] = [
  { label: "Beliebig", value: 0 },
  { label: "bis € 300.000", value: 300000 },
  { label: "bis € 500.000", value: 500000 },
  { label: "bis € 750.000", value: 750000 },
  { label: "bis € 1.000.000", value: 1000000 },
  { label: "bis € 1.500.000", value: 1500000 },
  { label: "bis € 2.000.000", value: 2000000 },
];

export const RENT_PRICE_OPTIONS: { label: string; value: number }[] = [
  { label: "Beliebig", value: 0 },
  { label: "bis € 1.000 / Mt.", value: 1000 },
  { label: "bis € 1.500 / Mt.", value: 1500 },
  { label: "bis € 2.500 / Mt.", value: 2500 },
  { label: "bis € 5.000 / Mt.", value: 5000 },
];

export const TRANSACTION_OPTIONS: Transaction[] = ["Kaufen", "Mieten"];
export const PROPERTY_TYPE_OPTIONS: PropertyType[] = [
  "Haus",
  "Wohnung",
  "Grundstück",
  "Gewerbe",
];

export function filterProperties(
  list: Property[],
  filters: SearchFilters,
): Property[] {
  const q = filters.query.trim().toLowerCase();

  return list.filter((p) => {
    if (filters.transaction && p.transaction !== filters.transaction)
      return false;

    if (filters.propertyType && p.type !== filters.propertyType) return false;

    if (filters.maxPrice > 0 && p.price > filters.maxPrice) return false;

    if (q.length > 0) {
      const haystack = `${p.city} ${p.zip} ${p.address}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }

    return true;
  });
}
