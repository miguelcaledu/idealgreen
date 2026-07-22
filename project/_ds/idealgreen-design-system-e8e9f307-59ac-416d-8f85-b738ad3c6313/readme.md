# Idealgreen Design System

Design system for **Idealgreen** (idealgreen.pt) — a Portuguese boutique private transfer and tour company based in Lisbon, serving international tourists, couples, families, and corporate clients. Positioning: *"The private, comfortable and responsible way to discover Portugal."* Accessible premium, not a taxi alternative and not ultra-luxury. Brand archetype: Caregiver + Explorer.

Core products/lines:
- **Airport transfers & point-to-point routes** (e.g. Lisbon → Porto)
- **Private, tailor-made tours** (e.g. Sintra full-day)
- **Corporate services**
- **Classic Cars** — a distinct sub-brand for weddings, events, and film productions, using a fleet of vintage Mercedes

Fleet is fully electric (Tesla Model Y/3) plus Mercedes V-Class vans for groups, and separately-branded vintage Mercedes for the Classic Cars line.

## Sources
No codebase, Figma file, or existing brand guideline was attached. This system was built from a set of uploaded photographs and two logo files provided directly by the user (see `uploads/` — originals kept there; working copies in `assets/`). There is no existing UI to recreate, so this is a from-scratch system built to the brief's brand positioning, personality, and component spec. If a live site, Figma file, or GitHub repo exists for idealgreen.pt, attach it and this system can be reconciled against real UI.

## Fonts — substitution flagged
No font files were provided. Headline serif is **Bodoni Moda** (Google Fonts) and body/UI sans is **Work Sans** (Google Fonts), loaded via `@import` in `tokens/typography.css`. Classic Cars sub-brand accent is **Cormorant Garamond** italic. These are considered close matches to the brief ("refined serif/high-contrast display" + "clean humanist sans") — if Idealgreen has real brand fonts, please upload the font files and this will be swapped in.

## Logo
Two marks were provided, both copied to `assets/`:
- `logo-wordmark.jpg` — horizontal "IDEAL GREEN" wordmark, the G rendered as a leaf.
- `logo-mark-stacked.png` / `logo-mark-stacked-alt.jpg` — stacked circular mark: leaf-branch "G" over "IDEAL GREEN" in small caps.
No standalone icon-only mark (favicon-scale) was provided — use the stacked mark at small sizes.

## Content fundamentals
- **Voice**: calm, confident, warm, quietly professional. Never salesy or hyped.
- **Specificity over cliché.** Avoid "unforgettable memories", "hidden gems", "breathtaking". State the concrete mechanism instead: *"Your driver waits at arrivals with your name — even if the flight is late."*
- **Second person, direct address** ("you/your"), not "our guests" or third-person distancing.
- **Portuguese diacritics matter** — copy must render ã, ç, é, õ correctly; the type system is checked against Portuguese sample copy, not just English.
- **No emoji** in UI copy or marketing copy. No exclamation-heavy tone.
- **Numbers are used sparingly and only when concrete** (a price, a duration, a since-year, a passenger count) — never vague stats or manufactured urgency ("only 2 left!").
- **Sustainability is stated as fact, not virtue-signaled.** "100% electric fleet" as a plain label, not "🌱 Eco-friendly!!".
- Sample lines used throughout this system: *"Your driver waits at arrivals with your name — even if the flight is late."* / *"Private tours & transfers since 2022."* / *"Arrive the way the day deserves to begin."* (Classic Cars).

