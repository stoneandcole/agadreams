import { notFound } from "next/navigation";
import { places, getPlaceBySlug } from "@/lib/data";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);
  if (!place) return {};
  return { title: `${place.name} — AgaDream` };
}

const categoryLabel: Record<string, string> = {
  restaurant: "Restaurant",
  plage: "Plage",
  activite: "Activité",
  excursion: "Excursion",
  shopping: "Shopping",
  nightlife: "Nightlife",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-xl">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-terracotta-500" : "text-stone-200"}>★</span>
      ))}
    </div>
  );
}

export default async function PlaceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);
  if (!place) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-ocean-600 text-sm font-semibold uppercase tracking-wider mb-1">
        {categoryLabel[place.category]}
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-2">{place.name}</h1>
      <p className="text-stone-500 mb-4">{place.neighborhood}</p>
      <StarRating rating={place.rating} />

      {/* Video review */}
      {place.videoUrl && (
        <div className="rounded-2xl overflow-hidden aspect-video bg-stone-900 my-8">
          <iframe
            src={place.videoUrl}
            title={`Review — ${place.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}

      {/* Image placeholder */}
      {!place.videoUrl && (
        <div className="my-8 rounded-2xl h-64 bg-ocean-100 flex items-center justify-center text-6xl">
          🏖️
        </div>
      )}

      <p className="text-stone-600 text-lg leading-relaxed">{place.description}</p>
    </div>
  );
}
