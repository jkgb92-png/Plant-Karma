"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <span className="font-serif text-xl font-bold tracking-wide">
                Plant Karma
              </span>
            </div>
            <p className="text-sm text-sage/80 leading-relaxed">
              Bringing you the finest native herbs, nuts, wild weeds, and
              vegetables — ethically harvested from our local land.
            </p>
            <div className="mt-4 flex gap-3">
              {["🌱", "🌻", "🍃", "🌾"].map((emoji, i) => (
                <span
                  key={i}
                  className="text-lg opacity-70 hover:opacity-100 transition-opacity cursor-default"
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Shop
            </h3>
            <ul className="space-y-2 text-sm text-sage/80">
              {[
                { href: "/shop", label: "All Products" },
                { href: "/shop?category=herb", label: "Herbs" },
                { href: "/shop?category=nut", label: "Nuts" },
                { href: "/shop?category=weed", label: "Wild Weeds" },
                { href: "/shop?category=vegetable", label: "Vegetables" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Learn
            </h3>
            <ul className="space-y-2 text-sm text-sage/80">
              {[
                "Foraging Guides",
                "Herbal Preparations",
                "Spiritual Plant Use",
                "Scientific Research",
                "Seasonal Calendars",
              ].map((item) => (
                <li key={item}>
                  <span className="cursor-default hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Stay Connected
            </h3>
            <p className="text-sm text-sage/80 mb-3 leading-relaxed">
              Seasonal harvest updates, foraging wisdom, and exclusive offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white placeholder-sage/60 border border-white/20 focus:outline-none focus:border-sage transition-colors"
              />
              <button
                type="submit"
                className="rounded-lg bg-gold/90 px-4 py-2 text-sm font-semibold text-white hover:bg-gold transition-colors"
              >
                Subscribe 🌿
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#102b1f]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-sage/60">
          <span>© {new Date().getFullYear()} Plant Karma. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Grown with <span className="text-red-400">♥</span> for the land
          </span>
        </div>
      </div>
    </footer>
  );
}
