"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const links = [
  { href: "/appartements", label: "Appartements" },
  { href: "/explorer", label: "Explorer Agadir" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => { onClose(); }, [pathname, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-sand-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-sand-200">
          <span className="text-lg font-bold text-terracotta-600">AgaDream</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-sand-200 transition-colors"
            aria-label="Fermer le menu"
          >
            <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-4 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                pathname.startsWith(l.href)
                  ? "bg-terracotta-50 text-terracotta-600"
                  : "text-stone-700 hover:bg-sand-200"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="px-6">
          <Link
            href="/contact"
            className="block w-full text-center bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold px-4 py-3 rounded-full transition-colors"
          >
            Réserver
          </Link>
        </div>

        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="flex justify-center gap-6 text-stone-400 text-sm">
            <a href="#" className="hover:text-terracotta-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-terracotta-500 transition-colors">TikTok</a>
            <a href="#" className="hover:text-terracotta-500 transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </>
  );
}
