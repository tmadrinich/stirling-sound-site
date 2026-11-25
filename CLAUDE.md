# Stirling Sound — website

## What this is
Rebuild of stirlingsound.com, moving it off Wix and onto plain HTML on GitHub. Client: Stirling Sound, a Minnesota recording studio founded in 1994 by Rik Stirling and relaunched in 2024 by his son Nathan Stirling (CEO) as "Stirling Sound 2.0."
Builder: Taylor Madrinich (Bullpen Records web services). Client contact: Nathan Stirling, nathan@stirlingsound.com.
Repo: tmadrinich/stirling-sound-site. Hosting: TBD. Domain: stirlingsound.com (currently on Wix; confirm the registrar before any DNS work).

## Source files (read before any work)
- /brand/ — logo files, brand colors and fonts from the client (TBD: ask if missing)
- /content/ — client-supplied copy, bios, gear list, rates, credits and photos
- /docs/PLAN.md — the phased build plan and open questions
- /docs/current-site-audit.md — what the Wix site has today

## Rules
1. Read every file in the repo before changing anything. Summarize what exists first.
2. Work on a branch. Small commits with clear messages. Merge to main only with Taylor's OK.
3. Plan first, build in phases, and stop for Taylor's approval between phases. Ask when something is unclear.
4. Never deploy, change DNS, or touch the Wix site without Taylor's OK. Back up the Wix content (text and images) before cutover.
5. Don't invent gear, rates, credits, testimonials, addresses or engineer names. Use placeholders like [GEAR LIST] and flag them.
6. Never email, post, or contact the client or anyone else. Drafts only.
7. No secrets in the repo. The StaticForms access key goes in hosting settings or stays hidden in the form, never in docs.

## Stack
Plain HTML, CSS and JS. No framework. One CSS variables file as the single source of truth for colors and type.
Forms: StaticForms with a honeypot on. Method: fetch, with an inline thank-you message.
Booking: inquiry form for now. Calendar booking is Phase 4, only if the client wants it.
Audio: an embedded player (SoundCloud, Spotify or self-hosted) for Atmos and stereo samples. Atmos playback in the browser is limited, so link out to Apple Music or Tidal for spatial versions.

## Brand
Brand guide (design system): https://claude.ai/artifact/1tRTjm1hQG3zxnMcxCSNef — condensed in /docs/BRAND.md (approved copy, palette, type, form fields).
- CSS: /css/tokens.css (single source of truth) → /css/base.css → page CSS. Use semantic variables (--color-cta-bg, --color-text, --color-heading), never raw hex in page CSS.
- Dark sections: data-theme="dark" ("lake" still works as an alias). The header is always dark. Never two dark sections in a row. One primary .btn per view.
- Palette comes from the logo: black #0E0E0C + gold #C29957 on ivory. Logo gold (--gold-500) never as text on light backgrounds (2.2:1, fails AA); use --gold-700 there. Form borders use --color-field-border, not --color-line.
- Type: Cormorant Garamond 500–600 for H1–H4 only · Inter for body, UI, H5–H6 · IBM Plex Mono for eyebrows, labels, gear, specs, rates (never paragraphs). Body ≥16px on mobile, max 68ch. Breakpoint 768px.
- Fonts load from Google Fonts (link at the top of tokens.css). Logo: client files in /brand (see docs/BRAND.md). Header = monogram + typeset name on desktop (768+), monogram only, centered, on mobile; footer = full badge. Never recolor or redraw the logo.
- Images: width/height set, specific alt text, WebP/AVIF, hero ≤ ~350 KB. No stock, no AI-generated images.

Voice: established and personal. A family studio with 30 years of history and new Atmos capability. Plain, confident, specific.
Banned: world-class, state-of-the-art, cutting-edge, premier, legendary, iconic, unlock, elevate, curate, journey, retreat, oasis, immersive experience.
Buttons are specific verbs (Check dates, Send an inquiry, See the rooms). "2.0" goes in the story only, never the logo, titles or taglines. Prefer "Since 1994" over "30 years."
Rik Stirling founded the studio in 1994 and died in 2019; write about him in the past tense, respectfully.

## Site map (proposed)
- Home: hero, the Atmos claim, services overview, call to book
- The Studio: the Atmos room, gear list, photos, lodging
- Services: recording and production, mixing and mastering (stereo and Atmos), the Stirling Sound Experience (lodging, studio and engineer time, weekend add-ons)
- Our Story: Rik Stirling (1994), Nathan Stirling and the 2024 relaunch, the engineering team
- Work: credits, audio samples, testimonials
- Book / Contact: inquiry form, email, phone, location or area served, Instagram
- Shop: only if the client has products. The current Wix shop is empty.

## Must-fix from the Wix site
- The "We'll be back soon" placeholder and the leftover "Thanks for submitting!" message
- No rates, gear, credits, samples, phone number or location
- Unnamed "Senior Audio Engineer"
- Tiny CEO photo and camera-filename alt text
- Instagram links to a personal handle. Studio handle is @stirlingsound: use https://www.instagram.com/stirlingsound.
- Atmos claim: Taylor confirmed the room is real (Nov 25, 2026). Still confirm the exact wording with Nathan before publishing: Dolby says it does not certify or approve Atmos music studios, so "certified" and "first and only" must match his documentation. Until then use "a Dolby Atmos room."
