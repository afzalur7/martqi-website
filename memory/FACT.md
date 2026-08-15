# MartQi Website — Operational Facts

## Deployment
- Live domain: **martqi.com** on Hostinger **Business Hosting** (order #1006307545, username u396389959). Same account hosts client sites (classji.in, aist.ac, scinquiry.com, clickuniv.com, ibcorporation.co.uk) — never touch those.
- Deploy tool: **`hosting_deployStaticWebsite`** with a zip of the built `dist/` folder. `agencyHosting_deployNodeStaticWebsite` / `agencyHosting_deployPhpApplication` do NOT work on this account (Agency Plan required).
- Workflow: `npm run build` → zip dist/ → deploy → **clear CDN cache** (`hosting_clearWebsiteCacheV1`) → verify.
- Deploys are destructive; user must approve each deploy before it runs.

## Gotchas
- Hostinger `hcdn` edge nodes cache independently. After any deploy, a stale edge can serve old content (titles, 301s). Always purge cache AND verify across multiple edge IPs (DNS rotates: 91.108.x.x, 88.222.x.x, 147.79.x.x, 147.93.x.x). A single --resolve-pinned curl can hide stale edges.
- Local dev machine's DNS (systemd-resolved → router 192.168.29.1) caches NXDOMAIN aggressively after GoDaddy→Hostinger NS changes. Public DNS (8.8.8.8) resolves fine. Workaround used: `sudo resolvectl dns wlo1 8.8.8.8 1.1.1.1` (resets on reconnect).
- Site has SPA `.htaccess` with `DirectorySlash Off` + per-route static shells in dist/<route>/index.html for SEO titles. Regenerate via `npm run build` (runs scripts/generate-static-html.mjs).

## Project state (as of 2026-08-16)
- Built & live with approved copy: Home, About Us, Contact Us, Export landing (placeholder copy), agri-commodities category, 4 product pages (Basmati/Matta/Fox Nut/Flax Seed), Certifications (placeholder subtitle), Blog (empty shell).
- Single-source data files in src/data/: products.js, categories.js, markets.js, company.js, navigation.js, seo.json, imageCredits.js.
- Workflow: user approves copy page-by-page; next pending: Export landing copy, Certifications copy, Blog content, Home copy re-approval, then final QA (Brief 5).
- Services business line was dropped — export-only site. No Services/Education/Software references anywhere.
