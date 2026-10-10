import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { readingMinutes, type Article } from "@/lib/posts";
import { formatDate, formatTag } from "@/lib/site";
import { Art } from "@/components/art";
import { ThemeOnly } from "@/components/theme-only";

interface ArticleRowProps {
  article: Article;
  headingLevel?: "h2" | "h3";
  /** Varies the placeholder art between rows. */
  seed?: number;
}

export function ArticleRow({
  article,
  headingLevel = "h2",
  seed = 0,
}: ArticleRowProps) {
  const Heading = headingLevel;
  const href = `/blog/${article.slug}/`;
  const date = (
    <time dateTime={article.pubDate.toISOString().slice(0, 10)}>
      {formatDate(article.pubDate)}
    </time>
  );

  return (
    <article className="article-row classic:py-5 classic:first:pt-0 classic:last:pb-0">
      <Link
        href={href}
        className="article-row__link group block classic:rounded-sm classic:outline-offset-4 classic:transition-colors"
      >
        <Art seed={seed + 2} className="article-row__media classic:hidden" />
        <div className="article-row__body">
          <ThemeOnly except={["classic"]}>
            <p className="article-row__meta">
              {date}
              <span className="article-row__sep" aria-hidden="true">
                {" · "}
              </span>
              <span>{readingMinutes(article)} min read</span>
            </p>
          </ThemeOnly>
          <Heading className="article-row__title classic:font-serif classic:text-xl classic:font-semibold classic:tracking-tight classic:transition-colors classic:group-hover:text-primary">
            {article.title}
          </Heading>
          <p className="article-row__desc classic:mt-1.5 classic:text-muted-foreground">
            {article.description}
          </p>
          <ThemeOnly except={["classic"]}>
            <span className="article-row__cta arrow-link">
              Read the article
              <ArrowRightIcon className="arrow" aria-hidden="true" />
            </span>
          </ThemeOnly>
        </div>
      </Link>
      <ThemeOnly themes={["classic"]}>
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          {date}
          {article.tags.length > 0 ? (
            <> · {article.tags.map(formatTag).join(", ")}</>
          ) : null}
        </p>
      </ThemeOnly>
    </article>
  );
}
