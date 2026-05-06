import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { useTranslations } from "@/i18n/utils";

export async function GET(context: { site: URL }) {
  const t = useTranslations("en");
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.lang === "en" && !post.data.draft)
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
        link: `/blog/${slug}/`,
      };
    }),
    customData: `<language>en-US</language>`,
  });
}