## Visual foundations
- **Color**: Primary is a deep pine/forest green (`--green-700`, sampled from the logo) — sophisticated, not eco-startup lime. Neutrals are warm (stone = warm greige, sand = warm beige) rather than cool gray, so the UI reads editorial/travel rather than corporate-SaaS. Charcoal (not pure black) for text and dark surfaces. Atlantic blue is a secondary accent for links and water/sky-adjacent moments. Max 1–2 background colors per screen (stone-50 or white); green is used with restraint, as a CTA/accent color, not a wash.
- **Type**: Bodoni Moda (serif, high-contrast) for display/headlines — editorial, premium, a little quiet drama. Work Sans (humanist sans) for everything functional: body copy, forms, buttons, nav. Classic Cars swaps in Cormorant Garamond italic for taglines only, never for UI chrome.
- **Imagery**: Real photography only, no stock-photo energy. Fleet shots (Tesla Model Y at real Lisbon hotels, Mercedes vans in pine forest settings), unposed guest moments (toasts, arrivals), and one classic car line. Natural daylight, true color (not desaturated/teal-orange graded), a mix of landscape and portrait crops. No illustration, no icon-heavy hero sections.
- **Backgrounds**: flat color or full-bleed photography — no gradients, no textures/patterns (explicitly avoiding azulejo/tourist-kitsch patterns), no blur/glass panels except a subtle scrim behind hero text on photos.
- **Corners & cards**: `radius-md` (10px) for form fields and small cards, `radius-lg` (16px) for content/photo cards, full pill radius for buttons and pills only. Cards: 1px `border-subtle` + `shadow-sm`, white surface — never colored left-border accent strips.
- **Shadows**: soft, low-opacity, warm-tinted (based on charcoal, not pure black) — sm/md/lg scale, used for elevation only, never decorative glow.
- **Motion**: minimal — 150–220ms ease-standard transitions on hover/focus color and border changes only. No bounce, no springy easing, no page-transition choreography. This is a calm brand; restraint is the point.
- **Hover/press states**: hover = one step darker (buttons) or a light tint background (ghost/secondary buttons, list rows); press has no separate treatment beyond the hover state (no scale/shrink — keeps the "quietly elegant" tone). Disabled = 45% opacity, no pointer.
- **Borders**: 1–1.5px, `border-subtle`/`border-default` for structure; focus state uses a 3px soft blue ring (`--shadow-focus`), never a color-only outline (accessibility).
- **Transparency/blur**: essentially unused — reserved only for a text-legibility scrim over hero photography.

## Iconography
No icon font, SVG icon set, or icon usage was found in the provided materials. This system uses **plain text/typographic glyphs only** where a mark is needed (★ for ratings, →/– for route/list connectors, simple circles for stepper controls) and avoids emoji. If a real icon set exists, attach it and it will be copied into `assets/icons/` and referenced from components (currently: none needed beyond what's built).

## Sub-brand: Classic Cars
Distinct token set (`--cc-*` in `tokens/colors.css`) — cream background, burgundy primary, brass accent, Cormorant Garamond italic serif for titles — layered on top of, not replacing, the main system. See `guidelines/colors-classic-cars.html` and `components/classic-cars/`.

## Intentional additions
No source component library existed, so a standard travel-booking component set was authored per the brief's explicit component list (buttons, booking form fields, price/route/itinerary cards, testimonials, driver cards, FAQ, trust bar, nav/footer, floating contact, electric-fleet indicator). Nothing beyond the brief's list was added.

## Index

**Tokens** (`tokens/`, imported by `styles.css`)
- `colors.css` — primary green scale, stone/sand neutrals, charcoal, Atlantic blue, semantic (success/warning/error), Classic Cars sub-brand palette, semantic aliases
- `typography.css` — font-face imports (Bodoni Moda, Work Sans, Cormorant Garamond) + full type scale
- `spacing.css` — spacing scale, radii, shadows, motion durations/easing
- `base.css` — resets, link states

**Guidelines specimens** (`guidelines/`) — colors (primary, neutrals, charcoal, accent, semantic, classic cars), type (display, body, classic), spacing (scale, radii/shadows), brand (logos, photography)

**Components** (`components/`)
- `core/` — `Button`
- `forms/` — `Input`, `Select`, `DateTimeField`, `PassengerSelector`
- `content/` — `PriceCard`, `RouteCard`, `TourItinerary`, `TestimonialCard`, `DriverCard`, `FAQAccordion`, `ElectricFleetIndicator`
- `navigation/` — `NavBar`, `TrustBar`, `Footer`, `FloatingContact`
- `classic-cars/` — `ClassicCarCard`

**UI kit** (`ui_kits/website/`) — homepage hero, tour detail page, booking flow (desktop + mobile)

**Assets** (`assets/`) — `logo-wordmark.jpg`, `logo-mark-stacked.png`, `logo-mark-stacked-alt.jpg`, `leaf-motif.jpg`, `photography/` (fleet, guests, classic cars, landscapes, driver/team portraits)

**`SKILL.md`** — Claude Code-compatible skill wrapper for this design system.
