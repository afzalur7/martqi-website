import { useEffect } from 'react';
import seo from '../data/seo.json';

function upsertMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Sets <title> and <meta name="description"> for the current route.
 * Reads from src/data/seo.json (single source of truth) keyed by path.
 * The static HTML shells (generated at build time) mirror these values so
 * raw HTML and non-JS crawlers also see distinct per-page metadata.
 */
export default function Seo({ path }) {
  useEffect(() => {
    const meta = seo[path];
    if (!meta) return;
    document.title = meta.title;
    upsertMeta('description', meta.description);
  }, [path]);

  return null;
}
