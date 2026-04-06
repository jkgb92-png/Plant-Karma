"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import RegionalMap from "@/components/RegionalMap";
import RegionPlantPanel from "@/components/RegionPlantPanel";

export default function RegionsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regionPlants = selectedRegion
    ? products.filter((p) => p.regions.includes(selectedRegion))
    : [];

  return (
    <div className="bg-cream min-h-screen">
      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest via-moss to-[#52b788]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-gold/10 blur-2xl" />
          {["🌿", "🍃", "🌱", "🌾"].map((e, i) => (
            <span
              key={i}
              className="absolute opacity-10 animate-sway select-none"
              style={{
                top: `${15 + i * 20}%`,
                left: `${5 + i * 22}%`,
                animationDelay: `${i * 0.8}s`,
                fontSize: "2.5rem",
              }}
            >
              {e}
            </span>
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm text-sage/90 mb-6 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            {products.length} Plants Across 8 Regions
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Where Plants{" "}
            <span className="text-gold italic">Grow</span>
          </h1>
          <p className="text-sage/80 text-lg max-w-2xl mx-auto">
            Explore native ranges and regional habitats of every plant in our
            catalog. Select a region to discover what grows there.
          </p>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z"
              fill="#faf7f0"
            />
          </svg>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Interactive Map */}
        <RegionalMap
          selectedRegion={selectedRegion}
          onRegionSelect={(region) =>
            setSelectedRegion(selectedRegion === region ? null : region)
          }
        />

        {/* Plant Panel */}
        {selectedRegion && (
          <RegionPlantPanel region={selectedRegion} plants={regionPlants} />
        )}

        {/* Hint when nothing selected */}
        {!selectedRegion && (
          <div className="mt-10 text-center text-stone-400 text-sm">
            <span className="text-2xl block mb-2">🗺️</span>
            Select a region above to see which plants grow there
          </div>
        )}
      </div>
    </div>
  );
}
