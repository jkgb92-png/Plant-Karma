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
  identificationGuide: string;
  lookalikes: { name: string; warning: string }[];
}

export default function ProductTabs({
  tabs,
  description,
  spiritualUses,
  scientificBenefits,
  howToUse,
  origin,
  identificationGuide,
  lookalikes,
}: ProductTabsProps) {
  const [active, setActive] = useState(tabs[0].id);

  // Split how-to-use into steps by sentence boundaries
  const howToSteps = howToUse
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  // Split description: first sentence (up to ". ") becomes the pull-quote
  const splitMarker = ". ";
  const firstPeriodIdx = description.indexOf(splitMarker);
  const pullQuote =
    firstPeriodIdx > 0 ? description.slice(0, firstPeriodIdx + 1) : "";
  const restDescription =
    firstPeriodIdx > 0
      ? description.slice(firstPeriodIdx + splitMarker.length)
      : description;

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
        {/* ── Description ── */}
        {active === "description" && (
          <div>
            {/* Origin chip */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-mint/60 border border-emerald-200 px-3 py-1 text-xs text-moss font-medium mb-5">
              📍 Sourced from: {origin}
            </div>

            {/* Pull-quote for first sentence */}
            {pullQuote && (
              <blockquote className="border-l-4 border-moss pl-4 mb-4">
                <p className="font-serif text-lg italic text-forest leading-relaxed">
                  &ldquo;{pullQuote}&rdquo;
                </p>
              </blockquote>
            )}

            {/* Drop cap + rest of description */}
            <p className="text-stone-600 leading-relaxed text-[15px] first-letter:float-left first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-moss first-letter:mr-2 first-letter:mt-1 first-letter:leading-none">
              {restDescription}
            </p>
          </div>
        )}

        {/* ── Spiritual Uses ── */}
        {active === "spiritual" && (
          <div className="grid sm:grid-cols-2 gap-4">
            {spiritualUses.map((use, i) => (
              <div
                key={i}
                className="rounded-xl bg-mint/30 border border-emerald-100 p-4 flex flex-col gap-2"
              >
                <span className="text-2xl">✨</span>
                <p className="text-stone-700 leading-relaxed text-[14px]">
                  {use}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* ── Scientific Benefits ── */}
        {active === "science" && (
          <ul className="space-y-0 divide-y divide-stone-100">
            {scientificBenefits.map((benefit, i) => (
              <li key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <span className="flex-shrink-0 mt-0.5 h-8 w-8 rounded-full bg-moss text-white text-sm flex items-center justify-center font-bold shadow-sm">
                  {i + 1}
                </span>
                <p className="text-stone-600 leading-relaxed text-[15px] pt-1">
                  {benefit}
                </p>
              </li>
            ))}
          </ul>
        )}

        {/* ── How to Use ── */}
        {active === "howtouse" && (
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🫖</span>
              <h4 className="font-serif text-lg font-bold text-forest">
                Preparation &amp; Use
              </h4>
            </div>
            <ol className="space-y-4">
              {howToSteps.map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 h-8 w-8 rounded-full bg-mint border-2 border-moss/30 text-moss text-sm flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <p className="text-stone-600 leading-relaxed text-[15px] pt-1">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}
        {/* ── Identify ── */}
        {active === "identify" && (
          <div className="space-y-6">
            {/* Visual ID guide */}
            <div className="rounded-2xl bg-mint/40 border border-emerald-100 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔍</span>
                <h4 className="font-serif text-lg font-bold text-forest">
                  How to Identify This Plant
                </h4>
              </div>
              <p className="text-stone-600 leading-relaxed text-[15px]">
                {identificationGuide}
              </p>
            </div>

            {/* Lookalikes */}
            {lookalikes.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚠️</span>
                  <h4 className="font-serif text-base font-bold text-amber-800">
                    Lookalike Warning{lookalikes.length > 1 ? "s" : ""}
                  </h4>
                </div>
                {lookalikes.map((item, i) => {
                  const isDangerous =
                    item.warning.toUpperCase().includes("DEADLY") ||
                    item.warning.toUpperCase().includes("DANGEROUS") ||
                    item.warning.toUpperCase().includes("TOXIC");
                  return (
                    <div
                      key={i}
                      className={`rounded-xl border-l-4 p-4 ${
                        isDangerous
                          ? "bg-red-50 border-red-500"
                          : "bg-amber-50 border-amber-400"
                      }`}
                    >
                      <p
                        className={`text-sm font-bold mb-1 ${
                          isDangerous ? "text-red-700" : "text-amber-800"
                        }`}
                      >
                        {isDangerous ? "⛔" : "⚠️"} {item.name}
                      </p>
                      <p
                        className={`text-sm leading-relaxed ${
                          isDangerous ? "text-red-600" : "text-amber-700"
                        }`}
                      >
                        {item.warning}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {lookalikes.length === 0 && (
              <div className="rounded-xl bg-stone-50 border border-stone-200 p-4 flex items-center gap-3">
                <span className="text-xl">✅</span>
                <p className="text-sm text-stone-500">
                  No known dangerous lookalikes for this plant in North America.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
