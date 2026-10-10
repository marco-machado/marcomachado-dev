# Site themes

The site ships ten visual themes. A picker in the header switches between them, and the choice persists in `localStorage` under `theme` (next-themes).

| Id | Name | Source mockup | Notes |
|---|---|---|---|
| `dark` / `light` | Classic | Today's design | Default. Keeps the light/dark toggle |
| `terminal` | Terminal | Futuristic Triptych 01 | Mono, muted green, info side panel |
| `orbital` | Orbital | Futuristic Triptych 02 | Thin sans, planet horizon, outlined pills |
| `editorial` | Editorial | Futuristic Triptych 03 | Tall caps word stack, numbered sections, portrait |
| `command` | Command | Dark Homepage Concepts 01 | Terminal with numbered menu, bright green |
| `eclipse` | Eclipse | Dark Homepage Concepts 02 | Cinematic orbital, glass cards, pager |
| `atelier` | Atelier | Dark Homepage Concepts 03 | Serif, warm stone, tool icon row |
| `core` | Core | Three Directions 01 | Dotted globe, `whoami` prompt, solid green button |
| `cinematic` | Cinematic | Three Directions 02 | Serif over a dark portrait, pill buttons |
| `abstract` | Abstract | Three Directions 03 | Wide-tracked caps, glowing arcs, vertical label |

The nine new themes are dark only.

## How it works

- next-themes writes the theme id to `<html data-theme>`. The Tailwind `dark:` variant matches every theme except `light`.
- Every page renders one shared markup tree. Components carry semantic classes (`.site-header`, `.section-head`, `.project-card`, ...).
- **Classic** keeps its look through Tailwind utilities behind the `classic:` variant, so they apply only to `dark` and `light`.
- **The nine themes** are plain CSS in `src/styles/themes/<id>.css`, each scoped to `[data-theme="<id>"]`. They style the semantic classes and set the theme's tokens.
- `<ThemeOnly themes={[...]}>` renders markup for some themes only (headline variants, hero art, terminal flourishes). It is hidden with `display: none` elsewhere and uses `display: contents` where active.

## Shared components

Header (brand, nav, contact CTA, picker), page header, section header, hero, hero meta, hero art, project card, selected work (list or pager), article card, tools strip, quote band, contact block, footer.

Theme-specific only: hero art fills, terminal flourishes (cursor, prompt, comments), scroll cue, vertical side labels, pager arrows.

## Sample data

The site has no projects, so `src/lib/showcase.ts` holds two sample projects and the quote. Classic hides the sample sections.
