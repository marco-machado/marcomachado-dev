import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import type { Article } from "@/lib/posts";
import { formatDate, readingMinutes } from "@/lib/site";

interface ArticleRowProps {
  article: Article;
  headingLevel?: "h2" | "h3";
}

export function ArticleRow({
  article,
  headingLevel = "h2",
}: ArticleRowProps) {
  const Heading = headingLevel;

  return (
    <article className="article-row">
      <Link href={`/blog/${article.slug}/`} className="article-row__link">
        {article.coverImage ? (
          <Image
            src={article.coverImage}
            alt=""
            width={480}
            height={360}
            className="article-row__media"
          />
        ) : null}
        <div className="article-row__body">
          <p className="article-row__meta">
            <time dateTime={article.pubDate.toISOString().slice(0, 10)}>
              {formatDate(article.pubDate)}
            </time>
            <span className="article-row__sep" aria-hidden="true">
              {" · "}
            </span>
            <span>{readingMinutes(article)} min read</span>
          </p>
          <Heading className="article-row__title">{article.title}</Heading>
          <p className="article-row__desc">{article.description}</p>
          <span className="article-row__cta arrow-link">
            Read the article
            <ArrowRightIcon className="arrow" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
