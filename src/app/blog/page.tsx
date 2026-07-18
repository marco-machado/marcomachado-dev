import type { Metadata } from "next";
import { getPublishedArticles } from "@/lib/posts";
import { PageHeader } from "@/components/page-header";
import { ArticleRow } from "@/components/article-row";

const description =
  "Notes on engineering, tools, and the craft of building software with intelligent systems in the loop.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  const articles = getPublishedArticles();

  return (
    <div>
      <PageHeader title="Articles" description={description} />
      {articles.length === 0 ? (
        <p className="text-muted-foreground">No articles yet. Check back soon.</p>
      ) : (
        <div className="divide-y">
          {articles.map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
