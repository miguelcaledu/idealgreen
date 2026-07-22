# IDEALGREEN Site — Project Notes

## What this is

The real, running site lives in `project/` (Next.js App Router, React 19). It replaces a Claude Design handoff bundle of `.dc.html` prototype files, which still live alongside it at the top level of `project/` as design reference until each page is ported — see `project/README.md` for the original handoff notes.

## Commands (run from `project/`)

```
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Permanent rules

These apply to every change in this repo, not just the current task:

- Preserve useful work transferred from Claude Design — port and adapt it, don't discard it.
- Do not invent reviews, partners, vehicle models, certifications, or sustainability metrics. If real content isn't available, use a clearly labelled placeholder instead of a plausible-sounding fabrication.
- Use real IDEALGREEN content where available (see the design-system `readme.md` under `project/_ds/`, and existing copy in the ported homepage).
- Use clearly labelled placeholders (e.g. `[PLACEHOLDER: partner logo]`) where information is missing — never silently invent it.
- Maintain a calm, premium, Portuguese visual identity.
- Avoid black-and-gold limousine styling.
- Use **Motion** for normal UI animation (entrances, hover, header transitions, carousels).
- Use **GSAP ScrollTrigger** only for the immersive pinned/scrubbed storytelling section — nowhere else.
- Respect `prefers-reduced-motion` for every animation added.
- Avoid scroll hijacking — pinned/scrubbed sections must feel like an extension of normal scroll, not a takeover.
- Ensure keyboard accessibility on all interactive components (carousels, dropdowns, date picker, tabs).
- Meet WCAG AA contrast on all text/background combinations.
- Test desktop, tablet, and mobile viewports before considering a feature done.
- Run `npm run lint` and `npm run build` after major changes.
- Do not hide errors through TypeScript ignores or disabled lint rules — fix the underlying issue.
- Do not delete original design assets (`project/_ds/`, `public/uploads/`, `.dc.html` prototypes) without explicit approval.
