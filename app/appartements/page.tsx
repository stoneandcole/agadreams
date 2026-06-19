"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { filterApartments, allZones, maxApartmentPrice, ApartmentFilters as FiltersType } from "@/lib/data";
import ApartmentCard from "@/components/apartments/ApartmentCard";
import ApartmentFilters from "@/components/apartments/ApartmentFilters";

function AppartementsContent() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FiltersType>(() => {
    const zone = searchParams.get("zone");
    return zone ? { zone } : {};
  });

  useEffect(() => {
    const zone = searchParams.get("zone");
    if (zone) setFilters((f) => ({ ...f, zone }));
  }, [searchParams]);

  const results = filterApartments(filters);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <p className="eyebrow mb-2">Tous les logements</p>
        <h1 className="font-display text-4xl font-bold text-stone-800">Appartements à Agadir</h1>
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
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((apt, i) => (
              <motion.div
                key={apt.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ApartmentCard apartment={apt} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
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

export default function AppartementsPage() {
  return (
    <Suspense>
      <AppartementsContent />
    </Suspense>
  );
}
