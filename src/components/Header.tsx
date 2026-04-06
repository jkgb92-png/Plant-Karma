"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/shop?category=herb", label: "Herbs" },
    { href: "/shop?category=weed", label: "Wild Weeds" },
    { href: "/shop?category=nut", label: "Nuts" },
    { href: "/shop?category=vegetable", label: "Vegetables" },
    { href: "/shop?category=fruit", label: "Fruits" },
    { href: "/regions", label: "Regions" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("?")[0]);

  return (
    <header className="sticky top-0 z-50 bg-forest/95 backdrop-blur-md shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Plant Karma Home"
          >
            <span className="text-2xl group-hover:animate-sway inline-block transition-transform">
              🌿
            </span>
            <div className="leading-none">
              <span className="font-serif text-xl font-bold text-white tracking-wide">
                Plant Karma
              </span>
              <span className="block text-[10px] text-sage/80 uppercase tracking-widest">
                Nature&apos;s Local Bounty
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(href)
                    ? "bg-sage/20 text-white"
                    : "text-sage/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Cart + Mobile menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative flex items-center gap-1.5 rounded-full bg-gold/90 px-4 py-1.5 text-sm font-semibold text-white shadow transition hover:bg-gold hover:shadow-md"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1 p-2 rounded text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-forest/98 px-4 pb-4 pt-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium mb-1 transition-colors ${
                isActive(href)
                  ? "bg-sage/20 text-white"
                  : "text-sage/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
