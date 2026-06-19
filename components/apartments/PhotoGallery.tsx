"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  images: string[];
  title: string;
}

export default function PhotoGallery({ images, title }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [mobileIndex, setMobileIndex] = useState(0);

  return (
    <>
      {/* ── Mobile: full-width swipeable + thumbnail strip ── */}
      <div className="sm:hidden mb-6">
        <div
          className="relative aspect-video rounded-2xl overflow-hidden bg-sand-200 cursor-pointer mb-2"
          onClick={() => setLightboxIndex(mobileIndex)}
        >
          <Image
            src={images[mobileIndex]}
            alt={`${title} — photo ${mobileIndex + 1}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority={mobileIndex === 0}
          />
          <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            {mobileIndex + 1} / {images.length}
          </div>
        </div>
        {/* Thumbnail strip */}
        <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setMobileIndex(i)}
              className={`relative shrink-0 w-16 h-16 rounded-xl overflow-hidden snap-start transition-all ${
                i === mobileIndex ? "ring-2 ring-terracotta-500" : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={src} alt={`${title} ${i + 1}`} fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      </div>

      {/* ── Desktop: mosaic grid ── */}
      <div className="hidden sm:grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-80 lg:h-96 mb-8">
        {/* Main large image */}
        <div className="col-span-2 row-span-2 relative cursor-pointer group" onClick={() => setLightboxIndex(0)}>
          <Image src={images[0]} alt={title} fill className="object-cover group-hover:brightness-90 transition-all" sizes="40vw" priority />
        </div>
        {/* Smaller thumbnails */}
        {images.slice(1, 5).map((src, i) => (
          <div key={src} className="relative cursor-pointer group" onClick={() => setLightboxIndex(i + 1)}>
            <Image src={src} alt={`${title} ${i + 2}`} fill className="object-cover group-hover:brightness-90 transition-all" sizes="20vw" />
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-bold text-lg">+{images.length - 5}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={images.map((src) => ({ src }))}
      />
    </>
  );
}
