import { places } from "@/lib/data";
import ExplorerClient from "./ExplorerClient";

export const metadata = {
  title: "Explorer Agadir — AgaDream",
  description: "Restaurants, plages, activités et excursions testés et approuvés par AgaDream — retrouvez les videos reviews sur chaque fiche.",
};

export default function ExplorerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <p className="eyebrow mb-2">Mes adresses</p>
        <h1 className="font-display text-4xl font-bold text-stone-800">Explorer Agadir & la région</h1>
        <p className="text-stone-500 mt-3 max-w-xl">
          Restaurants, plages, activités et excursions testés et approuvés. Retrouvez mes vidéos reviews sur chaque fiche.
        </p>
      </div>

      <ExplorerClient places={places} />
    </div>
  );
}
