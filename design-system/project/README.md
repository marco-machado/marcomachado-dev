marcomachado.dev is a coder's workspace for a personal engineering blog. Everything is set in IBM Plex Mono on a near-black ground with one muted green accent (`primary`). Lists of things sit in boxed panels, and shell flourishes mark commands, titles, sections and paths. The design is dark only, with one set of colours, and every text pair on it reaches at least 4.5:1.

## Principles

- **One typeface.** IBM Plex Mono at 400 for everything, titles included. 600 is only for bold inside Articles (`strong`, `h4`, table headers). Hierarchy comes from the six `text-*` sizes and from colour, not from weight or a second family.
- **Boxed panels.** Lists of things are cards: a 1px `border` box filled with `card-bg`, with `card-radius` corners and `space-6` padding (ArticleRows, AI tool cards, the hero facts panel, the older/newer article links). Page structure is drawn with `border` hairlines: under the header, over the footer, between home sections.
- **One accent.** `primary` marks what you can act on or what is current. Everything else is `foreground` or `muted-foreground`.
- **Shell flourishes, outside the text.** The glyphs are CSS pseudo-content or `aria-hidden` spans, so screen readers and copy-paste get plain words.
- **Real images or none.** An Article shows its Cover Image when it has one and nothing when it doesn't. No placeholder art, illustrations, gradients or shadows.

| Glyph | Where | Colour |
| --- | --- | --- |
| `/` | before nav and footer links | `muted-foreground` |
| `//` | before section titles (SectionHead) | `primary` |
| `>` | before page titles; wrapped lines hang under the text | `muted-foreground` |
| `>` | before prompt-list links (hero, 404) | `primary` |
| `$` | before shell commands, the home tool picks and the RSS line | `primary` |
| `-` | before Uses keys | `primary` |
| `##` | before Article h2s | `primary` |
| block cursor | after the hero headline | `primary` |

## Content fundamentals

- **Voice:** first person, direct, short sentences, a working engineer: "Software engineer shipping web apps since 2014. I write for AI builders and operators: small demos, agents in real shipping, and takes while the work is still in progress."
- **The shell conceit:** each inner page prints the command that opened it above its title: `$ ls ~/blog`, `$ cat about.md`, `$ cat uses.md`, `$ ls ~/ai-tools`, `$ cat the-prompt-isnt-the-bottleneck.md`. The 404 prints a shell error, `cd: no such file or directory: ./missing-page`. Keep commands short and plausible, and never let a joke replace a fact.
- **Headlines:** the hero is a greeting at a prompt, "> Hey, I'm Marco.", with a block cursor. Page titles are short nouns: "Blog", "About me", "Uses", "AI Tools", "Page not found". Article titles are title case ("The Prompt Isn't the Bottleneck"). Section titles are sentence case ("Latest articles", "Tools I actually use", "Let's connect").
- **Casing:** nav and meta links are lowercase: "view all", "full list", "← all articles", and the hero prompts "read the blog" and "get in touch". Where the CSS lowercases a link, write the source in its natural case ("Blog", "AI Tools", "View all", "All articles"). Calls to action are sentence case ("Read the article", "Get in touch"). Nothing is uppercase except the small fact labels ("LOCATION", "FOCUS"), which the CSS uppercases.
- **Separators:** ` · ` between meta items ("March 4, 2026 · 5 min read"; "Web apps · Dev tools · AI"), and ` / ` between alternatives in a Uses row ("Brave / Chrome").
- **Say a fact once:** "Remote, Brazil" and "since 2014" appear once per page, worded the same everywhere.
- **Domain terms:** the section is the *Blog* and its items are *Articles* (not posts). *Uses* (not stack), *AI Tools*. A *Cover Image* sits on an Article; a *Social Image* is for sharing.
- **No emoji**, and no icons in place of words: the contact links are words (Email, GitHub, X, LinkedIn, Instagram).

## Colour

- `background` is the ground. Cards and panels are `card-bg` with a `border` edge. `card`, `popover`, `secondary` and `input` are shadcn aliases the site doesn't use.
- Text is `foreground`. Secondary text (descriptions, meta lines, inactive nav, the footer, shell commands, Uses keys) is `muted-foreground`.
- `primary` is for links, the shell glyphs, the Brand, the current nav item, the Button and the cursor, plus two emphasised lines: the About lead and the contact headline. On a `primary` fill (the Button on hover), use `primary-foreground`.
- Links in prose (PageHeader descriptions, the About body, the RSS line, "Read the article") are `primary` with a dashed underline in `primary` at 55%, offset 4px. Links inside an Article body are solid: 1px with a 3px offset, 2px on hover. Keep the underline on inline links.
- An entry reached by a deep link on Uses or AI Tools (`:target`) gets an 8% `primary` wash, and an AI tool card also gets a `primary` border.
- `muted` fills only inline code chips and table header cells. `accent` with `accent-foreground` is for text selection only.
- `destructive` is for errors, always with a word. The site has none today.
- `border` is decorative (1.4:1). It is never the only sign that something is a control.

## Typography

One family, IBM Plex Mono (400 and 600, self-hosted woff2), in six sizes. Use a token, never a literal size.

