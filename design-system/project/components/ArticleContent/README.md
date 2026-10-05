# ArticleContent

The long-form styles for rendered Markdown in an Article (`.article-content` in `globals.css`).

**Consumer provides:** `html` from `renderMarkdown()` (unified, remark-gfm, Shiki dual themes). In the site this is a `div.article-content` with `dangerouslySetInnerHTML` in `src/app/blog/[slug]/page.tsx`. The bundle wraps that same markup as `MarcoMachado.ArticleContent`, and the preview shows real pipeline output from "The Prompt Isn't the Bottleneck".

- Body: `article-body` (IBM Plex Sans 17px / 1.75), 20px between paragraphs.
- Headings: `article-h2` (28px, 40px above), `article-h3` (22px), `article-h4` (18px). All Newsreader 600, balance-wrapped, with a 5rem scroll margin for anchor links.
- Links: `primary`, underlined 1px with a 3px offset, 2px on hover.
- Blockquote (not used in an Article yet): `blockquote` style (Newsreader italic 18px) in `muted-foreground`, with a 3px `primary` left rule.
- Inline code: mono 0.875em on a `muted` chip with `radius-sm`. Code blocks: Shiki `github-light` and `github-dark`, a 1px `border`, `radius-lg`, padding 16px by 20px, `code-block` text.
- Tables are full width with `border` cells and `muted` header cells. Images get `radius-lg`. An `hr` is a short 8rem centred rule.
