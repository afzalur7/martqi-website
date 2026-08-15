// Generates a static HTML shell per route after `vite build`.
// Each shell mirrors the SPA index.html but carries that route's unique
// <title> and <meta name="description"> from src/data/seo.json, so raw HTML
// (curl, non-JS crawlers) shows distinct metadata while the SPA still
// handles the interactive render client-side.
//
// Output: dist/<route>/index.html — served by DirectoryIndex for exact paths;
// the .htaccess rewrite handles any path not present as a directory.

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const seo = JSON.parse(readFileSync(join(root, 'src/data/seo.json'), 'utf8'));
const template = readFileSync(join(root, 'dist/index.html'), 'utf8');

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

for (const [path, meta] of Object.entries(seo)) {
  let out = template;
  out = out.replace(
    /<title>.*?<\/title>/,
    `<title>${escapeHtml(meta.title)}</title>`,
  );
  out = out.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
  );

  const rel = path === '/' ? 'index.html' : `${path.replace(/^\//, '')}/index.html`;
  const outPath = join(root, 'dist', rel);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, out);
  console.log(`  ${rel}`);
}
