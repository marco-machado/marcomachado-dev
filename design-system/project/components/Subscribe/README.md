# Subscribe

Points readers at the RSS feed as a shell prompt: "$ subscribe via RSS".

**Consumer provides:** an optional `className`. It always links `/rss.xml`.

- `text-sm` in `muted-foreground`. The `$` is `primary` and `aria-hidden`; the link is `primary` with a dashed underline and at least 1.75rem tall.
- `space-4` above it, except in an Article's footer, where the footer's own spacing applies.
- It sits under the Blog's PageHeader (as its `children`) and in every Article's footer.
