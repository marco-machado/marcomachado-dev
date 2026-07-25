import { Feed } from "feed";
import { getPublishedArticles } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const feed = new Feed({
    title: site.title,
    description: site.description,
    id: `${site.url}/`,
    link: `${site.url}/`,
    language: "en",
    favicon: `${site.url}/favicon.ico`,
    copyright: `${new Date().getFullYear()} ${site.author}`,
    feedLinks: {
      rss: `${site.url}/rss.xml`,
    },
    author: {
      name: site.author,
      link: site.url,
    },
  });

  for (const article of getPublishedArticles()) {
    feed.addItem({
      title: article.title,
      id: `${site.url}/blog/${article.slug}/`,
      link: `${site.url}/blog/${article.slug}/`,
      description: article.description,
      date: article.updatedDate ?? article.pubDate,
      published: article.pubDate,
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
