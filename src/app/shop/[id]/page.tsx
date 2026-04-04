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

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
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

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProductById(params.id);
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
            <div className="relative h-80 sm:h-[440px] rounded-3xl overflow-hidden shadow-xl">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
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
            </div>

            {/* Guarantee chips */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "🌿", label: "Wildcrafted" },
                { icon: "📦", label: "Free Shipping $50+" },
                { icon: "💚", label: "Satisfaction Guaranteed" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 rounded-xl bg-white border border-stone-100 p-3 text-center shadow-sm"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-xs text-stone-500 leading-snug">{label}</span>
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
              <div className="flex text-amber-400 text-lg">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < Math.round(product.rating) ? "★" : "☆"}
                  </span>
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
