# PageHeader

The top of every inner page and Article: the shell command that opened the page, the h1 after a `>` prompt, and an optional description.

**Consumer provides:** `title` (a string) and optionally:

- `command`: the shell command, printed after a `$` in `primary` ("ls ~/blog", "cat uses.md").
- `output`: what the command printed, under it (the 404's "cd: no such file or directory: ./missing-page").
- `description`: a ReactNode, so it can hold links (Uses links uses.tech through ExternalLink).
- `children`: more header content after the description (the Blog's Subscribe line, an Article's meta line and Cover Image).

Styles:

- Command and output: `text-sm` in `muted-foreground`, `space-5` above the title. A long command wraps anywhere rather than overflow.
- Title: `text-display` at leading 1.2 with -0.01em tracking, balance-wrapped, after a `> ` in `muted-foreground`. Wrapped lines hang under the text, not under the prompt.
- Description: `text-base` in `muted-foreground` at leading 1.6, at most 38rem wide, `space-5` below the title. Links in it are `primary` with a dashed underline.
- The header is at most 48rem wide, with `space-16` before the content (`space-12` on an Article, less on the 404). Use one per page; the home page has its own hero instead.
- It rises in when the page loads.
