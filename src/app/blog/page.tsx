import type { Metadata } from "next";
import { getPublishedArticles } from "@/lib/posts";
import { pageAlternates } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { ArticleRow } from "@/components/article-row";
import { Subscribe } from "@/components/subscribe";

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
        title="Blog"
        description={description}
        command="ls ~/blog"
      >
        <Subscribe />
      </PageHeader>
      {articles.length === 0 ? (
        <p>No articles yet. Check back soon.</p>
      ) : (
        <div className="article-list">
          {articles.map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
