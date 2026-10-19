import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPublishedArticles } from "@/lib/posts";
import { formatDate, pageAlternates } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { SectionHead } from "@/components/section-head";
import { ContactLinks } from "@/components/contact-links";

const description =
  "Software engineer, remote from Brazil. Shipping web apps since 2014, and writing for AI builders and operators.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: pageAlternates("/about/"),
};

const facts = [
  { label: "Name", value: "Marco Machado" },
  { label: "Role", value: "Software Engineer" },
  { label: "Location", value: "Remote, Brazil" },
  { label: "Since", value: "2014" },
];

export default function AboutPage() {
  const articles = getPublishedArticles().slice(0, 3);

  return (
    <div className="page page--about">
      <PageHeader title="About me" command="cat about.md" />
      <div className="about">
        <div className="about__aside">
          <Image
            src="/images/portrait.webp"
            alt="Marco Machado"
            width={720}
            height={960}
            className="about__portrait"
          />
          <dl className="about__facts">
            {facts.map((fact) => (
              <div key={fact.label} className="about__fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="about__body">
          <div className="about__intro">
            <p className="about__lead">
              I write about engineering, tools, and craft. More of that now is
              AI in the workflow: small demos and how they work, Cursor and
              other agents in real shipping, and takes while something is
              still in progress.
            </p>
            <p>
              I try a tool, see what still holds up after the novelty fades,
              and write that down.
            </p>
          </div>

          {articles.length > 0 ? (
            <section className="about__section" aria-labelledby="about-articles">
              <SectionHead
                id="about-articles"
                title="Latest articles"
                more={{ label: "View all", href: "/blog/" }}
              />
              <ul className="link-list">
                {articles.map((article) => (
                  <li key={article.slug} className="link-list__item">
                    <Link href={`/blog/${article.slug}/`} className="link-list__link">
                      {article.title}
                    </Link>
                    <time
                      className="link-list__meta"
                      dateTime={article.pubDate.toISOString().slice(0, 10)}
                    >
                      {formatDate(article.pubDate)}
                    </time>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="about__section" aria-labelledby="about-tools">
            <SectionHead id="about-tools" title="Tools" />
            <p>
              My everyday setup is on <Link href="/uses/">Uses</Link>, and the
              agents and plugins I rely on are on{" "}
              <Link href="/ai-tools/">AI Tools</Link>.
            </p>
          </section>

          <section className="about__section" aria-labelledby="about-contact">
            <SectionHead id="about-contact" title="Contact" />
            <ContactLinks className="about__contact" />
          </section>
        </div>
      </div>
    </div>
  );
}
