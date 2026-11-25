# Stirling Sound site — rules for Claude

Rebuild of stirlingsound.com (Wix → plain HTML/CSS/JS). Client: Nathan Stirling. Builder: Taylor Madrinich (Bullpen Records).
Status and open questions live in `docs/PLAN.md`. Brand reference lives in `docs/BRAND.md`.
Full brand guide (design system): https://claude.ai/artifact/1tRTjm1hQG3zxnMcxCSNef

## Working rules
1. Read every repo file before changing anything.
2. Work on a branch. Merge to `main` only with Taylor's OK.
3. Never touch Wix, DNS or the live site without approval. Back up Wix content before cutover.
4. Ask before building. Stop between phases and update `docs/PLAN.md`.
5. **Never invent** gear, rates, credits, testimonials, addresses, staff or the engineer's name. Use `[BRACKETED PLACEHOLDERS]` and list them in PLAN.md.
6. Do **not** publish "Minnesota's first and only Dolby Atmos Music certified studio" until Nathan verifies it. Until then: "a Dolby Atmos room."
7. No passwords, API keys or form secrets in the repo.

## Stack
- Plain HTML, CSS, vanilla JS. No frameworks, no build step.
- `css/tokens.css` (brand tokens) → `css/base.css` (base + components) → page CSS if needed. Load in that order.
- Fonts: Google Fonts link in every `<head>` (see top of `css/tokens.css`).
- Forms: StaticForms via `fetch`, honeypot on (`.hp`). Audio: embeds for samples.

## CSS rules
- Use **semantic** variables (`--color-cta-bg`, `--color-text`, `--color-heading`), never raw hex in page CSS.
- Dark sections: `data-theme="lake"` on the section. Never two dark sections in a row.
- Mobile-first. Breakpoint 768px. Body text ≥16px on mobile, max 68ch.
- One primary `.btn` per view. Secondary actions use `.btn--secondary` or a link.
- **Amber (`--amber-400`) never on light backgrounds**: it fails contrast (2.1:1).
- Hairlines (`--color-line`) are decorative; form borders use `--color-field-border`.
- Every image: width/height set, specific `alt`, WebP/AVIF, hero ≤ ~350 KB.

## Type
- Fraunces 400–500: H1–H4 only. No all-caps Fraunces.
- Inter: body, UI, buttons, H5–H6. Sentence case.
- IBM Plex Mono: eyebrows (`.eyebrow`), labels, gear lists, specs, rates. Never paragraphs.

## Voice (short version)
Established, personal, plain, confident, specific. Let the gear, room and history make the case.
Banned: world-class, state-of-the-art, cutting-edge, premier, legendary, iconic, unlock, elevate, curate, journey, retreat, oasis, immersive experience.
Buttons are specific verbs: Check dates, Send an inquiry, See the rooms, View gear list. Never "Learn more" or "Submit."
"2.0" goes in the story only, never the logo, titles or taglines. Prefer "Since 1994" over "30 years."
