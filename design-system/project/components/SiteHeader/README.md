# SiteHeader

The top bar: the wordmark on the left, then MainNav and the theme toggle, inside the `content-width` column with a `border` rule underneath.

**Consumer provides:** nothing. It reads `site.title`.

- The wordmark is the site name in the `wordmark` text style (Newsreader 600, 18px), linking home. The `mm` monogram is not used here.
- `space-3` vertical padding and `space-6` gutters. The items wrap on narrow screens.
- The theme toggle is a 40px ghost icon Button. It shows the Sun in dark mode and the Moon in light mode, and renders a same-size placeholder until mounted so nothing shifts.
