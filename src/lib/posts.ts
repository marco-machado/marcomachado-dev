import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

const frontmatterSchema = z
  .strictObject({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
    ogImage: z.string().optional(),
  })
  .refine((data) => !data.coverImage || Boolean(data.coverImageAlt), {
    message: "coverImageAlt is required when coverImage is set",
    path: ["coverImageAlt"],
  });

export type ArticleFrontmatter = z.infer<typeof frontmatterSchema>;

export type Article = ArticleFrontmatter & {
  slug: string;
  body: string;
};

function loadArticle(filename: string): Article {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const parsed = frontmatterSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in content/blog/${filename}: ${z.prettifyError(parsed.error)}`,
    );
  }

  return {
    ...parsed.data,
    slug: filename.replace(/\.md$/, ""),
    body: content,
  };
}

export function getAllArticles(): Article[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(loadArticle);
}

export function getPublishedArticles(): Article[] {
  return getAllArticles()
    .filter((article) => !article.draft)
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
}

export function getPublishedArticle(slug: string): Article | undefined {
  return getPublishedArticles().find((a) => a.slug === slug);
}
