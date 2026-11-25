# Stirling Sound site — build plan

## Phase 0: Setup and intake (now)
- [x] Repo created, CLAUDE.md, plan and audit committed
- [ ] Scope and quote approved by the client, 25% deposit received
- [ ] Intake from Nathan (see Questions below)
- [ ] Back up the Wix site: all text, images and form settings saved to /content/wix-backup/
- [ ] Decide on hosting (GitHub Pages, Netlify or Vercel)

## Phase 1: Design system
- [x] Brand guide proposed (no client brand assets existed): https://claude.ai/artifact/1tRTjm1hQG3zxnMcxCSNef, summary in /docs/BRAND.md
- [x] /css/tokens.css: colors, type scale and spacing
- [x] /css/base.css: type, buttons, cards, gear table, form styles
- [ ] Client sign-off on the brand guide
- Components: nav, footer, hero, service card, gear list, audio player block, credit grid, testimonial, CTA band, inquiry form
- One styled sample page for client sign-off
**Stop for approval.**

## Phase 2: Pages
- [x] Draft built with placeholders (branch `pages`): Home (index.html), Services & rates (services.html), Our Story (about.html), The Studio / gear (gear.html). Shared css/site.css.
- [x] Added (inspired by Blackbird's layout): hero phone line, gear-by-the-numbers row, "Made here" album covers, testimonial block (Home); room quick facts, floor plan and photo gallery (Studio). Show counts only once Nathan supplies real numbers; testimonials only real and with permission.
- [x] Book/Contact page (contact.html) with the inquiry form wired for StaticForms (JSON fetch, honeypot, inline thank-you). All booking buttons now point here.
- [ ] Connect the form: put the StaticForms API key in data-api-key on the form in contact.html (keys are public form keys; never commit account passwords). Until then the form shows a "not connected yet" note with the email address.
- [x] Availability calendar on contact.html (branch `availability-calendar`, js/availability.js): Open / Limited / Booked month view, 6 months ahead. Clicking an open day fills Preferred dates. Shows clearly labeled SAMPLE dates until connected.
- [ ] Connect the calendar: Nathan makes a "Studio Availability" Google Calendar shared public as free/busy only; put its Calendar ID in data-calendar-id and a referrer-restricted Calendar API key in data-api-key. Day = Booked at 6+ busy hours, Limited under that (adjust once Nathan confirms full vs half days).
- [ ] Work page (credits, samples)
- [ ] Replace every highlighted [PLACEHOLDER] with client content; remove the noindex tag at launch
- Home, The Studio, Services, Our Story, Work, Book/Contact
- Real content where it exists, flagged placeholders everywhere else
**Stop for approval** (revision round 1).

## Phase 3: Function and QA
- Inquiry form on StaticForms (fetch, honeypot, inline thank-you), test submission sent to Nathan's email
- Audio embeds, image optimization (WebP, lazy loading), real alt text
- SEO: titles, meta descriptions, OG image, sitemap.xml, robots.txt, LocalBusiness schema
- QA: mobile, WCAG AA contrast, links, page speed
**Stop for approval** (revision round 2).

## Phase 4: Optional add-ons (quote separately)
- Calendar booking (Calendly or similar)
- Shop, if there are products
- Rate calculator or package builder for the Stirling Sound Experience

## Phase 5: Launch
- Confirm where the domain is registered (Wix or elsewhere). If it's at Wix, transfer it or point DNS at the new host.
- Connect the domain, turn on HTTPS, test the form on the live domain
- Redirect old Wix URLs (/shop, etc.) to their new pages
- Cancel the Wix plan only after the new site has been live and verified for 7 days
- Handoff: client owns the domain and hosting, Taylor stays on as collaborator, offer the $25/mo retainer

## Questions for Nathan
1. Brand guide sign-off (we proposed one). Any existing logo files to work from?
2. Studio address, or the area to list ("Minneapolis area," etc.)? Phone number?
3. Who is the Senior Audio Engineer? Bio and photo?
4. Gear list and room details. Is there more than the Atmos room?
5. Rates: published, "starting at," or quote only?
6. Stirling Sound Experience: what lodging, how many nights, what the weekend add-ons are
7. Credits, client list, testimonials and audio samples (stereo and Atmos)
8. Atmos claim wording: what documentation backs "certified" and "first and only"? (Dolby says it doesn't certify music rooms; match the wording to his paperwork or directory listing.)
9. ~~Studio Instagram~~ Answered: @stirlingsound (https://www.instagram.com/stirlingsound). Any other socials?
10. Shop: anything to sell (merch, gift cards, session deposits)?
11. Who registered stirlingsound.com, and do you have the login?
12. Pro photos of the studio, or do we need a shoot?
13. Availability calendar: which calendar app do you use? Full days only, or half days too? How many months ahead should it show?

## Pricing reference (Bullpen web offer)
$300 base (home) + $100 per extra page + $200 per specialty page (contact form, booking, embeds). 25% rush fee. 25% deposit, 75% at launch, two revision rounds.
Proposed scope: Home + 5 pages ($800) + Book/Contact as a specialty page (+$200, replacing its $100 page fee) + Work with audio embeds as a specialty page (+$200, replacing its $100 page fee). Estimate: ~$1,000 before add-ons. Confirm with Taylor before quoting.

## Placeholders in approved copy (/docs/BRAND.md)
[LAKE NAME], [ROOM COUNT], [DIMENSIONS], [CEILING HEIGHT], [WINDOW / VIEW DETAIL], [CONSOLE MAKE / MODEL], [SPEAKER CONFIGURATION], [RESPONSE TIME], [PHONE]
