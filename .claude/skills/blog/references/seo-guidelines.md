# SEO Guidelines

## Hard Rules (block publishing)

These must pass before a post can be published:

1. **Heading hierarchy** — No skipped levels. H1 is title only (rendered by layout, never in markdown body). Body uses H2 for sections, H3 for subsections.
2. **Title under 60 characters** — The `title` frontmatter field. Measured by character count.
3. **Meta description present** — The `description` frontmatter field must be non-empty.
4. **No H1 in body** — The markdown body must not contain any `# ` lines (H1). The title is rendered by BlogPostLayout.

## Suggestions (report, don't enforce)

These improve discoverability but should not block publishing:

- **Meta description 150-160 chars** — Specific, not vague. Include what the reader gets.
- **Title includes primary topic keyword** — The main subject should appear naturally in the title.
- **Question-format headings** — Where natural, frame H2s as questions readers would search for. Don't force it.
- **Internal links** — Link to existing posts on the blog where relevant. Use descriptive anchor text (never "click here").
- **External links** — Link to authoritative sources for claims. Use tier 1-3 sources (primary research, major publications, reputable industry sources).
- **Front-loaded keyword** — Primary keyword in the first 100 words of the post.
