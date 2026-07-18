# marcomachado.dev

Personal blog and portfolio built with [Next.js](https://nextjs.org) (App Router, static export), React, and Tailwind CSS v4.

## Stack

- **Next.js 16** — App Router, static export to `./out/`
- **React 19** — Server Components by default, Client Components only for interactivity
- **Tailwind CSS v4** — Utility-first styling with CSS variable design tokens
- **shadcn/ui + Radix** — Source-owned UI primitives
- **Shiki** — Build-time syntax highlighting
- **TypeScript** — Strict type checking

## Commands

| Command             | Action                                  |
| :------------------ | :-------------------------------------- |
| `npm install`       | Install dependencies                    |
| `npm run dev`       | Start dev server at `localhost:3000`    |
| `npm run build`     | Build static site to `./out/`           |
| `npm run lint`      | Run ESLint                              |
| `npm run typecheck` | Run TypeScript checks                   |

## Project Structure

```text
content/blog/         # Articles (Markdown with strict frontmatter)
public/               # Static assets (favicons, images)
src/
├── app/              # App Router pages, RSS, sitemap, robots
├── components/       # React components (ui/ holds shadcn primitives)
├── fonts/            # Self-hosted woff2 files (SIL OFL)
└── lib/              # Content loading, markdown pipeline, site config
```
