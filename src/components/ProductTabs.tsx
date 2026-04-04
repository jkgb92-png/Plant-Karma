"use client";

import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  emoji: string;
}

interface ProductTabsProps {
  tabs: Tab[];
  description: string;
  spiritualUses: string[];
  scientificBenefits: string[];
  howToUse: string;
  origin: string;
}

export default function ProductTabs({
  tabs,
  description,
  spiritualUses,
  scientificBenefits,
  howToUse,
  origin,
}: ProductTabsProps) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <>
      {/* Tab buttons */}
      <div className="flex border-b border-stone-100 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex-shrink-0 flex items-center gap-1.5 px-5 py-4 text-sm font-medium border-b-2 transition-all duration-200 ${
              active === tab.id
                ? "border-moss text-moss"
                : "border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300"
            }`}
          >
            <span>{tab.emoji}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-6 sm:p-8">
        {active === "description" && (
          <div>
            <p className="text-stone-600 leading-relaxed text-[15px]">{description}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-stone-500">
              <span>📍</span>
              <span>
                <strong className="text-stone-700">Origin:</strong> {origin}
              </span>
            </div>
          </div>
        )}

        {active === "spiritual" && (
          <ul className="space-y-4">
            {spiritualUses.map((use, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 text-xl flex-shrink-0">✨</span>
                <p className="text-stone-600 leading-relaxed text-[15px]">{use}</p>
              </li>
            ))}
          </ul>
        )}

        {active === "science" && (
          <ul className="space-y-4">
            {scientificBenefits.map((benefit, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <p className="text-stone-600 leading-relaxed text-[15px]">{benefit}</p>
              </li>
            ))}
          </ul>
        )}

        {active === "howtouse" && (
          <div className="rounded-2xl bg-mint/40 border border-emerald-100 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🫖</span>
              <h4 className="font-semibold text-forest">Preparation &amp; Use</h4>
            </div>
            <p className="text-stone-600 leading-relaxed text-[15px]">{howToUse}</p>
          </div>
        )}
      </div>
    </>
  );
}
