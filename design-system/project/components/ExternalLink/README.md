# ExternalLink

A link to another site: it opens in a new tab, carries a muted ↗ and tells screen readers so. Every link that leaves the site goes through it.

**Consumer provides:** `href`, the link text as `children`, and optionally `id` and `className`. The `id` is a fragment for deep links: Uses and AI Tools give each entry `slugify(name)` ("VS Code" → `vs-code`). The `className` is the context's link class (`kv-row__link`, `card__link`, `contact-links__link`, `section-head__more`).

- Renders `<a target="_blank" rel="noopener noreferrer">`, then a Lucide `ArrowUpRight` at 0.8em in `muted-foreground` (`aria-hidden`), then a screen-reader-only " (opens in a new tab)".
- It sets no colour or underline of its own and takes the context's link style: `primary` with the dashed underline in prose (a PageHeader description), `foreground` turning `primary` on hover in a Uses row.
- Use it for http(s) links only. A `mailto:` link stays a plain `<a>` (ContactLinks' Email), and internal paths use Next.js `Link`.
