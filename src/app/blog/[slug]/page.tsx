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
import { Art } from "@/components/art";
import { ContactLinks } from "@/components/contact-links";
import { ThemeOnly } from "@/components/theme-only";

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

  return (
    <article className="article">
      <header className="article__header classic:mb-10">
        <p className="article__back classic:mb-6">
          <Link
            href="/blog/"
            className="arrow-link arrow-link--back inline-flex min-h-11 items-center classic:font-mono classic:text-xs classic:tracking-widest classic:text-muted-foreground classic:uppercase classic:transition-colors classic:hover:text-foreground"
          >
            All articles
          </Link>
        </p>
        <h1 className="article__title classic:font-serif classic:text-4xl classic:font-semibold classic:tracking-tight classic:text-balance">
          {article.title}
        </h1>
        <p className="article__desc classic:mt-3 classic:text-lg classic:text-muted-foreground">
          {article.description}
        </p>
        <p className="article__meta classic:mt-4 classic:font-mono classic:text-xs classic:text-muted-foreground">
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
          <ThemeOnly as="span" except={["classic"]}>
            {" · "}
            {readingMinutes(article)} min read
          </ThemeOnly>
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
            className="article__cover classic:mt-8 classic:w-full classic:rounded-lg classic:border"
            priority
          />
        ) : (
          <ThemeOnly except={["classic"]}>
            <Art seed={2} className="article__cover article__cover--art" />
          </ThemeOnly>
        )}
      </header>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <footer className="article__footer classic:mt-12 classic:space-y-4 classic:border-t classic:pt-8">
        <p>
          <Link
            href="/blog/"
            className="arrow-link arrow-link--back inline-flex min-h-11 items-center classic:font-mono classic:text-xs classic:tracking-widest classic:text-muted-foreground classic:uppercase classic:transition-colors classic:hover:text-foreground"
          >
            All articles
          </Link>
        </p>
        <p className="article__byline classic:text-sm classic:text-muted-foreground">
          Written by {site.author}.
        </p>
        <ContactLinks muted />
      </footer>
    </article>
  );
}
