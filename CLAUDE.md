# marcomachado.dev

Personal blog and portfolio built with Astro 5, Tailwind CSS v4, and MDX.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Build production site to `./dist`
- `npx vitest run` — Run tests (single-run, never use watch mode)

## Hosting / Deployment

- Hosted on Cloudflare Workers / Cloudflare assets
- Production domain: `https://marcomachado.dev`
- Cloudflare config: `wrangler.toml`
- Static build output served from `./dist`
- Auto-deploy is configured in the Cloudflare dashboard via Git integration
- Pushing to `main` deploys to production
- Use Cloudflare's Wrangler CLI for manual deploys:
  - `npx wrangler login` — Log in to Cloudflare
  - `npm run build && npx wrangler deploy` — Build and deploy

## Architecture

- **Static output** — No SSR, all pages pre-rendered to HTML
- **File-based routing** — Pages in `src/pages/`, Portuguese variants under `src/pages/pt/`
- **Content collections** — Blog posts in `src/content/blog/{en,pt}/` with Zod schema validation. PT filenames must match EN (no `.pt` suffix — it leaks into the slug)
- **Layouts** — `BaseLayout` wraps all pages; `BlogPostLayout` extends it for posts
- **Components** — All `.astro` (no client-side framework), PascalCase naming
- **i18n** — English default (no prefix), Portuguese under `/pt/`. Translations in `src/i18n/ui.ts`, helpers in `src/i18n/utils.ts`
- **Bilingual pages** — Static pages (about, uses, now) have EN + PT versions; update both together. New i18n keys must be added to both `en` and `pt` objects in `ui.ts`
- **List ordering** — Sort items by relevance/importance, not alphabetically

## Commit Strategy

- Use small, atomic commits with one focused change per commit
- Write imperative, human-readable commit messages (`Add ...`, `Fix ...`, `Remove ...`, `Update ...`, `Refine ...`)
- Do not use Conventional Commits prefixes (`feat:`, `fix:`, etc.)
- Commit planning/design docs before implementation for larger work
- Keep bilingual changes together when tightly coupled; split EN/PT only when it improves review clarity

## Conventions

- **Imports** — Use `@/*` path alias (maps to `src/*`)
- **Styling** — Tailwind utility classes + CSS custom properties (`var(--color-*)`) defined in `src/styles/global.css`. No scoped styles.
- **Dark mode** — Class-based (`.dark` on `<html>`), colors use `-dark` suffix variants
- **Fonts** — Newsreader (headings), IBM Plex Sans (body), IBM Plex Mono (code)
- **Props** — TypeScript interfaces for component props
- **Blog slugs** — Extracted from collection ID: `post.id.split("/")[1]`
- **Blog post fetching** — `(await getCollection("blog")).filter(p => p.data.lang === lang && !p.data.draft).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())`
- **Date formatting** — Use `formatDate()` from `@/i18n/utils` (uses `timeZone: "UTC"` to avoid off-by-one from UTC midnight coercion)

## Content Schema

Blog post frontmatter (strict — extra fields fail validation): `title`, `description`, `pubDate`, `updatedDate?`, `tags[]`, `lang` (en|pt), `draft` (default false), `coverImage?`, `coverImageAlt?`, `ogImage?`

## Blog Skill

Local skill at `.claude/skills/blog/`. Commands:
- `/blog write <topic>` — Full workflow: branch → outline → draft → fact-check → review → publish
- `/blog analyze <file>` — Review existing post (readability, SEO, anti-AI)
- `/blog translate <file>` — Translate EN↔PT for paired file
- `/blog publish` — Pre-merge checklist on blog branch
