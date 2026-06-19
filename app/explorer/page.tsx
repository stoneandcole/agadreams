import { places } from "@/lib/data";
import PlaceCard from "@/components/places/PlaceCard";
import { PlaceCategory } from "@/types";

export const metadata = { title: "Explorer Agadir — AgaDream" };

const categoryLabel: Record<PlaceCategory, string> = {
  restaurant: "Restaurants",
  plage: "Plages",
  activite: "Activités",
  excursion: "Excursions",
  shopping: "Shopping",
  nightlife: "Nightlife",
};

const categories = Object.keys(categoryLabel) as PlaceCategory[];

export default function ExplorerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <p className="text-terracotta-500 text-sm font-semibold uppercase tracking-wider mb-2">Mes adresses</p>
        <h1 className="text-4xl font-bold text-stone-800">Explorer Agadir & la région</h1>
        <p className="text-stone-500 mt-3 max-w-xl">
          Restaurants, plages, activités et excursions testés et approuvés. Retrouvez mes vidéos reviews sur chaque fiche.
        </p>
      </div>

      {categories.map((cat) => {
        const items = places.filter((p) => p.category === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className="mb-14">
            <h2 className="text-xl font-bold text-stone-700 mb-5">{categoryLabel[cat]}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {items.map((place) => (
                <PlaceCard key={place.slug} place={place} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
