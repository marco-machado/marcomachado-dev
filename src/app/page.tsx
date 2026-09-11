import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedArticles } from "@/lib/posts";
import { pageAlternates } from "@/lib/site";
import { ArticleRow } from "@/components/article-row";
import { ContactLinks } from "@/components/contact-links";

export const metadata: Metadata = {
  alternates: pageAlternates("/"),
};

export default function HomePage() {
  const articles = getPublishedArticles().slice(0, 3);

  return (
    <div className="space-y-14">
      <section className="pt-4">
        <div className="flex gap-5 sm:gap-6">
          <Image
            src="/images/portrait.webp"
            alt="Marco Machado"
            width={160}
            height={213}
            priority
            className="size-16 shrink-0 rounded-lg border object-cover sm:size-20"
          />
          <div className="min-w-0">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Engineer. Operator.{" "}
              <em className="text-primary">Builder.</em>
            </h1>
            <p className="mt-3 font-mono text-xs tracking-wide text-muted-foreground uppercase">
              Software engineer · Remote, Brazil · Since 2014
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
          Software engineer building things for the web. I write about
          engineering, tools, and the craft of building software.
        </p>
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
          Recently: shipping this site on Cloudflare Workers, and writing about
          treating AI context as infrastructure — not a longer prompt.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-1">
          <Link
            href="/blog/"
            className="inline-flex min-h-11 items-center text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            Read the blog
          </Link>
          <Link
            href="/about/"
            className="inline-flex min-h-11 items-center text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            More about me
          </Link>
          <ContactLinks />
        </div>
      </section>

      <section aria-labelledby="recent-writing">
        <h2
          id="recent-writing"
          className="mb-4 border-b pb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase"
        >
          Recent writing
        </h2>
        {articles.length === 0 ? (
          <p className="text-muted-foreground">
            No articles yet. Check back soon.
          </p>
        ) : (
          <>
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
                className="inline-flex min-h-11 items-center text-sm text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                All articles
              </Link>
            </p>
          </>
        )}
      </section>
    </div>
  );
}
