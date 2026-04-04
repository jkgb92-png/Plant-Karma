"use client";

import { useState, useMemo } from "react";
import { products, Category, categoryMeta } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as Category | null;
  const [activeCategory, setActiveCategory] = useState<Category | "all">(
    initialCategory && categoryMeta[initialCategory] ? initialCategory : "all"
  );
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.scientificName.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }
    switch (sortBy) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "rating":
        return list.sort((a, b) => b.rating - a.rating);
      default:
        return list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [activeCategory, sortBy, search]);

  const tabs = [
    { key: "all" as const, label: "All Plants", emoji: "🌏", count: products.length },
    ...Object.entries(categoryMeta).map(([key, meta]) => ({
      key: key as Category,
      label: meta.label,
      emoji: meta.emoji,
      count: products.filter((p) => p.category === key).length,
    })),
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Page header */}
      <div className="bg-gradient-to-r from-forest to-moss py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-sage/70 mb-3">
            <span>Home</span> <span className="mx-2">/</span>
            <span className="text-white">Shop</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">
            The Plant Karma Shop
          </h1>
          <p className="text-sage/80 text-lg max-w-xl">
            {products.length} native plants, thoughtfully sourced and ready to enrich your life.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              placeholder="Search plants, scientific names…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-stone-200 bg-white pl-10 pr-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-moss/40 shadow-sm"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-moss/40 shadow-sm cursor-pointer"
          >
            <option value="featured">Sort: Featured First</option>
            <option value="price-asc">Sort: Price Low → High</option>
            <option value="price-desc">Sort: Price High → Low</option>
            <option value="rating">Sort: Top Rated</option>
          </select>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(({ key, label, emoji, count }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all border ${
                activeCategory === key
                  ? "bg-moss text-white border-moss shadow-md"
                  : "bg-white text-stone-600 border-stone-200 hover:border-moss hover:text-moss"
              }`}
            >
              <span>{emoji}</span>
              <span>{label}</span>
              <span
                className={`text-xs rounded-full px-1.5 py-0.5 ${
                  activeCategory === key ? "bg-white/20" : "bg-stone-100"
                }`}
              >
                {count}
              </span>
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-stone-500 mb-6">
          {filtered.length === 0
            ? "No plants found."
            : `Showing ${filtered.length} plant${filtered.length !== 1 ? "s" : ""}`}
          {search && ` for "${search}"`}
        </p>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="font-serif text-2xl font-bold text-forest mb-2">No plants found</h3>
            <p className="text-stone-500">Try a different search term or category.</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("all"); }}
              className="mt-4 rounded-full bg-moss text-white px-5 py-2 text-sm font-semibold hover:bg-forest transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream flex items-center justify-center text-stone-500">Loading shop…</div>}>
      <ShopContent />
    </Suspense>
  );
}
