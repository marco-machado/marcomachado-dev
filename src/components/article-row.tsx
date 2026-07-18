import Link from "next/link";
import type { Article } from "@/lib/posts";
import { formatDate } from "@/lib/site";

export function ArticleRow({ article }: { article: Article }) {
  return (
    <article className="py-5 first:pt-0 last:pb-0">
      <h3 className="font-serif text-xl font-semibold tracking-tight">
        <Link
          href={`/blog/${article.slug}/`}
          className="transition-colors hover:text-primary"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mt-1.5 text-muted-foreground">{article.description}</p>
      <p className="mt-2 font-mono text-xs text-muted-foreground">
        <time dateTime={article.pubDate.toISOString().slice(0, 10)}>
          {formatDate(article.pubDate)}
        </time>
        {article.tags.length > 0 ? <> · {article.tags.join(", ")}</> : null}
      </p>
    </article>
  );
}
