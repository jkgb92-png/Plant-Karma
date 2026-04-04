"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Product, categoryMeta } from "@/lib/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
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
      <article className="card-hover relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-md border border-stone-100 h-full">
        {/* Image / Gradient area */}
        <div className="relative h-52 overflow-hidden">
          {/* Gradient layer (visible as fallback) */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-90`}
          />
          {/* Photo on top */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Subtle dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

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

          {/* Emoji watermark */}
          <div className="absolute bottom-3 right-4 text-4xl opacity-30 select-none">
            {product.emoji}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-4">
          {/* Name & Scientific */}
          <h3 className="font-serif text-lg font-bold text-forest leading-snug group-hover:text-moss transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-stone-400 italic mt-0.5">
            {product.scientificName}
          </p>

          {/* Short description */}
          <p className="mt-2 text-sm text-stone-600 leading-relaxed line-clamp-2 flex-1">
            {product.shortDescription}
          </p>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-1.5">
            <div className="flex text-amber-400 text-xs">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                  {i < Math.round(product.rating) ? "★" : "☆"}
                </span>
              ))}
            </div>
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
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold shadow-sm transition-all duration-200 ${
                added
                  ? "bg-emerald-500 text-white scale-95"
                  : "bg-moss text-white hover:bg-forest"
              }`}
            >
              {added ? (
                <>✓ Added</>
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

        {/* Stock indicator */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded-2xl">
            <span className="bg-stone-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </article>
    </Link>
  );
}