| Token | Size | Use |
| --- | --- | --- |
| `text-display` | 30–41.25px, `clamp(2rem, 4.5vw, 2.75rem)` | the hero headline and PageHeader titles |
| `text-lg` | 22.5px | Article h2, the contact headline |
| `text-md` | 16.875px | card and section titles, AI tool names, Article h3, ledes |
| `text-base` | 15px | all running text, Articles included |
| `text-sm` | 13.5px | nav, links, secondary text, the Button, code blocks |
| `text-xs` | 12px | dates, tags and labels: the floor, nothing is smaller |

- The root font size is 15px, so 1rem is 15px and rem values run smaller than at the browser's 16px.
- Titles are 400 with -0.01em tracking, balance-wrapped. Leading is 1.2 on page titles, 1.45 on card titles and 1.75 on running text (1.8 in Articles).
- The small uppercase labels add tracking (0.08em on the hero facts).

## Layout and spacing

- One centred column, `content-width` (60rem, 900px), with a `space-6` gutter that narrows to `space-5` below `breakpoint-sm`. The header, main and footer share it, and their `border` rules run the full window width.
- The home page: a two-column hero (the text, and a 17rem facts panel) that stacks below `breakpoint-md`, then sections padded `space-14` above and below, divided by rules. A SectionHead sits `space-8` above its content.
- Inner pages: a PageHeader (at most 48rem) with `space-16` under it, then sections `space-16` apart. An Article reads in a centred `article-width` (46rem) column.
- Cards have `space-6` padding. ArticleRows stack `space-6` apart; AI tool cards sit `space-4` apart in an auto-fill grid of columns at least 16rem wide.
- Nav, footer and contact links and the Button are at least `touch-target` tall, and short links at least `min-target` wide.

## Shape, borders and elevation

- Corners are small: `card-radius` (4px) for cards, panels, tags, the Button, the portrait and Cover Images; `radius-lg` for code blocks and images inside Articles; `radius-sm` for inline code.
- Borders are 1px `border`. The one thick line is the blockquote's 3px `primary` rule.
- No shadows. The skip link's small shadow is the only exception.

## States and motion

- **Focus:** a 2px solid `ring` outline with a 2px offset. Focusing a card's title link draws the ring around the whole card.
- **Hover:** nav, footer, contact and "view all" links go from `muted-foreground` to `foreground`. Prompt links, the home tool picks, Uses items and About list links go to `primary`. A card's border goes to `muted-foreground`, its title to `primary`, and its arrow nudges 3px right. The Button fills with `primary` and its text turns `primary-foreground`. Colour changes take 150ms.
- **Motion** is CSS only (`src/styles/motion.css`), easing on `cubic-bezier(0.22, 1, 0.36, 1)`:
  - The hero rises in. Its headline types itself out (below 24rem, where it wraps, it rises instead), and the prompts follow one by one.
  - The hero cursor blinks four times, then stays lit (WCAG 2.2.2).
  - Section heads, cards, Uses sections and AI tool cards slide up 2rem as they scroll into view. The slide is scroll-driven with no fade, so text keeps its contrast.
  - Between pages, the old page fades out and the new one rises in, through React's `<ViewTransition>`.
  - `prefers-reduced-motion` turns all of it off.

## Iconography

- Lucide (`lucide-react`) arrows only, always `aria-hidden` and never in place of words:
  - `ArrowRight` after the Button label, "Read the article" and internal "view all" links. It nudges 3px right on hover.
  - `ArrowUpRight` at 0.8em in `muted-foreground` after every external link, through ExternalLink.
- The shell glyphs are type, not icons.
- The brand mark is a green `>_` prompt on a near-black tile (`assets/Logos/prompt-mark.svg`), used as the favicon. In the header the Brand is the domain set in text, not the mark.

## Not synced

- Components are the site's real React components (`src/components/*.tsx`), bundled into `components/bundle.js` as `window.MarcoMachado`. In the bundle, `next/link` is a plain `<a>`, `next/image` a plain `<img>` (the site's static export doesn't optimise images either), and `usePathname` reads `window.__mmPathname`. The site runs React 19; the previews run on React 18, which these components support.
- `components/bundle.css` is Tailwind v4 compiled from the components' classes, plus `src/styles/site.css` (the component styles, in a `site` layer above the utilities), `src/styles/motion.css`, and the type scale, base and `.article-content` rules in `globals.css`. Colour values come from tokens.css.
- Button and TextLink are class patterns in the pages, not components. Their cards show the markup as written.
- Page markup that isn't in the bundle: the home hero and tool picks, the AI tool cards, the About layout, and the Article page's meta line, Cover Image, older/newer links and footer (all in `src/app/`). ProjectCard isn't bundled because the site has no projects to show yet. The shadcn Button in `src/components/ui/` isn't used by any page, so it isn't bundled either.
- `text-display` is a `clamp()` and is recorded at its 2.75rem maximum. Sizes and lengths are given in px at the 15px root.
- `color-mix()` values (the dashed underline, the `:target` wash) aren't tokens, because the format can't hold them.
- The Tailwind `@theme inline` colour aliases (`--color-*`) and next/font's `--font-mono-var` are left out: tokens.css defines the colours and `--font-mono` directly.
- Code-block colours come from Shiki's `github-dark` theme, not from tokens.
- The portrait (`public/images/portrait.webp`) is personal photography and is not included as a brand asset.
