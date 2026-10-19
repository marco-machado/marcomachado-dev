# Images

`og-default.png` (1200×630) is the site-wide Social Image, copied from `public/images/og-default.png`. `scripts/brand-assets.mjs` draws it from a template.

- On the #080c0b ground, in IBM Plex Mono 400: a `$ whoami` command in muted grey with a green `$`; the headline "> Marco Machado" at 92px, with a muted `>` and a green block cursor; the line "Software engineer writing for AI builders and operators." in muted grey; and the domain in green under a hairline at the bottom.
- An Article without its own `ogImage` is shared with its Cover Image, or with this one when it has neither.
- New Social Images follow the same pattern: the dark ground, mono text, and green only for the `$`, the cursor and the domain. Change the template in the script and re-run `node scripts/brand-assets.mjs`.
