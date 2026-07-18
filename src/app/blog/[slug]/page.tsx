import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedArticle, getPublishedArticles } from "@/lib/posts";
import { renderMarkdown } from "@/lib/markdown";
import { formatDate, pageAlternates } from "@/lib/site";

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
    <article>
      <header className="mb-10">
        <p className="mb-6">
          <Link
            href="/blog/"
            className="font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            All articles
          </Link>
        </p>
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-balance">
          {article.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {article.description}
        </p>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
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
          {article.tags.length > 0 ? <> · {article.tags.join(", ")}</> : null}
        </p>
        {article.coverImage ? (
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt ?? ""}
            width={1440}
            height={810}
            className="mt-8 w-full rounded-lg border"
            priority
          />
        ) : null}
      </header>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
