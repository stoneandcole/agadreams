import { notFound } from "next/navigation";
import Link from "next/link";
import { places, getPlaceBySlug, getLinkedApartments } from "@/lib/data";
import { buildWhatsAppGenericUrl } from "@/lib/whatsapp";
import PhotoGallery from "@/components/apartments/PhotoGallery";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import ApartmentCard from "@/components/apartments/ApartmentCard";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);
  if (!place) return {};
  return {
    title: `${place.name} — AgaDream`,
    description: place.description,
    openGraph: {
      title: place.name,
      description: place.description,
      images: [{ url: place.images[0], width: 1200, height: 630 }],
    },
  };
}

const categoryLabel: Record<string, string> = {
  restaurant: "Restaurant",
  plage: "Plage",
  activite: "Activité",
  excursion: "Excursion",
  shopping: "Shopping",
  nightlife: "Nightlife",
};

export default async function PlaceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);
  if (!place) notFound();

  const linked = getLinkedApartments(slug);
  const waUrl = buildWhatsAppGenericUrl();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-stone-400 mb-6">
        <Link href="/" className="hover:text-terracotta-500 transition-colors">Accueil</Link>
        <span>/</span>
        <Link href="/explorer" className="hover:text-terracotta-500 transition-colors">Explorer</Link>
        <span>/</span>
        <span className="text-stone-600 truncate max-w-xs">{place.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <Badge color="ocean" className="mb-3">{categoryLabel[place.category]}</Badge>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-800 mb-2">{place.name}</h1>
        <p className="text-stone-500 mb-3">{place.neighborhood}</p>
        <StarRating rating={place.rating} />
      </div>

      {/* Photo gallery */}
      <PhotoGallery images={place.images} title={place.name} />

      {/* Video review */}
      {place.videoUrl && (
        <div className="rounded-2xl overflow-hidden aspect-video bg-stone-900 mb-10">
          <iframe
            src={place.videoUrl}
            title={`Review — ${place.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      )}

      {/* Description */}
      <p className="text-stone-600 text-lg leading-relaxed mb-10">{place.description}</p>

      {/* WhatsApp CTA */}
      <div className="bg-sand-50 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1">
          <p className="font-bold text-stone-800 mb-1">Vous voulez y aller ?</p>
          <p className="text-stone-500 text-sm">Contactez AgaDream pour organiser votre séjour autour de cette adresse.</p>
        </div>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold px-5 py-3 rounded-xl transition-colors whitespace-nowrap"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0" />
          Contacter AgaDream
        </a>
      </div>

      {/* Linked apartments */}
      {linked.length > 0 && (
        <section>
          <p className="text-terracotta-500 text-sm font-semibold uppercase tracking-wider mb-1">À deux pas</p>
          <h2 className="font-display text-2xl font-bold text-stone-800 mb-6">Appartements à proximité</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {linked.map((apt, i) => (
              <ApartmentCard key={apt.slug} apartment={apt} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
