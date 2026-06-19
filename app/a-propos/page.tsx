export const metadata = { title: "À propos — AgaDream" };

export default function AProposPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-terracotta-500 text-sm font-semibold uppercase tracking-wider mb-2">L&apos;influenceur</p>
      <h1 className="text-4xl font-bold text-stone-800 mb-6">Qui est AgaDream ?</h1>

      <div className="h-48 w-48 rounded-full bg-sand-200 flex items-center justify-center text-6xl mb-8 mx-auto">
        🎬
      </div>

      <div className="prose prose-stone max-w-none">
        <p className="text-stone-600 text-lg leading-relaxed mb-4">
          Agadir est ma ville. Depuis plusieurs années, je parcours les quartiers, les restaurants, les plages et les appartements de la région pour vous donner mon avis sincère — caméra au poing.
        </p>
        <p className="text-stone-600 text-lg leading-relaxed mb-4">
          AgaDream est né d&apos;un constat simple : trop de voyageurs réservent un appartement sans jamais voir la réalité. Les photos sont retouchées, les descriptions exagérées. Moi, je filme tout — le bon, le moins bon, et les petites pépites cachées.
        </p>
        <p className="text-stone-600 text-lg leading-relaxed">
          Chaque appartement sur ce site a été visité et filmé personnellement. Chaque restaurant, chaque plage, chaque activité recommandée — je l&apos;ai fait. C&apos;est ça, AgaDream.
        </p>
      </div>

      <div className="flex gap-4 mt-10">
        <a href="#" className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
          Instagram
        </a>
        <a href="#" className="border border-stone-300 text-stone-700 font-semibold px-6 py-3 rounded-full hover:bg-sand-100 transition-colors">
          YouTube
        </a>
        <a href="#" className="border border-stone-300 text-stone-700 font-semibold px-6 py-3 rounded-full hover:bg-sand-100 transition-colors">
          TikTok
        </a>
      </div>
    </div>
  );
}
