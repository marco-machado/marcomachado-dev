# marcomachado.dev

Personal blog and portfolio built with Next.js (App Router, static export), React, Tailwind CSS v4, and shadcn/ui. English only.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Build static site to `./out`
- `npm run lint` — Run ESLint (blocking quality check)
- `npm run typecheck` — Run TypeScript checks (blocking quality check)

## Hosting / Deployment

- Hosted on Cloudflare Workers static assets
- Production domain: `https://marcomachado.dev`
- Cloudflare config: `wrangler.toml`
- Static build output served from `./out`
- Auto-deploy is configured in the Cloudflare dashboard via Git integration
- Pushing to `main` deploys to production
- Use Cloudflare's Wrangler CLI for manual deploys:
  - `npx wrangler login` — Log in to Cloudflare
  - `npm run build && npx wrangler deploy` — Build and deploy

## Architecture

- **Static export** — `output: "export"` in `next.config.ts`, no runtime server, no server actions, no request-time rendering. `trailingSlash: true`, `images.unoptimized: true`
- **Routes** — `/`, `/about`, `/uses`, `/ai-tools`, `/blog`, `/blog/[slug]`, plus generated `/rss.xml`, `/sitemap.xml`, `/robots.txt`. All pages in `src/app/`
- **Articles** — Markdown files in `content/blog/`, loaded by `src/lib/posts.ts` with a strict Zod schema validated during the build. Slug = filename minus `.md`. Drafts are excluded from pages, lists, RSS, and sitemap
- **Markdown** — Rendered at build time by `src/lib/markdown.ts` (unified + remark-gfm + Shiki dual themes). No client-side highlighting runtime
- **Components** — Server Components by default. The only Client Components are `theme-provider.tsx` and `theme-toggle.tsx`. shadcn/ui primitives live in `src/components/ui/` (source-owned; add via `npx shadcn add <name>`)
- **Theme** — Dark by default with persisted light override via next-themes (`attribute="class"`, `enableSystem={false}`). The pre-hydration inline script prevents theme flash
- **Design tokens** — CSS variables in `src/app/globals.css` (`:root` light, `.dark` dark, oklch values, teal accent), mapped to Tailwind via `@theme inline`. All token pairs meet WCAG 4.5:1 contrast in both themes
- **Fonts** — Self-hosted in `src/fonts/` (SIL OFL) via `next/font/local`: Newsreader (headings), IBM Plex Sans (body), IBM Plex Mono (code/meta)
- **List ordering** — Sort items by relevance/importance, not alphabetically

## Commit Strategy

- Use small, atomic commits with one focused change per commit
- Group commits into logical blocks when a task touches multiple concerns; avoid bundling unrelated changes in one commit
- Write imperative, human-readable commit messages (`Add ...`, `Fix ...`, `Remove ...`, `Update ...`, `Refine ...`)
- Do not use Conventional Commits prefixes (`feat:`, `fix:`, etc.)
- Commit planning/design docs before implementation for larger work

## Conventions

- **Imports** — Use `@/*` path alias (maps to `src/*`)
- **Styling** — Tailwind utility classes + CSS custom properties from `globals.css`. No CSS modules or scoped styles
- **Props** — TypeScript interfaces or inline types for component props
- **Article fetching** — `getPublishedArticles()` from `@/lib/posts` (draft-filtered, sorted by `pubDate` desc)
- **Date formatting** — `formatDate()` from `@/lib/site` (uses `timeZone: "UTC"` to avoid off-by-one from UTC midnight coercion)
- **Domain terms** — Article, Cover Image, Social Image, Uses, AI Tools (see `CONTEXT.md` glossary)

## Content Schema

Article frontmatter (strict — extra fields fail the build): `title`, `description`, `pubDate`, `updatedDate?`, `tags[]`, `draft` (default false), `coverImage?`, `coverImageAlt?` (required when `coverImage` is set), `ogImage?`

## Blog Skill

Local skill at `.claude/skills/blog/`. Commands:
- `/blog write <topic>` — Full workflow: branch → outline → draft → fact-check → review → publish
- `/blog analyze <file>` — Review existing post (readability, SEO, anti-AI)
- `/blog publish` — Pre-merge checklist on blog branch

## Agent skills

### Issue tracker

Issues and PRDs are tracked in this repository's GitHub Issues. See `docs/agents/issue-tracker.md`.

### Triage labels

Triage uses the default five-label vocabulary. See `docs/agents/triage-labels.md`.

### Domain docs

Domain documentation uses a single-context layout. See `docs/agents/domain.md`.
