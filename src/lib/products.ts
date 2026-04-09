export type Category = "herb" | "nut" | "weed" | "vegetable" | "fruit";

export interface Product {
  id: string;
  name: string;
  scientificName: string;
  category: Category;
  price: number;
  unit: string;
  image: string;
  imageAlt: string;
  gradient: string; // fallback gradient when image doesn't load
  emoji: string;
  tagline: string; // short poetic 6–10 word hook
  highlights: [string, string]; // [top spiritual use, top scientific benefit]
  shortDescription: string;
  description: string;
  spiritualUses: string[];
  scientificBenefits: string[];
  howToUse: string;
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
  origin: string;
  regions: string[]; // US regions where this plant grows natively or is cultivated
}

export const products: Product[] = [
  // ── HERBS ──────────────────────────────────────────────
  {
    id: "moringa",
    name: "Moringa (Miracle Tree)",
    scientificName: "Moringa oleifera",
    category: "herb",
    price: 18.99,
    unit: "2 oz dried leaf",
    image:
      "https://images.unsplash.com/photo-1580822416068-a2a901d09068?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Fresh green moringa leaves on branch",
    gradient: "from-emerald-700 to-emerald-500",
    emoji: "🌿",
    tagline: "Ancient wisdom packed into every miraculous leaf.",
    highlights: [
      "Sacred sattvic food that balances the doshas and opens the heart chakra.",
      "Contains 7× more vitamin C than oranges and 4× more calcium than milk.",
    ],
    shortDescription:
      "The 'miracle tree' packed with essential nutrients and antioxidants.",
    description:
      "Moringa oleifera, often called the Miracle Tree or Drumstick Tree, is one of the most nutrient-dense plants ever discovered. Native to the foothills of the Himalayas and widely naturalized across tropical regions, every part of this tree — leaves, pods, seeds, roots, and bark — has been used for centuries in traditional medicine, culinary arts, and spiritual practice. Our moringa is hand-harvested from local trees at peak potency, shade-dried to preserve delicate phytonutrients, and carefully packaged to lock in freshness.",
    spiritualUses: [
      "Burned as incense to purify and elevate the energy of a space before ritual or meditation.",
      "Added to protective sachets and amulets in folk traditions to ward off negative influences.",
      "Used in blessings and cleansing baths to encourage new beginnings, vitality, and abundance.",
      "Sacred in Ayurvedic tradition as a sattvic (pure) food that balances the three doshas and opens the heart chakra.",
    ],
    scientificBenefits: [
      "Contains 7× more vitamin C than oranges and 4× more calcium than milk per gram.",
      "Rich in quercetin and chlorogenic acid — powerful antioxidants that may reduce chronic inflammation.",
      "Studies show it can lower fasting blood sugar levels, supporting metabolic health.",
      "Isothiocyanates in moringa demonstrate antibacterial and antifungal properties in laboratory research.",
      "High iron and folate content supports healthy red blood cell production.",
    ],
    howToUse:
      "Stir 1 tsp of dried leaf powder into smoothies, soups, or warm water with lemon and honey. Start with a small amount and increase gradually. Store in a cool, dark place.",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 128,
    origin: "Local Pacific Northwest farms",
    regions: ["Pacific Northwest", "West Coast", "Southeast"],
  },
  {
    id: "tulsi",
    name: "Holy Basil (Tulsi)",
    scientificName: "Ocimum tenuiflorum",
    category: "herb",
    price: 12.99,
    unit: "1.5 oz dried leaf",
    image:
      "https://images.unsplash.com/photo-1604137040022-90091705d053?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Holy basil tulsi plant with purple-green leaves",
    gradient: "from-emerald-700 to-lime-500",
    emoji: "🌱",
    tagline: "The incomparable queen of herbs and holy devotion.",
    highlights: [
      "A direct portal to the divine — revered in Hindu devotion for millennia.",
      "Classified as an adaptogen — clinically shown to lower cortisol and reduce anxiety.",
    ],
    shortDescription:
      "The Queen of Herbs — a revered adaptogen for body, mind, and spirit.",
    description:
      "Holy Basil, known as Tulsi in Sanskrit (meaning 'the incomparable one'), is perhaps the most sacred plant in the Hindu tradition and one of the most widely studied adaptogenic herbs in the world. Its complex aromatic profile — clove-like with sweet, peppery notes — reflects a rich chemistry that supports the nervous system, immune function, and emotional balance. We grow our Tulsi organically in small batches, harvesting just before flowering for maximum essential oil content.",
    spiritualUses: [
      "Considered the earthly manifestation of the goddess Tulsi (Vrinda) — a direct portal to the divine in Hindu devotion.",
      "Placed at home entrances and grown in courtyard shrines to bless the household and protect from illness.",
      "Burned in purification rituals to clear stagnant or harmful energies from a living space.",
      "Worn as wooden mala beads to calm the mind during japa (mantra meditation) and deepen spiritual awareness.",
    ],
    scientificBenefits: [
      "Classified as an adaptogen — clinical trials show it lowers cortisol and reduces stress-related anxiety.",
      "Contains eugenol, rosmarinic acid, and ursolic acid — compounds with strong anti-inflammatory effects.",
      "Demonstrated antiviral activity against several common respiratory pathogens in in-vitro studies.",
      "Supports healthy blood sugar regulation by improving insulin sensitivity in animal studies.",
      "Rich in vitamins A, C, K, and trace minerals including zinc, manganese, and copper.",
    ],
    howToUse:
      "Brew 1–2 tsp of dried leaves as a calming tea, steep 5–10 min. Excellent as an iced herbal blend or combined with ginger and honey for immune support.",
    inStock: false,
    featured: true,
    rating: 4.8,
    reviews: 97,
    origin: "Pacific Northwest greenhouse grown",
    regions: ["Pacific Northwest", "West Coast", "Southeast"],
  },
  {
    id: "rosemary",
    name: "Wild Rosemary",
    scientificName: "Salvia rosmarinus",
    category: "herb",
    price: 9.99,
    unit: "1 oz dried sprig",
    image:
      "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Wild rosemary sprigs with needle-like aromatic leaves",
    gradient: "from-teal-700 to-emerald-500",
    emoji: "🌾",
    tagline: "Memory, protection, and forest-edge fragrance distilled.",
    highlights: [
      "Symbol of loyalty and memory in Mediterranean and European folk magic.",
      "Aroma of 1,8-cineole measurably improves speed and accuracy of memory recall.",
    ],
    shortDescription:
      "Ancient herb of remembrance, protection, and sharp-minded clarity.",
    description:
      "Rosemary is one of the most beloved and versatile herbs in both the culinary and medicinal traditions of the Mediterranean world. Its fragrant, needle-like leaves carry one of nature's most complex aromatic signatures — dominated by camphor, 1,8-cineole, and α-pinene. Locally harvested from wild-edge hillside stands, our rosemary is bunched and slowly dried in open air to preserve the full volatile oil profile.",
    spiritualUses: [
      "Traditionally burned as a substitute for frankincense to purify sacred spaces and amplify protective energy.",
      "Carried in sachets or tucked under pillows to encourage vivid, prophetic dreams and ward off nightmares.",
      "Used in weddings and remembrance rituals in Mediterranean and European folk magic as a symbol of loyalty and memory.",
      "Planted at the gateway of the home to welcome positive energy and repel harmful intentions.",
    ],
    scientificBenefits: [
      "Rosmarinic acid is a potent antioxidant shown to inhibit COX-2 enzymes responsible for inflammatory pain.",
      "Aromatherapy studies show that 1,8-cineole in rosemary aroma measurably improves speed and accuracy of memory recall.",
      "Demonstrated mild antimicrobial effects against E. coli and Staphylococcus aureus in lab studies.",
      "Carnosic acid supports liver health and has shown neuroprotective properties in cell studies.",
      "Topical rosemary oil has shown comparable efficacy to minoxidil for scalp hair growth in clinical trials.",
    ],
    howToUse:
      "Use fresh or dried sprigs in cooking, steep as a brain-boosting tea, or simmer in hot water for an uplifting aromatic steam.",
    inStock: false,
    featured: false,
    rating: 4.7,
    reviews: 74,
    origin: "Local hillside wild harvest",
    regions: ["Pacific Northwest", "West Coast", "Southwest"],
  },
  {
    id: "lemon-balm",
    name: "Lemon Balm",
    scientificName: "Melissa officinalis",
    category: "herb",
    price: 11.99,
    unit: "1.5 oz dried leaf",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Lemon balm bright green leaves with citrus fragrance",
    gradient: "from-lime-600 to-yellow-400",
    emoji: "🍋",
    tagline: "Sunshine in leaf form — calm, bright, and restorative.",
    highlights: [
      "Invites clarity, optimism, and divine inspiration in ritual use.",
      "Rosmarinic acid produces a natural anxiolytic effect without drowsiness.",
    ],
    shortDescription:
      "Sunshine herb — calming, joyful, and deeply healing for nerves and digestion.",
    description:
      "Lemon Balm (Melissa officinalis) has been prized since antiquity — the Greek physician Dioscorides used it, medieval apothecaries made 'Carmelite Water' from it, and Paracelsus called it the 'elixir of life.' Its bright lemon scent comes from volatile compounds like citral, citronellal, and linalool. A gentle nervine that calms without sedating, it is ideal for daily use. Our lemon balm is cut at morning peak when essential oils are highest and carefully air-dried.",
    spiritualUses: [
      "Associated with the sun and Venus in Western herbalism — used in love spells and rituals to draw positive relationships.",
      "Burned to lift depression, clear sorrow, and bring a sense of lightness and joy back to a space.",
      "Carried in talismans for success and longevity in folk traditions across Europe and the Middle East.",
      "Used to anoint candles and ritual tools to invite clarity, optimism, and divine inspiration.",
    ],
    scientificBenefits: [
      "Rosmarinic acid inhibits GABA transaminase, producing a natural anxiolytic effect without drowsiness.",
      "A randomized controlled trial showed significant reduction in anxiety and insomnia symptoms after 15 days.",
      "Antiviral tannins in lemon balm effectively inhibit the herpes simplex virus (HSV-1 and HSV-2) in cell studies.",
      "Supports healthy digestion by relieving bloating, cramping, and gut spasms (antispasmodic action).",
      "Cognitive function study showed improved calmness and memory performance in healthy adults.",
    ],
    howToUse:
      "Steep 2 tbsp fresh or 1 tbsp dried leaves in hot water for 7–10 min. Excellent in cold infusions, lemonade, or blended with chamomile for sleep support.",
    inStock: false,
    featured: false,
    rating: 4.7,
    reviews: 61,
    origin: "Home garden & local wildcrafted",
    regions: ["Pacific Northwest", "West Coast", "Midwest", "Northeast"],
  },
  {
    id: "mullein",
    name: "Common Mullein",
    scientificName: "Verbascum thapsus",
    category: "herb",
    price: 13.99,
    unit: "1 oz dried leaf & flower",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Towering mullein stalk with velvety silver-green leaves in a meadow",
    gradient: "from-yellow-600 to-amber-500",
    emoji: "🌻",
    tagline: "A torch-bearer of the old world, healer of lungs.",
    highlights: [
      "Ancient Germanic torch plant — guide for souls in sacred processions.",
      "Saponins and mucilage soothe inflamed bronchial passages and ease dry cough.",
    ],
    shortDescription:
      "Towering roadside healer — the great lung herb of traditional medicine.",
    description:
      "Mullein is the gentle giant of the wild medicinal world — its tall flowering stalk rises 6 feet above open meadows and roadsides, and its massive velvety leaves have been used for respiratory support, pain relief, and magic across nearly every traditional culture. Our mullein is wildcrafted from undisturbed land, the large basal leaves hand-selected and dried in open-air shade to preserve saponins and mucilage.",
    spiritualUses: [
      "Ancient Germanic tradition used the dried stalk as a torch dipped in tallow — carried in processions to guide souls.",
      "Used in Appalachian folk magic as a protective floor wash to clear negative energy from the home.",
      "Burned as a smudge in shamanic traditions to help communicate with ancestral spirits.",
      "Placed under pillows to prevent nightmares and ensure restful, healing sleep in various folk traditions.",
    ],
    scientificBenefits: [
      "Saponins and mucilage coat and soothe inflamed bronchial passages, easing dry cough and respiratory irritation.",
      "Iridoid compounds demonstrate anti-inflammatory action in laboratory studies of lung tissue.",
      "Verbascosaponin has shown anti-viral activity against influenza A in cell culture studies.",
      "Topical oil infusion used traditionally for ear infections has shown antibacterial activity in clinical observation.",
      "Expectorant action helps loosen and expel congestion from the lungs and sinuses.",
    ],
    howToUse:
      "Brew as a tea (strain well through cheesecloth to remove fine hairs). Combine with marshmallow root for a deep respiratory tonic. Or smoke-dry as a traditional lung herb.",
    inStock: false,
    featured: false,
    rating: 4.6,
    reviews: 43,
    origin: "Local meadow wildcrafted",
    regions: ["Pacific Northwest", "Rocky Mountains", "Great Plains", "Midwest", "Northeast"],
  },

  // ── NUTS ───────────────────────────────────────────────
  {
    id: "soap-nuts",
    name: "Soap Nuts",
    scientificName: "Sapindus mukorossi",
    category: "nut",
    price: 16.99,
    unit: "4 oz whole shells",
    image:
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Dried soap nut shells in a wooden bowl",
    gradient: "from-amber-700 to-orange-500",
    emoji: "🫧",
    tagline: "Zero-waste suds from the tree of a thousand uses.",
    highlights: [
      "Sacred Ayurvedic purifying agent — cleanses body and aura before ceremony.",
      "Contains 12% saponins — natural surfactants that effectively lift oils and grime.",
    ],
    shortDescription:
      "Nature's laundry detergent — a zero-waste saponin powerhouse.",
    description:
      "Soap Nuts — the dried shells of the Sapindus mukorossi tree berry — have been used for thousands of years across South Asia and Native American cultures as a natural, zero-waste cleanser, medicine, and spiritual purifying agent. The shells contain up to 12% saponin, a natural surfactant that lathers in water and lifts oils and dirt. Our soap nuts are sustainably wild-harvested, naturally sun-dried, and free of chemical processing.",
    spiritualUses: [
      "Used in Ayurvedic purification rituals as a sacred cleansing agent for the body before ceremony.",
      "Burned in fire ceremonies (homa) in Hindu tradition as an offering to invoke the fire deity Agni.",
      "Ground and used as a ritual body wash to cleanse the aura of heavy energies before spiritual work.",
      "Associated with the planet Saturn and used in astrological remedies to ease Saturn-related challenges.",
    ],
    scientificBenefits: [
      "Contains 12% saponins — natural glycosides that form micelles to effectively lift and suspend oils and grime.",
      "Clinically shown to be gentle on sensitive skin — pH-balanced and free of synthetic surfactants.",
      "Demonstrated antifungal activity against Candida albicans and Aspergillus species.",
      "Effective against head lice in a clinical trial comparing it to pyrethrin-based treatments.",
      "Fully biodegradable — breaks down completely in soil with no environmental residue.",
    ],
    howToUse:
      "Place 4–5 shells in the included cotton bag and add to laundry — works for 4–5 loads. For liquid soap: simmer 10 shells in 6 cups water for 30 min, strain, and store in the fridge.",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 156,
    origin: "Pacific Northwest / Himalayan import",
    regions: ["Pacific Northwest", "West Coast"],
  },
  {
    id: "black-walnuts",
    name: "Black Walnuts",
    scientificName: "Juglans nigra",
    category: "nut",
    price: 14.99,
    unit: "3 oz shelled halves",
    image:
      "https://images.unsplash.com/photo-1508674861872-a51e06c50c9b?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Black walnuts in their green hulls on a forest floor",
    gradient: "from-stone-700 to-amber-600",
    emoji: "🌰",
    tagline: "Dark, bold, and wild — Appalachian forest medicine.",
    highlights: [
      "Hull used to write powerful protection and binding spells in folk magic.",
      "Juglone demonstrates antiparasitic activity against intestinal worms.",
    ],
    shortDescription:
      "Wild-foraged native nut with bold earthy flavor and potent medicinal properties.",
    description:
      "The American Black Walnut (Juglans nigra) is a majestic native tree of the Eastern woodlands, producing a deeply aromatic nut with bold, earthy, and slightly bitter flavors far more complex than the commercial English walnut. Every part of the black walnut — hull, shell, leaf, and kernel — has been employed medicinally for centuries. Our black walnuts are hand-foraged during the brief autumn harvest window, hulled carefully (using gloves — the green hulls stain!), and dried at low temperature.",
    spiritualUses: [
      "In Appalachian and Ozark folk magic, the hull is used to prepare black walnut ink for writing powerful protection and binding spells.",
      "Hung in bundles near doorways in Eastern European tradition to protect the household from illness and evil.",
      "The shell, carved with intent and filled with herbs, serves as a traditional container charm ('witch bottle') for protection.",
      "Burning dried black walnut leaves is used to clear heavy, stuck energies from a space during seasonal transitions.",
    ],
    scientificBenefits: [
      "Juglone — the unique phenolic compound in black walnut hull — has demonstrated antiparasitic activity against intestinal worms.",
      "Among the highest omega-3 (ALA) content of any nut — 3.3g per oz — supporting cardiovascular and brain health.",
      "Rich in ellagic acid, an antioxidant compound linked to DNA repair and cancer-preventive properties in laboratory studies.",
      "The green hull contains tannins with documented antibacterial and antifungal applications.",
      "Higher arginine content than English walnuts, which supports healthy nitric oxide production and blood pressure regulation.",
    ],
    howToUse:
      "Eat as a snack, chop into granola or baked goods, or grind into a rich butter. The green hull can be simmered for medicinal preparations (consult an herbalist for dosing).",
    inStock: false,
    featured: false,
    rating: 4.6,
    reviews: 52,
    origin: "Local Appalachian wild-harvest",
    regions: ["Midwest", "Southeast", "Northeast"],
  },
  {
    id: "hickory-nuts",
    name: "Shagbark Hickory Nuts",
    scientificName: "Carya ovata",
    category: "nut",
    price: 12.99,
    unit: "3 oz shelled pieces",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Shagbark hickory nuts with thick ridged shells in autumn leaves",
    gradient: "from-yellow-700 to-amber-500",
    emoji: "🍂",
    tagline: "Buttery autumn treasure — the forest's forgotten feast.",
    highlights: [
      "A grandfather spirit tree offering abundance and community in the forest.",
      "Extremely energy-dense with heart-healthy monounsaturated fats and high magnesium.",
    ],
    shortDescription:
      "Rich, buttery native nut — a forgotten staple of Indigenous cuisine.",
    description:
      "Shagbark Hickory Nuts (Carya ovata) were a dietary cornerstone for Indigenous peoples of the Eastern Woodlands — processed into 'pawcohiccora,' a rich milk-like paste that could sustain an entire village through winter. The thin-shelled nuts are incredibly rich and buttery, with a sweet, complex flavor that beats any store-bought nut. Our hickory nuts are gathered by hand from a network of local stewards who know their grove trees intimately, cracked and sorted fresh each autumn.",
    spiritualUses: [
      "Offered in gratitude ceremonies to the forest spirits and the land at the close of the autumn harvest season.",
      "Used in sacred fire wood — hickory's dense, slow-burning wood is prized for purification fires and sweat lodge rituals.",
      "Ground meal was used in communal feasting as a symbol of abundance, community, and the gifts of the forest.",
      "In some Eastern Woodlands traditions, the tree itself is considered a grandfather spirit and protector of the community.",
    ],
    scientificBenefits: [
      "Extremely energy-dense at 193 calories per oz — primarily from heart-healthy monounsaturated fats.",
      "High magnesium content supports nerve function, muscle recovery, and healthy bone density.",
      "Contains ellagitannins with antioxidant and anti-inflammatory properties linked to cardiovascular protection.",
      "Manganese-rich — a single serving provides over 50% of daily manganese needs for bone and metabolic health.",
      "Low-glycemic carbohydrate source with high dietary fiber that supports sustained energy and digestive regularity.",
    ],
    howToUse:
      "Eat raw, toast lightly in a dry pan for enhanced flavor, or use the rich oil pressed from the nut in salad dressings and skin care. Excellent in sweet potato dishes and grain porridges.",
    inStock: false,
    featured: false,
    rating: 4.5,
    reviews: 38,
    origin: "Eastern Woodlands local harvest",
    regions: ["Midwest", "Southeast", "Northeast"],
  },

  // ── WILD WEEDS ─────────────────────────────────────────
  {
    id: "dandelion",
    name: "Dandelion Root & Leaf",
    scientificName: "Taraxacum officinale",
    category: "weed",
    price: 8.99,
    unit: "2 oz dried blend",
    image:
      "https://images.unsplash.com/photo-1586535715088-6f42874c9b1b?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Dandelion seed head in a sunny meadow ready to release seeds",
    gradient: "from-yellow-500 to-green-500",
    emoji: "🌼",
    tagline: "Make a wish — the humble weed that heals everything.",
    highlights: [
      "The oldest wishing plant — a bridge between this world and the cosmos.",
      "Inulin feeds beneficial gut bacteria, significantly improving microbiome diversity.",
    ],
    shortDescription:
      "The most misunderstood plant on your lawn — a complete healing food.",
    description:
      "Dandelion is perhaps the most unfairly maligned plant in the modern world. Far from a nuisance weed, Taraxacum officinale is a nutritional powerhouse, liver tonic, and one of the most studied medicinal plants in European phytotherapy. Every part is edible and medicinal — the roots are deeply bitter and liver-supportive, the leaves are diuretic and mineral-rich, the flowers are antioxidant and mood-brightening. Our dandelion blend combines dried root and leaf from undisturbed lawns and meadows, free from pesticides.",
    spiritualUses: [
      "One of the oldest 'wishing plants' in folklore — blowing on the seed head sends wishes and prayers to the cosmos.",
      "Used in divination to call upon the spirit of a loved one or seek answers from the spirit world.",
      "Associated with Hecate and Brigid in pagan traditions as a plant of crossroads, transitions, and new beginnings.",
      "Dandelion tea drunk before bed is said in folk tradition to enhance prophetic dreams and psychic clarity.",
    ],
    scientificBenefits: [
      "Inulin (prebiotic fiber) in the root feeds beneficial gut bacteria, significantly improving microbiome diversity.",
      "Potent diuretic with potassium-sparing properties — unlike synthetic diuretics, it replaces potassium as it works.",
      "Contains taraxacin and taraxacerin — bitter compounds that stimulate bile production and support liver detoxification.",
      "Leaves contain more beta-carotene than carrots and more calcium than kale per gram.",
      "Anti-inflammatory terpenoids have shown activity against liver inflammation markers in animal models.",
    ],
    howToUse:
      "Roast the root and brew as a caffeine-free coffee alternative. Use fresh leaves in salads (blanch to reduce bitterness). Steep as a daily liver tonic tea.",
    inStock: false,
    featured: true,
    rating: 4.7,
    reviews: 89,
    origin: "Local wild meadows (pesticide-free)",
    regions: ["Pacific Northwest", "West Coast", "Rocky Mountains", "Great Plains", "Midwest", "Southeast", "Northeast"],
  },
  {
    id: "stinging-nettle",
    name: "Stinging Nettle",
    scientificName: "Urtica dioica",
    category: "weed",
    price: 10.99,
    unit: "2 oz dried leaf",
    image:
      "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Stinging nettle plant with serrated leaves in spring growth",
    gradient: "from-green-600 to-emerald-400",
    emoji: "🌿",
    tagline: "The sting fades; only deep nourishment remains.",
    highlights: [
      "Protection charm against envy, hexes, and ill will in folk tradition.",
      "Contains 2.7mg iron per 100g — one of the highest non-heme iron sources in nature.",
    ],
    shortDescription:
      "The sting of healing — one of the most nutrient-dense plants on Earth.",
    description:
      "Stinging Nettle earns its fearsome reputation when encountered on the trail, but once dried or cooked, the formic acid and histamines that cause the sting are neutralized — leaving behind one of the most extraordinarily nutritious and medicinally potent plants in the temperate world. Used for over 3,000 years across Europe, Asia, and the Americas, nettle is a complete iron supplement, allergy remedy, joint tonic, and hormonal balancer. Our nettle is cut at young spring growth, dried immediately to lock in nutrients.",
    spiritualUses: [
      "Thrown into a fire during storms in old Norse and Germanic tradition to invoke Thor's protection.",
      "Sewn into a pocket or sachet as a powerful protection charm against envy, hexes, and ill will.",
      "Used in folk exorcism and banishing rituals — a bundle of nettles sweeping through a space clears dense energies.",
      "Bathing in nettle-infused water before ritual is a traditional purification and empowerment practice.",
    ],
    scientificBenefits: [
      "Contains 2.7mg iron per 100g (dried) — one of the highest non-heme iron sources in the plant kingdom.",
      "Multiple clinical trials demonstrate significant reduction in allergic rhinitis symptoms with regular consumption.",
      "Steroidal compounds inhibit 5-alpha-reductase and aromatase, supporting healthy testosterone balance in men (BPH relief).",
      "Anti-inflammatory lectins bind to and inhibit key cytokines in the NF-κB inflammatory pathway.",
      "Rich in silica — the primary mineral for collagen formation, skin elasticity, hair strength, and bone density.",
    ],
    howToUse:
      "Simmer dried nettle as a mineral-rich infusion (the 'nourishing herbal infusion' method by Susan Weed). Blend into pesto, soups, or quiche as you would spinach.",
    inStock: false,
    featured: false,
    rating: 4.8,
    reviews: 76,
    origin: "Pacific Northwest streamside wildcrafted",
    regions: ["Pacific Northwest", "West Coast", "Rocky Mountains", "Midwest", "Northeast"],
  },
  {
    id: "chickweed",
    name: "Chickweed",
    scientificName: "Stellaria media",
    category: "weed",
    price: 7.99,
    unit: "1.5 oz dried herb",
    image:
      "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Chickweed tiny star-shaped white flowers among green leaves",
    gradient: "from-lime-500 to-emerald-400",
    emoji: "⭐",
    tagline: "Cool, star-bright, and quietly healing your skin.",
    highlights: [
      "A Venus herb — used in love charms to attract gentle, reciprocal affection.",
      "Topical use reduces histamine-triggered itch and redness from eczema and bites.",
    ],
    shortDescription:
      "Delicate star flower — a cooling, soothing remedy hiding in plain sight.",
    description:
      "Chickweed (Stellaria media) grows quietly in gardens and lawns throughout the temperate world, overlooked by most and treasured by herbalists. Its tiny white flowers — each petal so deeply divided it appears to be ten petals — distinguish it as a member of the Star Chickweed group (stellaria = star). A cool, moist, and delicate herb, chickweed is prized for its cooling and anti-itch properties externally, and its mineral nutrition and gentle cleansing properties internally. Our chickweed is harvested in the cool seasons when it grows most lushly and nutritiously.",
    spiritualUses: [
      "A plant of Venus in the Western magical tradition — used in love charms and spells to attract gentle, reciprocal affection.",
      "Eaten raw in spring salads as a ritual act of renewal, connecting with the returning life force of the season.",
      "Applied topically in healing rituals — its cooling nature used to soothe spiritual 'heat' (anger, agitation, conflict).",
      "Associated with birds and their spirit energy — carrying chickweed is said to enhance communication and travel.",
    ],
    scientificBenefits: [
      "High saponin content breaks down fat globules and may gently support lymphatic drainage.",
      "Topical use reduces histamine-triggered itch and redness — effective for eczema, psoriasis, and insect bites.",
      "Contains notable amounts of Vitamin C, calcium, iron, and trace minerals including selenium.",
      "Anti-inflammatory triterpene saponins reduce local swelling and support wound healing.",
      "Gentle mucilaginous quality soothes the entire digestive tract, from mouth to intestine.",
    ],
    howToUse:
      "Eat fresh as salad greens (mild, pleasant flavor). Brew as a cooling tea. Apply a strong infusion as a topical wash for itchy skin conditions.",
    inStock: false,
    featured: false,
    rating: 4.4,
    reviews: 31,
    origin: "Local garden wildcrafted (spring harvest)",
    regions: ["Pacific Northwest", "West Coast", "Midwest", "Northeast", "Southeast"],
  },
  {
    id: "purslane",
    name: "Purslane",
    scientificName: "Portulaca oleracea",
    category: "weed",
    price: 9.99,
    unit: "1.5 oz dried leaf",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Purslane succulent green leaves with thick fleshy stems",
    gradient: "from-green-500 to-teal-400",
    emoji: "💚",
    tagline: "Omega-3 riches growing wild beneath your feet.",
    highlights: [
      "Hung above doorways to ward off evil spirits and invite abundance.",
      "Contains 300–400mg ALA omega-3 per 100g — highest of any leafy green plant.",
    ],
    shortDescription:
      "Omega-3 rich succulent — the weed that belongs on every plate.",
    description:
      "Purslane (Portulaca oleracea) is simultaneously the world's most widely consumed weed and one of its most extraordinary nutritional secrets. Eaten as a gourmet vegetable in Greece, Turkey, and Mexico, and beloved in Ayurvedic medicine, purslane's thick, succulent leaves are packed with omega-3 fatty acids in a form almost unheard of in the plant world. It thrives in heat and drought — pulling nutrition from thin soils with a deep taproot. Our purslane is harvested in peak summer before flowering, when the leaf fat content is highest.",
    spiritualUses: [
      "Hung above doorways in Mediterranean and Latin American folk traditions to ward off evil spirits and bad luck.",
      "Burned in protective house-cleansing rituals, its succulent smoke creating a barrier against harmful influences.",
      "Grown in pots near the kitchen to bless the home's food with health and abundance.",
      "Used in ancestral medicine traditions as a component of 'cooling' remedies to soothe spiritual 'hot' conditions like rage and grief.",
    ],
    scientificBenefits: [
      "Contains 300–400mg of alpha-linolenic acid (ALA omega-3) per 100g — the highest of any leafy green plant.",
      "Rich in melatonin — potentially useful for circadian rhythm regulation and antioxidant protection.",
      "Betacyanin and betaxanthin pigments are potent antioxidants that protect cell membranes from oxidative damage.",
      "Clinical studies in diabetic patients show improved fasting glucose and HbA1c with purslane supplementation.",
      "Contains norepinephrine — which may explain traditional use for blood pressure and hemorrhage.",
    ],
    howToUse:
      "Eat fresh in salads (mild, slightly tangy flavor) or stir-fry lightly. Add to soups and stews. The dried herb brews into a mild, pleasant tea.",
    inStock: false,
    featured: false,
    rating: 4.5,
    reviews: 48,
    origin: "Local summer wild harvest",
    regions: ["Southwest", "Great Plains", "Midwest", "Southeast", "Northeast"],
  },

  // ── VEGETABLES ─────────────────────────────────────────
  {
    id: "jerusalem-artichoke",
    name: "Jerusalem Artichoke",
    scientificName: "Helianthus tuberosus",
    category: "vegetable",
    price: 15.99,
    unit: "1 lb fresh tubers",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Jerusalem artichoke sunchoke tubers harvested from garden",
    gradient: "from-orange-600 to-yellow-500",
    emoji: "🌻",
    tagline: "The sunflower's hidden gift — sweet, earthy, transformative.",
    highlights: [
      "Solar symbol of hidden knowledge — what lies beneath holds the nourishment.",
      "Richest plant source of inulin — nourishes Bifidobacteria and Lactobacillus.",
    ],
    shortDescription:
      "Native sunflower tuber — the original prebiotic superfood of the Americas.",
    description:
      "The Jerusalem Artichoke (Helianthus tuberosus) — also called sunchoke — is native to North America and was a dietary cornerstone of dozens of Indigenous nations long before European contact. Despite the misleading name (it has no connection to Jerusalem or to globe artichoke), it is a species of sunflower whose knobby tubers taste remarkably like water chestnut crossed with artichoke heart. It was brought to Europe in the 1600s where it briefly became fashionable before being forgotten. Our sunchokes are grown locally and harvested after the first frost for maximum sweetness.",
    spiritualUses: [
      "As a sunflower relative, it shares the solar symbolism of its kin — used in sun ceremonies and offerings to solar deities.",
      "In various Indigenous traditions, the tuber is associated with hidden knowledge — what lies beneath the surface holds the nourishment.",
      "Planted at the edges of a garden to form a protective 'living fence' that guards against unwanted intrusion.",
      "The tall yellow flowers are used in altar arrangements for harvest festivals and Samhain / Día de los Muertos celebrations.",
    ],
    scientificBenefits: [
      "The richest plant source of inulin (up to 75% of carbohydrates) — the prebiotic fiber that nourishes Bifidobacteria and Lactobacillus.",
      "Unlike most starches, inulin is not digested by humans — making it low-glycemic and beneficial for blood sugar balance.",
      "Thiamine (Vitamin B1) rich — important for nerve function, energy metabolism, and healthy cognitive performance.",
      "Potassium content (600mg/100g) supports cardiovascular health, electrolyte balance, and healthy blood pressure.",
      "Research shows regular inulin consumption from sunchokes increases bifidobacterial populations by 5–10× in just 2 weeks.",
    ],
    howToUse:
      "Eat raw (thinly sliced in salads), roasted at 400°F until caramelized, or simmered in soups. Introduce slowly to allow gut flora to adapt and minimize gas.",
    inStock: false,
    featured: true,
    rating: 4.6,
    reviews: 67,
    origin: "Local organic farm",
    regions: ["Midwest", "Great Plains", "Southeast", "Northeast"],
  },
  {
    id: "wild-ramps",
    name: "Wild Ramps (Wild Garlic)",
    scientificName: "Allium tricoccum",
    category: "vegetable",
    price: 13.99,
    unit: "4 oz fresh bundle",
    image:
      "https://images.unsplash.com/photo-1574173229935-c5cf60daa16b?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Wild ramps with broad green leaves and slender white bulbs in forest",
    gradient: "from-emerald-700 to-lime-500",
    emoji: "🧄",
    tagline: "Spring's first forest whisper — bold and fleeting.",
    highlights: [
      "Spring equinox ritual food — clearing winter's heaviness from body and spirit.",
      "High allicin content with broad antibacterial and antiviral effects.",
    ],
    shortDescription:
      "Spring's most anticipated wild green — bold, garlicky, and fleeting.",
    description:
      "Wild Ramps (Allium tricoccum) are the most eagerly anticipated spring forage in the Eastern Woodlands — the first major wild food to emerge from the melting forest floor after winter's long silence. Their broad, satiny leaves carry an intoxicating, spicy garlic-meets-green-onion fragrance that announces themselves from yards away. They were sacred spring food for countless Indigenous nations and remain celebrated today in Appalachian culture where ramp festivals draw thousands each spring. Our ramps are sustainably harvested, taking only a portion of each stand to ensure regeneration.",
    spiritualUses: [
      "Eaten at spring equinox as a ritual act of 'opening' — clearing the winter's accumulated heaviness from body and spirit.",
      "Used in spring cleansing rituals — hanging fresh ramps at the door to drive out winter illness and stagnant energies.",
      "The strong, pungent aroma is considered protective in many folk traditions — warding off spirits and disease.",
      "In Appalachian tradition, sharing ramps at a community meal is an act of spiritual bonding and communal renewal.",
    ],
    scientificBenefits: [
      "Contains high concentrations of allicin — the same sulfur compound in garlic shown to have broad antibacterial and antiviral effects.",
      "Rich in polyphenols including kaempferol and quercetin with anti-inflammatory and antioxidant properties.",
      "Excellent source of Vitamin C (especially important as a seasonal first fresh food after winter).",
      "Selenium content supports thyroid function, immune response, and antioxidant enzyme production.",
      "Traditional spring detox food — the chlorophyll and sulfur compounds support phase II liver detoxification.",
    ],
    howToUse:
      "Eat raw in salads, pickle the bulbs, wilt briefly in butter, add to eggs or pasta, or blend into a vivid green pesto. Use every part — bulb, leaf, and flower if present.",
    inStock: false,
    featured: false,
    rating: 4.9,
    reviews: 112,
    origin: "Appalachian forest wild-harvest",
    regions: ["Midwest", "Northeast", "Southeast"],
  },
  // ── FLORIDA NATIVES ────────────────────────────────────
  {
    id: "elderberry",
    name: "Elderberry",
    scientificName: "Sambucus canadensis",
    category: "herb",
    price: 15.99,
    unit: "2 oz dried berry",
    image:
      "https://images.unsplash.com/photo-1595511890410-3b8dc237a537?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Clusters of deep purple elderberries on arching branches",
    gradient: "from-purple-800 to-violet-600",
    emoji: "🫐",
    tagline: "Elder Mother's berries — immunity forged from the wild.",
    highlights: [
      "Known as the Elder Mother — a spirit guardian of the plant world.",
      "Randomized controlled trials show elderberry significantly shortens flu duration.",
    ],
    shortDescription:
      "Florida's immune-boosting native berry — centuries of folk medicine in every cluster.",
    description:
      "American Elderberry (Sambucus canadensis) is one of Florida's most celebrated native medicinal shrubs, found growing wild along stream banks, forest edges, and low-lying wetlands across the state. Every part of this generous plant — flowers, berries, bark, and leaves — has been used by Indigenous peoples of the Southeast for food, medicine, and ceremony for thousands of years. The deep purple berries ripen in late summer and are packed with anthocyanins and immune-active polysaccharides. Our elderberries are sustainably wild-harvested from Florida woodlands, gently dried to preserve bioactive compounds, and never treated with sulfites or preservatives.",
    spiritualUses: [
      "Known as the 'Elder Mother' in European and Southeastern folk traditions — a spirit guardian of the plant world.",
      "Hung above doorways and windows as a protective charm to ward off illness and negative energy from the home.",
      "Used in ancestral veneration rituals — elderberry wine or syrup offered to honor those who have passed.",
      "Burned as an incense or placed on altars to invite wisdom, healing, and the support of elder spirits.",
    ],
    scientificBenefits: [
      "Rich in anthocyanins (cyanidin-3-glucoside) that neutralize free radicals and reduce systemic inflammation.",
      "Randomized controlled trials show elderberry extract significantly shortens influenza duration and severity.",
      "Flavonoids bind to and block influenza virus surface proteins, inhibiting cellular entry in laboratory studies.",
      "High vitamin C content (up to 60% DV per serving) supports collagen synthesis and immune cell function.",
      "Quercetin and rutin in elderberry support cardiovascular health by strengthening capillary walls.",
    ],
    howToUse:
      "Simmer dried berries into a syrup with raw honey and ginger. Take 1 tbsp daily for immune support, or 1 tbsp every 2–3 hours at first sign of illness. Always cook elderberries — raw berries may cause nausea.",
    inStock: false,
    featured: false,
    rating: 4.8,
    reviews: 84,
    origin: "Florida woodland wild-harvest",
    regions: ["Southeast", "Midwest", "Northeast"],
  },
  {
    id: "saw-palmetto",
    name: "Saw Palmetto",
    scientificName: "Serenoa repens",
    category: "herb",
    price: 17.99,
    unit: "2 oz dried berry",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Saw palmetto palm fronds in Florida scrubland",
    gradient: "from-green-800 to-teal-600",
    emoji: "🌴",
    tagline: "Florida's iconic palm — where strength meets stillness.",
    highlights: [
      "Carried by Seminole warriors for strength, protection, and sharpened instincts.",
      "Multiple meta-analyses show significant improvement in urinary flow and BPH symptoms.",
    ],
    shortDescription:
      "Florida's iconic palm — a powerhouse berry for hormonal and urinary health.",
    description:
      "Saw Palmetto (Serenoa repens) is as Floridian as the scrub pine flatwoods it dominates — a slow-growing, fire-adapted palm found almost exclusively in Florida and the Gulf Coast states. The Seminole and Timucua peoples ate the berries as a staple food and used them medicinally for centuries. Today, saw palmetto is one of the most widely studied botanicals in the world, with hundreds of clinical trials examining its effects on prostate health and hormone balance. Our berries are hand-harvested during the brief late-summer ripening window, shade-dried at low temperature, and ground fresh to order.",
    spiritualUses: [
      "Carried by warriors and hunters in Seminole tradition for strength, protection, and sharpened instincts.",
      "Used in boundary-setting and protection work in Southern folk magic — hung at property lines to guard the home.",
      "Associated with masculine vitality and the warrior archetype in plant spirit traditions of the Southeast.",
      "Burned as a smudge to clear stagnant energy and restore assertiveness and personal power.",
    ],
    scientificBenefits: [
      "Fatty acids (lauric, oleic, myristic) inhibit 5-alpha-reductase, reducing conversion of testosterone to DHT.",
      "Multiple meta-analyses show significant improvement in urinary flow rate and symptoms of benign prostatic hyperplasia.",
      "Anti-inflammatory phytosterols reduce prostaglandin-driven inflammation in prostate and bladder tissue.",
      "Demonstrated efficacy comparable to finasteride for mild-to-moderate BPH with far fewer side effects.",
      "Emerging research suggests hair-loss reduction via the same 5-alpha-reductase inhibition pathway.",
    ],
    howToUse:
      "Take 160–320 mg of concentrated berry extract twice daily with food, or brew 1 tsp dried berry powder as a tea. Results for prostate support typically appear after 4–8 weeks of consistent use.",
    inStock: false,
    featured: false,
    rating: 4.7,
    reviews: 67,
    origin: "Florida scrubland wild-harvest",
    regions: ["Southeast"],
  },
  {
    id: "passionflower",
    name: "Passionflower (Maypop)",
    scientificName: "Passiflora incarnata",
    category: "herb",
    price: 13.99,
    unit: "1.5 oz dried leaf & flower",
    image:
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Passionflower intricate purple and white bloom on vine",
    gradient: "from-violet-700 to-purple-500",
    emoji: "🌸",
    tagline: "Nature's most beautiful anxiety remedy in full bloom.",
    highlights: [
      "Worn as a talisman to bring peace and dissolve conflict in relationships.",
      "Clinical trial found equivalent anxiety reduction to oxazepam with far fewer side effects.",
    ],
    shortDescription:
      "Florida's wild anxiety remedy — stunning blossoms with deep calming power.",
    description:
      "Passionflower — called Maypop in the South for the popping sound its hollow fruit makes when stepped on — is one of Florida's most striking and medicinally potent native vines. Found scrambling across roadsides, fences, and woodland edges throughout the state, its extraordinarily complex blooms were used by Spanish missionaries as a teaching tool for the Passion of Christ, giving the plant its evocative name. The Cherokees, Creeks, and other Southeastern nations used the root and leaf for anxiety, insomnia, and as a gentle sedative. We harvest leaves and flowers at peak bloom from undisturbed Florida habitat.",
    spiritualUses: [
      "Worn or carried as a talisman to bring peace, dissolve conflict, and soften difficult relationships.",
      "Burned or placed on the altar before dream work to invite prophetic and lucid dreaming.",
      "Associated with the Passion of Christ in Christian folk magic — used in devotional practices and protection from suffering.",
      "Given as a gift or used in love magic to calm a troubled partnership and encourage forgiveness.",
    ],
    scientificBenefits: [
      "Chrysin and vitexin bind to GABA-A receptors with benzodiazepine-like affinity, reducing anxiety without dependence.",
      "Clinical trial comparing passionflower to oxazepam found equivalent anxiety reduction with significantly fewer side effects.",
      "Improves sleep quality by extending total sleep time and increasing deep-wave (slow-wave) sleep.",
      "Flavonoid content shows anti-inflammatory action comparable to low-dose NSAIDs in animal studies.",
      "Mild MAO-inhibiting alkaloids contribute to mood elevation and emotional resilience.",
    ],
    howToUse:
      "Steep 1–2 tsp dried leaf and flower in hot water for 10 minutes. Drink one cup 30–60 minutes before bed for sleep support, or sip throughout the day to ease anxiety. Blend with lemon balm for a powerful calming tea.",
    inStock: false,
    featured: false,
    rating: 4.8,
    reviews: 53,
    origin: "Florida roadside & forest edge wild-harvest",
    regions: ["Southeast", "Midwest", "Northeast"],
  },
  {
    id: "beautyberry",
    name: "American Beautyberry",
    scientificName: "Callicarpa americana",
    category: "herb",
    price: 11.99,
    unit: "1 oz dried leaf & berry",
    image:
      "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=600&auto=format&fit=crop&q=80",
    imageAlt: "American beautyberry vivid magenta-purple berries on arching branch",
    gradient: "from-fuchsia-700 to-purple-500",
    emoji: "🍇",
    tagline: "Iridescent jewels that repel bugs and captivate souls.",
    highlights: [
      "Jewel-bright berries planted to mark sacred space and welcome nature spirits.",
      "USDA-confirmed repellent efficacy comparable to DEET with no known toxicity.",
    ],
    shortDescription:
      "Florida's dazzling purple native — a bug-repelling, jelly-making woodland gem.",
    description:
      "American Beautyberry (Callicarpa americana) is one of the most visually spectacular native shrubs in Florida's understory — in late summer and fall, its branches erupt in tight clusters of iridescent magenta-purple berries that look almost too vivid to be real. Found throughout Florida's woodlands, hammocks, and forest margins, it has long been used by Southeastern Indigenous peoples and early settlers both for its tart berries (made into jellies and wines) and its potent insect-repelling leaves. Recent USDA research has validated that beautyberry's repellent compounds outperform many synthetic alternatives. Our beautyberry is hand-harvested from wild Florida stands at peak ripeness.",
    spiritualUses: [
      "The vivid purple color associates beautyberry with intuition, psychic protection, and the third eye in color magic.",
      "Planted at the boundaries of a garden or property to mark sacred space and welcome nature spirits.",
      "Berries used as offerings on altars honoring the forest — their jewel-like beauty seen as a gift from the land.",
      "Worn or carried in sachets to enhance attractiveness, confidence, and magnetic personal presence.",
    ],
    scientificBenefits: [
      "USDA Agricultural Research Service confirmed callicarpenal and intermedeol in beautyberry leaves repel mosquitoes, ticks, and fire ants.",
      "Repellent efficacy in trials comparable to DEET at equivalent concentrations, with no known toxicity.",
      "Berry extracts demonstrate antimicrobial activity against Staphylococcus aureus and E. coli in laboratory assays.",
      "Callicarpa flavonoids show anti-inflammatory activity by inhibiting COX-1 and COX-2 enzyme pathways.",
      "Historically used topically in folk medicine as a treatment for skin irritations, rashes, and minor wounds.",
    ],
    howToUse:
      "Steep dried leaves as a tea to drink or use as a topical skin rinse. Rub fresh or dried leaves on exposed skin as a natural insect repellent. Simmer berries with sugar to make a tart beautyberry jelly.",
    inStock: false,
    featured: false,
    rating: 4.6,
    reviews: 31,
    origin: "Florida woodland wild-harvest",
    regions: ["Southeast"],
  },
  {
    id: "yaupon-holly",
    name: "Yaupon Holly",
    scientificName: "Ilex vomitoria",
    category: "herb",
    price: 14.99,
    unit: "1.5 oz dried leaf",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Yaupon holly dark green leaves with small red berries",
    gradient: "from-emerald-800 to-green-500",
    emoji: "☕",
    tagline: "America's forgotten caffeine — smoother than coffee.",
    highlights: [
      "Ceremonial Black Drink of Southeastern nations — purifies body and mind.",
      "Contains caffeine, theobromine, and theophylline for a smoother stimulant profile than coffee.",
    ],
    shortDescription:
      "North America's only native caffeinated plant — a forgotten indigenous tea.",
    description:
      "Yaupon Holly (Ilex vomitoria) holds a remarkable and largely forgotten distinction: it is the only plant native to North America that naturally contains caffeine. Found growing abundantly in Florida's coastal scrub, sandy flatwoods, and maritime hammocks, yaupon was the ceremonial 'Black Drink' of the Mississippian cultures — consumed in purification rituals by warriors and leaders across the Southeast for centuries. The notoriously off-putting scientific name (vomitoria) was bestowed by European botanists who witnessed the ritual emetic use of large concentrated doses — regular tea-strength brews are smooth, slightly earthy, and gentle on the stomach. Yaupon also contains theobromine (the compound in chocolate) and chlorogenic acid, making it a more complex and balanced stimulant than coffee. Ours is harvested from wild Florida shrubs, lightly roasted to develop flavor complexity.",
    spiritualUses: [
      "The ceremonial Black Drink of Southeastern Indigenous nations — consumed before councils, hunts, and battle to purify body and mind.",
      "Used in vision-seeking practices to sharpen perception, clear mental fog, and open awareness before ceremony.",
      "Offering it to guests was a gesture of respect and spiritual welcome in traditional Southeastern cultures.",
      "Associated with clarity, truth-speaking, and the sacred act of beginning — drunk at dawn or before important decisions.",
    ],
    scientificBenefits: [
      "Contains caffeine (~50mg per cup), theobromine, and theophylline — a smoother, more sustained stimulant profile than coffee.",
      "Rich in chlorogenic acid — the same antioxidant in coffee linked to reduced risk of type 2 diabetes and metabolic disease.",
      "Theobromine provides gentle cardiovascular stimulation with less blood pressure impact than caffeine alone.",
      "Low tannin content means no bitter aftertaste and no interference with iron absorption — gentler than black tea.",
      "Rutin and quercetin in yaupon leaves support vascular integrity and reduce inflammatory markers.",
    ],
    howToUse:
      "Steep 1–2 tsp dried leaves in hot water (175–185°F / 80–85°C, just off the boil) for 5–7 minutes. Can be drunk plain, with honey, or blended with spices like cinnamon and cardamom. Pairs beautifully with dried fruit as a morning or afternoon beverage.",
    inStock: false,
    featured: false,
    rating: 4.7,
    reviews: 45,
    origin: "Florida coastal scrub wild-harvest",
    regions: ["Southeast"],
  },
  {
    id: "lambs-quarters",
    name: "Lamb's Quarters",
    scientificName: "Chenopodium album",
    category: "vegetable",
    price: 7.99,
    unit: "1.5 oz dried leaf",
    image:
      "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Lamb's quarters pale green leaves with white powdery coating",
    gradient: "from-teal-600 to-green-500",
    emoji: "🥬",
    tagline: "The garden weed that outshines every cultivated green.",
    highlights: [
      "Eaten in new beginnings rituals to ground the spirit and welcome abundance.",
      "Contains 8g protein per 100g — one of the highest of any leafy green vegetable.",
    ],
    shortDescription:
      "Garden weed by day, nutritional powerhouse always — a wild spinach beyond compare.",
    description:
      "Lamb's Quarters (Chenopodium album) is the most nutritious vegetable most people have never eaten on purpose. A relative of quinoa and beets, this fast-growing annual springs up in disturbed soil, gardens, and vacant lots across the northern hemisphere and has been eaten by humans for at least 5,000 years — seeds have been found in Neolithic archaeological sites across Europe. With a flavor similar to spinach but richer and more complex, it can be used as a direct substitution in any dish that calls for spinach or chard, with significantly superior nutritional results.",
    spiritualUses: [
      "As a plant of liminal spaces (grows on edges, disturbed land), it is associated with transition and threshold magic.",
      "Eaten in new beginnings rituals — job changes, moves, new relationships — to ground the spirit and welcome abundance.",
      "In folk herbalism traditions, the powdery white coating on young leaves (a natural wax layer) is associated with purity and protection.",
      "Used as an offering to earth spirits and land guardians, thanking them for fertile ground.",
    ],
    scientificBenefits: [
      "Contains 8g of protein per 100g cooked — one of the highest protein levels of any leafy green vegetable.",
      "Extraordinarily rich in Vitamin K1 — a single cup provides 200%+ of daily needs for bone health and coagulation.",
      "Calcium content (309mg/100g) surpasses most dairy products — an exceptional calcium source for plant-based diets.",
      "Rich in riboflavin (B2) and niacin (B3) — B vitamins often limited in plant-based diets.",
      "Betaine content supports liver health, methylation pathways, and cardiovascular function.",
    ],
    howToUse:
      "Steam or sauté exactly like spinach. Blend into smoothies, add to soups and stews, or use fresh in early-spring salads. Dried, it can be rehydrated or powdered into capsules.",
    inStock: false,
    featured: false,
    rating: 4.4,
    reviews: 29,
    origin: "Local organic garden / wildcrafted",
    regions: ["Pacific Northwest", "Rocky Mountains", "Great Plains", "Midwest", "Southeast", "Northeast"],
  },

  // ── ADDITIONAL WILD WEEDS ──────────────────────────────
  {
    id: "yarrow",
    name: "Yarrow",
    scientificName: "Achillea millefolium",
    category: "weed",
    price: 11.99,
    unit: "1.5 oz dried herb",
    image:
      "https://images.unsplash.com/photo-1597328125219-1c91d3d1e2b7?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Yarrow flat-topped white flower clusters with feathery leaves",
    gradient: "from-stone-400 to-white",
    emoji: "🌸",
    tagline: "Achilles\' wound-sealing secret from the battlefield.",
    highlights: [
      "Named for Achilles — the supreme warrior herb for courage and protection.",
      "Achilletin staunches bleeding and reduces wound-healing time in clinical studies.",
    ],
    shortDescription:
      "The warrior\'s herb — stops bleeding, clears fever, and strengthens boundaries.",
    description:
      "Yarrow (Achillea millefolium) is one of the oldest medicinal plants on Earth — pollen found in Neanderthal burial sites suggests it was used over 60,000 years ago. Named for the legend of Achilles, who used it to staunch the bleeding wounds of his soldiers, yarrow is simultaneously a wound herb, fever remedy, digestive bitter, and energetic boundary-setter.",
    spiritualUses: [
      "Named for the legendary warrior Achilles — burned or carried for courage, protection, and strength before challenges.",
      "Used in I Ching divination — the dried stalks are the traditional casting tool of Chinese oracle practice.",
      "Hung at doorways and windows in folk traditions across Europe and North America to ward off evil and psychic attack.",
      "Worn in wedding bouquets in old European custom to ensure seven years of love — a powerful love and fidelity herb.",
    ],
    scientificBenefits: [
      "Achilletin and other alkaloids actively promote blood clotting — effective topically for cuts and nosebleeds.",
      "Potent diaphoretic action induces sweating to break fevers by promoting peripheral circulation.",
      "Bitter sesquiterpene lactones stimulate digestive enzyme secretion and bile flow, relieving bloating.",
      "Anti-inflammatory azulene reduces histamine response and soothes inflamed skin.",
    ],
    howToUse:
      "Brew as a hot tea to break fevers. Apply as a strong poultice directly to bleeding wounds. Combine with elderflower and peppermint in the classic fever tea blend.",
    inStock: false,
    featured: false,
    rating: 4.8,
    reviews: 64,
    origin: "Local meadow & hillside wildcrafted",
    regions: ["Pacific Northwest", "West Coast", "Rocky Mountains", "Great Plains", "Midwest", "Northeast"],
  },
  {
    id: "yellow-dock",
    name: "Yellow Dock",
    scientificName: "Rumex crispus",
    category: "weed",
    price: 10.99,
    unit: "2 oz dried root",
    image:
      "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Yellow dock plant with curly leaves and rusty brown seed clusters",
    gradient: "from-yellow-700 to-amber-500",
    emoji: "🌿",
    tagline: "Deep roots, deep iron — the great blood builder.",
    highlights: [
      "Liver-cleansing root of old herbalism — draws out stored toxins and stuck bile.",
      "One of the highest plant sources of bioavailable iron — critical for anemia and fatigue.",
    ],
    shortDescription:
      "The mighty blood-builder — restores iron, cleanses the liver, and heals the skin.",
    description:
      "Yellow Dock (Rumex crispus) is the forgotten giant of blood medicine. Its long yellow taproot is rich in anthraquinones that stimulate bile production and liver detoxification, and contains significant iron along with tannins that reduce intestinal inflammation. As a blood purifier in traditional herbalism, yellow dock addresses skin conditions at their root — the liver. It is especially powerful combined with nettles for anemia.",
    spiritualUses: [
      "Used in money-drawing spells in American folk magic — the seeds scattered at a threshold to draw prosperity.",
      "The long taproot symbolizes reaching deep into the earth for hidden resources and buried gifts.",
      "Associated with Jupiter and the liver in astrological herbalism — used to support optimism and expansive thinking.",
      "Carried in sachets to support legal matters and ensure fair outcomes in disputes and negotiations.",
    ],
    scientificBenefits: [
      "Contains up to 50mg of iron per 100g dried root — among the highest plant sources.",
      "Anthraquinone glycosides (emodin, chrysophanol) stimulate bile flow and hepatic detoxification pathways.",
      "Clinical use for chronic constipation — gentle laxative action without griping or cramping effects.",
      "Oxalate-bound tannins reduce gut inflammation and improve iron absorption from the intestinal lining.",
    ],
    howToUse:
      "Simmer 1 tsp dried root in 2 cups water for 20 minutes as a decoction. Take 1/2 cup 2x daily as an iron and liver tonic. Combine with nettles and molasses for a classic blood-building tonic syrup.",
    inStock: false,
    featured: false,
    rating: 4.6,
    reviews: 47,
    origin: "Local roadsides and field edges wildcrafted",
    regions: ["Pacific Northwest", "Rocky Mountains", "Great Plains", "Midwest", "Northeast", "Southeast"],
  },
  {
    id: "burdock",
    name: "Burdock Root",
    scientificName: "Arctium lappa",
    category: "weed",
    price: 12.99,
    unit: "2 oz dried root",
    image:
      "https://images.unsplash.com/photo-1618556819263-9c7c533b4c34?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Burdock large basal leaves with dark brown burr seed heads",
    gradient: "from-stone-700 to-amber-700",
    emoji: "🌱",
    tagline: "The deepest cleanser — roots that heal from the inside out.",
    highlights: [
      "Planetary herb of Saturn — purifies blood, skin, and karmic burdens alike.",
      "Inulin-rich root feeds beneficial gut bacteria and balances blood sugar levels.",
    ],
    shortDescription:
      "The classic blood purifier — deep liver and lymph cleanser for skin and vitality.",
    description:
      "Burdock (Arctium lappa) is one of the most powerful blood and lymph cleansers in the entire herbal pharmacopoeia. Its long taproot is packed with inulin prebiotic fiber, polyacetylenes, and bitter compounds that drive liver and lymphatic detoxification. Chronic skin conditions — acne, eczema, psoriasis — often respond dramatically to consistent burdock use because it addresses the underlying blood and lymph congestion. A cornerstone of traditional medicine worldwide.",
    spiritualUses: [
      "Hung over thresholds to ward off negative energies and protect the home from misfortune in Celtic traditions.",
      "As a Saturn herb, burdock is used in banishing and release rituals — clearing old patterns and stuck grief.",
      "The burr seeds symbolize tenacity and the ability to cling to purpose — carried as a talisman for perseverance.",
      "Used in cord-cutting rituals: the root placed at a crossroads to release what no longer serves.",
    ],
    scientificBenefits: [
      "Inulin content (up to 45% of carbohydrate) is one of the richest plant sources — strongly prebiotic for gut flora.",
      "Polyacetylenes demonstrate significant antifungal and antibacterial activity.",
      "Arctigenin — a lignan in burdock — shows anti-tumor and anti-inflammatory activity in multiple laboratory studies.",
      "Stimulates lymphatic drainage and reduces lymphedema, supporting clearance of metabolic waste.",
    ],
    howToUse:
      "Decoct 1–2 tsp dried root in 2 cups water for 20 minutes. Drink 1–2 cups daily as a long-term detox tonic. Add to soups and stir-fries fresh as gobo. Combine with dandelion root and red clover for a lymph cleanse blend.",
    inStock: false,
    featured: true,
    rating: 4.7,
    reviews: 58,
    origin: "Local disturbed land wildcrafted",
    regions: ["Pacific Northwest", "Rocky Mountains", "Great Plains", "Midwest", "Northeast"],
  },
  {
    id: "st-johns-wort",
    name: "St. John\'s Wort",
    scientificName: "Hypericum perforatum",
    category: "weed",
    price: 13.99,
    unit: "1.5 oz dried flower & bud",
    image:
      "https://images.unsplash.com/photo-1574773228580-9d2ec69b6f4e?w=600&auto=format&fit=crop&q=80",
    imageAlt: "St. John's Wort bright yellow flowers with translucent dotted petals",
    gradient: "from-yellow-500 to-orange-400",
    emoji: "☀️",
    tagline: "The sun\'s own medicine — light through darkness.",
    highlights: [
      "The ancient Midsummer herb — burned on bonfires to purify and call back the light.",
      "Multiple meta-analyses confirm efficacy equal to SSRIs for mild-to-moderate depression.",
    ],
    shortDescription:
      "Nature\'s antidepressant — centuries-proven sunshine herb for mood and nerves.",
    description:
      "St. John\'s Wort (Hypericum perforatum) is perhaps the most extensively studied medicinal herb of the 20th century and the Western world\'s premier plant remedy for depression. Blooming at the summer solstice, its bright yellow flowers turn any oil or tincture a deep blood-red when infused — the hypericin pigment responsible for both its color and its medicine. With over 29 clinical trials confirming its efficacy, it is prescribed as a first-line treatment for depression in Germany.",
    spiritualUses: [
      "The quintessential Midsummer herb — burned on solstice bonfires across Europe to purify and call back the light.",
      "Worn as a protective charm against dark spirits, melancholy, and psychic attack in European folk magic.",
      "Hung above doorways on St. John\'s Eve to prevent witchcraft and protect the household through winter.",
      "Associated with the sun — used in rituals to restore joy, clarity, and vital force to those lost in darkness.",
    ],
    scientificBenefits: [
      "Multiple Cochrane-reviewed meta-analyses confirm efficacy equivalent to SSRIs for mild-to-moderate depression.",
      "Hypericin inhibits reuptake of serotonin, dopamine, and norepinephrine — a unique triple-reuptake mechanism.",
      "Hyperforin has demonstrated potent anti-inflammatory activity against COX-1 and COX-2 pathways.",
      "Infused oil applied topically accelerates nerve regeneration and reduces neuropathic pain in clinical studies.",
    ],
    howToUse:
      "Brew 1 tsp dried flowers in hot water for 10 minutes, 3 cups daily. Benefits for depression appear after 4–6 weeks. Caution: interacts with many medications — consult a healthcare provider.",
    inStock: false,
    featured: true,
    rating: 4.9,
    reviews: 92,
    origin: "Local hillside wildcrafted (peak bloom harvest)",
    regions: ["Pacific Northwest", "West Coast", "Rocky Mountains", "Great Plains", "Midwest", "Northeast"],
  },
  {
    id: "plantain-weed",
    name: "Plantain (Broadleaf)",
    scientificName: "Plantago major",
    category: "weed",
    price: 8.99,
    unit: "1.5 oz dried leaf",
    image:
      "https://images.unsplash.com/photo-1628347785010-f2dde6ad70af?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Broadleaf plantain rosette with ribbed oval leaves and seed spikes",
    gradient: "from-lime-700 to-green-500",
    emoji: "🍃",
    tagline: "The world\'s most overlooked first-aid kit underfoot.",
    highlights: [
      "Called White Man\'s Foot — followed settlers everywhere as a potent healing ally.",
      "Aucubin and allantoin accelerate wound healing and reduce inflammation on contact.",
    ],
    shortDescription:
      "The sidewalk healer — instant sting relief, wound closure, and lung tonic.",
    description:
      "Broadleaf Plantain (Plantago major) is arguably the world\'s most accessible medicinal plant — it grows in every lawn, sidewalk crack, and trampled pathway on every continent. It is the original first aid kit: chewed and applied to bee stings, spider bites, and minor cuts, the raw leaf provides immediate, measurable relief. Internally it soothes inflamed mucous membranes. One of the nine sacred herbs in the Anglo-Saxon Lacnunga manuscript.",
    spiritualUses: [
      "Called The Way-Broad in Anglo-Saxon herbal tradition — one of the nine sacred herbs of the Lacnunga manuscript.",
      "Carried by travelers for protection and safe passage — its name and nature invoke finding your path.",
      "Used to break hexes and remove persistent bad luck in Appalachian and Ozark folk magic.",
      "A healing herb of the common people — used in rituals to restore humility, groundedness, and resilience.",
    ],
    scientificBenefits: [
      "Aucubin (an iridoid glycoside) demonstrates potent anti-inflammatory, antimicrobial, and wound-healing activity.",
      "Allantoin stimulates cell proliferation, accelerating wound closure and tissue repair topically and internally.",
      "Mucilage content soothes inflamed bronchial passages — one of the best herbs for irritating dry cough.",
      "Demonstrated inhibition of Helicobacter pylori — traditionally used for gastric ulcers and gut inflammation.",
    ],
    howToUse:
      "Chew a fresh leaf and apply directly to insect stings and minor wounds for immediate relief. Brew dried leaf as a respiratory tea for cough and sore throat. Add young leaves to salads.",
    inStock: false,
    featured: false,
    rating: 4.7,
    reviews: 53,
    origin: "Local pathside wildcrafted (pesticide-free zones)",
    regions: ["Pacific Northwest", "West Coast", "Rocky Mountains", "Great Plains", "Midwest", "Southeast", "Northeast"],
  },
  {
    id: "mugwort",
    name: "Mugwort",
    scientificName: "Artemisia vulgaris",
    category: "weed",
    price: 14.99,
    unit: "1 oz dried leaf & flower",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Mugwort silvery-green leaves with white undersides in tall stand",
    gradient: "from-stone-600 to-emerald-600",
    emoji: "🌙",
    tagline: "Artemis\'s herb — where the dream world meets the waking.",
    highlights: [
      "The premier dream herb — used for lucid dreaming and shamanic vision work across cultures.",
      "Thujone and camphor act on GABA receptors, creating mild sedation and altered dream states.",
    ],
    shortDescription:
      "The dream herb of Artemis — opens the gates of the night, sharpens vision.",
    description:
      "Mugwort (Artemisia vulgaris) is one of the most spiritually revered plants in the world — named for Artemis, the Greek goddess of the moon and wild places. In Chinese medicine it is the primary herb of moxibustion. Among shamanic practitioners worldwide, it is smoked or burned to open the gates of dream and vision. Its silvery, camphor-scented leaves grow abundantly along roadsides throughout the temperate world.",
    spiritualUses: [
      "The preeminent herb for lucid dreaming — stuffed into dream pillows or drunk as tea before sleep to enhance vividness.",
      "Burned as a smudge to cleanse spaces of psychic residue and open pathways between worlds.",
      "Associated with Artemis and Diana — used in full moon rituals to connect with feminine wisdom and wild nature.",
      "Used in shamanic traditions across Asia, Europe, and the Americas to open inner sight and facilitate journeying.",
    ],
    scientificBenefits: [
      "Thujone acts on GABA-A receptors, producing mild sedation, reduced anxiety, and altered dream-stage sleep.",
      "Used in moxibustion in Traditional Chinese Medicine — documented clinical efficacy for stimulating acupuncture points.",
      "Artemisia compounds demonstrate broad antiparasitic activity (related to artemisinin from A. annua).",
      "Bitter sesquiterpenes stimulate digestive enzymes and bile secretion — effective for sluggish digestion.",
    ],
    howToUse:
      "Brew a mild tea (1/2 tsp dried leaf) 30 minutes before bed for vivid dreams. Burn as a smudge or use in a dream pillow with lavender. Caution: avoid in pregnancy — strong uterine stimulant.",
    inStock: false,
    featured: true,
    rating: 4.9,
    reviews: 73,
    origin: "Local roadside and woodland edge wildcrafted",
    regions: ["Pacific Northwest", "West Coast", "Rocky Mountains", "Midwest", "Northeast"],
  },
  {
    id: "wild-violet",
    name: "Wild Violet",
    scientificName: "Viola sororia",
    category: "weed",
    price: 9.99,
    unit: "1.5 oz dried leaf & flower",
    image:
      "https://images.unsplash.com/photo-1604014236576-c91f05d26d8b?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Wild violet deep purple flowers with heart-shaped leaves in forest floor",
    gradient: "from-violet-600 to-purple-400",
    emoji: "💜",
    tagline: "Love\'s own medicine — soft, sweet, and powerfully healing.",
    highlights: [
      "A Venusian herb — carried in love spells to attract gentle, enduring affection.",
      "Among the highest plant sources of Vitamins A and C — 3x more than oranges by weight.",
    ],
    shortDescription:
      "Spring\'s first purple jewel — nutrient-dense and deeply soothing for body and heart.",
    description:
      "Wild Violet (Viola sororia) carpets forest floors with heart-shaped leaves and deep purple blooms each spring. The entire plant is edible — flowers in salads, leaves in teas, root medicinally. A gentle, deeply healing herb for lung, skin, and heart that is also one of the most nutritionally rich spring foods available.",
    spiritualUses: [
      "A Venusian herb — used in love spells, heart-opening rituals, and work to attract gentle, lasting love.",
      "Worn or carried to ease grief and sorrow — its purple color and heart-shaped leaves associate it with healing heartbreak.",
      "Used in sleep pillows to encourage peaceful sleep and sweet dreams in Celtic and English folk traditions.",
      "Associated with Aphrodite and the liminal season of spring — used in rituals of renewal and return.",
    ],
    scientificBenefits: [
      "Leaves contain three times more Vitamin C than oranges per gram — one of the richest plant sources available wild.",
      "Beta-carotene content rivals carrots — exceptional for eye health, skin, and immune function.",
      "Mucilaginous quality soothes inflamed mucous membranes in throat, lungs, and digestive tract.",
      "Rutin — a flavonoid abundant in violet — strengthens capillary walls and reduces bruising.",
    ],
    howToUse:
      "Add fresh leaves and flowers to spring salads. Brew as a gentle lung and lymph tea. Apply cooled tea as a topical wash for inflamed skin. Blend with cleavers and clover for a spring lymph tonic.",
    inStock: false,
    featured: false,
    rating: 4.6,
    reviews: 39,
    origin: "Local woodland and garden wildcrafted (spring harvest)",
    regions: ["Midwest", "Northeast", "Southeast"],
  },
  {
    id: "cleavers",
    name: "Cleavers",
    scientificName: "Galium aparine",
    category: "weed",
    price: 9.99,
    unit: "1.5 oz dried herb",
    image:
      "https://images.unsplash.com/photo-1598887141556-07e0d1e2d7a1?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Cleavers sticky green stems with whorled leaves clinging to wire fence",
    gradient: "from-lime-600 to-teal-400",
    emoji: "🌿",
    tagline: "Spring\'s sticky healer — clears the lymph and the spirit.",
    highlights: [
      "A spring purification herb — eaten to clear winter stagnation from body and energy.",
      "The premier lymphatic herb — clinically observed to reduce swollen lymph nodes.",
    ],
    shortDescription:
      "The sticky spring detoxer — the finest lymphatic herb growing in your hedge.",
    description:
      "Cleavers (Galium aparine) — the famously clingy spring weed that sticks to clothing and pets — reflects its traditional herbal action: it moves and clears the lymphatic system. Cleavers is widely regarded by herbalists as the single best herb for the lymphatic system — it decongests swollen lymph nodes and is a primary remedy for skin conditions, chronic infections, and post-illness recovery.",
    spiritualUses: [
      "As a spring purification herb, eating fresh cleavers at the spring equinox is a traditional act of cleansing.",
      "Its clinging nature symbolizes persistence, tenacity, and the power of gentle but relentless action.",
      "Used in folk traditions to enhance relationships — its stickiness invoked to strengthen bonds and loyalty.",
      "Associated with the fae and woodland spirits in British folklore — left as an offering to the little people of hedgerows.",
    ],
    scientificBenefits: [
      "Asperuloside (an iridoid glycoside) drives lymphatic activity, reducing lymphedema and congested lymph nodes.",
      "Strong diuretic action flushes urinary tract — used traditionally for cystitis and water retention.",
      "Coumarins and tannins produce mild blood-thinning effects, supporting healthy circulation.",
      "Rich in silica — supports connective tissue, skin collagen, and the integrity of lymphatic vessel walls.",
    ],
    howToUse:
      "Best used fresh — cold-infuse overnight in water for a potent lymphatic tonic. Juice fresh spring stems directly. Combine with wild violet and burdock for a complete spring cleanse.",
    inStock: false,
    featured: false,
    rating: 4.5,
    reviews: 34,
    origin: "Local hedgerow and woodland wildcrafted (spring)",
    regions: ["Pacific Northwest", "West Coast", "Midwest", "Northeast"],
  },

  // ── NEW HERBS ──────────────────────────────────────────
  {
    id: "lavender",
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    category: "herb",
    price: 11.99,
    unit: "1 oz dried flower",
    image:
      "https://images.unsplash.com/photo-1499578124509-1611b77778c5?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Rows of purple lavender flowers in full bloom under bright blue sky",
    gradient: "from-purple-500 to-indigo-400",
    emoji: "💜",
    tagline: "The soul\'s own perfume — calm, clean, and radiant.",
    highlights: [
      "Sacred to Hecate and used in ancient Roman purification baths as a cleanser of body and spirit.",
      "Linalool directly modulates GABA-A receptors producing measurable anxiolytic and sleep-improving effects.",
    ],
    shortDescription:
      "The world\'s most beloved herb — calming, uplifting, and universally healing.",
    description:
      "Lavender (Lavandula angustifolia) is the most widely used aromatic herb in the world. Its name derives from the Latin lavare (to wash) — Romans added it to their public baths. Linalool and linalyl acetate account for most therapeutic activity, directly modulating GABA receptors to produce calm without sedation. One of the most comprehensively researched herbs on the planet.",
    spiritualUses: [
      "Sacred to Hecate in ancient Greece — used in purification rites to cleanse sacred spaces and prepare for ritual.",
      "Strewn on floors and burned in censers in medieval Europe to drive away disease and negative spirits.",
      "Worn in small sachets over the heart to calm anxiety, attract love, and protect against harmful intent.",
      "Placed under pillows to induce peaceful sleep, sweet dreams, and access to psychic guidance at night.",
    ],
    scientificBenefits: [
      "Linalool acts on GABA-A receptors, producing anxiolytic effects equivalent to low-dose benzodiazepines in studies.",
      "Randomized controlled trial (silexan 80mg) showed significant improvement in generalized anxiety disorder.",
      "Topical lavender oil accelerates wound healing and reduces scar formation via antimicrobial action.",
      "Inhalation studies demonstrate reduced cortisol levels, lowered heart rate, and improved sleep quality.",
    ],
    howToUse:
      "Brew 1 tsp dried flowers as a calming tea before bed. Add to bath water for full-body nervous system relaxation. Infuse in honey for a beautiful culinary lavender syrup.",
    inStock: false,
    featured: false,
    rating: 4.8,
    reviews: 84,
    origin: "Pacific Northwest farm grown",
    regions: ["Pacific Northwest", "West Coast", "Southwest"],
  },
  {
    id: "chamomile",
    name: "German Chamomile",
    scientificName: "Matricaria chamomilla",
    category: "herb",
    price: 10.99,
    unit: "1 oz dried flower",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Chamomile white daisy flowers with yellow centers in a sunny field",
    gradient: "from-yellow-400 to-amber-300",
    emoji: "🌼",
    tagline: "The gentlest touch in the herb garden — soothing all storms.",
    highlights: [
      "Dedicated to the sun in Norse tradition — used to protect crops and bless the harvest.",
      "Apigenin binds to benzodiazepine receptors producing calm without the risk of dependence.",
    ],
    shortDescription:
      "The mother herb — gentle enough for babies, powerful enough to calm deep anxiety.",
    description:
      "German Chamomile (Matricaria chamomilla) is the most-consumed medicinal herb on Earth — over one million cups are drunk every day. Its apple-scented flowers contain apigenin, bisabolol, chamazulene (which gives steam-distilled oil its brilliant blue color), and dozens of flavonoids. Chamomile calms without sedating, soothes without numbing, and heals without side effects.",
    spiritualUses: [
      "Dedicated to the sun in Norse tradition — Baldur\'s herb, used to protect crops and bless the summer harvest.",
      "Used in money-drawing spells: washing hands in chamomile tea before business dealings is an old folk practice.",
      "Burned or placed on altars to cleanse negative energy and invite peace, reconciliation, and gentle healing.",
      "Given to agitated children and elders in folk medicine as both physical and spiritual calming medicine.",
    ],
    scientificBenefits: [
      "Apigenin binds to benzodiazepine receptors producing anxiolytic effects without sedation or dependency.",
      "Chamazulene and alpha-bisabolol are among the most potent anti-inflammatory compounds in the plant world.",
      "Antispasmodic action relaxes smooth muscle throughout the digestive tract — effective for IBS and cramping.",
      "Topical chamomile extract accelerates wound healing comparable to 1% hydrocortisone cream in clinical trials.",
    ],
    howToUse:
      "Steep 2 tsp dried flowers for 5–10 minutes. Safe for all ages including infants (diluted). Combine with lemon balm for anxiety, or with peppermint for digestive relief.",
    inStock: false,
    featured: false,
    rating: 4.8,
    reviews: 91,
    origin: "Local farm grown (pesticide-free)",
    regions: ["Pacific Northwest", "West Coast", "Rocky Mountains", "Midwest", "Northeast"],
  },
  {
    id: "echinacea",
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    category: "herb",
    price: 16.99,
    unit: "1.5 oz dried root & herb",
    image:
      "https://images.unsplash.com/photo-1597858520171-563a8e8b9925?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Echinacea purple coneflower with spiky orange-brown seed cone center",
    gradient: "from-pink-600 to-purple-500",
    emoji: "🌸",
    tagline: "The prairie\'s immune fortress — powerful and uncompromising.",
    highlights: [
      "The most-used medicinal plant of the Great Plains nations — sacred healing ally.",
      "Alkylamides activate cannabinoid receptor CB2 pathways — a direct immune modulator.",
    ],
    shortDescription:
      "America\'s premier immune herb — the Great Plains\' most sacred healing plant.",
    description:
      "Echinacea (Echinacea purpurea) was the most widely used medicinal plant of the Great Plains Indigenous nations. Used by the Lakota, Cheyenne, and dozens of other nations for wounds and infections, it was the most widely prescribed medicine in the United States before antibiotics. Modern research confirms its multifaceted immune activity.",
    spiritualUses: [
      "The most sacred healing herb of the Lakota and many Great Plains nations — used to invoke the healing power of the land.",
      "Added to ceremonial fires and healing ceremonies to call upon the spirit of strength and resilience.",
      "Planted at the perimeter of sacred spaces as a guardian of health and a symbol of the earth\'s healing will.",
      "Used in medicine bundles by many nations to protect against disease and strengthen warrior spirit.",
    ],
    scientificBenefits: [
      "Alkylamides bind to cannabinoid CB2 receptors, directly modulating innate immune response and NK cell activity.",
      "Polysaccharides activate macrophages — the body\'s first-line defenders against bacterial and viral infection.",
      "Multiple meta-analyses confirm reduction in cold and flu incidence and duration with prophylactic use.",
      "Caffeic acid derivatives (cichoric acid, echinacoside) provide antioxidant and antiviral activity.",
    ],
    howToUse:
      "Take as a tincture or brew 1 tsp dried root as a decoction at first sign of illness. Use intensively for 7–10 days, then rest. Cycle 3 weeks on, 1 week off through cold season for prevention.",
    inStock: false,
    featured: false,
    rating: 4.8,
    reviews: 76,
    origin: "Great Plains local grow",
    regions: ["Great Plains", "Midwest", "Rocky Mountains"],
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    category: "herb",
    price: 18.99,
    unit: "2 oz dried root powder",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Ashwagandha dried root powder in a wooden bowl with whole roots",
    gradient: "from-amber-600 to-orange-500",
    emoji: "🌰",
    tagline: "The strength of a horse — ancient resilience in every root.",
    highlights: [
      "The royal Ayurvedic rasayana — used for millennia to bestow the strength of a stallion.",
      "Withanolides reduce cortisol by 27% in double-blind trials while improving testosterone and thyroid function.",
    ],
    shortDescription:
      "The supreme Ayurvedic adaptogen — builds strength, reduces cortisol, and restores vitality.",
    description:
      "Ashwagandha (Withania somnifera) — meaning smell of horse in Sanskrit — is Ayurveda\'s premier rasayana (rejuvenating tonic) used for over 3,000 years. It has been subjected to dozens of rigorous clinical trials confirming traditional uses: reducing cortisol, improving thyroid function, enhancing testosterone in men, and improving cognitive performance under stress.",
    spiritualUses: [
      "The supreme royal herb of Ayurveda — given to kings, warriors, and scholars to bestow strength and endurance.",
      "Used in Vedic fire ceremonies as an offering to divine forces of vitality, strength, and longevity.",
      "Associated with Lord Shiva in Hindu tradition — its grounding, fortifying energy mirrors the god\'s earthy power.",
      "Given to those in spiritual practice to sustain the body through long fasts, rituals, and intensive meditation.",
    ],
    scientificBenefits: [
      "Withanolides reduce serum cortisol by an average of 27% in double-blind, placebo-controlled trials.",
      "Significantly improves testosterone levels, sperm quality, and fertility markers in men in randomized trials.",
      "Thyroid-stimulating activity shown in clinical studies — increases T3 and T4 in subclinical hypothyroidism.",
      "Improves reaction time, cognitive performance, and memory under stress in multiple human clinical trials.",
    ],
    howToUse:
      "Take 300–600 mg standardized extract daily, or stir 1 tsp root powder into warm milk with honey and cardamom for traditional Ayurvedic moon milk. Best taken consistently for 4–8 weeks.",
    inStock: false,
    featured: true,
    rating: 4.9,
    reviews: 108,
    origin: "Certified organic — Pacific Northwest cultivated",
    regions: ["Pacific Northwest", "Southwest", "West Coast"],
  },
  {
    id: "spearmint",
    name: "Spearmint",
    scientificName: "Mentha spicata",
    category: "herb",
    price: 9.99,
    unit: "1.5 oz dried leaf",
    image:
      "https://images.unsplash.com/photo-1628357784840-f78b41ea4ade?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Spearmint fresh bright green pointed leaves close-up with water drops",
    gradient: "from-emerald-500 to-cyan-400",
    emoji: "🌿",
    tagline: "Cool clarity, sweet breath, and a bright mind.",
    highlights: [
      "Mint of Venus — used in love spells and sensory rituals for its uplifting, attractive energy.",
      "Antiandrogenic effect reduces excess androgens in women with PCOS in clinical trials.",
    ],
    shortDescription:
      "The sweeter mint — uplifting, cooling, and perfect for digestion and focus.",
    description:
      "Spearmint (Mentha spicata) is the sweeter, gentler cousin of peppermint. Its primary compound carvone gives it a milder, warmer flavor. Modern research has uncovered surprising applications including hormonal modulation in PCOS. Its uplifting clear scent relieves headaches, improves focus, and freshens any space.",
    spiritualUses: [
      "A herb of Venus in the Western magical tradition — used in love spells, attraction rituals, and to sweeten relationships.",
      "Burned or diffused to uplift mood, clear mental fog, and promote clear communication.",
      "Used in ritual baths and floor washes to cleanse a space of negativity and invite fresh positive energy.",
      "Given to travelers as a gift of protection and to ensure their safe and pleasant return.",
    ],
    scientificBenefits: [
      "Two cups of spearmint tea daily shown to significantly reduce free androgens in women with PCOS over 30 days.",
      "Rosmarinic acid and flavones inhibit 5-alpha-reductase, reducing conversion of testosterone to DHT.",
      "Strong antioxidant and anti-inflammatory profile — inhibits cyclooxygenase enzymes in vitro.",
      "Carminative action relieves intestinal gas, bloating, and IBS symptoms — one of the safest digestive herbs.",
    ],
    howToUse:
      "Brew 1–2 tsp dried leaf as a refreshing digestive tea. For PCOS hormonal support, drink 2 cups daily consistently. Combine with lemon balm for a bright, calming herbal blend.",
    inStock: false,
    featured: false,
    rating: 4.6,
    reviews: 52,
    origin: "Local garden grown (pesticide-free)",
    regions: ["Pacific Northwest", "West Coast", "Midwest", "Northeast"],
  },
  {
    id: "red-clover",
    name: "Red Clover",
    scientificName: "Trifolium pratense",
    category: "herb",
    price: 10.99,
    unit: "1.5 oz dried flower",
    image:
      "https://images.unsplash.com/photo-1599666433232-8ec9bc97e461?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Red clover pink-purple globe flowers in a sunny summer meadow",
    gradient: "from-pink-500 to-rose-400",
    emoji: "🍀",
    tagline: "Meadow medicine — blood purifier for the long journey.",
    highlights: [
      "A Druidic sacred plant — four-leaf clover is the mark of the seer and the blessed.",
      "Isoflavone phytoestrogens reduce hot flash frequency by 44% in menopausal women.",
    ],
    shortDescription:
      "Meadow\'s most nourishing bloom — a deep blood cleanser and hormonal balancer.",
    description:
      "Red Clover (Trifolium pratense) is a deeply medicinal legume with pink-magenta globe flowers rich in isoflavones that act as gentle phytoestrogens, making it one of the most studied herbs for menopause and cardiovascular protection. Herbalists have long used it as a blood purifier — its deep nourishment of the lymph and blood reflected in modern research.",
    spiritualUses: [
      "The sacred plant of the Druids — the four-leaf variety was a sign of prophetic sight and extraordinary blessing.",
      "Placed in protective charm bags to avert misfortune and ensure good luck in all endeavors.",
      "Used in prosperity spells and to attract financial abundance — scatter blossoms around the home.",
      "A plant of love magic — used in potions and rituals to attract and maintain romantic partnerships.",
    ],
    scientificBenefits: [
      "Isoflavones (formononetin, biochanin A) — clinical trials show 44% reduction in hot flash frequency in menopause.",
      "Reduces LDL cholesterol and increases HDL in postmenopausal women — significant cardiovascular protection.",
      "Anti-tumor activity against breast and prostate cancer cells demonstrated in laboratory and epidemiological studies.",
      "Coumarins improve blood fluidity and reduce risk of arterial plaque formation.",
    ],
    howToUse:
      "Brew 2 tsp dried flower heads as a mildly sweet, pleasant tea. Take consistently for hormonal and cardiovascular benefits — results appear after 4–8 weeks. Combine with sage for menopause support.",
    inStock: false,
    featured: false,
    rating: 4.6,
    reviews: 47,
    origin: "Local meadow wildcrafted (pesticide-free)",
    regions: ["Pacific Northwest", "Rocky Mountains", "Great Plains", "Midwest", "Northeast"],
  },

  // ── NEW NUTS ──────────────────────────────────────────
  {
    id: "american-chestnut",
    name: "American Chestnut",
    scientificName: "Castanea dentata",
    category: "nut",
    price: 22.99,
    unit: "3 oz dried nuts",
    image:
      "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=600&auto=format&fit=crop&q=80",
    imageAlt: "American chestnut glossy brown nuts partially out of spiky green burr",
    gradient: "from-amber-800 to-yellow-600",
    emoji: "🌰",
    tagline: "The ghost tree\'s nut — resilience reborn from the forest floor.",
    highlights: [
      "The great Eastern forest spirit — its loss called ecological genocide by naturalists.",
      "High in complex carbohydrates and low in fat — the original sustainable forest staple food.",
    ],
    shortDescription:
      "The Eastern forest\'s lost king — a rare, resilient nut with extraordinary flavor.",
    description:
      "The American Chestnut was once the most important food tree in the Eastern Woodlands — so dominant that ecologists called it the redwood of the East. A fungal blight in the early 20th century killed nearly four billion trees in one of the most devastating ecological catastrophes in history. Today, breeding programs are painstakingly restoring blight-resistant varieties.",
    spiritualUses: [
      "Associated with remembrance, grief, and ecological healing — holding space for what was lost and honoring its restoration.",
      "The great ancestors of the forest — used in land-healing ceremonies to honor the spirit of the Eastern woodland.",
      "Eaten in autumn ceremonies as a connection to the bounty that once sustained millions of beings.",
      "A symbol of resilience and return — used in rituals of renewal, hope, and ecological restoration work.",
    ],
    scientificBenefits: [
      "Uniquely low in fat (only 1g per oz) and high in complex carbohydrates — a tree-based starch unmatched in the nut world.",
      "Rich in Vitamin C (26mg per 100g, unusual in nuts) — supports immune function and collagen synthesis.",
      "Significant potassium content (484mg/100g) supports cardiovascular health and blood pressure.",
      "High dietary fiber content feeds beneficial gut microbiome and supports steady blood sugar levels.",
    ],
    howToUse:
      "Roast over an open fire — score an X through the skin first. Grind into gluten-free flour for breads and pasta. Puree into a sweet, creamy spread. Add to soups and stews as a hearty starchy element.",
    inStock: false,
    featured: false,
    rating: 4.8,
    reviews: 41,
    origin: "Eastern Appalachian restoration grove harvest",
    regions: ["Northeast", "Southeast", "Midwest"],
  },
  {
    id: "hazelnut",
    name: "American Hazelnut",
    scientificName: "Corylus americana",
    category: "nut",
    price: 15.99,
    unit: "3 oz shelled whole nuts",
    image:
      "https://images.unsplash.com/photo-1574349952435-d7db48e1cfc4?w=600&auto=format&fit=crop&q=80",
    imageAlt: "American hazelnut clusters with papery husk on branch",
    gradient: "from-amber-600 to-yellow-500",
    emoji: "🌰",
    tagline: "The witch hazel\'s cousin — wisdom from the hedgerow.",
    highlights: [
      "The nut of wisdom in Celtic tradition — eating hazel grants prophetic sight.",
      "Richest nut source of Vitamin E (15mg/100g) — potent antioxidant protection for cells and skin.",
    ],
    shortDescription:
      "The wisdom nut — native hazelnut packed with heart-healthy fats and ancient lore.",
    description:
      "The American Hazelnut is a native shrub of the Eastern woodlands and prairies. In Celtic mythology, hazel was the tree of wisdom and poetic inspiration — the legendary Salmon of Knowledge fed upon hazel nuts that fell into a sacred pool, gaining all worldly wisdom.",
    spiritualUses: [
      "The tree of wisdom in Celtic tradition — hazel wands are the preferred tool for water dowsing and finding hidden things.",
      "Hazelnuts eaten before divination to enhance psychic clarity and access hidden knowledge.",
      "Associated with Mercury and Hermes — used in spells for communication, travel, and quick movement of ideas.",
      "Planted at the boundary of a property as a protective hedgerow against intrusion and misfortune.",
    ],
    scientificBenefits: [
      "Richest nut source of Vitamin E — 15mg per 100g provides nearly 100% of daily needs for antioxidant cell protection.",
      "High oleic acid (monounsaturated fat) content lowers LDL cholesterol and raises HDL — equivalent to olive oil.",
      "Rich in proanthocyanidins — flavonoids that reduce urinary tract infection risk and protect vascular walls.",
      "Manganese-rich (nearly 100% DV per oz) — essential for bone density, cartilage formation, and antioxidant enzymes.",
    ],
    howToUse:
      "Eat raw or lightly toasted. Grind into hazelnut butter. Press into a delicious culinary oil. Chop into granola, trail mix, and baked goods.",
    inStock: false,
    featured: false,
    rating: 4.7,
    reviews: 53,
    origin: "Great Lakes region local harvest",
    regions: ["Midwest", "Northeast", "Great Plains"],
  },
  {
    id: "white-oak-acorn",
    name: "Acorn Flour (White Oak)",
    scientificName: "Quercus alba",
    category: "nut",
    price: 17.99,
    unit: "4 oz leached & dried flour",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&auto=format&fit=crop&q=80",
    imageAlt: "White oak acorns with caps clustered on forest floor among autumn leaves",
    gradient: "from-stone-600 to-amber-600",
    emoji: "🍂",
    tagline: "The original staff of life — the forest\'s own flour.",
    highlights: [
      "The sacred World Tree — under whose boughs laws were made and oaths were sworn.",
      "Low-glycemic acorn flour provides sustained energy with exceptional mineral density.",
    ],
    shortDescription:
      "The ancestral staple food — leached acorn flour from the mighty White Oak.",
    description:
      "White Oak acorns were the single most important plant food for Indigenous peoples across the Eastern United States — ground into flour, steeped into porridge, and processed into cooking oil. White oak acorns are the sweetest and least tannic of all North American oaks. The resulting flour is mild, slightly sweet, and rich in complex carbohydrates, healthy fats, and minerals.",
    spiritualUses: [
      "The oak is the World Tree of Norse, Celtic, and Greek traditions — sacred to Zeus, Jupiter, Thor, and the Druids.",
      "Acorns carried as good luck charms to attract abundance, fertility, and strength in folk traditions worldwide.",
      "The oak is a symbol of endurance, sovereignty, and sacred law — oaths sworn under oak trees in countless cultures.",
      "Used in ceremony to honor the cyclical turning of the year — the acorn represents the potential of the great tree.",
    ],
    scientificBenefits: [
      "Complex carbohydrates provide low-glycemic sustained energy — ideal for blood sugar regulation.",
      "Rich in manganese, magnesium, potassium, and iron — a remarkably mineral-dense wild food.",
      "Tannins (at food-safe levels after leaching) provide antimicrobial and anti-inflammatory action in the gut.",
      "Gluten-free flour with high oleic acid — supporting cardiovascular health.",
    ],
    howToUse:
      "Use leached acorn flour in pancakes, breads, and cookies (substitute 25–50% of regular flour). Mix into porridge for a hearty ancestral breakfast. Blend into soups as a thickener.",
    inStock: false,
    featured: false,
    rating: 4.5,
    reviews: 36,
    origin: "Eastern Woodlands wild harvest (autumn)",
    regions: ["Midwest", "Northeast", "Southeast"],
  },

  // ── FRUITS ────────────────────────────────────────────
  {
    id: "pawpaw",
    name: "Pawpaw",
    scientificName: "Asimina triloba",
    category: "fruit",
    price: 19.99,
    unit: "2 oz dried fruit",
    image:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Pawpaw yellow-green oblong fruits hanging from woodland branch",
    gradient: "from-lime-600 to-yellow-400",
    emoji: "🍈",
    tagline: "America\'s forgotten tropical treasure hiding in plain sight.",
    highlights: [
      "The dream food of Indigenous nations — shared at councils and festivals of abundance.",
      "Acetogenins unique to pawpaw are among the most potent natural cytotoxic compounds known.",
    ],
    shortDescription:
      "North America\'s largest native fruit — tropical flavor from a temperate forest.",
    description:
      "The Pawpaw (Asimina triloba) is North America\'s largest native fruit — a relative of tropical custard apples that produces rich, custardy fruits tasting like a cross between banana, mango, and vanilla. Found wild in bottomland forests from Florida to Ontario, it was a critical food for Indigenous peoples and Lewis and Clark\'s expedition.",
    spiritualUses: [
      "A symbol of the hidden abundance of the North American forest — used in ceremonies to honor the generosity of the land.",
      "The sweet, tropical fruit shared at councils and celebrations — an offering of joy and unexpected gifts.",
      "Associated with the mystery of the forest interior — its shade-loving nature connects it to hidden wisdom.",
      "Planted to attract wildlife and honor the ecosystem in a chain of abundance.",
    ],
    scientificBenefits: [
      "Acetogenins (asimicin, bullatacin) are among the most potent known cytotoxic compounds — active research in oncology.",
      "Exceptional Vitamin C content supports immune function and collagen synthesis.",
      "High in riboflavin (B2), niacin (B3), and iron — nutrients often lacking in plant-heavy diets.",
      "Rich in antioxidant carotenoids and polyphenols that protect cells from oxidative damage.",
    ],
    howToUse:
      "Eat ripe pawpaw fresh out of hand — scoop custard with a spoon. Blend into smoothies or ice cream. Substitute for banana in any baked good. Dry at low temperature for shelf-stable powder.",
    inStock: false,
    featured: true,
    rating: 4.9,
    reviews: 61,
    origin: "Eastern Woodlands wild harvest",
    regions: ["Midwest", "Southeast", "Northeast"],
  },
  {
    id: "serviceberry",
    name: "Serviceberry (Juneberry)",
    scientificName: "Amelanchier canadensis",
    category: "fruit",
    price: 14.99,
    unit: "2 oz dried berry",
    image:
      "https://images.unsplash.com/photo-1597495655652-2a41b3c24e0e?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Serviceberry small purple-red berries clustered on branch with green leaves",
    gradient: "from-violet-500 to-indigo-400",
    emoji: "🫐",
    tagline: "Spring\'s first berry — blueberry\'s wild woodland cousin.",
    highlights: [
      "First fruit of spring — eaten to mark the return of life and vitality after winter.",
      "Higher antioxidant ORAC score than blueberries — exceptional anthocyanin density.",
    ],
    shortDescription:
      "Spring\'s first wild berry — sweeter than blueberry, packed with antioxidants.",
    description:
      "Serviceberry (Amelanchier canadensis) is one of the most beloved wild fruits of the Eastern and Northern forests. Its white blossoms are among the first flowers of spring. The small, sweet fruits are more complex than blueberry, with an almond note from the seeds. Indigenous peoples dried serviceberries into pemmican — their essential preserved travel food.",
    spiritualUses: [
      "The first sweet fruit of spring — eaten at the spring equinox to mark the return of abundance and warmth.",
      "Used in funerary traditions — planted on graves and eaten at memorial meals to honor those who have passed.",
      "A bird medicine plant — attracts migratory songbirds, associated with song, joy, and the spirit\'s flight.",
      "Sharing serviceberries at a communal meal is an act of friendship and trust in Eastern Woodland traditions.",
    ],
    scientificBenefits: [
      "Higher anthocyanin density than blueberries — exceptional antioxidant ORAC score for cellular protection.",
      "Rich in iron (1.17mg/100g) and copper — supports blood health, energy, and connective tissue formation.",
      "Quercetin and kaempferol flavonoids demonstrate anti-inflammatory and cardioprotective effects.",
      "Significant Vitamin C content enhances non-heme iron absorption from plant foods.",
    ],
    howToUse:
      "Eat fresh by the handful. Dry into sweet raisins for trail mix. Cook into jam or syrup. Bake into muffins and pies as a direct blueberry substitute with more complex flavor.",
    inStock: false,
    featured: false,
    rating: 4.7,
    reviews: 44,
    origin: "Northeast and Great Lakes wild harvest",
    regions: ["Northeast", "Midwest", "Great Plains"],
  },
  {
    id: "rose-hips",
    name: "Rose Hips",
    scientificName: "Rosa canina",
    category: "fruit",
    price: 13.99,
    unit: "2 oz dried whole hips",
    image:
      "https://images.unsplash.com/photo-1598522394192-f38ffb47f3d2?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Rose hips bright red oval fruits on thorny stems after first frost",
    gradient: "from-red-600 to-orange-500",
    emoji: "🌹",
    tagline: "A rose\'s true gift — the ruby jewel that outlasts the flower.",
    highlights: [
      "Associated with Venus — the rose\'s true essence distilled into a resilient winter fruit.",
      "Contains 20x more Vitamin C than oranges — the highest density of any common fruit.",
    ],
    shortDescription:
      "The rose\'s winter fruit — a Vitamin C powerhouse with deep restorative properties.",
    description:
      "Rose Hips — the fruit of the Dog Rose (Rosa canina) — ripen after the first frost, rich in Vitamin C (20× more than oranges), carotenoids, flavonoids, and essential fatty acids. During World War II, the British government organized mass harvest of rose hips to replace citrus Vitamin C cut off by German blockades.",
    spiritualUses: [
      "The heart of the rose\'s spirit — used in love magic after the bloom fades, symbolizing enduring love.",
      "Associated with Venus — placed on altars for love, beauty, healing, and the sacred feminine.",
      "Used in winter protection rituals — their bright red color in the grey season is a symbol of life\'s persistence.",
      "Ground and worn as a perfumed offering to invoke healing and attract love.",
    ],
    scientificBenefits: [
      "Contains 400–500mg Vitamin C per 100g — 20× more than oranges and among the highest of any food source.",
      "GOPO (a galactolipid in rose hips) demonstrated significant reduction in osteoarthritis pain in clinical trials.",
      "Trans-retinoic acid from carotenoids promotes skin cell turnover and reduces wrinkles topically.",
      "Pectin and malic acid support digestive health, regulate bowel function, and feed beneficial gut bacteria.",
    ],
    howToUse:
      "Brew as a tangy, ruby-red tea (simmer 10 mins to extract Vitamin C). Make rose hip syrup with raw honey. Blend dried hip powder into smoothies. Use in jams for tart flavor and nutrition.",
    inStock: false,
    featured: false,
    rating: 4.7,
    reviews: 68,
    origin: "Local woodland edge wildcrafted (post-frost harvest)",
    regions: ["Pacific Northwest", "Rocky Mountains", "Northeast", "Midwest"],
  },
  {
    id: "hawthorn-berries",
    name: "Hawthorn Berries",
    scientificName: "Crataegus monogyna",
    category: "fruit",
    price: 14.99,
    unit: "2 oz dried berry",
    image:
      "https://images.unsplash.com/photo-1601046800248-8f5dd76e0b73?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Hawthorn deep red berries in dense clusters on thorny branches",
    gradient: "from-red-700 to-red-500",
    emoji: "❤️",
    tagline: "The heart tree\'s medicine — thorns that guard deep tenderness.",
    highlights: [
      "The faerie tree — where offerings are left at springs and sacred thresholds across Celtic lands.",
      "Oligomeric proanthocyanidins increase coronary blood flow in multiple clinical trials.",
    ],
    shortDescription:
      "The heart herb of the hedgerow — deeply protective for the physical and emotional heart.",
    description:
      "Hawthorn (Crataegus monogyna) is the premier heart herb of Western herbalism — sacred across Celtic Europe as the faerie tree. In modern phytotherapy it is one of the most thoroughly studied herbs for cardiovascular health, with dozens of clinical trials confirming improved blood flow, reduced cardiac inflammation, and improved heart muscle function.",
    spiritualUses: [
      "The most sacred faerie tree in the British Isles — solitary hawthorns are protected, offerings tied to their branches.",
      "The Beltane tree — its white blossoms mark the beginning of summer in the Celtic calendar.",
      "Used to protect against misfortune — a hawthorn planted near the home guards against lightning and evil.",
      "The tree of the guarded heart — its thorns remind that the most tender things require the strongest protection.",
    ],
    scientificBenefits: [
      "Oligomeric proanthocyanidins (OPCs) increase coronary blood flow and cardiac output in randomized trials.",
      "Vitexin and other flavonoids reduce peripheral vascular resistance, effectively lowering blood pressure.",
      "SPICE trial showed hawthorn extract significantly reduced risk of early death from heart failure.",
      "Anti-inflammatory quercetin and hyperoside protect endothelial cells lining arteries from oxidative damage.",
    ],
    howToUse:
      "Simmer 1 tbsp dried berries in 2 cups water for 20 minutes for a dark rich heart tonic tea. Add to elderberry syrup. Take consistently for 3+ months for cardiovascular benefit.",
    inStock: false,
    featured: false,
    rating: 4.8,
    reviews: 55,
    origin: "Local hedgerow wildcrafted (autumn harvest)",
    regions: ["Pacific Northwest", "Northeast", "Midwest"],
  },
  {
    id: "persimmon",
    name: "Wild Persimmon",
    scientificName: "Diospyros virginiana",
    category: "fruit",
    price: 16.99,
    unit: "2 oz dried fruit slices",
    image:
      "https://images.unsplash.com/photo-1587735243475-37dba12f2671?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Wild persimmon glowing orange fruits on bare winter branches",
    gradient: "from-orange-600 to-amber-400",
    emoji: "🟠",
    tagline: "The frost-kissed amber — sweetness earned through patience.",
    highlights: [
      "A tree of the sun — its fire-orange fruits offered at Samhain as light in the darkening season.",
      "Among the highest beta-carotene and betulinic acid content of any North American fruit.",
    ],
    shortDescription:
      "The native orange gem — frost-sweetened wild persimmon, extraordinary in flavor and medicine.",
    description:
      "Wild Persimmon (Diospyros virginiana) transforms dramatically after the first frost: the orange fruits soften into a sweet, rich, complex delicacy with notes of honey, cinnamon, and brown sugar. Native to the Southeast and Midwest, it was a vital food for Indigenous peoples. Its unique betulinic acid compounds are of significant research interest in oncology.",
    spiritualUses: [
      "A solar fruit that holds the fire of summer into autumn — used in sun ceremonies and as an offering to fire and light.",
      "Its dramatic transformation from bitter to sweet after frost is a metaphor for patience and the gifts of time.",
      "Used in divination — Appalachian tradition holds that the seed kernel shape predicts winter severity.",
      "Planted to honor the land and attract wildlife in ecological restoration ceremony.",
    ],
    scientificBenefits: [
      "Among the highest beta-carotene density of any North American fruit — exceptional for eye health and immunity.",
      "Betulinic acid demonstrates significant apoptotic activity against melanoma and neuroblastoma cell lines.",
      "High in catechins and proanthocyanidins — antioxidant protection for vascular tissue.",
      "Significant Vitamin C, potassium, and dietary fiber supporting immune, cardiovascular, and digestive health.",
    ],
    howToUse:
      "Only eat after frost or when fully soft — never unripe. Blend into pudding with vanilla, or dry into persimmon leather. Add dried slices to oatmeal. Make into traditional persimmon bread.",
    inStock: false,
    featured: false,
    rating: 4.7,
    reviews: 38,
    origin: "Southeast and Midwest wild harvest (post-frost)",
    regions: ["Southeast", "Midwest", "Great Plains"],
  },
  {
    id: "gooseberry",
    name: "Gooseberry",
    scientificName: "Ribes uva-crispa",
    category: "fruit",
    price: 13.99,
    unit: "2 oz dried berry",
    image:
      "https://images.unsplash.com/photo-1597865554780-a3a0ece7e72a?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Gooseberry translucent green and red berries with striped skin on bush",
    gradient: "from-lime-500 to-green-500",
    emoji: "��",
    tagline: "Tart ancestral jewels — the sharp medicine of the hedgerow.",
    highlights: [
      "A fairy hedge fruit — planted to guard crossroads and boundaries in British folklore.",
      "Exceptionally rich in pectin, Vitamin C, and quercetin for gut and vascular health.",
    ],
    shortDescription:
      "The bold, tart hedgerow berry — ancestral food with exceptional gut and immune benefits.",
    description:
      "Gooseberry (Ribes uva-crispa) is one of Europe\'s most beloved wild hedge fruits — eaten fresh, preserved in jams, and fermented into wine across the British Isles and Scandinavia. The fruits are exceptionally high in pectin, making them ideal for jam-making, and contain extraordinary concentrations of Vitamin C, quercetin, and other flavonoids.",
    spiritualUses: [
      "A fairy hedge plant — planted at boundaries, crossroads, and thresholds to guard and define sacred space.",
      "The tart berry used in folk medicine and magic to cut through illusions, lies, and confusion.",
      "Eaten in midsummer celebrations in Britain and Scandinavia — a first-fruits offering of the garden season.",
      "Associated with the protective, sharp-tongued wisdom of elder women in European folk tradition.",
    ],
    scientificBenefits: [
      "Among the highest pectin content of any fruit — gel-forming fiber that feeds Lactobacillus and reduces LDL.",
      "Exceptionally rich in quercetin — among the highest flavonoid content in the Ribes family.",
      "Vitamin C content (28mg/100g) supports immune function, collagen synthesis, and antioxidant defense.",
      "Tannins provide astringent antimicrobial action in the gut — used for diarrhea and intestinal inflammation.",
    ],
    howToUse:
      "Cook into jam, syrup, or compote. Blend into shrubs (drinking vinegars) for a health tonic. Add to fruit crumbles and pies. Ferment into gooseberry wine. Dried berries brew into a tart nutritious tea.",
    inStock: false,
    featured: false,
    rating: 4.5,
    reviews: 33,
    origin: "Pacific Northwest and Northeast local harvest",
    regions: ["Pacific Northwest", "Northeast", "Midwest"],
  },

];
export const featuredProducts = products.filter((p) => p.featured);

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (category: Category): Product[] =>
  products.filter((p) => p.category === category);

export const categoryMeta: Record<
  Category,
  { label: string; color: string; bg: string; emoji: string; description: string }
> = {
  herb: {
    label: "Herbs",
    color: "text-emerald-800",
    bg: "bg-emerald-100",
    emoji: "🌿",
    description: "Aromatic healing plants harvested at peak potency",
  },
  nut: {
    label: "Nuts",
    color: "text-amber-800",
    bg: "bg-amber-100",
    emoji: "🌰",
    description: "Wild-foraged native nuts bursting with nutrition",
  },
  weed: {
    label: "Wild Weeds",
    color: "text-lime-800",
    bg: "bg-lime-100",
    emoji: "🌼",
    description: "Overlooked roadside plants hiding extraordinary power",
  },
  vegetable: {
    label: "Vegetables",
    color: "text-teal-800",
    bg: "bg-teal-100",
    emoji: "🥦",
    description: "Native edibles straight from forested lands",
  },
  fruit: {
    label: "Fruits",
    color: "text-rose-800",
    bg: "bg-rose-100",
    emoji: "🍒",
    description: "Wild and native fruits ripe with flavor and medicine",
  },
};
