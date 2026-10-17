# ArticleContent

The long-form styles for rendered Markdown in an Article (`.article-content` in `globals.css`, plus the `##` prompt in `site.css`).

**Consumer provides:** `html` from `renderMarkdown()` (unified, remark-gfm, Shiki `github-dark`). In the site this is a `div.article-content` with `dangerouslySetInnerHTML` in `src/app/blog/[slug]/page.tsx`. The bundle wraps that same markup as `MarcoMachado.ArticleContent`, and the preview shows real pipeline output from "The Prompt Isn't the Bottleneck".

- Body: `text-base` (15px, the size of all running text on the site) at leading 1.8, with 1.25rem (18.75px) between paragraphs. Bold is 600.
- Headings: h2 in `text-lg` after a `## ` in `primary`, `space-10` above; h3 in `text-md`; h4 in `text-base` at 600. All lead at 1.25 with -0.01em tracking, balance-wrapped, with a 5rem scroll margin for anchor links.
- Links: `primary` with a solid 1px underline offset 3px, 2px on hover.
- Lists: disc and decimal markers, indented 1.5rem.
- Blockquote (not used in an Article yet): `muted-foreground` italic with a 3px `primary` left rule. Plex Mono's italic isn't loaded, so the browser slants the roman.
- Inline code: 0.875em on a `muted` chip with `radius-sm`. Code blocks: Shiki `github-dark` colours, a 1px `border`, `radius-lg`, 1rem by 1.25rem padding, `text-sm` at leading 1.65.
- Tables are full width in `text-sm`, with `border` cells and `muted` header cells. Images get `radius-lg`. An `hr` is a short 8rem centred rule.
