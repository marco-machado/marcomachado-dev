# Homepage Latest Posts Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Display the 5 most recent blog posts on the homepage, below the hero section.

**Architecture:** Inline blog post fetching in both homepage files (EN + PT), reusing the existing `BlogPostCard` component. Add one i18n key for the section heading.

**Tech Stack:** Astro 5, Tailwind CSS v4, astro:content collections

---

### Task 1: Add i18n key for section heading

**Files:**
- Modify: `src/i18n/ui.ts:29,92`

**Step 1: Add the key to both language objects**

In the `en` object, after line 29 (`"home.cta.about": "More about me",`), add:

```typescript
"home.latestPosts": "Latest Posts",
```

In the `pt` object, after line 92 (`"home.cta.about": "Mais sobre mim",`), add:

```typescript
"home.latestPosts": "Últimos Posts",
```

**Step 2: Verify the build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/i18n/ui.ts
git commit -m "Add i18n key for homepage latest posts heading"
```

---

### Task 2: Add latest posts section to EN homepage

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Update the frontmatter**

Add imports for `getCollection` and `BlogPostCard`, and fetch the posts. The full frontmatter becomes:

```astro
---
import { getCollection } from "astro:content";
import BaseLayout from "@/layouts/BaseLayout.astro";
import BlogPostCard from "@/components/BlogPostCard.astro";
import { useTranslations, getLocalizedPath } from "@/i18n/utils";

const t = useTranslations("en");

const posts = (await getCollection("blog"))
  .filter((post) => post.data.lang === "en" && !post.data.draft)
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  .slice(0, 5);
---
```

**Step 2: Add the posts section in the template**

After the closing `</section>` of the hero (line 28), add:

```astro
  {
    posts.length > 0 && (
      <section class="py-12">
        <h2 class="mb-2">{t("home.latestPosts")}</h2>
        <div class="divide-y divide-[var(--color-rule)] dark:divide-[var(--color-rule-dark)]">
          {posts.map((post) => {
            const slug = post.id.split("/")[1];
            return (
              <BlogPostCard
                title={post.data.title}
                description={post.data.description}
                pubDate={post.data.pubDate}
                tags={post.data.tags}
                slug={slug}
                lang="en"
              />
            );
          })}
        </div>
      </section>
    )
  }
```

**Step 3: Verify the build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "Add latest posts section to EN homepage"
```

---

### Task 3: Add latest posts section to PT homepage

**Files:**
- Modify: `src/pages/pt/index.astro`

**Step 1: Update the frontmatter**

Same pattern as Task 2, but with `lang = "pt"`:

```astro
---
import { getCollection } from "astro:content";
import BaseLayout from "@/layouts/BaseLayout.astro";
import BlogPostCard from "@/components/BlogPostCard.astro";
import { useTranslations, getLocalizedPath } from "@/i18n/utils";

const t = useTranslations("pt");

const posts = (await getCollection("blog"))
  .filter((post) => post.data.lang === "pt" && !post.data.draft)
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  .slice(0, 5);
---
```

**Step 2: Add the posts section in the template**

After the closing `</section>` of the hero, add:

```astro
  {
    posts.length > 0 && (
      <section class="py-12">
        <h2 class="mb-2">{t("home.latestPosts")}</h2>
        <div class="divide-y divide-[var(--color-rule)] dark:divide-[var(--color-rule-dark)]">
          {posts.map((post) => {
            const slug = post.id.split("/")[1];
            return (
              <BlogPostCard
                title={post.data.title}
                description={post.data.description}
                pubDate={post.data.pubDate}
                tags={post.data.tags}
                slug={slug}
                lang="pt"
              />
            );
          })}
        </div>
      </section>
    )
  }
```

**Step 3: Verify the build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/pages/pt/index.astro
git commit -m "Add latest posts section to PT homepage"
```

---

### Task 4: Visual verification

**Step 1: Start dev server and check both pages**

Run: `npm run dev`

- Open `http://localhost:4321/` — verify EN posts appear below the hero
- Open `http://localhost:4321/pt/` — verify PT posts appear below the hero
- Verify dark mode toggle works correctly on both
- Verify post links navigate to the correct blog post pages

**Step 2: Stop dev server**
