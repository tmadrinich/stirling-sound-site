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
TBD. Waiting on the client's logo, colors and fonts. If none exist, propose a one-page brand guide in Phase 1 before any page work.
Voice: established and personal. A family studio with 30 years of history and new Atmos capability. Not hype, no stock "world-class" language.

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
- Instagram links to a personal handle. Ask whether a studio handle exists.
- Verify the "Minnesota's first and only Dolby Atmos Music certified studio" claim with the client before publishing it.
