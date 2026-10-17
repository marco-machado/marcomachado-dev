# MainNav

The site's primary navigation: four lowercase path links in the header.

**Consumer provides:** nothing. The items come from `navItems` in `src/lib/site.ts`. It is the site's only Client Component, because it reads `usePathname()` to mark the current page. In previews, `usePathname` reads `window.__mmPathname` (default `/blog/`).

- Links are `text-sm` in `muted-foreground`, lowercased by the CSS, each after a `/` in `muted-foreground`: "/blog /about /uses /ai-tools". Hover turns them `foreground`.
- The current section, including its child routes (an Article under the Blog), gets `aria-current="page"` and `primary`.
- Links are at least `touch-target` tall and 1.75rem apart. Below `breakpoint-sm` the nav takes its own row under the Brand and the gap narrows to 1.25rem.
- Order: Blog, About, Uses, AI Tools. Order by importance, not alphabetically.
