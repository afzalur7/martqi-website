// Scalable Catalog Architecture — Products collection
// Add new products here; all product cards and pages render from this data.
// Copy approved in section 3.3 of the project doc — do not reword.

import basmatiRiceImg from '../assets/products/basmati-rice.webp';
import basmati1121Img from '../assets/products/basmati-1121.webp';
import mattaRiceImg from '../assets/products/matta-rice.webp';
import foxNutImg from '../assets/products/fox-nut.webp';
import flaxSeedImg from '../assets/products/flax-seed.webp';

const products = [
  // ── Basmati Rice ──────────────────────────────────────────────
  {
    id: 'basmati-rice',
    name: 'Basmati Rice',
    slug: 'basmati-rice',
    categoryId: 'agri-commodities',
    summary: 'MartQi exports two premium basmati rice varieties from India.',
    heroTitle: 'Basmati Rice — 1509 & 1121.',
    subhead: 'MartQi exports two premium basmati rice varieties from India.',
    image: basmatiRiceImg,
    imageAlt: 'Basmati rice grains',
    marketTags: ['New Zealand'],
    order: 1,
    profileFacts: [
      {
        label: '1121 Basmati',
        text: 'Extra-long slender grain, among the longest-grain rice varieties traded globally; distinct aroma; elongates significantly on cooking; commonly used for premium biryani and pulao; strong demand in Middle East and international premium rice markets.',
        image: basmati1121Img,
        imageAlt: '1121 Sella Basmati rice',
      },
      {
        label: '1509 Basmati',
        text: 'An early-maturing basmati variety, long slender aromatic grain (slightly shorter than 1121 but still extra-long grain basmati); valued as a quality, cost-effective option; widely traded to Middle East and European markets.',
      },
    ],
    ctaLabel: 'Request a Quote — Basmati Rice.',
  },

  // ── Non-Basmati Rice (Matta) ──────────────────────────────────
  {
    id: 'non-basmati-rice',
    name: 'Non-Basmati Rice',
    slug: 'non-basmati-rice',
    categoryId: 'agri-commodities',
    summary:
      'MartQi exports Matta Rice (also known as Palakkadan or Kerala Matta Rice), a coarse, parboiled red rice traditionally grown in Kerala and Karnataka, India.',
    heroTitle: 'Non-Basmati Rice — Matta Rice.',
    subhead:
      'MartQi exports Matta Rice (also known as Palakkadan or Kerala Matta Rice), a coarse, parboiled red rice traditionally grown in Kerala and Karnataka, India.',
    image: mattaRiceImg,
    imageAlt: 'Kerala Matta rice',
    marketTags: ['New Zealand'],
    order: 2,
    profileFacts: [
      {
        label: 'Origin',
        text: "Palakkad district, Kerala; also grown in Karnataka's Udupi and Dakshina Kannada districts.",
      },
      {
        label: 'Grain & processing',
        text: 'Bold, coarse grain; parboiled with the reddish-brown bran layer retained, giving its distinctive pink-red color.',
      },
      {
        label: 'Recognition',
        text: 'Palakkadan Matta Rice holds a registered Geographical Indication (GI) tag in India.',
      },
      {
        label: 'Typical use',
        text: 'Everyday staple across Kerala and coastal Karnataka; used for idli/dosa batter, kanji (rice porridge), and plain table rice.',
      },
      {
        label: 'Why buyers choose it',
        text: 'Retaining the bran layer means more fiber and nutrients than polished white rice, plus a distinctive earthy flavor.',
      },
    ],
    ctaLabel: 'Request a Quote — Non-Basmati Rice.',
  },

  // ── Fox Nut (Makhana) ─────────────────────────────────────────
  {
    id: 'fox-nut',
    name: 'Fox Nut (Makhana)',
    slug: 'fox-nut',
    categoryId: 'agri-commodities',
    summary:
      'MartQi exports Makhana (Fox Nut), the puffed seed of the prickly water lily (Euryale ferox), traditionally cultivated in the Mithila region of Bihar, India.',
    heroTitle: 'Fox Nut — Makhana.',
    subhead:
      'MartQi exports Makhana (Fox Nut), the puffed seed of the prickly water lily (Euryale ferox), traditionally cultivated in the Mithila region of Bihar, India.',
    image: foxNutImg,
    imageAlt: 'Phool Makhana (fox nut) puffs',
    marketTags: [],
    order: 3,
    profileFacts: [
      {
        label: 'Botanical source',
        text: 'Seeds of Euryale ferox, an aquatic plant grown in ponds and wetlands.',
      },
      {
        label: 'Origin',
        text: 'Predominantly the Mithila region of Bihar; "Mithila Makhana" holds a registered Geographical Indication (GI) tag in India.',
      },
      {
        label: 'Processing',
        text: 'Harvested seeds are roasted and popped (similar to popcorn), producing the light, crunchy white puffs sold as Makhana.',
      },
      {
        label: 'Typical use',
        text: 'Eaten as a roasted snack, used in Indian sweets and curries, common in fasting/vrat foods; growing international demand as a low-calorie, gluten-free snack.',
      },
      {
        label: 'Why buyers choose it',
        text: 'Light, crunchy texture, mild flavor that takes on seasoning well, naturally gluten-free.',
      },
    ],
    ctaLabel: 'Request a Quote — Fox Nut.',
  },

  // ── Flax Seed ──────────────────────────────────────────────────
  {
    id: 'flax-seed',
    name: 'Flax Seed',
    slug: 'flax-seed',
    categoryId: 'agri-commodities',
    summary:
      'MartQi exports Flax Seed (Linum usitatissimum), an oilseed crop grown across India.',
    heroTitle: 'Flax Seed.',
    subhead:
      'MartQi exports Flax Seed (Linum usitatissimum), an oilseed crop grown across India.',
    image: flaxSeedImg,
    imageAlt: 'Brown flax seeds',
    marketTags: [],
    order: 4,
    profileFacts: [
      {
        label: 'Botanical source',
        text: 'Seeds of the flax plant (Linum usitatissimum).',
      },
      {
        label: 'Varieties',
        text: 'MartQi handles both brown and golden (yellow) flax seed.',
      },
      {
        label: 'Typical use',
        text: 'Food products (whole, ground, or milled), nutraceuticals, and cold-pressed flaxseed (linseed) oil; common in bakery and functional food products.',
      },
      {
        label: 'Why buyers choose it',
        text: 'A valued source of dietary fiber, omega-3 alpha-linolenic acid (ALA), and lignans.',
      },
    ],
    ctaLabel: 'Request a Quote — Flax Seed.',
  },
];

export default products;
