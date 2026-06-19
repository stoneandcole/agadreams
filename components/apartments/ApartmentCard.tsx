"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Apartment } from "@/types";

export const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.08 },
  }),
};

export default function ApartmentCard({ apartment, index = 0 }: { apartment: Apartment; index?: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Link
        href={`/appartements/${apartment.slug}`}
        className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
      >
        {/* Image */}
        <div className="relative h-52 bg-sand-200 overflow-hidden">
          <Image
            src={apartment.images[0]}
            alt={apartment.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute top-3 left-3 bg-terracotta-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
            <span>▶</span> Vidéo dispo
          </div>
          {apartment.featured && (
            <div className="absolute top-3 right-3 bg-white/90 text-terracotta-600 text-xs font-bold px-2 py-1 rounded-full">
              Coup de cœur
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-terracotta-500 font-semibold uppercase tracking-wider mb-1">{apartment.zone}</p>
          <h3 className="font-bold text-stone-800 text-base leading-snug mb-2 group-hover:text-terracotta-600 transition-colors">
            {apartment.title}
          </h3>
          <div className="flex gap-1.5 flex-wrap mb-3">
            {apartment.amenities.slice(0, 3).map((a) => (
              <span key={a} className="text-xs bg-sand-100 text-stone-600 px-2 py-0.5 rounded-full">
                {a}
              </span>
            ))}
            {apartment.amenities.length > 3 && (
              <span className="text-xs text-stone-400">+{apartment.amenities.length - 3}</span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-stone-800">{apartment.pricePerNight.toLocaleString("fr-FR")} MAD</span>
              <span className="text-stone-400 text-sm"> / nuit</span>
            </div>
            <span className="text-xs text-stone-500">{apartment.capacity} pers. · {apartment.bedrooms} ch.</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
