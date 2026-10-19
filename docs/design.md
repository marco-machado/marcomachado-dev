# Site design

The site has one design: **Terminal**, a coder's workspace. Monospace type, a muted green accent on near-black, boxed panels and shell flourishes. It is dark only and has no theme switcher.

It started as one of ten themes behind a header picker. The picker, the Classic light/dark design and the other eight themes were removed.

## Tokens

- Colours live in `src/app/globals.css` on `:root` (oklch, shadcn names) and map to Tailwind through `@theme inline`. All text pairs meet WCAG 4.5:1.
- One typeface: IBM Plex Mono (400 and 600), self-hosted, for every piece of text.
- The root font size is 15px, so rem values run a little smaller than the browser default.
- Six text sizes, as `--text-*` tokens in `globals.css`: `xs` 12px (dates, tags, labels), `sm` 13.5px (nav, links, secondary text), `base` 15px (all running text, articles included), `md` ~17px (card and section titles, ledes), `lg` 22.5px (subheadings) and `display` 30–41px (page titles). Use a token, never a literal size.

## Brand assets

- `public/favicon.svg` is the mark: a green `>_` prompt on the background colour.
- `node scripts/brand-assets.mjs` renders `public/favicon.ico` from it and draws the site-wide Social Image, `public/images/og-default.png`, from a template in the script. Re-run it after changing either.
- The layout links both icons and sets `theme-color` to the background colour.

## How it is styled

- Components carry semantic classes (`.site-header`, `.section-head`, `.project-card`, ...). `src/styles/site.css` styles them.
- `site.css` sits in the `site` cascade layer, above Tailwind's utilities, so its rules win over utility classes on the same element. Utilities in the markup are layout glue and accessibility helpers (`sr-only`, the skip link).
- Cards (article rows, project cards, AI tool cards) share one pattern: the title is the link and stretches over the whole card (`.card`, `.card__link`), so the card is clickable anywhere, the link is named by the title, and hover and focus mark the whole card.
- Every Uses item and AI tool has an id from its name (`slugify`), so the home page's tool picks link straight to the entry, which is highlighted on arrival.
- Links to other sites go through `<ExternalLink>`: they open in a new tab, carry a muted ↗ and tell screen readers so.
- Link casing: nav and meta links (section "view all", hero prompts, "← all articles") are lowercase; calls to action ("Read the article", "Get in touch") are sentence case. Nothing is uppercase except small labels.
- The shell flourishes are CSS pseudo-content or prompt spans: `/` before nav links, `//` before section titles, `>` before prompts and page titles (wrapped title lines hang under the text), `$` before tools, commands and the RSS line, `-` before Uses keys, `##` before article subheadings.
- Images are real or absent: article rows and the article page show an Article's Cover Image when it has one, and nothing otherwise. There is no placeholder art.

## Motion

`src/styles/motion.css`, CSS only:

- The hero rises in, the headline types itself out (or rises in where it wraps, below 24rem), and the prompts follow one by one.
- The hero cursor blinks four times, then stays lit (WCAG 2.2.2).
- Sections, cards and rows slide in on scroll (scroll-driven animation, no fade, so text keeps its contrast).
- Page-to-page navigation animates through React's `<ViewTransition default="page">` in the root layout (`experimental.viewTransition`).

All of it is off under `prefers-reduced-motion`.

## Selected work

The site has no projects to show yet. `projects` in `src/lib/showcase.ts` is empty; the home page's Selected work section and the hero's "view work" prompt appear once it has entries.
