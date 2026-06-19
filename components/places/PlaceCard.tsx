"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Place, PlaceCategory } from "@/types";
import StarRating from "@/components/ui/StarRating";

export const categoryLabel: Record<PlaceCategory, string> = {
  restaurant: "Restaurant",
  plage:      "Plage",
  activite:   "Activité",
  excursion:  "Excursion",
  shopping:   "Shopping",
  nightlife:  "Nightlife",
};

const categoryColor: Record<PlaceCategory, string> = {
  restaurant: "bg-amber-100 text-amber-700",
  plage:      "bg-ocean-100 text-ocean-700",
  activite:   "bg-emerald-100 text-emerald-700",
  excursion:  "bg-purple-100 text-purple-700",
  shopping:   "bg-pink-100 text-pink-700",
  nightlife:  "bg-indigo-100 text-indigo-700",
};

export default function PlaceCard({ place, index = 0 }: { place: Place; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: index * 0.07 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/explorer/${place.slug}`} className="group block rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-shadow duration-300">
        <div className="relative h-40 bg-sand-200 overflow-hidden">
          <Image
            src={place.images[0]}
            alt={place.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full ${categoryColor[place.category]}`}>
            {categoryLabel[place.category]}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-stone-800 mb-1.5 group-hover:text-terracotta-600 transition-colors leading-snug">
            {place.name}
          </h3>
          <StarRating rating={place.rating} />
          <p className="text-stone-500 text-xs mt-2 line-clamp-2 leading-relaxed">{place.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
