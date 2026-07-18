# Publish in English only

The migrated site publishes all pages, Articles, metadata, and feeds in English only. Portuguese content, routes, translation infrastructure, and language controls are removed to keep the static React architecture and editorial experience simple.

## Considered options

Retaining locale-prefixed routes or switching languages client-side would preserve bilingual publishing, but both add content and implementation overhead that is not justified for the current site.

## Consequences

Only English Markdown remains in the content collection. The site has one RSS feed at `/rss.xml`, no language preference state, and no client-side language boundary.
