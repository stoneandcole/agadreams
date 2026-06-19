import { Apartment, Place } from "@/types";

// Picsum IDs that visually match each subject (architecture, food, nature, sea)
export const places: Place[] = [
  {
    slug: "la-scala-agadir",
    name: "La Scala",
    category: "restaurant",
    neighborhood: "Bord de mer",
    description:
      "Un incontournable sur le front de mer d'Agadir. Cuisine méditerranéenne raffinée avec vue sur l'Atlantique.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    ],
  },
  {
    slug: "plage-taghazout",
    name: "Plage de Taghazout",
    category: "plage",
    neighborhood: "Taghazout",
    description:
      "Village de surf mythique à 20 km au nord d'Agadir. Vagues parfaites, ambiance décontractée.",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    ],
  },
  {
    slug: "souk-el-had",
    name: "Souk El Had",
    category: "shopping",
    neighborhood: "Centre-ville",
    description:
      "Le plus grand marché d'Afrique du Nord. Épices, artisanat, fruits frais — un choc sensoriel inoubliable.",
    rating: 4,
    images: [
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80",
      "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=800&q=80",
    ],
  },
  {
    slug: "paradis-plage",
    name: "Paradis Plage Resort",
    category: "activite",
    neighborhood: "Taghazout",
    description:
      "Cours de surf, yoga au bord de l'eau et pool bar. L'adresse détente par excellence autour d'Agadir.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 4,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    ],
  },
  {
    slug: "kasbah-restaurant",
    name: "Restaurant La Kasbah",
    category: "restaurant",
    neighborhood: "Talborjt",
    description:
      "Cuisine marocaine authentique dans un riad traditionnel. Tajines, couscous et pastilla — les saveurs du Souss à leur meilleur.",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    ],
  },
  {
    slug: "dunes-agafay",
    name: "Dunes d'Agafay",
    category: "excursion",
    neighborhood: "Région Souss",
    description:
      "Une excursion inoubliable dans les dunes proches d'Agadir. Coucher de soleil sur l'océan, balade à dos de chameau.",
    rating: 4,
    images: [
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    ],
  },
];

export const apartments: Apartment[] = [
  {
    slug: "penthouse-vue-mer-hay-mohammadi",
    title: "Penthouse avec vue mer — Hay Mohammadi",
    zone: "Hay Mohammadi",
    pricePerNight: 950,
    bedrooms: 3,
    bathrooms: 2,
    capacity: 6,
    amenities: ["Wi-Fi", "Piscine", "Parking", "Climatisation", "Vue mer", "Terrasse"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Un penthouse d'exception avec panorama à 180° sur l'Atlantique. Cuisine équipée haut de gamme, grande terrasse et accès piscine privée. Idéal pour les familles ou groupes d'amis.",
    nearbyPlaces: [places[0], places[2]],
    featured: true,
  },
  {
    slug: "studio-surf-taghazout",
    title: "Studio vue vagues — Taghazout",
    zone: "Taghazout",
    pricePerNight: 420,
    bedrooms: 1,
    bathrooms: 1,
    capacity: 2,
    amenities: ["Wi-Fi", "Climatisation", "Vue mer"],
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Petit nid cosy à deux pas de la plage de Taghazout. Parfait pour les surfeurs et les amoureux de la mer. Accès direct à la plage en 2 minutes.",
    nearbyPlaces: [places[1], places[3]],
    featured: true,
  },
  {
    slug: "appartement-moderne-centre-agadir",
    title: "Appartement moderne — Centre Agadir",
    zone: "Centre-ville",
    pricePerNight: 600,
    bedrooms: 2,
    bathrooms: 1,
    capacity: 4,
    amenities: ["Wi-Fi", "Climatisation", "Parking", "Proche commerces"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Appartement entièrement rénové au cœur d'Agadir, à 10 minutes à pied du Souk El Had et des meilleures adresses de la ville.",
    nearbyPlaces: [places[2], places[0], places[4]],
    featured: false,
  },
  {
    slug: "villa-jardin-agadir",
    title: "Villa avec jardin privé — Agadir Bay",
    zone: "Agadir Bay",
    pricePerNight: 1400,
    bedrooms: 4,
    bathrooms: 3,
    capacity: 8,
    amenities: ["Wi-Fi", "Piscine", "Parking", "Climatisation", "Jardin", "Terrasse", "Vue mer"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Villa familiale d'exception avec jardin tropical et piscine chauffée. Vue imprenable sur la baie d'Agadir. Parfaite pour les grandes occasions.",
    nearbyPlaces: [places[1], places[0], places[5]],
    featured: true,
  },
];

export interface ApartmentFilters {
  zone?: string;
  maxPrice?: number;
  minBedrooms?: number;
  amenities?: string[];
}

export function filterApartments(filters: ApartmentFilters): Apartment[] {
  return apartments.filter((apt) => {
    if (filters.zone && apt.zone !== filters.zone) return false;
    if (filters.maxPrice && apt.pricePerNight > filters.maxPrice) return false;
    if (filters.minBedrooms && apt.bedrooms < filters.minBedrooms) return false;
    if (filters.amenities?.length) {
      const hasAll = filters.amenities.every((a) => apt.amenities.includes(a));
      if (!hasAll) return false;
    }
    return true;
  });
}

export function getApartmentBySlug(slug: string): Apartment | undefined {
  return apartments.find((a) => a.slug === slug);
}

export function getPlaceBySlug(slug: string): Place | undefined {
  return places.find((p) => p.slug === slug);
}

export function getFeaturedApartments(): Apartment[] {
  return apartments.filter((a) => a.featured);
}

export function getSimilarApartments(slug: string, limit = 3): Apartment[] {
  const current = getApartmentBySlug(slug);
  if (!current) return [];
  return apartments
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const scoreA = a.zone === current.zone ? 1 : 0;
      const scoreB = b.zone === current.zone ? 1 : 0;
      return scoreB - scoreA;
    })
    .slice(0, limit);
}

export function getLinkedApartments(placeSlug: string): Apartment[] {
  return apartments.filter((a) => a.nearbyPlaces.some((p) => p.slug === placeSlug));
}

export const allZones = [...new Set(apartments.map((a) => a.zone))];
export const allAmenities = [...new Set(apartments.flatMap((a) => a.amenities))];
export const maxApartmentPrice = Math.max(...apartments.map((a) => a.pricePerNight));

export const socials = {
  instagram: { url: "https://www.instagram.com/agadream", handle: "@agadream" },
  tiktok:    { url: "https://www.tiktok.com/@agadream",   handle: "@agadream" },
  youtube:   { url: "https://www.youtube.com/@agadream",  handle: "AgaDream"  },
};

export const influencer = {
  name: "AgaDream",
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  stats: [
    { value: "45K+",  label: "Abonnés Instagram" },
    { value: "120K+", label: "Followers TikTok"  },
    { value: "50+",   label: "Séjours organisés" },
  ],
};
