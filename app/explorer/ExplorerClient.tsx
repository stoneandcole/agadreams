"use client";

import { useState } from "react";
import { Place, PlaceCategory } from "@/types";
import PlaceCard from "@/components/places/PlaceCard";

const categoryLabel: Record<PlaceCategory, string> = {
  restaurant: "Restaurants",
  plage:      "Plages",
  activite:   "Activités",
  excursion:  "Excursions",
  shopping:   "Shopping",
  nightlife:  "Nightlife",
};

const ALL = "all";

export default function ExplorerClient({ places }: { places: Place[] }) {
  const [active, setActive] = useState<PlaceCategory | typeof ALL>(ALL);

  const presentCategories = [...new Set(places.map((p) => p.category))] as PlaceCategory[];
  const filtered = active === ALL ? places : places.filter((p) => p.category === active);

  return (
    <>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-1">
        <button
          onClick={() => setActive(ALL)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
            active === ALL
              ? "bg-terracotta-500 text-white"
              : "bg-sand-100 text-stone-600 hover:bg-sand-200"
          }`}
        >
          Tout voir
        </button>
        {presentCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
              active === cat
                ? "bg-terracotta-500 text-white"
                : "bg-sand-100 text-stone-600 hover:bg-sand-200"
            }`}
          >
            {categoryLabel[cat]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((place, i) => (
          <PlaceCard key={place.slug} place={place} index={i} />
        ))}
      </div>
    </>
  );
}
