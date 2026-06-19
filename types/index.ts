export type PlaceCategory =
  | "restaurant"
  | "plage"
  | "activite"
  | "excursion"
  | "shopping"
  | "nightlife";

export interface Place {
  slug: string;
  name: string;
  category: PlaceCategory;
  neighborhood: string;
  coordinates?: { lat: number; lng: number };
  description: string;
  videoUrl?: string;
  rating: number; // 1–5, influencer score
  images: string[];
  linkedApartmentSlugs?: string[];
}

export interface Apartment {
  slug: string;
  title: string;
  zone: string;
  pricePerNight: number; // MAD
  bedrooms: number;
  bathrooms: number;
  capacity: number;
  amenities: string[];
  images: string[];
  videoUrl: string;
  description: string;
  nearbyPlaces: Place[];
  bookingUrl?: string;
  featured?: boolean;
}
