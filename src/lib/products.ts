export type Category = "herb" | "nut" | "weed" | "vegetable";

export interface Product {
  id: string;
  name: string;
  scientificName: string;
  category: Category;
  price: number;
  unit: string;
  image: string;
  gradient: string; // fallback gradient when image doesn't load
  emoji: string;
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
      "https://images.unsplash.com/photo-1518531933037-4dbf045f1842?w=600&auto=format&fit=crop&q=80",
    gradient: "from-emerald-700 to-emerald-500",
    emoji: "🌿",
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
  },
  {
    id: "tulsi",
    name: "Holy Basil (Tulsi)",
    scientificName: "Ocimum tenuiflorum",
    category: "herb",
    price: 12.99,
    unit: "1.5 oz dried leaf",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80",
    gradient: "from-emerald-700 to-lime-500",
    emoji: "🌱",
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
    gradient: "from-teal-700 to-emerald-500",
    emoji: "🌾",
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
    gradient: "from-lime-600 to-yellow-400",
    emoji: "🍋",
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
    gradient: "from-yellow-600 to-amber-500",
    emoji: "🌻",
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
    gradient: "from-amber-700 to-orange-500",
    emoji: "🫧",
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
    gradient: "from-stone-700 to-amber-600",
    emoji: "🌰",
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
    gradient: "from-yellow-700 to-amber-500",
    emoji: "🍂",
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
      "https://images.unsplash.com/photo-1531217040651-e7a8f6bde316?w=600&auto=format&fit=crop&q=80",
    gradient: "from-yellow-500 to-green-500",
    emoji: "🌼",
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
    gradient: "from-green-600 to-emerald-400",
    emoji: "🌿",
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
    gradient: "from-lime-500 to-emerald-400",
    emoji: "⭐",
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
    gradient: "from-green-500 to-teal-400",
    emoji: "💚",
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
    gradient: "from-orange-600 to-yellow-500",
    emoji: "🌻",
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
    gradient: "from-emerald-700 to-lime-500",
    emoji: "🧄",
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
    gradient: "from-purple-800 to-violet-600",
    emoji: "🫐",
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
    gradient: "from-green-800 to-teal-600",
    emoji: "🌴",
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
    gradient: "from-violet-700 to-purple-500",
    emoji: "🌸",
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
    gradient: "from-fuchsia-700 to-purple-500",
    emoji: "🍇",
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
    gradient: "from-emerald-800 to-green-500",
    emoji: "☕",
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
    gradient: "from-teal-600 to-green-500",
    emoji: "🥬",
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
};
