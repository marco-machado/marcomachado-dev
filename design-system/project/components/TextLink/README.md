# TextLink

The site's text links: inline links in prose, arrow links for going back or reading on, and the prompt list. They are class patterns from `src/styles/site.css` in the page markup, not components.

**Consumer provides:** the `href` and the words. Use Next.js `Link` for internal paths and ExternalLink for other sites.

- **Inline, in prose** (PageHeader descriptions, the About body): `primary` with a dashed underline in `primary` at 55%, offset 4px (`.page-header__desc a`, `.about__body p a`). Keep the underline: it is what tells a link from the text around it. Links inside an Article body use ArticleContent's solid underline instead.
- **Arrow link** (`.arrow-link`): `text-sm` in `primary`, at least `touch-target` tall. The back variant, `.arrow-link--back`, puts a `←` before lowercased text: "← all articles", above and below every Article. A forward link ends with an `ArrowRight` (`.arrow`) that nudges 3px right on hover, like ArticleRow's "Read the article".
- **Prompt list** (`.prompt-list`): links listed as shell prompts, each after a `>` in `primary`, in `text-base` and at least 2.25rem tall, turning `primary` on hover. The hero uses it for "read the blog" and "get in touch", and the 404 for its list of paths. Write them lowercase.
