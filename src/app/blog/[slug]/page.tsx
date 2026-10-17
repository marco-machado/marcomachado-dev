import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedArticle, getPublishedArticles } from "@/lib/posts";
import { renderMarkdown } from "@/lib/markdown";
import {
  formatDate,
  formatTag,
  pageAlternates,
  readingMinutes,
  site,
} from "@/lib/site";
import { Subscribe } from "@/components/subscribe";
import { PageHeader } from "@/components/page-header";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  if (!article) notFound();

  return {
    title: article.title,
    description: article.description,
    alternates: pageAlternates(`/blog/${article.slug}/`),
    openGraph: {
      type: "article",
      siteName: site.title,
      locale: "en_US",
      url: `/blog/${article.slug}/`,
      title: article.title,
      description: article.description,
      publishedTime: article.pubDate.toISOString(),
      modifiedTime: article.updatedDate?.toISOString(),
      images: [article.ogImage ?? article.coverImage ?? "/images/og-default.png"],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  if (!article) notFound();
  const html = await renderMarkdown(article.body);

  // Published articles are sorted newest first.
  const articles = getPublishedArticles();
  const position = articles.findIndex((item) => item.slug === article.slug);
  const newer = articles[position - 1];
  const older = articles[position + 1];

  return (
    <article className="article">
      <p className="article__back">
        <Link
          href="/blog/"
          className="arrow-link arrow-link--back inline-flex min-h-11 items-center"
        >
          All articles
        </Link>
      </p>
      <PageHeader
        title={article.title}
        description={article.description}
        command={`cat ${article.slug}.md`}
      >
        <p className="article__meta">
          <time dateTime={article.pubDate.toISOString().slice(0, 10)}>
            {formatDate(article.pubDate)}
          </time>
          {article.updatedDate ? (
            <>
              {" "}
              · Updated{" "}
              <time dateTime={article.updatedDate.toISOString().slice(0, 10)}>
                {formatDate(article.updatedDate)}
              </time>
            </>
          ) : null}
          {" · "}
          {readingMinutes(article)} min read
          {article.tags.length > 0 ? (
            <> · {article.tags.map(formatTag).join(", ")}</>
          ) : null}
        </p>
        {article.coverImage ? (
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt ?? ""}
            width={1440}
            height={810}
            className="article__cover"
            priority
          />
        ) : null}
      </PageHeader>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <footer className="article__footer">
        {older || newer ? (
          <nav aria-label="More articles" className="article-nav">
            {older ? (
              <Link
                href={`/blog/${older.slug}/`}
                className="article-nav__link article-nav__link--older"
              >
                <span className="article-nav__label">← older</span>
                <span className="article-nav__title">{older.title}</span>
              </Link>
            ) : null}
            {newer ? (
              <Link
                href={`/blog/${newer.slug}/`}
                className="article-nav__link article-nav__link--newer"
              >
                <span className="article-nav__label">newer →</span>
                <span className="article-nav__title">{newer.title}</span>
              </Link>
            ) : null}
          </nav>
        ) : null}
        <p className="article__byline">Written by {site.author}.</p>
        <Subscribe />
        <p>
          <Link
            href="/blog/"
            className="arrow-link arrow-link--back inline-flex min-h-11 items-center"
          >
            All articles
          </Link>
        </p>
      </footer>
    </article>
  );
}
