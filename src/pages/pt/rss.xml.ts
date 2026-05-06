import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { useTranslations } from "@/i18n/utils";

export async function GET(context: { site: URL }) {
  const t = useTranslations("pt");
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.lang === "pt" && !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${t("site.title")} — ${t("blog.heading")}`,
    description: t("blog.description"),
    site: context.site,
    items: posts.map((post) => {
      const slug = post.id.split("/")[1];
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/pt/blog/${slug}/`,
      };
    }),
    customData: `<language>pt-BR</language>`,
  });
}
