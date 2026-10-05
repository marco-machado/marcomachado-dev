# Design system

Source and build for the marcomachado.dev design system, published as a Design System artifact:
https://claude.ai/artifact/TWpfNZUrQxpsimMf5wUr7j

## Layout

- `project/` — the hand-authored files, at the paths the artifact keeps under `project/`:
  - `design-system.json` — the index: title, namespace, React 18 libraries, asset records
  - `tokens.json` — colours, type, spacing, radius and layout tokens, copied from `src/app/globals.css`
  - `README.md` — the brand book
  - `components/<Name>/README.md` and `preview.html` — guidelines and live previews
  - `components/Cover/preview.html` — the cover
  - `components/index.d.ts` — component props
- `entry.js` — bundle entry: the site's components exposed as `window.MarcoMachado`
- `shims/` — browser stand-ins for React globals, `next/link`, `next/navigation` and `next-themes`
- `build.mjs` — builds `dist/project/` (gitignored)

## Build

```sh
npm run design-system
```

The build:

1. Copies `project/` into `dist/project/`.
2. Copies the fonts from `src/fonts/`, plus `public/favicon.svg` and `public/images/og-default.png`.
3. Bundles the components into `components/bundle.js`, a single IIFE that reads `window.React`.
4. Compiles `components/bundle.css` with Tailwind v4 from the classes in `src/components/` and the previews. It also includes the base, `.article-content` and Shiki rules from `globals.css`.
5. Renders the ArticleContent preview from an excerpt of a real Article through `src/lib/markdown.ts`.
6. Stamps `tokens.json` `meta.ref` / `meta.synced` and the index's `lastChange` with the current commit.

## Re-sync

1. Update `project/` by hand when the site's tokens, voice or components change:
   - colour values in `globals.css` → `tokens.json`
   - a new component → add it to `entry.js`, `COMPONENTS` in `build.mjs`, `components/index.d.ts`, and a `components/<Name>/` folder
2. Run `npm run design-system`.
3. Ask Claude to publish `design-system/dist/project/` to the artifact URL above, using the Design System type's revising steps.
   - Read the live index and files first. Send only the files that changed, and the index last.
   - `components/index.d.ts` needs `contentType: "text/plain"`.
   - The logo and social image are uploaded assets, already recorded in `design-system.json`. Re-upload them only if they change.

The previews run on React 18 (the artifact's runtime). The site runs React 19, so a component that uses a React 19-only API won't work in the previews.
