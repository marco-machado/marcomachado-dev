# PageHeader

The h1 and optional description at the top of every inner page (Blog, About, Uses, AI Tools).

**Consumer provides:** `title` (string) and an optional `description` (string).

- The title uses `page-title` (Newsreader 600, 36px, tight tracking, balance-wrapped) in `foreground`.
- The description uses `lead`-size text (18px) in `muted-foreground`, 12px below the title.
- `space-10` (40px) follows before the content. Use one per page. The home page uses its own `display` hero instead.
