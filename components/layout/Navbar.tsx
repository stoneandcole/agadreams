"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { buildWhatsAppGenericUrl } from "@/lib/whatsapp";

const links = [
  { href: "/appartements", label: "Appartements" },
  { href: "/explorer", label: "Explorer Agadir" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-sand-50/90 backdrop-blur border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpg" alt="AgaDream" width={120} height={40} className="h-10 w-auto object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  pathname.startsWith(l.href)
                    ? "text-terracotta-600"
                    : "text-stone-600 hover:text-terracotta-600"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppGenericUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20b858] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              Réserver
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-sand-200 transition-colors"
              aria-label="Ouvrir le menu"
            >
              <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
