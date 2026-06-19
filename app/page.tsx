"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFeaturedApartments, places, influencer, socials, allZones } from "@/lib/data";
import ApartmentCard from "@/components/apartments/ApartmentCard";
import PlaceCard from "@/components/places/PlaceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

const heroStats = [
  { value: "4", label: "Appartements sélectionnés" },
  { value: "6", label: "Adresses testées" },
  { value: "1", label: "Influenceur de confiance" },
];

export default function HomePage() {
  const featured = getFeaturedApartments();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1800&q=80"
          alt="Agadir vue panoramique"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta-800/80 via-terracotta-700/70 to-stone-900/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-terracotta-200 text-sm font-semibold uppercase tracking-widest mb-5"
          >
            Agadir · Taghazout · Région Souss
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            L&apos;appartement parfait,
            <br />
            <span className="text-terracotta-300">vu et approuvé</span> par AgaDream
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Chaque logement est filmé et testé personnellement. Vous voyez exactement ce que vous louez — et les meilleures adresses autour.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/appartements"
              className="bg-white text-terracotta-600 font-semibold px-8 py-3.5 rounded-full hover:bg-sand-100 transition-colors text-base"
            >
              Voir les appartements
            </Link>
            <Link
              href="/explorer"
              className="border border-white/50 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-base"
            >
              Explorer Agadir
            </Link>
          </motion.div>

          {/* Quick zone pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-wrap justify-center gap-2 mt-5"
          >
            <span className="text-white/40 text-xs self-center mr-1">Filtrer par zone :</span>
            {allZones.map((zone) => (
              <Link
                key={zone}
                href={`/appartements?zone=${encodeURIComponent(zone)}`}
                className="text-xs text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
              >
                {zone}
              </Link>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mt-16 pt-10 border-t border-white/20"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-white/60 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="text-white/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured apartments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="flex items-end justify-between mb-8">
          <div>
            <p className="text-terracotta-500 text-sm font-semibold uppercase tracking-wider mb-1">Sélection AgaDream</p>
            <h2 className="font-display text-3xl font-bold text-stone-800">Appartements coup de cœur</h2>
          </div>
          <Link href="/appartements" className="text-sm font-medium text-terracotta-600 hover:underline">
            Voir tout →
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((apt, i) => (
            <ApartmentCard key={apt.slug} apartment={apt} index={i} />
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <AnimatedSection>
        <section className="bg-sand-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Logo */}
              <div className="relative w-40 h-40 shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="AgaDream"
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
              <div>
                <p className="text-terracotta-500 text-sm font-semibold uppercase tracking-wider mb-2">Pourquoi AgaDream ?</p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-800 mb-3">
                  Pas de photos retouchées. Pas de surprises.
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-4">
                  Je visite chaque appartement personnellement, je le filme sous tous les angles et je partage mon avis honnête. Vous réservez en confiance.
                </p>
                <Link href="/a-propos" className="text-terracotta-600 font-semibold hover:underline">
                  En savoir plus sur AgaDream →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Influencer stats strip */}
      <AnimatedSection>
        <section className="bg-terracotta-500 py-12 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center text-white">
            {influencer.stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl font-bold">{s.value}</p>
                <p className="text-terracotta-100 text-xs sm:text-sm mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Nearby experiences */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="mb-8">
          <p className="text-terracotta-500 text-sm font-semibold uppercase tracking-wider mb-1">Mes adresses</p>
          <h2 className="font-display text-3xl font-bold text-stone-800">À découvrir autour</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {places.slice(0, 4).map((place, i) => (
            <PlaceCard key={place.slug} place={place} index={i} />
          ))}
        </div>

        <AnimatedSection className="mt-8 text-center" delay={0.2}>
          <Link
            href="/explorer"
            className="inline-block border border-terracotta-400 text-terracotta-600 font-semibold px-8 py-3 rounded-full hover:bg-terracotta-50 transition-colors"
          >
            Voir toutes mes adresses
          </Link>
        </AnimatedSection>
      </section>

      {/* Closing band — social + CTA */}
      <AnimatedSection>
        <section className="bg-stone-900 py-16 px-4 text-center text-white">
          <p className="text-terracotta-300 text-sm font-semibold uppercase tracking-widest mb-3">Suivre AgaDream</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 max-w-lg mx-auto">
            Nouvelles adresses, nouveaux appartements — chaque semaine.
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a href={socials.instagram.url} target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm">
              Instagram · {socials.instagram.handle}
            </a>
            <a href={socials.tiktok.url} target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm">
              TikTok · {socials.tiktok.handle}
            </a>
            <a href={socials.youtube.url} target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm">
              YouTube · {socials.youtube.handle}
            </a>
          </div>
          <Link
            href="/appartements"
            className="inline-block bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Trouver mon appartement
          </Link>
        </section>
      </AnimatedSection>
    </>
  );
}
