# MartQi Visiting Card — Afzalur Rahman

Content sheet + print specs. Sources: website data files (`src/data/company.js`,
product catalog, Certifications page). Everything below is live-site fact unless
marked `[CONFIRM]`.

## Final content

### Front
| Field | Value | Source |
|---|---|---|
| Logo | `logo/martqi.png` (embedded in SVG) | brand file, as-is |
| Name | Afzalur Rahman | — |
| Designation | DESIGNATED PARTNER | `[CONFIRM]` — correct legal term for an LLP partner in India; alternatives: Partner / Founder / Managing Partner |
| Company | MARTQI LLP | company.js |
| Mobile | +91 XXXXX XXXXX | `[CONFIRM]` — see "Open items" |
| Email | info@martqi.com | company.js |
| Website | www.martqi.com | live site |

### Back
| Field | Value | Source |
|---|---|---|
| Logo | on white chip (wordmark is black; chip keeps it legible on navy) | brand file |
| Credential badge | APEDA RCMC REGISTERED | RCMC/APEDA/33691/2026-2027 (number omitted for space — full number on website/certificates) |
| Product line | BASMATI RICE · NON-BASMATI RICE / FOX NUT (MAKHANA) · FLAX SEED | products.js |
| Address | Floor No. 1, Flat No. 10-900011, Adarsh Nagar, Pothireddy Palli X Road, Lane Beside TVS Showroom, Chow Rasta, Sangareddy, Telangana 502295, India | company.js (Principal Place of Business) |
| Registrations line | IEC ABZFM2033K · GST Delhi & Telangana · LLPIN ACE-4894 | company.js |

## Open items before printing

1. **Afzalur's mobile number** — the site currently shows +91 98375 19670 and
   +91 97175 50353 under **Mr. Kamal Agarwal** as contact person. If one of
   those is actually yours (or you prefer a different number), tell me which
   and I'll drop it in — one-line edit, re-render in seconds.
2. **Designation** — confirm "Designated Partner" or pick another title.
3. **Email** — keep info@martqi.com, or use a personal one (e.g.
   afzalur@martqi.com) if you create it.
4. Optional: add a **WhatsApp icon/line** on the front (the site's chat button
   points to +91 98375 19670).

## Print specifications (for any print shop)

- **Size:** standard 89 × 51 mm (3.5 × 2 in)
- **Bleed:** 3 mm all sides — artwork canvas is 95 × 57 mm; final trim centered
- **Resolution:** vector SVG (infinitely scalable); PNG previews are 300 dpi
- **Colors:** brand navy `#0F1F3A` / `#1A3056`, gold-sand `#C09840` / `#D0B066`,
  off-white `#FDFBF7`. For offset printing ask the printer to convert to CMYK
  (approx. navy C100 M78 Y25 K15, gold C25 M35 Y85 K0) or print digitally from
  the files as-is.
- **Fonts:** Arial / Helvetica Neue (any print shop has them; SVG text stays
  editable — no font embedding needed)
- **Safety:** all text sits ≥ 3 mm inside the trim line (verified)

## Files

| File | Purpose |
|---|---|
| `afzalur-card-front.svg` | Print-ready front (send this to printer) |
| `afzalur-card-back.svg` | Print-ready back |
| `preview-front.png` / `preview-back.png` | 300 dpi raster previews (quick viewing / WhatsApp sharing) |

Edit flow: values live as plain text inside the SVGs (open in any text editor,
Inkscape, or ask me). Logo is embedded — files are self-contained.
