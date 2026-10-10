import type { Metadata } from "next";
import { getPublishedArticles } from "@/lib/posts";
import { pageAlternates } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { ArticleRow } from "@/components/article-row";

const description =
  "Demos, agent workflows, and builder takes for people who ship with AI.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: pageAlternates("/blog/"),
};

export default function BlogPage() {
  const articles = getPublishedArticles();

  return (
    <div className="page page--blog">
      <PageHeader
        title="Articles"
        description={description}
        eyebrow="Writing"
        command="ls ~/writing"
      />
      {articles.length === 0 ? (
        <p className="classic:text-muted-foreground">
          No articles yet. Check back soon.
        </p>
      ) : (
        <div className="article-list classic:divide-y">
          {articles.map((article, index) => (
            <ArticleRow key={article.slug} article={article} seed={index} />
          ))}
        </div>
      )}
    </div>
  );
}
