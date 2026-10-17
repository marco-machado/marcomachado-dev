# ArticleRow

One Article in a list, as a card: the date and reading time, the linked title, the description and a "Read the article" call to action, with the Cover Image beside them when the Article has one.

**Consumer provides:** `article` (`title`, `description`, `slug`, `pubDate`, `body`, and optionally `coverImage`) and an optional `headingLevel` (`"h2"` by default, as on the Blog; use `"h3"` under a SectionHead, as on the home page).

- It is a stretched-link card (`.card`): the title is the only link, and its `::after` covers the whole card, so the card is clickable anywhere and the link is named by the title alone. "Read the article" is an `aria-hidden` span, not a second link.
- The box: a 1px `border`, `card-bg`, `card-radius` corners and `space-6` padding. Rows stack `space-6` apart in `.article-list`.
- Meta line: `text-xs` in `muted-foreground`. The date comes from `formatDate()` (UTC) and the reading time from `body` at 220 words a minute, joined by ` · ` ("March 4, 2026 · 5 min read"). Tags aren't shown in the row.
- Title: `text-md` at leading 1.45, balance-wrapped. Description: `text-sm` in `muted-foreground` at leading 1.7. Call to action: `text-sm` in `primary` with a dashed underline and an `ArrowRight`.
- Hovering anywhere on the card turns its border `muted-foreground` and its title `primary`, and moves the arrow 3px right. Focusing the title draws the `ring` around the whole card.
- Cover Image: shown only when `coverImage` is set, and decorative here (`alt=""`). It takes an 11rem column at 4:3, right of the text; below `breakpoint-sm` it moves above the text at 16:9. Without one the card is text only, as in the preview. Never add placeholder art.
- Rows slide up into place as they scroll into view.
