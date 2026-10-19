# ContactLinks

The outbound contact paths as a row of plain words: Email, GitHub, X, LinkedIn, Instagram.

**Consumer provides:** an optional `className`. The links come from `contactLinks` in `src/lib/site.ts`. It has one look everywhere it appears: the footer and the About page's Contact section.

- Words, not logos. Email is a plain `mailto:` link; the others go through ExternalLink, so they open in a new tab with the ↗ marker and a screen-reader note.
- `muted-foreground`, turning `foreground` on hover. The size comes from the context: `text-sm` in the footer, `text-base` on About.
- 1.25rem (18.75px) apart. Each link is at least `touch-target` tall and `min-target` wide, so "X" is still easy to hit.
