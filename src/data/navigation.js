// Site navigation structure

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Export',
    path: '/export',
    children: [
      { label: 'Agri Commodities', path: '/export/agri-commodities' },
      { label: 'Basmati Rice', path: '/export/basmati-rice' },
      { label: 'Non-Basmati Rice', path: '/export/non-basmati-rice' },
      { label: 'Fox Nut (Makhana)', path: '/export/fox-nut' },
      { label: 'Flax Seed', path: '/export/flax-seed' },
    ],
  },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default navigation;
