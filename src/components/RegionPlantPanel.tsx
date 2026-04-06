import Link from "next/link";
import Image from "next/image";
import { Product, categoryMeta } from "@/lib/products";

interface RegionPlantPanelProps {
  region: string;
  plants: Product[];
}

export default function RegionPlantPanel({
  region,
  plants,
}: RegionPlantPanelProps) {
  if (!region) return null;

  return (
    <div className="mt-8 rounded-3xl bg-white border border-stone-100 shadow-md p-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <h2 className="font-serif text-2xl font-bold text-forest">
            Plants of the {region}
          </h2>
          <p className="text-stone-500 text-sm mt-1">
            {plants.length} native or cultivated plant
            {plants.length !== 1 ? "s" : ""} found in this region
          </p>
        </div>
        <Link
          href={`/shop?region=${encodeURIComponent(region)}`}
          className="inline-flex items-center gap-2 rounded-full border-2 border-moss px-4 py-1.5 text-sm font-semibold text-moss hover:bg-moss hover:text-white transition-all"
        >
          View All in Shop →
        </Link>
      </div>

      {plants.length === 0 ? (
        <p className="text-stone-400 text-center py-8">
          No plants recorded for this region yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {plants.map((plant) => {
            const meta = categoryMeta[plant.category];
            return (
              <Link
                key={plant.id}
                href={`/shop/${plant.id}`}
                className="group block rounded-2xl overflow-hidden border border-stone-100 bg-stone-50 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                {/* Image */}
                <div className="relative h-28 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plant.gradient} opacity-80`}
                  />
                  <Image
                    src={plant.image}
                    alt={plant.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  {/* Category badge */}
                  <div className="absolute top-1.5 left-1.5">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${meta.bg} ${meta.color} shadow-sm`}
                    >
                      {meta.emoji} {meta.label}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-2.5">
                  <p className="font-serif text-xs font-bold text-forest leading-snug line-clamp-2 group-hover:text-moss transition-colors">
                    {plant.name}
                  </p>
                  <p className="text-[10px] text-stone-400 italic mt-0.5 line-clamp-1">
                    {plant.scientificName}
                  </p>
                  <p className="text-[10px] font-bold text-moss mt-1">
                    ${plant.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
