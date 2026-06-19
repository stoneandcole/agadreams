"use client";

import { useState } from "react";
import { filterApartments, allZones, maxApartmentPrice, ApartmentFilters as FiltersType } from "@/lib/data";
import ApartmentCard from "@/components/apartments/ApartmentCard";
import ApartmentFilters from "@/components/apartments/ApartmentFilters";

export default function AppartementsPage() {
  const [filters, setFilters] = useState<FiltersType>({});
  const results = filterApartments(filters);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <p className="text-terracotta-500 text-sm font-semibold uppercase tracking-wider mb-2">Tous les logements</p>
        <h1 className="text-4xl font-bold text-stone-800">Appartements à Agadir</h1>
        <p className="text-stone-500 mt-3 max-w-xl">
          Chaque appartement a été visité et filmé personnellement. Retrouvez la vidéo de visite sur chaque fiche.
        </p>
      </div>

      <ApartmentFilters
        filters={filters}
        onChange={setFilters}
        zones={allZones}
        maxPrice={maxApartmentPrice}
        resultCount={results.length}
      />

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((apt) => (
            <ApartmentCard key={apt.slug} apartment={apt} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-stone-400">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-lg font-medium text-stone-600">Aucun appartement ne correspond à vos critères.</p>
          <button
            onClick={() => setFilters({})}
            className="mt-4 text-terracotta-600 font-semibold hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
}
