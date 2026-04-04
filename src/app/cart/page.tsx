"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice } =
    useCart();

  const shipping = totalPrice >= 50 ? 0 : 5.99;
  const tax = totalPrice * 0.08;
  const orderTotal = totalPrice + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="bg-cream min-h-screen">
        <div className="bg-gradient-to-r from-forest to-moss py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold text-white">Your Cart</h1>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="text-8xl mb-6">🛒</div>
          <h2 className="font-serif text-3xl font-bold text-forest mb-3">
            Your cart is empty
          </h2>
          <p className="text-stone-500 mb-8 text-lg max-w-md mx-auto">
            The land has so much to offer. Browse our collection of native herbs,
            nuts, and wild plants.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-2xl bg-moss px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-forest transition-all"
          >
            🌿 Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest to-moss py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-sage/70 mb-3">
            <span>Home</span> <span className="mx-2">/</span>
            <span className="text-white">Cart</span>
          </nav>
          <h1 className="font-serif text-4xl font-bold text-white mb-1">
            Your Cart
          </h1>
          <p className="text-sage/80">
            {totalItems} item{totalItems !== 1 ? "s" : ""} ready to checkout
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Clear cart */}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="text-sm text-stone-400 hover:text-red-500 transition-colors flex items-center gap-1"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear cart
              </button>
            </div>

            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm border border-stone-100"
              >
                {/* Image */}
                <Link href={`/shop/${product.id}`} className="flex-shrink-0">
                  <div className="relative h-24 w-24 rounded-xl overflow-hidden shadow-sm">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                </Link>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between min-w-0">
                  <div>
                    <Link
                      href={`/shop/${product.id}`}
                      className="font-serif font-bold text-forest hover:text-moss transition-colors text-base leading-snug line-clamp-1"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs italic text-stone-400">{product.scientificName}</p>
                    <p className="text-xs text-stone-500 mt-0.5">{product.unit}</p>
                  </div>

                  <div className="flex items-center justify-between mt-3 gap-3">
                    {/* Quantity */}
                    <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-2 py-1">
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        aria-label="Decrease"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-semibold text-forest">
                        {quantity}
                      </span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        aria-label="Increase"
                      >
                        +
                      </button>
                    </div>

                    {/* Price + remove */}
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-forest text-base">
                        ${(product.price * quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-stone-300 hover:text-red-400 transition-colors"
                        aria-label={`Remove ${product.name}`}
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue shopping */}
            <Link
              href="/shop"
              className="flex items-center gap-2 text-sm text-moss font-medium hover:underline mt-4"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl bg-white shadow-md border border-stone-100 overflow-hidden">
              <div className="bg-gradient-to-r from-forest to-moss p-5">
                <h2 className="font-serif text-xl font-bold text-white">Order Summary</h2>
              </div>
              <div className="p-5 space-y-3">
                {/* Line items */}
                <div className="space-y-2 text-sm">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex justify-between text-stone-600">
                      <span className="truncate max-w-[65%]">
                        {product.name} × {quantity}
                      </span>
                      <span className="font-medium text-forest">
                        ${(product.price * quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-stone-100 pt-3 space-y-2 text-sm">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-emerald-600 font-medium" : ""}>
                      {shipping === 0 ? "FREE 🎉" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-stone-400">
                      Add ${(50 - totalPrice).toFixed(2)} more for free shipping
                    </p>
                  )}
                  <div className="flex justify-between text-stone-600">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-3 flex justify-between">
                  <span className="font-bold text-forest text-base">Total</span>
                  <span className="font-bold text-forest text-xl">
                    ${orderTotal.toFixed(2)}
                  </span>
                </div>

                <button className="mt-4 w-full rounded-2xl bg-gold/90 py-3.5 text-base font-bold text-white shadow-md hover:bg-gold hover:shadow-lg transition-all">
                  Proceed to Checkout →
                </button>

                {/* Trust signals */}
                <div className="pt-3 grid grid-cols-2 gap-2 text-center">
                  {[
                    { icon: "🔒", label: "Secure Checkout" },
                    { icon: "💚", label: "Eco Packaging" },
                    { icon: "🔄", label: "Easy Returns" },
                    { icon: "📦", label: "Ships in 1–3 Days" },
                  ].map(({ icon, label }) => (
                    <div key={label} className="rounded-xl bg-stone-50 p-2 text-xs text-stone-500">
                      <div className="text-base">{icon}</div>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
