"use client";

import { ApartmentFilters as Filters } from "@/lib/data";

interface Props {
  filters: Filters;
  onChange: (f: Filters) => void;
  zones: string[];
  maxPrice: number;
  resultCount: number;
}

export default function ApartmentFilters({ filters, onChange, zones, maxPrice, resultCount }: Props) {
  function set(partial: Partial<Filters>) {
    onChange({ ...filters, ...partial });
  }

  function reset() {
    onChange({});
  }

  const hasActive = !!(filters.zone || filters.maxPrice || filters.minBedrooms);

  return (
    <div className="bg-white rounded-2xl border border-sand-200 p-5 mb-8">
      <div className="flex flex-wrap items-center gap-4">

        {/* Zone */}
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

        {/* Budget */}
        <div className="flex flex-col gap-1 flex-1 min-w-[180px]">
          <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
            Budget max : {filters.maxPrice ? `${filters.maxPrice.toLocaleString("fr-FR")} MAD` : "Illimité"}
          </label>
          <input
            type="range"
            min={200}
            max={maxPrice}
            step={100}
            value={filters.maxPrice ?? maxPrice}
            onChange={(e) => set({ maxPrice: Number(e.target.value) === maxPrice ? undefined : Number(e.target.value) })}
            className="accent-terracotta-500 w-full"
          />
          <div className="flex justify-between text-xs text-stone-400">
            <span>200 MAD</span>
            <span>{maxPrice.toLocaleString("fr-FR")} MAD</span>
          </div>
        </div>

        {/* Chambres */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Chambres min.</label>
          <div className="flex gap-1">
            {[undefined, 1, 2, 3, 4].map((n) => (
              <button
                key={n ?? "all"}
                onClick={() => set({ minBedrooms: n })}
                className={`w-9 h-9 rounded-xl text-sm font-semibold transition-colors ${
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

        {/* Result count + reset */}
        <div className="ml-auto flex items-center gap-3">
          <span className="text-sm text-stone-500">
            <span className="font-bold text-stone-800">{resultCount}</span> appartement{resultCount !== 1 ? "s" : ""}
          </span>
          {hasActive && (
            <button
              onClick={reset}
              className="text-xs text-terracotta-600 hover:underline font-medium"
            >
              Réinitialiser
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
