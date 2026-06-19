import { notFound } from "next/navigation";
import Link from "next/link";
import { apartments, getApartmentBySlug, getSimilarApartments } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import PhotoGallery from "@/components/apartments/PhotoGallery";
import PlaceCard from "@/components/places/PlaceCard";
import ApartmentCard from "@/components/apartments/ApartmentCard";
import Badge from "@/components/ui/Badge";
import MobileBookingBar from "@/components/apartments/MobileBookingBar";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return apartments.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const apt = getApartmentBySlug(slug);
  if (!apt) return {};
  return {
    title: `${apt.title} — AgaDream`,
    description: apt.description,
    openGraph: {
      title: apt.title,
      description: apt.description,
      images: [{ url: apt.images[0], width: 1200, height: 630 }],
    },
  };
}

export default async function ApartmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const apt = getApartmentBySlug(slug);
  if (!apt) notFound();

  const similar = getSimilarApartments(slug);
  const waUrl = buildWhatsAppUrl(apt.title, apt.pricePerNight);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 lg:pb-8">
      <MobileBookingBar price={apt.pricePerNight} waUrl={waUrl} />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-terracotta-500 transition-colors">Accueil</Link>
        <span>/</span>
        <Link href="/appartements" className="hover:text-terracotta-500 transition-colors">Appartements</Link>
        <span>/</span>
        <span className="text-stone-600 truncate max-w-xs">{apt.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <Badge color="terracotta" className="mb-2">{apt.zone}</Badge>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-800 mb-2">{apt.title}</h1>
        <p className="text-stone-500">
          {apt.bedrooms} chambre{apt.bedrooms > 1 ? "s" : ""} · {apt.bathrooms} salle{apt.bathrooms > 1 ? "s" : ""} de bain · {apt.capacity} personnes max.
        </p>
      </div>

      {/* Photo gallery */}
      <PhotoGallery images={apt.images} title={apt.title} />

      {/* Video review */}
      <div className="mb-10">
        <p className="eyebrow mb-3">Visite vidéo</p>
        <div className="rounded-2xl overflow-hidden aspect-video bg-stone-900">
        <iframe
          src={apt.videoUrl}
          title={`Visite vidéo — ${apt.title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Description + amenities */}
        <div className="lg:col-span-2">
          <h2 className="font-display text-xl font-bold text-stone-800 mb-3">À propos de cet appartement</h2>
          <p className="text-stone-600 leading-relaxed mb-8 text-base">{apt.description}</p>

          <h2 className="font-display text-xl font-bold text-stone-800 mb-3">Équipements</h2>
          <div className="flex flex-wrap gap-2">
            {apt.amenities.map((a) => (
              <Badge key={a} color="sand">{a}</Badge>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 bg-white rounded-2xl shadow-lg p-6 border border-sand-200">
            <p className="text-stone-500 text-sm mb-1">À partir de</p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl font-bold text-stone-800">{apt.pricePerNight.toLocaleString("fr-FR")}</span>
              <span className="text-stone-400">MAD / nuit</span>
            </div>
            <p className="text-xs text-stone-400 mb-6">{apt.capacity} personnes · {apt.bedrooms} chambre{apt.bedrooms > 1 ? "s" : ""}</p>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20b858] text-white font-semibold py-3.5 rounded-xl transition-colors mb-3"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Réserver via WhatsApp
            </a>

            <p className="text-xs text-stone-400 text-center">Réponse sous 24h · Aucun engagement</p>
          </div>
        </div>
      </div>

      {/* Nearby places */}
      {apt.nearbyPlaces.length > 0 && (
        <section className="mt-16">
          <p className="text-terracotta-500 text-sm font-semibold uppercase tracking-wider mb-1">Mes coups de cœur</p>
          <h2 className="font-display text-2xl font-bold text-stone-800 mb-6">À découvrir à proximité</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {apt.nearbyPlaces.map((place, i) => (
              <PlaceCard key={place.slug} place={place} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Similar apartments */}
      {similar.length > 0 && (
        <section className="mt-16">
          <p className="text-terracotta-500 text-sm font-semibold uppercase tracking-wider mb-1">Vous aimerez aussi</p>
          <h2 className="font-display text-2xl font-bold text-stone-800 mb-6">Appartements similaires</h2>
          <div className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory">
            {similar.map((apt, i) => (
              <div key={apt.slug} className="min-w-[300px] snap-start">
                <ApartmentCard apartment={apt} index={i} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
