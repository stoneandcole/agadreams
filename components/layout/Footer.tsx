import Link from "next/link";
import Image from "next/image";
import { socials } from "@/lib/data";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { buildWhatsAppGenericUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image src="/logo.jpg" alt="AgaDream" width={140} height={48} className="h-12 w-auto object-contain brightness-0 invert" />
          <p className="mt-2 text-sm leading-relaxed">
            Les meilleurs appartements à Agadir, sélectionnés et filmés par l&apos;influenceur AgaDream.
          </p>
          <a
            href={buildWhatsAppGenericUrl()}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-[#25D366] hover:bg-[#20b858] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Nous contacter
          </a>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/appartements", label: "Appartements" },
              { href: "/explorer",     label: "Explorer Agadir" },
              { href: "/a-propos",     label: "À propos" },
              { href: "/contact",      label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-terracotta-400 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Suivre AgaDream</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={socials.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-400 transition-colors">
                Instagram · {socials.instagram.handle}
              </a>
            </li>
            <li>
              <a href={socials.tiktok.url} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-400 transition-colors">
                TikTok · {socials.tiktok.handle}
              </a>
            </li>
            <li>
              <a href={socials.youtube.url} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-400 transition-colors">
                YouTube · {socials.youtube.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-stone-800 text-xs text-center">
        © {new Date().getFullYear()} AgaDream. Tous droits réservés.
      </div>
    </footer>
  );
}
