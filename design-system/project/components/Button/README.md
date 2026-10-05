# Button

A compact action control, used on the site today only as the ghost icon-button theme toggle.

It is the shadcn/ui Button (`src/components/ui/button.tsx`, cva variants), live from the bundle as `MarcoMachado.Button`.

**Use for** actions that change state (toggle the theme, submit). For navigation, use a TextLink: the site's calls to action ("Read the blog", "More about me") are links, not buttons.

**Consumer provides:** the label (or a 16px Lucide icon plus an `aria-label`), `variant`, `size`, and `asChild` to render a link with button styling.

| Prop | Values |
| --- | --- |
| `variant` | `default` (filled `primary`), `outline`, `secondary`, `ghost`, `destructive` (tinted `destructive`), `link` |
| `size` | `default` 32px, `xs` 24px, `sm` 28px, `lg` 36px, `icon` / `icon-xs` / `icon-sm` / `icon-lg` square |
| `asChild` | render the child element (Radix Slot) |

- Corners are `radius-lg`; `xs` and `sm` use `radius-md`. Labels use the `button` text style.
- Focus shows a `ring` border with a 3px ring at 50% opacity. Pressing nudges the button down 1px. Disabled is 50% opacity.
- The theme toggle overrides the size to 40px square (`size-10`) and uses Lucide `MoonIcon` / `SunIcon`.
- Don't put more than one `default` (filled) Button in a view. The design leans on links.
