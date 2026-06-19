import { notFound } from "next/navigation";
import Link from "next/link";
import { apartments, getApartmentBySlug, getSimilarApartments } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import PhotoGallery from "@/components/apartments/PhotoGallery";
import PlaceCard from "@/components/places/PlaceCard";
import ApartmentCard from "@/components/apartments/ApartmentCard";
import Badge from "@/components/ui/Badge";
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

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
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-2">{apt.title}</h1>
        <p className="text-stone-500">
          {apt.bedrooms} chambre{apt.bedrooms > 1 ? "s" : ""} · {apt.bathrooms} salle{apt.bathrooms > 1 ? "s" : ""} de bain · {apt.capacity} personnes max.
        </p>
      </div>

      {/* Photo gallery */}
      <PhotoGallery images={apt.images} title={apt.title} />

      {/* Video review */}
      <div className="rounded-2xl overflow-hidden aspect-video bg-stone-900 mb-10">
        <iframe
          src={apt.videoUrl}
          title={`Visite vidéo — ${apt.title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Description + amenities */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-stone-800 mb-3">À propos de cet appartement</h2>
          <p className="text-stone-600 leading-relaxed mb-8 text-base">{apt.description}</p>

          <h2 className="text-xl font-bold text-stone-800 mb-3">Équipements</h2>
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
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
          <h2 className="text-2xl font-bold text-stone-800 mb-6">À découvrir à proximité</h2>
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
          <h2 className="text-2xl font-bold text-stone-800 mb-6">Appartements similaires</h2>
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
