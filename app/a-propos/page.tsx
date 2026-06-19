import Image from "next/image";
import Link from "next/link";
import { socials, influencer } from "@/lib/data";

export const metadata = { title: "À propos — AgaDream" };

export default function AProposPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-terracotta-500 text-sm font-semibold uppercase tracking-wider mb-2">L&apos;influenceur</p>
      <h1 className="font-display text-4xl font-bold text-stone-800 mb-10">Qui est AgaDream ?</h1>

      {/* Logo */}
      <div className="flex justify-center mb-10">
        <div className="relative w-56 h-56">
          <Image
            src="/logo.jpg"
            alt="AgaDream"
            fill
            className="object-contain"
            sizes="224px"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {influencer.stats.map((s) => (
          <div key={s.label} className="bg-sand-50 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-terracotta-600">{s.value}</p>
            <p className="text-stone-500 text-xs mt-1 leading-tight">{s.label}</p>
          </div>
        ))}
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

      <div className="flex flex-wrap gap-4 mt-10">
        <a href={socials.instagram.url} target="_blank" rel="noopener noreferrer"
          className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
          Instagram · {socials.instagram.handle}
        </a>
        <a href={socials.tiktok.url} target="_blank" rel="noopener noreferrer"
          className="border border-stone-300 text-stone-700 font-semibold px-6 py-3 rounded-full hover:bg-sand-100 transition-colors">
          TikTok · {socials.tiktok.handle}
        </a>
        <a href={socials.youtube.url} target="_blank" rel="noopener noreferrer"
          className="border border-stone-300 text-stone-700 font-semibold px-6 py-3 rounded-full hover:bg-sand-100 transition-colors">
          YouTube · {socials.youtube.handle}
        </a>
      </div>

      <div className="mt-12 pt-8 border-t border-sand-200">
        <Link href="/appartements" className="text-terracotta-600 font-semibold hover:underline">
          ← Voir les appartements sélectionnés
        </Link>
      </div>
    </div>
  );
}
