import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon } from "lucide-react";
import { getPublishedArticles } from "@/lib/posts";
import { pageAlternates, site, slugify } from "@/lib/site";
import { heroLead, heroMeta, projects, toolPicks } from "@/lib/showcase";
import { ArticleRow } from "@/components/article-row";
import { ProjectCard } from "@/components/project-card";
import { SectionHead } from "@/components/section-head";

export const metadata: Metadata = {
  alternates: pageAlternates("/"),
};

function Cursor() {
  return <span className="cursor" aria-hidden="true" />;
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__main">
        <h1 id="hero-title" className="hero__title">
          <span className="hero__caret" aria-hidden="true">
            &gt;{" "}
          </span>
          Hey, I&apos;m Marco.
          <Cursor />
        </h1>

        <p className="hero__lead">{heroLead}</p>

        <ul className="hero__prompts prompt-list">
          {projects.length > 0 ? (
            <li>
              <a href="#work">view work</a>
            </li>
          ) : null}
          <li>
            <Link href="/blog/">read the blog</Link>
          </li>
          <li>
            <a href={`mailto:${site.email}`}>get in touch</a>
          </li>
        </ul>
      </div>

      <dl className="hero-meta">
        {heroMeta.map((row) => (
          <div key={row.label} className="hero-meta__row">
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function HomePage() {
  const articles = getPublishedArticles().slice(0, 3);

  return (
    <div className="home">
      <Hero />

      {projects.length > 0 ? (
        <section id="work" className="home-section work" aria-labelledby="work-title">
          <SectionHead
            id="work-title"
            title="Selected work"
            more={{ label: "View all", href: site.github }}
          />
          <div className="work-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="home-section latest" aria-labelledby="latest-articles">
        <SectionHead
          id="latest-articles"
          title="Latest articles"
          more={{ label: "View all", href: "/blog/" }}
        />
        {articles.length === 0 ? (
          <p>No articles yet. Check back soon.</p>
        ) : (
          <div className="article-list">
            {articles.map((article) => (
              <ArticleRow key={article.slug} article={article} headingLevel="h3" />
            ))}
          </div>
        )}
      </section>

      <section className="home-section tools" aria-labelledby="tools-title">
        <SectionHead
          id="tools-title"
          title="Tools I actually use"
          more={{ label: "Full list", href: "/uses/" }}
        />
        <ul className="tool-strip">
          {toolPicks.map((tool) => (
            <li key={tool.name}>
              <Link href={`${tool.page}#${slugify(tool.name)}`} className="tool-strip__item">
                {tool.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-section contact-block" aria-labelledby="contact-title">
        <SectionHead id="contact-title" title="Let's connect" />
        <p className="contact-block__title">Let&apos;s build something great.</p>
        <p className="contact-block__text">
          Have a project in mind or just want to say hi? I&apos;m open to
          collaboration and good conversations.
        </p>
        <div className="contact-block__actions">
          <a href={`mailto:${site.email}`} className="btn">
            Get in touch
            <span className="btn__icon" aria-hidden="true">
              <ArrowRightIcon />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
