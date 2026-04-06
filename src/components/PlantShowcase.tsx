"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function PlantShowcase() {
  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl font-bold text-forest mb-3">
            🌿 Meet the Plants
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Every leaf, root, and berry has a story. Swipe through our entire
            collection and discover what nature has to offer.
          </p>
          <div className="botanical-border mt-6 mx-auto max-w-sm" />
        </div>

        {/* Horizontal scroll carousel */}
        <div
          className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin"
          style={{ scrollbarColor: "#52b788 #f1f1f1" }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="group flex-shrink-0 w-64 sm:w-72 snap-start"
            >
              <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5">
                {/* Gradient fallback */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`}
                />
                {/* Plant photo */}
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 256px, 288px"
                />
                {/* Persistent bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Static bottom info (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 group-hover:-translate-y-20 transition-transform duration-300 ease-out">
                  <p className="text-white/70 text-xs italic mb-0.5">
                    {product.scientificName}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-white leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-white/80 text-xs mt-1 line-clamp-1">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Hover info panel — slides up from bottom */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <div className="bg-forest/95 backdrop-blur-sm p-4 rounded-b-3xl">
                    <p className="text-sage text-xs font-semibold uppercase tracking-wide mb-1.5">
                      Top Benefit
                    </p>
                    <p className="text-white/90 text-xs leading-relaxed line-clamp-3">
                      {product.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-gold text-xs font-semibold">
                      Discover →
                    </span>
                  </div>
                </div>

                {/* Top badges */}
                {product.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="badge bg-gold/90 text-white shadow-sm text-[10px]">
                      ✨ Featured
                    </span>
                  </div>
                )}
                {product.inStock && (
                  <div className="absolute top-3 left-3">
                    <span className="badge bg-emerald-500/90 text-white shadow-sm text-[10px]">
                      In Stock
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full border-2 border-moss px-6 py-2.5 text-sm font-semibold text-moss hover:bg-moss hover:text-white transition-all"
          >
            View All {products.length} Plants
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
