# Site design

The site has one design: **Terminal**, a coder's workspace. Monospace type, a muted green accent on near-black, boxed panels and shell flourishes. It is dark only and has no theme switcher.

It started as one of ten themes behind a header picker. The picker, the Classic light/dark design and the other eight themes were removed.

## Tokens

- Colours live in `src/app/globals.css` on `:root` (oklch, shadcn names) and map to Tailwind through `@theme inline`. All text pairs meet WCAG 4.5:1.
- One typeface: IBM Plex Mono (400 and 600), self-hosted, for every piece of text.
- The root font size is 15px, so rem values run a little smaller than the browser default.

## How it is styled

- Components carry semantic classes (`.site-header`, `.section-head`, `.project-card`, ...). `src/styles/site.css` styles them.
- `site.css` sits in the `site` cascade layer, above Tailwind's utilities, so its rules win over utility classes on the same element. Utilities in the markup are layout glue and accessibility helpers (`sr-only`, the skip link).
- The shell flourishes are CSS pseudo-content: `/` before nav links, `//` before section titles, `>` before prompts and page titles, `$` before tools and commands, `##` before article subheadings, `●` before the footer copyright.
- Placeholder art for cards (`<Art>`) draws one of four motifs from its `data-seed`.

## Motion

`src/styles/motion.css`, CSS only:

- The hero rises in, the headline types itself out, and the prompts follow one by one.
- Sections, cards and rows slide in on scroll (scroll-driven animation, no fade, so text keeps its contrast).
- Page-to-page navigation animates through React's `<ViewTransition default="page">` in the root layout (`experimental.viewTransition`).

All of it is off under `prefers-reduced-motion`.

## Sample data

The site has no projects yet, so `src/lib/showcase.ts` holds two sample projects and the quote.
