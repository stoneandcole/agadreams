"use client";

import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface Props {
  price: number;
  waUrl: string;
}

export default function MobileBookingBar({ price, waUrl }: Props) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-sand-200 px-4 py-3 flex items-center justify-between gap-4">
      <div>
        <p className="text-xs text-stone-400 leading-none mb-0.5">À partir de</p>
        <p className="font-bold text-stone-800">
          {price.toLocaleString("fr-FR")} MAD
          <span className="text-stone-400 font-normal text-xs"> / nuit</span>
        </p>
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
      >
        <WhatsAppIcon className="w-4 h-4 shrink-0" />
        Réserver WhatsApp
      </a>
    </div>
  );
}
