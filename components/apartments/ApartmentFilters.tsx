"use client";

import { useState } from "react";
import { ApartmentFilters as Filters } from "@/lib/data";

interface Props {
  filters: Filters;
  onChange: (f: Filters) => void;
  zones: string[];
  maxPrice: number;
  resultCount: number;
}

export default function ApartmentFilters({ filters, onChange, zones, maxPrice, resultCount }: Props) {
  const [sheetOpen, setSheetOpen] = useState(false);

  function set(partial: Partial<Filters>) { onChange({ ...filters, ...partial }); }
  function reset() { onChange({}); }

  const activeCount = [filters.zone, filters.maxPrice, filters.minBedrooms].filter(Boolean).length;
  const hasActive = activeCount > 0;

  const FilterControls = () => (
    <div className="flex flex-col gap-5">
      {/* Zone */}
      <div>
        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Zone</label>
        <select
          value={filters.zone ?? ""}
          onChange={(e) => set({ zone: e.target.value || undefined })}
          className="w-full border border-sand-300 rounded-xl px-3 py-3 text-sm text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-terracotta-300"
        >
          <option value="">Toutes les zones</option>
          {zones.map((z) => <option key={z} value={z}>{z}</option>)}
        </select>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
          Budget max : {filters.maxPrice ? `${filters.maxPrice.toLocaleString("fr-FR")} MAD` : "Illimité"}
        </label>
        <input
          type="range" min={200} max={maxPrice} step={100}
          value={filters.maxPrice ?? maxPrice}
          onChange={(e) => set({ maxPrice: Number(e.target.value) === maxPrice ? undefined : Number(e.target.value) })}
          className="accent-terracotta-500 w-full h-2"
        />
        <div className="flex justify-between text-xs text-stone-400 mt-1">
          <span>200 MAD</span><span>{maxPrice.toLocaleString("fr-FR")} MAD</span>
        </div>
      </div>

      {/* Chambres */}
      <div>
        <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Chambres min.</label>
        <div className="flex gap-2">
          {([undefined, 1, 2, 3, 4] as (number | undefined)[]).map((n) => (
            <button
              key={n ?? "all"}
              onClick={() => set({ minBedrooms: n })}
              className={`min-w-[44px] h-11 rounded-xl text-sm font-semibold transition-colors ${
                filters.minBedrooms === n
                  ? "bg-terracotta-500 text-white"
                  : "bg-sand-100 text-stone-600 hover:bg-sand-200"
              }`}
            >
              {n ?? "∞"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ── Mobile: filter button → bottom sheet ── */}
      <div className="md:hidden mb-6 flex items-center gap-3">
        <button
          onClick={() => setSheetOpen(true)}
          className="flex items-center gap-2 border border-sand-300 bg-white rounded-xl px-4 h-11 text-sm font-medium text-stone-700 hover:bg-sand-100 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M6 8h12M9 12h6M12 16h0" />
          </svg>
          Filtres
          {hasActive && (
            <span className="bg-terracotta-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {activeCount}
            </span>
          )}
        </button>
        <span className="text-sm text-stone-500">
          <span className="font-bold text-stone-800">{resultCount}</span> appartement{resultCount !== 1 ? "s" : ""}
        </span>
        {hasActive && (
          <button onClick={reset} className="text-xs text-terracotta-600 hover:underline font-medium ml-auto">
            Réinitialiser
          </button>
        )}
      </div>

      {/* Bottom sheet */}
      {sheetOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setSheetOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl p-6 md:hidden shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-stone-800 text-base">Filtres</h3>
              <button onClick={() => setSheetOpen(false)} className="p-2 hover:bg-sand-100 rounded-lg">
                <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <FilterControls />
            <div className="flex gap-3 mt-6">
              {hasActive && (
                <button onClick={() => { reset(); setSheetOpen(false); }}
                  className="flex-1 border border-stone-300 text-stone-700 font-semibold py-3 rounded-xl hover:bg-sand-100 transition-colors">
                  Réinitialiser
                </button>
              )}
              <button onClick={() => setSheetOpen(false)}
                className="flex-1 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold py-3 rounded-xl transition-colors">
                Voir {resultCount} résultat{resultCount !== 1 ? "s" : ""}
              </button>
            </div>
          </div>
        </>
      )}

      {/* ── Desktop: horizontal bar ── */}
      <div className="hidden md:block bg-white rounded-2xl border border-sand-200 p-5 mb-8">
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Zone</label>
            <select
              value={filters.zone ?? ""}
              onChange={(e) => set({ zone: e.target.value || undefined })}
              className="border border-sand-300 rounded-xl px-3 py-2 text-sm text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-terracotta-300 min-w-[140px]"
            >
              <option value="">Toutes les zones</option>
              {zones.map((z) => <option key={z} value={z}>{z}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
            <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Budget max : {filters.maxPrice ? `${filters.maxPrice.toLocaleString("fr-FR")} MAD` : "Illimité"}
            </label>
            <input
              type="range" min={200} max={maxPrice} step={100}
              value={filters.maxPrice ?? maxPrice}
              onChange={(e) => set({ maxPrice: Number(e.target.value) === maxPrice ? undefined : Number(e.target.value) })}
              className="accent-terracotta-500 w-full"
            />
            <div className="flex justify-between text-xs text-stone-400">
              <span>200 MAD</span><span>{maxPrice.toLocaleString("fr-FR")} MAD</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Chambres min.</label>
            <div className="flex gap-1">
              {([undefined, 1, 2, 3, 4] as (number | undefined)[]).map((n) => (
                <button
                  key={n ?? "all"}
                  onClick={() => set({ minBedrooms: n })}
                  className={`min-w-[44px] h-9 rounded-xl text-sm font-semibold transition-colors ${
                    filters.minBedrooms === n
                      ? "bg-terracotta-500 text-white"
                      : "bg-sand-100 text-stone-600 hover:bg-sand-200"
                  }`}
                >
                  {n ?? "∞"}
                </button>
              ))}
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <span className="text-sm text-stone-500">
              <span className="font-bold text-stone-800">{resultCount}</span> appartement{resultCount !== 1 ? "s" : ""}
            </span>
            {hasActive && (
              <button onClick={reset} className="text-xs text-terracotta-600 hover:underline font-medium">Réinitialiser</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
