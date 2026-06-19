import { buildWhatsAppGenericUrl } from "@/lib/whatsapp";
import { socials as socialLinks } from "@/lib/data";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export const metadata = { title: "Contact — AgaDream" };

const socials = [
  { name: "Instagram", handle: socialLinks.instagram.handle, href: socialLinks.instagram.url, color: "bg-gradient-to-br from-purple-500 to-pink-500" },
  { name: "TikTok",    handle: socialLinks.tiktok.handle,    href: socialLinks.tiktok.url,    color: "bg-black" },
  { name: "YouTube",   handle: socialLinks.youtube.handle,   href: socialLinks.youtube.url,   color: "bg-red-600" },
];

export default function ContactPage() {
  const waUrl = buildWhatsAppGenericUrl();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-terracotta-500 text-sm font-semibold uppercase tracking-wider mb-2">Parlons-en</p>
      <h1 className="font-display text-4xl font-bold text-stone-800 mb-3">Contactez AgaDream</h1>
      <p className="text-stone-500 text-lg mb-12 max-w-md">
        Une question sur un appartement ? Envie de réserver ? Je réponds personnellement via WhatsApp sous 24h.
      </p>

      {/* WhatsApp CTA — primary */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-[#25D366] hover:bg-[#20b858] text-white rounded-2xl p-6 mb-4 transition-colors group"
      >
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
          <WhatsAppIcon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-lg leading-tight">Écrire sur WhatsApp</p>
          <p className="text-white/80 text-sm">Réponse sous 24h · Message pré-rempli</p>
        </div>
        <svg className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>

      {/* Divider */}
      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-px bg-sand-200" />
        <span className="text-stone-400 text-sm">ou retrouvez-moi sur</span>
        <div className="flex-1 h-px bg-sand-200" />
      </div>

      {/* Social links */}
      <div className="flex flex-col gap-3">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white border border-sand-200 hover:border-stone-300 rounded-2xl p-4 transition-colors group"
          >
            <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center shrink-0`}>
              <span className="text-white text-xs font-bold">{s.name[0]}</span>
            </div>
            <div>
              <p className="font-semibold text-stone-800">{s.name}</p>
              <p className="text-stone-400 text-sm">{s.handle}</p>
            </div>
            <svg className="w-4 h-4 text-stone-300 ml-auto group-hover:text-stone-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
