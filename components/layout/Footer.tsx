import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-white font-bold text-lg">AgaDream</span>
          <p className="mt-2 text-sm leading-relaxed">
            Les meilleurs appartements à Agadir, sélectionnés et filmés par l&apos;influenceur AgaDream.
          </p>
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/appartements" className="hover:text-terracotta-400 transition-colors">Appartements</Link></li>
            <li><Link href="/explorer" className="hover:text-terracotta-400 transition-colors">Explorer Agadir</Link></li>
            <li><Link href="/a-propos" className="hover:text-terracotta-400 transition-colors">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-terracotta-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Suivre AgaDream</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-terracotta-400 transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-terracotta-400 transition-colors">TikTok</a></li>
            <li><a href="#" className="hover:text-terracotta-400 transition-colors">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-stone-800 text-xs text-center">
        © {new Date().getFullYear()} AgaDream. Tous droits réservés.
      </div>
    </footer>
  );
}
