A quiet, editorial system for a personal engineering blog. The page is one narrow reading column, the type does most of the work, and teal (`primary`) is the only colour. Dark is the default theme and light is the user's override. Both are first-class, and every text pair reaches at least 4.5:1 in each.

## Principles

- **Type over decoration.** Hierarchy comes from Newsreader headings, IBM Plex Sans body copy and IBM Plex Mono metadata. There are no shadows, gradients or illustrations.
- **Rules, not boxes.** Sections are separated by `border` hairlines (header bottom, footer top, under a section label, between list rows). Do not wrap content in cards.
- **One accent.** `primary` teal marks what you can act on (links, the default Button) plus one emphasised word in a headline. Everything else is `foreground` or `muted-foreground`.
- **Quiet links, no icon soup.** Outbound links are words (Email, GitHub, X, LinkedIn, Instagram), not logos.

## Content fundamentals

- **Voice:** first person, direct, short sentences. Marco writes as a working engineer: "I ship web apps and write for AI builders and operators. Small demos and how they work."
- **Headlines:** short declarative fragments. The hero is "Engineer. Operator. *Builder.*", with the last word italic in `primary`.
- **Casing:** title case for Article titles ("The Prompt Isn't the Bottleneck"), sentence case for UI copy ("Read the blog", "More about me", "All articles"). The mono labels are uppercase ("RECENT WRITING").
- **Separators:** use a spaced middle dot ` · ` between metadata items ("March 4, 2026 · AI and engineering, Tools"; "Software engineer · Remote, Brazil · Since 2014"). Use an em dash for asides in prose.
- **Domain terms:** say *Article* (not post), *Uses* (not stack), *AI Tools*. A *Cover Image* sits in an article; a *Social Image* is for sharing.
- **No emoji** in the UI or headings. Tags show as words ("AI and engineering", "Tools"), not chips.

## Colour

- Page ground is `background`. Text is `foreground`, and secondary text (descriptions, meta, inactive nav, footer) is `muted-foreground`.
- Links are `primary`, underlined 1px with a 4px offset; the underline becomes 2px on hover. Do not remove the underline from inline links.
- On a `primary` fill, use `primary-foreground`. It is light ink in light mode and dark ink in dark mode, because the dark-mode teal is pale.
- `muted` is for fills only: inline code chips, table header cells, hover states. Never use it for large areas.
- Text selection uses `accent` with `accent-foreground`.
- Use `destructive` only for errors, and always with a word.
- Use `card` and `popover` sparingly. The site has almost no raised surfaces.

## Typography

- **Newsreader** (variable 200–800, roman and italic) for headings and the wordmark. Weight 600, tight tracking: `display`, `page-title`, `article-row-title`, `article-h2`–`article-h4`, `wordmark`. It is also used for `blockquote` (italic).
- **IBM Plex Sans** (variable 100–700) for everything you read: `lead` for intros, `article-body` (17px, 1.75) for Articles, `body` and `body-sm` for UI, `button` (500).
- **IBM Plex Mono** (400, 600) for machine-ish detail: `meta` dates and tags, `section-label` (uppercase, 0.1em tracking), `kicker`, `code-block`.
- Balance-wrap headlines. Keep paragraphs to the prose measure inside `content-width`.

## Layout and spacing

- One centred column, `content-width` (42rem), with a `space-6` gutter. Header, main and footer share it.
- Main content has `space-12` vertical padding. Home sections are `space-14` apart, and a PageHeader has `space-10` below it.
- Lists are rows divided by `border`. Each ArticleRow has `space-5` above and below.
- Every link and control is at least `touch-target` (44px) tall, even when it looks like plain text.

## Shape, borders and elevation

- Radii are small: `radius-lg` (6px) for Buttons, code blocks, images and the portrait; `radius-sm` for inline code.
- Borders are 1px `border`. The blockquote rule is the one thick line (3px `primary`).
- No shadows. The skip link's small shadow is the only exception.

## States and motion

- Focus: 2px solid `ring` outline with a 2px offset on every focusable element (`focus-ring-width`). It is at least 5.9:1 on every surface in both themes.
- Hover: links thicken their underline; nav and footer links go from `muted-foreground` to `foreground`; ArticleRow titles go to `primary`; ghost Buttons fill with `muted`.
- Active Buttons nudge down 1px. Disabled is 50% opacity.
- Motion is colour transitions only, and `prefers-reduced-motion` turns them all off. Theme switches have no transition.

## Iconography

- The site uses **Lucide** (`lucide-react`) icons at 16px, only inside Buttons. Today that is the Sun/Moon theme toggle. Icons are never decorative and never stand in for a link's words.
- The brand mark is the `mm` monogram (assets/Logos): a teal tile with off-white monospace lowercase letters. The header uses the `wordmark` text style instead of the mark.

## Not synced

- Components are the site's **real React components** (`src/components/*.tsx`), bundled into `components/bundle.js` as `window.MarcoMachado`. They are styled by `components/bundle.css`, which is Tailwind v4 compiled from their own classes plus the base and `.article-content` rules in `globals.css`. The site runs React 19; the previews run on React 18, which these components support. In the bundle, `next/link` is a plain `<a>`, `usePathname` reads `window.__mmPathname`, and next-themes is a stand-in that flips `data-theme`.
- SectionLabel and TextLink are repeated class patterns in `src/app/page.tsx`, not components. Their cards show the markup as written.
- The Tailwind `@theme inline` aliases (`--color-*`, `--font-*-var`) are left out, because they only map the tokens above. The `--radius-sm/md/xl` `calc()` values are resolved to plain pixels.
- Code-block colours come from Shiki's `github-light` and `github-dark` themes, not from tokens.
- The article page header (title, description, dates, Cover Image) in `src/app/blog/[slug]/page.tsx` is page markup, not components, so they aren't in the bundle.
- The portrait (`public/images/portrait.webp`) is personal photography and is not included as a brand asset.
