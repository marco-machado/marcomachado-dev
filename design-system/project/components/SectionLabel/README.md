# SectionLabel

A small uppercase mono heading with a hairline under it. It introduces a list or group ("Recent writing", the Uses categories).

It is inlined in `src/app/page.tsx` and `src/components/kv-section.tsx` as `mb-4 border-b pb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase`.

- **Consumer provides:** the label text (write it in sentence case; CSS uppercases it) and an `id` for the section's `aria-labelledby`.
- Uses the `section-label` text style in `muted-foreground`, with a `border` rule 12px below and 16px before the content.
- Render it as an `h2`. It is a real heading, styled quietly.
