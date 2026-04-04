import type { Metadata } from "next";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/inter";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Plant Karma — Nature's Local Bounty",
    template: "%s | Plant Karma",
  },
  description:
    "An online store offering native herbs, nuts, wild weeds, and vegetables sourced locally. Detailed listings with descriptions, spiritual uses, scientific benefits, and a purchase option.",
  keywords: [
    "native herbs",
    "wild plants",
    "moringa",
    "soap nuts",
    "dandelion",
    "nettle",
    "herbal store",
    "wildcrafted",
    "plant medicine",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream font-sans antialiased flex flex-col min-h-screen">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
