# SectionHead

A section's h2 after a `//` comment prompt, with an optional link at the end of the row. It opens every home section, the About sections, the Uses categories (inside KvSection) and the AI Tools categories.

**Consumer provides:** `id` (for the section's `aria-labelledby`), `title`, and optionally `more` (`{ label, href }`) and `className`.

- Title: `text-md` in `foreground` with 0.02em tracking, after a `// ` in `primary`. It is a real h2, so whatever lists under it uses h3 (ArticleRow's `headingLevel="h3"`).
- `more`: `text-sm` in `muted-foreground`, lowercased by the CSS ("View all" shows as "view all"), pushed to the end of the row and at least `touch-target` tall. Hover turns it `foreground`. An internal href gets an `ArrowRight` that nudges 3px right on hover; an http(s) href renders through ExternalLink with the ↗ instead.
- `space-8` below it before the section's content (`space-4` on About).
- Write titles in sentence case: "Latest articles", "Tools I actually use", "Let's connect".
