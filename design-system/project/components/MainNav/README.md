# MainNav

The site's primary navigation: four quiet text links in the header.

**Consumer provides:** nothing. The items come from `navItems` in `src/lib/site.ts`. It is a Client Component because it reads `usePathname()` to mark the current page. In previews, `usePathname` reads `window.__mmPathname` (default `/blog/`).

- Links are `body-sm` in `muted-foreground`, padded 10px left and right, and at least `touch-target` tall. Hover turns them `foreground`.
- The current section (including child routes, e.g. an Article under Blog) gets `aria-current="page"`, `foreground` and a 1px underline.
- Order: Blog, About, Uses, AI Tools. Order by importance, not alphabetically.
