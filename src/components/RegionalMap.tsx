"use client";

import { products } from "@/lib/products";

const REGIONS = [
  "Pacific Northwest",
  "West Coast",
  "Southwest",
  "Rocky Mountains",
  "Great Plains",
  "Midwest",
  "Southeast",
  "Northeast",
] as const;

type Region = (typeof REGIONS)[number];

const regionConfig: Record<
  Region,
  { emoji: string; color: string; bgColor: string; description: string }
> = {
  "Pacific Northwest": {
    emoji: "🌲",
    color: "text-emerald-900",
    bgColor: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200",
    description: "Rainforests, ferns & coastal herbs",
  },
  "West Coast": {
    emoji: "🌊",
    color: "text-cyan-900",
    bgColor: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200",
    description: "Sun-drenched chaparral & coastal sage",
  },
  Southwest: {
    emoji: "🌵",
    color: "text-orange-900",
    bgColor: "bg-orange-50 hover:bg-orange-100 border-orange-200",
    description: "Desert medicine & arid land plants",
  },
  "Rocky Mountains": {
    emoji: "⛰️",
    color: "text-stone-900",
    bgColor: "bg-stone-50 hover:bg-stone-100 border-stone-200",
    description: "Alpine wildflowers & mountain herbs",
  },
  "Great Plains": {
    emoji: "🌾",
    color: "text-amber-900",
    bgColor: "bg-amber-50 hover:bg-amber-100 border-amber-200",
    description: "Prairie medicine & wind-swept grasses",
  },
  Midwest: {
    emoji: "🌻",
    color: "text-yellow-900",
    bgColor: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200",
    description: "Woodland edges & rich bottomland",
  },
  Southeast: {
    emoji: "🌴",
    color: "text-green-900",
    bgColor: "bg-green-50 hover:bg-green-100 border-green-200",
    description: "Subtropical natives & swamp herbs",
  },
  Northeast: {
    emoji: "🍂",
    color: "text-red-900",
    bgColor: "bg-red-50 hover:bg-red-100 border-red-200",
    description: "Deciduous forest gems & hedgerow plants",
  },
};

// Approximate geographic grid layout (row, col) for each region
const regionGrid: Record<Region, { row: number; col: number }> = {
  "Pacific Northwest": { row: 0, col: 0 },
  "West Coast": { row: 1, col: 0 },
  Southwest: { row: 2, col: 0 },
  "Rocky Mountains": { row: 0, col: 1 },
  "Great Plains": { row: 1, col: 1 },
  Midwest: { row: 2, col: 1 },
  Northeast: { row: 0, col: 2 },
  Southeast: { row: 1, col: 2 },
};

interface RegionalMapProps {
  selectedRegion: string | null;
  onRegionSelect: (region: string) => void;
}

export default function RegionalMap({
  selectedRegion,
  onRegionSelect,
}: RegionalMapProps) {
  const plantCountByRegion = Object.fromEntries(
    REGIONS.map((r) => [
      r,
      products.filter((p) => p.regions.includes(r)).length,
    ])
  );

  return (
    <div className="w-full">
      {/* Title row */}
      <p className="text-center text-stone-500 text-sm mb-6">
        Click a region to explore its native plants
      </p>

      {/* Grid map */}
      <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto">
        {REGIONS.map((region) => {
          const { row, col } = regionGrid[region];
          const cfg = regionConfig[region];
          const count = plantCountByRegion[region] ?? 0;
          const isActive = selectedRegion === region;

          return (
            <button
              key={region}
              onClick={() => onRegionSelect(region)}
              style={{ gridRow: row + 1, gridColumn: col + 1 }}
              className={`relative rounded-2xl border-2 p-4 text-left transition-all duration-200 ${cfg.bgColor} ${
                isActive
                  ? "ring-2 ring-moss ring-offset-2 border-moss shadow-lg scale-[1.02]"
                  : "border-stone-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              {/* Plant count badge */}
              <span className="absolute top-3 right-3 rounded-full bg-moss/90 text-white text-[10px] font-bold px-2 py-0.5 shadow">
                {count} plants
              </span>

              <span className="text-3xl mb-2 block">{cfg.emoji}</span>
              <h3 className={`font-serif font-bold text-sm leading-snug mb-1 ${cfg.color}`}>
                {region}
              </h3>
              <p className="text-[11px] text-stone-500 leading-snug hidden sm:block">
                {cfg.description}
              </p>

              {isActive && (
                <span className="mt-2 block text-[10px] font-semibold text-moss uppercase tracking-wide">
                  ✓ Selected
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Decorative leaf watermarks */}
      <div className="pointer-events-none select-none text-center mt-4 opacity-20 text-4xl">
        🍃
      </div>
    </div>
  );
}
