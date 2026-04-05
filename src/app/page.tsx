import Link from "next/link";
import Image from "next/image";
import { featuredProducts, categoryMeta, products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import PlantShowcase from "@/components/PlantShowcase";

export default function HomePage() {
  const categories = Object.entries(categoryMeta) as [
    keyof typeof categoryMeta,
    (typeof categoryMeta)[keyof typeof categoryMeta],
  ][];

  const stats = [
    { value: "15+", label: "Native Species" },
    { value: "100%", label: "Locally Sourced" },
    { value: "0", label: "Synthetics" },
    { value: "∞", label: "Earth Karma" },
  ];

  const promises = [
    {
      icon: "🌍",
      title: "Locally Sourced",
      text: "Every plant is grown or wildcrafted within our bioregion, supporting local land stewards.",
    },
    {
      icon: "🤲",
      title: "Ethically Harvested",
      text: "We take only what the land can give, leaving ecosystems intact for future generations.",
    },
    {
      icon: "🔬",
      title: "Science-Backed",
      text: "Each listing includes peer-reviewed research so you can shop with confidence.",
    },
    {
      icon: "✨",
      title: "Spiritually Informed",
      text: "Traditional and sacred uses are documented with respect for ancestral knowledge.",
    },
  ];

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-forest via-moss to-[#52b788]">
        {/* Decorative shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-gold/10 blur-2xl" />
          <div className="absolute top-1/3 -left-10 h-80 w-80 rounded-full bg-sage/10 blur-3xl" />
          {["🌿", "🌱", "🍃", "🌾", "🌻", "🌼"].map((emoji, i) => (
            <span
              key={i}
              className="absolute opacity-10 animate-sway select-none"
              style={{
                top: `${10 + i * 14}%`,
                left: `${5 + i * 15}%`,
                animationDelay: `${i * 0.7}s`,
                fontSize: `${2 + (i % 3)}rem`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm text-sage/90 mb-6 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              Now Harvesting · Spring Collection 2026
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance">
              Nature&apos;s{" "}
              <span className="text-gold italic">Bounty,</span>
              <br />
              Locally Sourced
            </h1>

            <p className="text-lg text-sage/90 leading-relaxed max-w-lg mb-8">
              Discover the healing power of native herbs, wild weeds, foraged
              nuts, and forgotten vegetables — each one ethically harvested from
              local land and steeped in centuries of wisdom.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-2xl bg-gold/90 px-7 py-3.5 text-base font-bold text-white shadow-lg hover:bg-gold hover:shadow-xl transition-all"
              >
                Explore the Shop
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all"
              >
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-4 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-serif text-2xl font-bold text-gold">{value}</div>
                  <div className="text-xs text-sage/80 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image collage */}
          <div className="hidden lg:block relative h-[520px]">
            <div className="absolute top-0 right-0 h-80 w-64 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/20">
              <Image
                src="https://images.unsplash.com/photo-1518531933037-4dbf045f1842?w=400&auto=format&fit=crop&q=80"
                alt="Native herbs"
                fill
                className="object-cover"
                sizes="256px"
                priority
              />
            </div>
            <div className="absolute bottom-10 left-0 h-72 w-56 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/20">
              <Image
                src="https://images.unsplash.com/photo-1508674861872-a51e06c50c9b?w=400&auto=format&fit=crop&q=80"
                alt="Foraged nuts"
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
            <div className="absolute top-1/4 left-1/4 h-64 w-52 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/20">
              <Image
                src="https://images.unsplash.com/photo-1531217040651-e7a8f6bde316?w=400&auto=format&fit=crop&q=80"
                alt="Wild dandelion"
                fill
                className="object-cover"
                sizes="208px"
              />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#faf7f0" />
          </svg>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-forest mb-3">What We Offer</h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Four categories of extraordinary plants — each with a story, a science, and a spirit.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map(([key, meta]) => (
              <Link
                key={key}
                href={`/shop?category=${key}`}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${
                    key === "herb"
                      ? "from-emerald-700 to-emerald-500"
                      : key === "nut"
                      ? "from-amber-700 to-amber-500"
                      : key === "weed"
                      ? "from-lime-700 to-lime-500"
                      : "from-teal-700 to-teal-500"
                  } p-6 flex flex-col justify-between`}
                >
                  <span className="text-5xl">{meta.emoji}</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">{meta.label}</h3>
                    <p className="text-white/70 text-xs mt-1 leading-snug hidden sm:block">{meta.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold group-hover:bg-white/40 transition-colors">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plant Showcase ── */}
      <PlantShowcase />

      {/* ── Featured Products ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <h2 className="font-serif text-4xl font-bold text-forest mb-2">Featured Plants</h2>
              <p className="text-stone-500">Hand-picked stars of the current harvest season.</p>
            </div>
            <Link
              href="/shop"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-full border-2 border-moss px-5 py-2 text-sm font-semibold text-moss hover:bg-moss hover:text-white transition-all"
            >
              View All {products.length} Plants
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="py-24 bg-gradient-to-br from-forest to-moss">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Story</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-snug mb-6">
              Rooted in the Land,<br />
              <em className="text-sage not-italic">Grown with Purpose</em>
            </h2>
            <p className="text-sage/80 leading-relaxed mb-4">
              Plant Karma was born from a simple belief: the most powerful medicine grows within walking distance.
              Our local ecosystem is teeming with plants that have fed, healed, and inspired humans for thousands of
              years — long before the supplement industry existed.
            </p>
            <p className="text-sage/80 leading-relaxed mb-6">
              We work directly with local foragers, small-scale farmers, and land stewards who deeply understand the
              seasonal rhythms of our bioregion. Every plant we carry is harvested with respect for the ecosystem,
              packaged with care, and accompanied by the full story of its uses — scientific, culinary, and spiritual.
            </p>
            <div className="flex flex-wrap gap-3">
              {["🌍 Locally Sourced", "🌿 Wildcrafted", "🔬 Lab-Tested", "♻️ Zero-Waste Packaging"].map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm text-white">{tag}</span>
              ))}
            </div>
          </div>
          <div className="relative h-96 lg:h-[480px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&auto=format&fit=crop&q=80"
                alt="Foraging in the local landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur p-4 shadow-xl">
              <p className="font-serif text-sm italic text-forest leading-relaxed">
                &ldquo;The earth is a living library. Plant Karma is just a card catalogue.&rdquo;
              </p>
              <p className="text-xs text-stone-500 mt-1.5">— Plant Karma Philosophy</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Promise ── */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-forest mb-3">The Plant Karma Promise</h2>
            <p className="text-stone-500 max-w-xl mx-auto">Every product embodies our core commitments to land, community, and wellbeing.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map(({ icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="font-serif text-lg font-bold text-forest mb-2">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-gold/90">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Ready to Plant Your Karma?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Browse our full collection of locally sourced, ethically harvested native plants.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-bold text-forest shadow-lg hover:bg-cream hover:shadow-xl transition-all"
          >
            🌿 Shop All Plants
          </Link>
        </div>
      </section>
    </div>
  );
}
