import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon } from "lucide-react";
import { getPublishedArticles } from "@/lib/posts";
import { navItems, pageAlternates, site } from "@/lib/site";
import { heroLead, heroMeta, projects, quote, toolPicks } from "@/lib/showcase";
import { ArticleRow } from "@/components/article-row";
import { ContactLinks } from "@/components/contact-links";
import { DotGlobe } from "@/components/dot-globe";
import { PagerControls } from "@/components/pager-controls";
import { ProjectCard } from "@/components/project-card";
import { SectionHead } from "@/components/section-head";
import { ThemeOnly } from "@/components/theme-only";

export const metadata: Metadata = {
  alternates: pageAlternates("/"),
};

const classicLink =
  "inline-flex min-h-11 items-center text-primary underline decoration-1 underline-offset-4 hover:decoration-2";

function Cursor() {
  return <span className="cursor" aria-hidden="true" />;
}

function ClassicHero() {
  return (
    <section className="pt-4">
      <div className="flex gap-5 sm:gap-6">
        <Image
          src="/images/portrait.webp"
          alt="Marco Machado"
          width={160}
          height={213}
          priority
          className="size-16 shrink-0 rounded-lg border object-cover sm:size-20"
        />
        <div className="min-w-0">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Engineer. Operator. <em className="text-primary">Builder.</em>
          </h1>
          <p className="mt-3 font-mono text-xs tracking-wide text-muted-foreground uppercase">
            Software engineer · Remote, Brazil · Since 2014
          </p>
        </div>
      </div>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
        I ship web apps and write for AI builders and operators. Small demos
        and how they work. Agents in real shipping. Builder takes while the
        work is still in progress.
      </p>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
        Recently: shipping this site on Cloudflare Workers, and{" "}
        <Link
          href="/blog/the-prompt-isnt-the-bottleneck/"
          className="text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
        >
          The Prompt Isn&apos;t the Bottleneck
        </Link>
        {" — treating AI context as infrastructure, not a longer prompt."}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-1">
        <Link href="/blog/" className={classicLink}>
          Read the blog
        </Link>
        <Link href="/about/" className={classicLink}>
          More about me
        </Link>
        <ContactLinks />
      </div>
    </section>
  );
}

/** Backdrops drawn behind or beside the hero; each theme shows its own. */
function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <span className="hero-art__a" />
      <span className="hero-art__b" />
      <span className="hero-art__c" />
      <ThemeOnly themes={["core"]}>
        <DotGlobe className="dot-globe" />
      </ThemeOnly>
      <ThemeOnly themes={["editorial", "cinematic"]}>
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative, lazy, hidden in most themes */}
        <img
          src="/images/portrait.webp"
          alt=""
          width={720}
          height={960}
          loading="lazy"
          decoding="async"
          className="hero-art__portrait"
        />
      </ThemeOnly>
    </div>
  );
}

