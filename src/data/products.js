// Scalable Catalog Architecture — Products collection
// Add new products here; all product cards and pages render from this data.

const products = [
  // ── Basmati Rice ──────────────────────────────────────────────
  {
    id: 'basmati-rice',
    name: 'Basmati Rice',
    slug: 'basmati-rice',
    categoryId: 'agri-commodities',
    summary:
      'Premium long-grain aromatic Basmati rice, available in three distinctive varieties.',
    description:
      '[Description to be approved — placeholder for now]',
    image: null,
    marketTags: ['New Zealand'],
    order: 1,
    varieties: [
      {
        name: '1509 Basmati',
        grainLength: '[To be provided]',
        aroma: '[To be provided]',
        typicalUse: '[To be provided]',
      },
      {
        name: '1121 Basmati',
        grainLength: '[To be provided]',
        aroma: '[To be provided]',
        typicalUse: '[To be provided]',
      },
      {
        name: 'Mata Rice',
        grainLength: '[To be provided]',
        aroma: '[To be provided]',
        typicalUse: '[To be provided]',
      },
    ],
  },

  // ── Non-Basmati Rice ──────────────────────────────────────────
  {
    id: 'non-basmati-rice',
    name: 'Non-Basmati Rice',
    slug: 'non-basmati-rice',
    categoryId: 'agri-commodities',
    summary:
      'Versatile non-Basmati rice varieties for everyday use and bulk supply.',
    description:
      '[Description to be approved — placeholder for now]',
    image: null,
    marketTags: ['New Zealand'],
    order: 2,
    varieties: [],
  },

  // ── Fox Nut (Makhana) ─────────────────────────────────────────
  {
    id: 'fox-nut',
    name: 'Fox Nut (Makhana)',
    slug: 'fox-nut',
    categoryId: 'agri-commodities',
    summary:
      'Nutrient-rich popped fox nuts (Makhana) from India, a premium superfood snack.',
    description:
      '[Description to be approved — placeholder for now]',
    image: null,
    marketTags: [],
    order: 3,
    varieties: [],
  },

  // ── Flax Seed ──────────────────────────────────────────────────
  {
    id: 'flax-seed',
    name: 'Flax Seed',
    slug: 'flax-seed',
    categoryId: 'agri-commodities',
    summary:
      'High-quality Indian flax seeds (linseed), rich in omega-3 and dietary fiber.',
    description:
      '[Description to be approved — placeholder for now]',
    image: null,
    marketTags: [],
    order: 4,
    varieties: [],
  },
];

export default products;
