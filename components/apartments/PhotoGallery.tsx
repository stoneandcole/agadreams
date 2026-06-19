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
  const [index, setIndex] = useState(-1);
  const preview = images.slice(0, 5);
  const remaining = images.length - 5;

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-72 sm:h-96 mb-8">
        {/* Main large image */}
        <div
          className="col-span-2 row-span-2 relative cursor-pointer group"
          onClick={() => setIndex(0)}
        >
          <Image
            src={preview[0]}
            alt={title}
            fill
            className="object-cover group-hover:brightness-90 transition-all"
            sizes="(max-width: 768px) 50vw, 40vw"
            priority
          />
        </div>

        {/* Smaller images */}
        {preview.slice(1).map((src, i) => (
          <div
            key={src}
            className="relative cursor-pointer group"
            onClick={() => setIndex(i + 1)}
          >
            <Image
              src={src}
              alt={`${title} ${i + 2}`}
              fill
              className="object-cover group-hover:brightness-90 transition-all"
              sizes="25vw"
            />
            {/* Overlay on last visible if more */}
            {i === 3 && remaining > 0 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-bold text-lg">+{remaining}</span>
              </div>
            )}
          </div>
        ))}

        {/* Show all button */}
        <button
          onClick={() => setIndex(0)}
          className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-stone-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow transition-colors hidden sm:block"
          style={{ position: "absolute" }}
        >
          Voir toutes les photos
        </button>
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </>
  );
}