function ThemedHero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroArt />
      <div className="hero__main">
        <ThemeOnly themes={["orbital"]}>
          <p className="hero__eyebrow">
            Software engineer
            <br />
            Remote from Brazil
          </p>
        </ThemeOnly>
        <ThemeOnly themes={["eclipse"]}>
          <p className="hero__eyebrow">Engineer · Operator · Builder</p>
        </ThemeOnly>
        <ThemeOnly themes={["atelier"]}>
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-index">01</span>
            Building a more thoughtful web
          </p>
        </ThemeOnly>
        <ThemeOnly themes={["cinematic"]}>
          <p className="hero__eyebrow">Engineer. Operator. Builder.</p>
        </ThemeOnly>
        <ThemeOnly themes={["abstract"]}>
          <p className="hero__eyebrow">Software engineer</p>
        </ThemeOnly>
        <ThemeOnly themes={["core"]}>
          <p className="hero__prompt">
            <span className="hero__prompt-host">marcomachado@dev</span>:~$
            whoami
          </p>
        </ThemeOnly>

        <h1 id="hero-title" className="hero__title">
          <ThemeOnly as="span" themes={["terminal"]}>
            <span className="hero__caret" aria-hidden="true">
              &gt;{" "}
            </span>
            Hey, I&apos;m Marco.
            <Cursor />
          </ThemeOnly>
          <ThemeOnly as="span" themes={["command"]}>
            <span className="hero__caret" aria-hidden="true">
              &gt;{" "}
            </span>
            Hi, I&apos;m Marco Machado.
            <Cursor />
          </ThemeOnly>
          <ThemeOnly as="span" themes={["core"]}>
            I build <span className="hero__line">useful things</span>{" "}
            <span className="hero__line">for the web.</span>
            <Cursor />
          </ThemeOnly>
          <ThemeOnly as="span" themes={["orbital", "eclipse"]}>
            I build <span className="hero__line">for what&apos;s next.</span>
          </ThemeOnly>
          <ThemeOnly as="span" themes={["editorial"]}>
            <span className="hero__word">Engineer</span>{" "}
            <span className="hero__word">Operator</span>{" "}
            <span className="hero__word">Builder</span>
          </ThemeOnly>
          <ThemeOnly as="span" themes={["atelier"]}>
            Engineering ideas{" "}
            <span className="hero__line">into reality.</span>
          </ThemeOnly>
          <ThemeOnly as="span" themes={["cinematic"]}>
            I turn ideas into real products.
          </ThemeOnly>
          <ThemeOnly as="span" themes={["abstract"]}>
            <span className="hero__word">Ideas</span>{" "}
            <span className="hero__word">Systems</span>{" "}
            <span className="hero__word">People</span>
          </ThemeOnly>
        </h1>

        <p className="hero__lead">{heroLead}</p>

        <ThemeOnly themes={["terminal"]}>
          <ul className="hero__prompts">
            <li>
              <a href="#work">view work</a>
            </li>
            <li>
              <Link href="/blog/">read writing</Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>get in touch</a>
            </li>
          </ul>
        </ThemeOnly>

        <ThemeOnly themes={["command"]}>
          <div className="hero__menu-wrap">
            <ol className="hero__menu">
              <li>
                <a href="#work">Projects</a>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`}>Contact</a>
              </li>
            </ol>
            <ul className="hero__comments" aria-hidden="true">
              <li>Build</li>
              <li>Ship</li>
              <li>Iterate</li>
              <li>Repeat</li>
            </ul>
          </div>
        </ThemeOnly>

        <ThemeOnly except={["classic", "terminal", "command"]}>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              <span className="btn__icon" aria-hidden="true">
                <ArrowRightIcon />
              </span>
              <span className="btn__label">View my work</span>
            </a>
            <Link href="/about/" className="arrow-link hero__secondary">
              About me
              <ArrowRightIcon className="arrow" aria-hidden="true" />
            </Link>
          </div>
        </ThemeOnly>
      </div>

      <dl className="hero-meta">
        {heroMeta.map((row) => (
          <div key={row.label} className="hero-meta__row">
            <dt>{row.label}</dt>
            <dd>
              {row.live ? (
                <span className="status-dot" aria-hidden="true" />
              ) : null}
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <ThemeOnly themes={["abstract"]}>
        <ul className="hero-side" aria-hidden="true">
          <li>Marco Machado</li>
          <li>Dev</li>
        </ul>
      </ThemeOnly>
      <ThemeOnly except={["abstract"]}>
        <ul className="hero-side" aria-hidden="true">
          <li>Code</li>
          <li>Product</li>
          <li>Automation</li>
          <li>AI</li>
        </ul>
      </ThemeOnly>
      <p className="hero-cue" aria-hidden="true">
        Scroll
      </p>
    </section>
  );
}

export default function HomePage() {
  const articles = getPublishedArticles().slice(0, 3);

  return (
    <div className="home">
      <ThemeOnly themes={["classic"]}>
        <ClassicHero />
      </ThemeOnly>
      <ThemeOnly except={["classic"]}>
        <ThemedHero />

        <section id="work" className="home-section work" aria-labelledby="work-title">
          <SectionHead
            id="work-title"
            index="01"
            title="Selected work"
            more={{ label: "View all", href: site.github }}
          >
            <PagerControls targetId="work-list" count={projects.length} />
          </SectionHead>
          <div id="work-list" className="work-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>
      </ThemeOnly>

      <section
        className="home-section writing classic:mt-14"
        aria-labelledby="recent-writing"
      >
        <SectionHead
          id="recent-writing"
          index="02"
          title={
            <>
              <ThemeOnly as="span" themes={["classic"]}>
                Recent writing
              </ThemeOnly>
              <ThemeOnly as="span" except={["classic"]}>
                Latest writing
              </ThemeOnly>
            </>
          }
          more={{ label: "View all", href: "/blog/" }}
        />
        {articles.length === 0 ? (
          <p className="classic:text-muted-foreground">
            No articles yet. Check back soon.
          </p>
        ) : (
          <>
            <div className="writing-list classic:divide-y">
              {articles.map((article, index) => (
                <ArticleRow
                  key={article.slug}
                  article={article}
                  headingLevel="h3"
                  seed={index}
                />
              ))}
            </div>
            <ThemeOnly themes={["classic"]}>
              <p className="mt-6">
                <Link href="/blog/" className={`${classicLink} text-sm`}>
                  All articles
                </Link>
              </p>
            </ThemeOnly>
          </>
        )}
      </section>

      <ThemeOnly except={["classic"]}>
        <section className="home-section tools" aria-labelledby="tools-title">
          <SectionHead
            id="tools-title"
            index="03"
            title="Tools I actually use"
            more={{ label: "Full list", href: "/uses/" }}
          />
          <ul className="tool-strip">
            {toolPicks.map((tool) => (
              <li key={tool.name}>
                <Link href={tool.href} className="tool-strip__item">
                  <span className="tool-strip__icon" aria-hidden="true">
                    {tool.name.charAt(0)}
                  </span>
                  <span className="tool-strip__name">{tool.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <figure className="quote-band">
          <blockquote>
            <p>{quote}</p>
          </blockquote>
        </figure>

        <section className="home-section contact-block" aria-labelledby="contact-title">
          <SectionHead id="contact-title" index="04" title="Let's connect" />
          <p className="contact-block__title">Let&apos;s build something great.</p>
          <p className="contact-block__text">
            Have a project in mind or just want to say hi? I&apos;m open to
            collaboration and good conversations.
          </p>
          <div className="contact-block__actions">
            <a href={`mailto:${site.email}`} className="btn btn--ghost">
              <span className="btn__label">Get in touch</span>
              <span className="btn__icon" aria-hidden="true">
                <ArrowRightIcon />
              </span>
            </a>
            <ContactLinks muted className="contact-block__social" />
          </div>
        </section>
      </ThemeOnly>
    </div>
  );
}
