"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Product, categoryMeta } from "@/lib/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

function StarRow({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-3.5 w-3.5 ${i < full ? "text-amber-400" : "text-stone-200"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const meta = categoryMeta[product.category];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link href={`/shop/${product.id}`} className="group block">
      <article
        className={`card-hover relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-md border border-stone-100 h-full ${
          !product.inStock ? "opacity-70" : ""
        }`}
      >
        {/* Image / Gradient area */}
        <div className="relative h-60 overflow-hidden flex-shrink-0">
          {/* Gradient layer (visible as fallback) */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-90`}
          />
          {/* Photo on top */}
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Subtle dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className={`badge ${meta.bg} ${meta.color} shadow-sm`}>
              {meta.emoji} {meta.label}
            </span>
          </div>

          {/* Featured tag */}
          {product.featured && (
            <div className="absolute top-3 right-3">
              <span className="badge bg-gold/90 text-white shadow-sm">
                ✨ Featured
              </span>
            </div>
          )}

          {/* Out of stock badge (replaces full overlay) */}
          {!product.inStock && (
            <div className="absolute bottom-3 left-3">
              <span className="rounded-full bg-stone-800/80 text-white px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                Out of Stock
              </span>
            </div>
          )}

          {/* Botanical facts peek strip — slides up on hover */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <div className="bg-black/60 backdrop-blur-sm px-3 py-2">
              <p className="text-white text-xs leading-snug line-clamp-2">
                🔬 {product.scientificBenefits[0]}
              </p>
            </div>
          </div>
        </div>

        {/* Left accent bar */}
        <div
          className={`absolute left-0 top-60 bottom-0 w-1 bg-gradient-to-b ${product.gradient} opacity-60`}
        />

        {/* Body */}
        <div className="flex flex-1 flex-col p-4 pl-5">
          {/* Name & Scientific */}
          <h3 className="font-serif text-lg font-bold text-forest leading-snug group-hover:text-moss transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-xs text-stone-400 italic mt-0.5">
            {product.scientificName}
          </p>

          {/* Origin chip */}
          <p className="mt-1.5 text-xs text-stone-500 flex items-center gap-1">
            <span>📍</span>
            <span className="line-clamp-1">{product.origin}</span>
          </p>

          {/* Region tag */}
          {product.regions && product.regions.length > 0 && (
            <p className="mt-1 text-xs text-stone-400 flex items-center gap-1">
              <span>🗺</span>
              <span className="line-clamp-1">{product.regions[0]}</span>
            </p>
          )}

          {/* Short description */}
          <p className="mt-2 text-sm text-stone-600 leading-relaxed line-clamp-2 flex-1">
            {product.shortDescription}
          </p>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-1.5">
            <StarRow rating={product.rating} />
            <span className="text-xs text-stone-500">
              {product.rating.toFixed(1)} ({product.reviews})
            </span>
          </div>

          {/* Price + Add to Cart */}
          <div className="mt-4 flex items-center justify-between gap-2">
            <div>
              <span className="text-xl font-bold text-forest">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xs text-stone-400 ml-1">
                / {product.unit}
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold shadow-sm transition-all duration-200 ${
                !product.inStock
                  ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                  : added
                  ? "bg-emerald-500 text-white scale-95"
                  : "bg-moss text-white hover:bg-forest"
              }`}
            >
              {added ? (
                <>✓ Added</>
              ) : !product.inStock ? (
                <>Notify</>
              ) : (
                <>
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add
                </>
              )}
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}
