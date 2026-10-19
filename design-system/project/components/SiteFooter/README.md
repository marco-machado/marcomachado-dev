# SiteFooter

The bottom bar: the footer nav, ContactLinks and an RSS link, then the copyright line, under a full-width `border` rule.

**Consumer provides:** nothing.

- Text is `text-sm` in `muted-foreground`. Nav links are lowercase after a `/`, as in MainNav. Nav, contact and RSS links turn `foreground` on hover; they are at least `touch-target` tall, and the short ones at least `min-target` wide.
- Inside the `content-width` column, with `space-8` above, `space-10` below and `space-6` gutters. The groups wrap with `space-4` between rows and `space-8` between columns.
- The copyright line comes last, on its own row in `text-xs`: "© 2026 Marco Machado", with the year from the build and non-breaking spaces between the parts.
- There is no brand block. The Brand appears in the header only.
