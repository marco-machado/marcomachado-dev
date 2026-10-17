# Button

The site's one button-styled action: an outlined `primary` link that fills on hover, used for "Get in touch" at the end of the home page.

It isn't a component. It is the `.btn` class from `src/styles/site.css` on an `<a>` in `src/app/page.tsx`, with a Lucide `ArrowRight` in a `.btn__icon` span:

```html
<a href="mailto:…" class="btn">Get in touch<span class="btn__icon" aria-hidden="true"><svg>…</svg></span></a>
```

**Consumer provides:** the `href`, a sentence-case label and the arrow.

- `text-sm` in `primary` inside a 1px `primary` border with `card-radius` corners, padded 1.35rem left and right and at least `touch-target` tall. The label and the 1rem arrow are `space-3` apart.
- Hover fills it with `primary` and turns the label `primary-foreground` (11.1:1); the preview's second button shows that state. Focus is the standard `ring` outline.
- Use one per view, for the main call to action. Everything else is a text link (TextLink).
- The shadcn Button in `src/components/ui/button.tsx` isn't used by any page and isn't part of this system.
