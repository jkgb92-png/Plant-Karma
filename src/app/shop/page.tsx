"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, Category, categoryMeta, featuredProducts, getProductById } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Stable "Plant of the Day" — picks based on day of year so it doesn't change on re-render
const dayIndex = Math.floor(Date.now() / 86_400_000) % featuredProducts.length;
const plantOfTheDay = featuredProducts[dayIndex];
const moringa = getProductById("moringa");

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
      {/* ── Full-bleed Hero Banner ── */}
      <div className="relative overflow-hidden">
        {/* Background plant photo */}
        <div className="absolute inset-0">
          <Image
            src={moringa?.image.replace("w=600", "w=1400") ?? "https://images.unsplash.com/photo-1518531933037-4dbf045f1842?w=1400&auto=format&fit=crop&q=80"}
            alt={moringa?.imageAlt ?? "Moringa plant"}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/75 to-moss/60" />
        </div>

        {/* Hero content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-white/60 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Shop</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            The Plant Karma Shop
          </h1>
          <p className="text-sage/90 text-lg max-w-xl mb-6">
            {products.length} native plants, thoughtfully sourced and ready to enrich your life.
          </p>
          <div className="flex flex-wrap gap-3">
            {["🌿 Wildcrafted", "🔬 Science-Backed", "♻️ Zero-Waste", "🤲 Ethically Harvested"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-8 items-start">
          {/* ── Main content ── */}
          <div className="flex-1 min-w-0">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <div className="text-7xl mb-4 animate-sway inline-block">🌱</div>
                <h3 className="font-serif text-2xl font-bold text-forest mb-2">
                  No plants found
                </h3>
                <p className="text-stone-500 max-w-sm mx-auto mb-2">
                  Try a different search term or browse a different category.
                </p>
                <p className="text-stone-400 text-sm max-w-sm mx-auto mb-6">
                  Explore{" "}
                  {Object.values(categoryMeta)
                    .map((m) => m.label)
                    .join(", ")}{" "}
                  — each with their own extraordinary plants.
                </p>
                <button
                  onClick={() => { setSearch(""); setActiveCategory("all"); }}
                  className="rounded-full bg-moss text-white px-5 py-2 text-sm font-semibold hover:bg-forest transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* ── Plant of the Day sidebar (desktop only) ── */}
          <aside className="hidden xl:block w-64 flex-shrink-0 sticky top-24">
            <div className="rounded-3xl overflow-hidden bg-white shadow-md border border-stone-100">
              <div className="relative h-44">
                <div className={`absolute inset-0 bg-gradient-to-br ${plantOfTheDay.gradient}`} />
                <Image
                  src={plantOfTheDay.image}
                  alt={plantOfTheDay.name}
                  fill
                  className="object-cover"
                  sizes="256px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="badge bg-gold/90 text-white text-[10px] shadow">
                    🌟 Plant of the Day
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-serif font-bold text-sm leading-snug">
                    {plantOfTheDay.name}
                  </p>
                  <p className="text-white/70 text-xs italic">
                    {plantOfTheDay.scientificName}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-stone-500 italic mb-3 leading-relaxed">
                  &ldquo;{plantOfTheDay.tagline}&rdquo;
                </p>
                <div className="bg-mint/40 rounded-xl p-3 mb-3">
                  <p className="text-[10px] font-bold text-moss uppercase tracking-wide mb-1">
                    🔬 Key Benefit
                  </p>
                  <p className="text-xs text-stone-700 leading-relaxed line-clamp-3">
                    {plantOfTheDay.highlights[1]}
                  </p>
                </div>
                <Link
                  href={`/shop/${plantOfTheDay.id}`}
                  className="block w-full text-center rounded-xl bg-moss text-white text-xs font-semibold py-2.5 hover:bg-forest transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </aside>
        </div>
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
