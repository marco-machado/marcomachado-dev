# marcomachado.dev

Personal blog and portfolio built with Astro 5, Tailwind CSS v4, and MDX.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Build static site
- `npm run preview` — Preview production build
- `npx vitest run` — Run tests (single-run, never use watch mode)

## Architecture

- **Static output** — No SSR, all pages pre-rendered to HTML
- **File-based routing** — Pages in `src/pages/`, Portuguese variants under `src/pages/pt/`
- **Content collections** — Blog posts in `src/content/blog/{en,pt}/` with Zod schema validation
- **Layouts** — `BaseLayout` wraps all pages; `BlogPostLayout` extends it for posts
- **Components** — All `.astro` (no client-side framework), PascalCase naming
- **i18n** — English default (no prefix), Portuguese under `/pt/`. Translations in `src/i18n/ui.ts`, helpers in `src/i18n/utils.ts`
- **Bilingual pages** — Static pages (about, uses, now) have EN + PT versions; update both together. New i18n keys must be added to both `en` and `pt` objects in `ui.ts`
- **List ordering** — Sort items by relevance/importance, not alphabetically

## Conventions

- **Imports** — Use `@/*` path alias (maps to `src/*`)
- **Styling** — Tailwind utility classes + CSS custom properties (`var(--color-*)`) defined in `src/styles/global.css`. No scoped styles.
- **Dark mode** — Class-based (`.dark` on `<html>`), colors use `-dark` suffix variants
- **Fonts** — Newsreader (headings), IBM Plex Sans (body), IBM Plex Mono (code)
- **Props** — TypeScript interfaces for component props
- **Blog slugs** — Extracted from collection ID: `post.id.split("/")[1]`
- **Date formatting** — Use `formatDate()` from `@/i18n/utils`

## Content Schema

Blog post frontmatter: `title`, `description`, `pubDate`, `updatedDate?`, `tags[]`, `lang` (en|pt), `draft` (default false)
