# ContactLinks

The outbound contact paths as a row of plain words. No icons ("no icon soup").

**Consumer provides:** an optional `muted` (boolean) and `className`. The links come from `contactLinks` in `src/lib/site.ts`: Email, GitHub, X, LinkedIn, Instagram.

- **Default** (home hero): 14px TextLinks in `primary`, underlined, 20px apart.
- **Muted** (footer, About facts): `meta` mono 12px in `muted-foreground`, no underline, `foreground` on hover.
- Every link is at least `touch-target` tall. External links open in a new tab with `rel="noopener noreferrer"` and a screen-reader-only "(opens in a new tab)".
