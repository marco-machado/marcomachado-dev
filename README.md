# marcomachado.dev

Personal blog and portfolio built with [Astro](https://astro.build), Tailwind CSS v4, and MDX.

## Stack

- **Astro 5** — Static site generation, file-based routing
- **Tailwind CSS v4** — Utility-first styling
- **MDX** — Blog posts with component support
- **TypeScript** — Type-safe components and utilities

## Commands

| Command             | Action                                |
| :------------------ | :------------------------------------ |
| `npm install`       | Install dependencies                  |
| `npm run dev`       | Start dev server at `localhost:4321`  |
| `npm run build`     | Build production site to `./dist/`   |
| `npm run preview`   | Preview production build locally     |
| `npx vitest run`    | Run tests                            |

## Project Structure

```text
src/
├── components/       # Astro components
├── content/blog/     # Blog posts (en/ and pt/)
├── i18n/             # Translations and i18n utilities
├── layouts/          # Base and blog post layouts
├── pages/            # File-based routes (en default, pt/ prefix)
└── styles/           # Global CSS and custom properties
```
