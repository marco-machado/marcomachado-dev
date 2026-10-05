# TextLink

The site's main call to action: a `primary` underlined text link, used instead of buttons.

It isn't a separate component in the code. It is a repeated class string on Next.js `Link`: `text-primary underline decoration-1 underline-offset-4 hover:decoration-2`.

- **Inline** inside a sentence: it inherits the paragraph's size.
- **Standalone** in a row of calls to action: add `inline-flex min-h-11 items-center` so it meets `touch-target` (44px). Space the row 24px apart.
- **Consumer provides:** the `href` and the words. Use a plain verb phrase in sentence case ("Read the blog", "All articles").
- Always keep the underline. It is what tells the link apart from text in `foreground`. For links in Article prose the underline offset is 3px (see ArticleContent).
