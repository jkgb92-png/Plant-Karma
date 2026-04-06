# 🌿 Plant Karma

**Plant Karma** is an online store offering native herbs, nuts, wild weeds, and vegetables sourced locally. Every listing features accurate descriptions, high-quality photos, information on spiritual uses, scientific benefits, and a purchase option.

## Features

- 🛍️ **Shop** — Browse 15+ native plants filtered by category (Herbs, Nuts, Wild Weeds, Vegetables)
- 📄 **Detailed Listings** — Each product includes:
  - Accurate botanical description
  - Spiritual / traditional uses
  - Scientific benefits with research citations
  - "How to Use" preparation guide
- 🛒 **Cart** — Add items, adjust quantities, and proceed to checkout
- 📱 **Responsive** — Beautiful on mobile, tablet, and desktop

## Current Stock

Only **Moringa (Miracle Tree)** and **Soap Nuts** are currently in stock. All other listings are shown with an "Out of Stock" overlay.

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [@fontsource](https://fontsource.org) — Playfair Display & Inter (self-hosted)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the store.

## Build

```bash
npm run build   # static export → out/
```

## GitHub Pages Deployment

The site is automatically deployed to [https://jkgb92-png.github.io/Plant-Karma/](https://jkgb92-png.github.io/Plant-Karma/) on every push to the `main` branch via GitHub Actions.

**How it works:**

1. The workflow in `.github/workflows/deploy.yml` runs `npm ci && npm run build`.
2. Next.js outputs a fully static site into the `out/` directory (configured via `output: "export"` in `next.config.mjs`).
3. The `out/` folder is uploaded as a Pages artifact and deployed via `actions/deploy-pages`.

**Base path configuration:**

Because the site lives under the `/Plant-Karma/` sub-path, `next.config.mjs` sets:

```js
basePath: "/Plant-Karma/"
assetPrefix: "/Plant-Karma/"
```

These are applied automatically when `NODE_ENV=production` (i.e., during `npm run build`), so local development on `http://localhost:3000` is unaffected.

**GitHub Pages settings required:**

In **Settings → Pages**, set **Source** to **GitHub Actions** (not "Deploy from a branch"). The workflow handles the rest.
