import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedArticles } from "@/lib/posts";
import { ArticleRow } from "@/components/article-row";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const articles = getPublishedArticles().slice(0, 3);

  return (
    <div className="space-y-14">
      <section className="pt-4">
        <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          Engineer. Operator.{" "}
          <em className="text-primary">Builder.</em>
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
          Software engineer building things for the web. I write about
          engineering, tools, and the craft of building software.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/blog/"
            className="text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            Read the blog
          </Link>
          <Link
            href="/about/"
            className="text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            More about me
          </Link>
        </div>
      </section>

      <section aria-labelledby="recent-writing">
        <h2
          id="recent-writing"
          className="mb-4 border-b pb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase"
        >
          Recent writing
        </h2>
        <div className="divide-y">
          {articles.map((article) => (
            <ArticleRow
              key={article.slug}
              article={article}
              headingLevel="h3"
            />
          ))}
        </div>
        <p className="mt-6">
          <Link
            href="/blog/"
            className="text-sm text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            All articles
          </Link>
        </p>
      </section>
    </div>
  );
}
