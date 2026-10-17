# KvSection

A titled key/value list for the Uses page: a SectionHead over rows that pair a key with one or more linked items.

**Consumer provides:** `section` (`id`, `title`, `rows[]` of `{ key, items: { name, href }[], note? }`). The data lives in `uses` in `src/lib/data.ts`.

- Rows form a two-column definition list in `text-base`: the key in a 12rem column, in `muted-foreground` after a `- ` in `primary`, and the items in `foreground`. `border` rules divide the rows, with one above the first, and each row has 0.9rem (13.5px) of padding above and below.
- Each item is an ExternalLink with `id={slugify(name)}`, so the home page's tool picks link straight to it (`/uses/#warp`). Several items are joined by ` / ` ("Brave / Chrome"). An optional note follows as ` · note` in `muted-foreground`.
- Items turn `primary` on hover and are at least 1.75rem (26.25px) tall.
- A row reached by a deep link gets an 8% `primary` wash and stops 6rem below the top of the window.
- Below `breakpoint-sm` the key stacks above its value.
- Order rows by relevance, not alphabetically.
