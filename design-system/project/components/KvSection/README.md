# KvSection

A titled key/value list for the Uses and AI Tools pages: a SectionLabel over a two-column definition list.

**Consumer provides:** `section` (`id`, `title`, `rows[]` of `{ key, val, note? }`). The data lives in `src/lib/data.ts`.

- Keys are `body-sm` in `muted-foreground` in a 10rem column; values are `foreground`. An optional note follows as ` · note` in `muted-foreground`.
- Below 640px the columns stack (one column, 4px gap). Rows are 10px apart.
- Order rows by relevance, not alphabetically.
