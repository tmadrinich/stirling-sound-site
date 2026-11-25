# Stirling Sound — brand reference for the build

Condensed from the brand guide: https://claude.ai/artifact/1tRTjm1hQG3zxnMcxCSNef

## Essence
**Positioning:** A family-run recording studio on a Minnesota lake, with thirty years of records behind it, a Dolby Atmos room, and lodging on site, so artists can come up, stay, and give the record their full attention.
**Tagline (primary):** Make the record. Stay at the lake.
**Alternates:** Records made on the lake since 1994. / Come up. Stay. Make the record. / A real room on a real lake.
**Values:** The work speaks · Family, not a facility · Room to focus.

## Logo (received Nov 25, 2026)
Gold "SS" monogram and STIRLING SOUND wordmark in a thin gold ring, on black. Files in /brand:
- `logo-source.png` — original from the client (1024px). Keep as the master.
- `logo-gold.png` — full logo, gold on transparent (for dark grounds).
- `logo-badge.webp` — full logo on its black disc (works on light grounds; used in the footer).
- `monogram-gold.png` — SS mark only, gold on transparent (header lockup with the name set in type).
- `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png`.
Don't recolor, stretch, or set the full ring logo smaller than ~96px (the wordmark inside gets illegible). Below that, use the monogram + typeset name.

## Palette (sampled from the logo)
| Token | Hex | Role |
| --- | --- | --- |
| `--black-950` | #0E0E0C | Anchor: logo field, dark sections, header, CTA on light |
| `--black-900` | #171714 | Raised surfaces on black |
| `--black-800` | #201F1B | Alternate dark ground / hover |
| `--gold-500` | #C29957 | Logo gold: headings, accent and CTA on dark only (7.4:1 on black) |
| `--gold-300` | #D4B07A | Gold hover / focus on dark |
| `--gold-700` | #7E6130 | Gold for text on light (5.3:1 on ivory) |
| `--ivory-50` | #F7F4EE | Page background |
| `--ivory-100` | #ECE6DB | Alternate light section |
| `--ink-900` | #1A1916 | Body text (16:1 on ivory) |
| `--stone-600` | #5B5850 | Secondary text (6.5:1) |
| `--oxblood-900` | #3D1515 | Tertiary: deep bands (Our Story, Atmos feature) |
| `--oxblood-800` | #4A1B1A | Tertiary: raised surfaces on oxblood |
| `--oxblood-700` | #5A1F1F | Tertiary: main blocks, hover ground |
| `--oxblood-500` | #7A2E2A | Tertiary: decorative highlight only |

**60-30-10:** ivory and black grounds carry the page (black shades for depth), oxblood is the tertiary layer, gold is the 10% accent (CTAs, links, key headings, the Atmos badge). Oxblood goes in full-width bands via `data-theme="oxblood"`, at most one per page, never next to another dark band. On oxblood: ivory body text, gold-500 headings, gold-300 links, gold buttons with black text. Proposed Nov 25, 2026; needs Nathan's sign-off with the brand guide.

Buttons: on light, black with gold text; on dark, gold with black text.
Logo gold (#C29957) on light backgrounds is 2.4:1 — never for text there; use `--gold-700`.

## Type scale (desktop / mobile, px)
H1 64/68 · 40/44 — H2 44/50 · 32/38 — H3 32/38 · 26/32 — H4 24/30 · 21/28 (Cormorant Garamond 500–600, to match the logo's classic serif)
H5 20/28 · 18/26 — H6 16/24 — Body-lg 19/30 · 18/28 — Body 17/28 · 16/26 — Small 14/22 (Inter)
Label 13/16 +0.08em caps — Label-sm 12/16 — Spec 14/22 (IBM Plex Mono)
Header name: Cormorant Garamond 600, uppercase, +0.14em (`--tracking-caps`), gold on black.

## Approved sample copy

**Home hero**
- Eyebrow: RECORDING STUDIO · [LAKE NAME], MINNESOTA · SINCE 1994
- H1: Make your record at the lake.
- Lead: Stirling Sound is a family-run studio in a cabin on [LAKE NAME], with a Dolby Atmos room and lodging on site. Rik Stirling built it in 1994. His son Nathan runs it today.
- Buttons: Check dates · See the rooms

**Studio intro**
- Eyebrow: THE STUDIO · H2: The rooms
- [ROOM COUNT] rooms on the water [VERIFY WHICH ROOMS HAVE A LAKE VIEW]. The live room is [DIMENSIONS] with [CEILING HEIGHT] ceilings and [WINDOW / VIEW DETAIL]. The control room is built around a [CONSOLE MAKE / MODEL]. The Atmos room runs [SPEAKER CONFIGURATION] for mixing in Dolby Atmos without leaving the building.

**Booking CTA (black band, every page)**
- Eyebrow: BOOKING · H2: Tell us about the record.
- Send your dates, how many people are coming and what you're making. We'll reply with availability and a quote within [RESPONSE TIME].
- Button: Send an inquiry · Link: or call [PHONE]

## Inquiry form fields
Name* · Email* · Artist/band* · People coming* · Preferred dates* · Staying on site? (Yes/No/Not sure)* · What are you making? (Tracking / Mixing / Atmos mix / Full record / Not sure) · Tell us about the record · Phone (optional)

## Photography
Early light, honest color, real rooms in use. Shoot: control room, console details, live room set up, Atmos array, cabin from the water at first light, lake/dock, lodging, seasons, Nathan at work, archive photos of Rik (1994+). Avoid: stock, cabin kitsch, heavy grading, AI images, faces without releases.
