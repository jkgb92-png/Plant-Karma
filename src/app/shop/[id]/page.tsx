import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  products,
  getProductById,
  categoryMeta,
  getProductsByCategory,
} from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import ProductTabs from "@/components/ProductTabs";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product Not Found | Plant Karma" };
  return {
    title: `${product.name} | Plant Karma`,
    description: product.shortDescription,
  };
}

const tabDefs = [
  { id: "description", label: "Description", emoji: "📖" },
  { id: "spiritual", label: "Spiritual Uses", emoji: "🔮" },
  { id: "science", label: "Scientific Benefits", emoji: "🔬" },
  { id: "howtouse", label: "How to Use", emoji: "🫖" },
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const meta = categoryMeta[product.category];
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-stone-500 flex-wrap">
          <Link href="/" className="hover:text-moss transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-moss transition-colors">
            Shop
          </Link>
          <span>/</span>
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-moss transition-colors"
          >
            {meta.label}
          </Link>
          <span>/</span>
          <span className="text-forest font-medium">{product.name}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* ── Left: Image ── */}
          <div className="space-y-4">
            <div className="relative h-[360px] sm:h-[520px] rounded-3xl overflow-hidden shadow-xl">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`}
              />
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Richer bottom-to-middle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                <span className={`badge ${meta.bg} ${meta.color} shadow`}>
                  {meta.emoji} {meta.label}
                </span>
                {product.featured && (
                  <span className="badge bg-gold/90 text-white shadow">
                    ✨ Featured
                  </span>
                )}
              </div>
              {/* Big emoji centered at bottom */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none select-none">
                <span className="text-7xl opacity-80 drop-shadow-lg">
                  {product.emoji}
                </span>
              </div>
            </div>

            {/* Botanical stat ribbon */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {[
                { icon: "📍", label: "Origin", value: product.origin },
                { icon: meta.emoji, label: "Category", value: meta.label },
                { icon: "⭐", label: "Rating", value: `${product.rating.toFixed(1)} (${product.reviews})` },
                { icon: "📦", label: "Unit", value: product.unit },
                { icon: product.inStock ? "✅" : "❌", label: "Stock", value: product.inStock ? "In Stock" : "Out of Stock" },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 rounded-xl bg-white border border-stone-100 px-2 py-3 text-center shadow-sm"
                >
                  <span className="text-lg">{icon}</span>
                  <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wide">{label}</span>
                  <span className="text-xs text-stone-700 font-medium leading-tight line-clamp-2 w-full">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Details ── */}
          <div className="flex flex-col">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest leading-snug mb-1">
              {product.name}
            </h1>
            <p className="text-sm italic text-stone-400 mb-4">
              {product.scientificName}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${i < Math.round(product.rating) ? "text-amber-400" : "text-stone-200"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-stone-700">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-sm text-stone-400">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Short description */}
            <p className="text-stone-600 leading-relaxed mb-5 text-[15px]">
              {product.shortDescription}
            </p>

            {/* Plant Profile Quick Facts */}
            <div className="mb-5 rounded-2xl bg-mint/50 border-l-4 border-moss p-4">
              <h3 className="text-xs font-bold text-moss uppercase tracking-widest mb-3">
                🌿 Plant Profile — Quick Facts
              </h3>
              <div className="space-y-2.5">
                <div>
                  <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wide mb-1">
                    ✨ Spiritual Highlight
                  </p>
                  <p className="text-sm text-stone-700 leading-snug">
                    {product.highlights[0]}
                  </p>
                </div>
                <div className="border-t border-emerald-200 pt-2.5">
                  <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wide mb-1">
                    🔬 Science Highlight
                  </p>
                  <p className="text-sm text-stone-700 leading-snug">
                    {product.highlights[1]}
                  </p>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-serif text-3xl font-bold text-forest">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-stone-400 text-sm">/ {product.unit}</span>
            </div>
            <p className="text-xs text-stone-400 mb-6">
              📍 Sourced from: {product.origin}
            </p>

            {/* Add to cart (client component) */}
            <AddToCartButton product={product} />

            {/* Info chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "🌱 Native Species",
                "🚫 No Synthetics",
                "✅ Third-Party Tested",
                product.inStock ? "✅ In Stock" : "❌ Out of Stock",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="mt-14 rounded-3xl bg-white shadow-sm border border-stone-100 overflow-hidden">
          <ProductTabs
            tabs={tabDefs}
            description={product.description}
            spiritualUses={product.spiritualUses}
            scientificBenefits={product.scientificBenefits}
            howToUse={product.howToUse}
            origin={product.origin}
          />
        </div>

        {/* ── Related Products ── */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-2xl font-bold text-forest mb-6">
              More {meta.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
