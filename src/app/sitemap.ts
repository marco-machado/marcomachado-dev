import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about/", "/uses/", "/ai-tools/", "/blog/"].map(
    (route) => ({
      url: `${site.url}${route}`,
    }),
  );

  const articleRoutes = getPublishedArticles().map((article) => ({
    url: `${site.url}/blog/${article.slug}/`,
    lastModified: article.updatedDate ?? article.pubDate,
  }));

  return [...staticRoutes, ...articleRoutes];
}
