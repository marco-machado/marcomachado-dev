# ArticleRow

One Article in a list: a linked serif title and description, then a mono meta line with the date and tags.

**Consumer provides:** `article` (`title`, `description`, `slug`, `pubDate`, `tags[]`) and an optional `headingLevel` (`"h2"` by default; use `"h3"` under a SectionLabel).

- The title uses `article-row-title` and turns `primary` on hover. The whole title and description block is one link, with a 4px focus offset and a `radius-sm` outline.
- The description is `body` in `muted-foreground`, 6px below the title.
- The meta line is `meta` (mono 12px, `muted-foreground`), 8px below. Format the date with `formatDate()` (UTC) and the tags with `formatTag()`, joined with ", " after a ` · `.
- Stack rows in a `divide-y` list: `space-5` above and below each row, none at the list's ends.
