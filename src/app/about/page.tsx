import type { Metadata } from "next";
import Image from "next/image";
import { pageAlternates } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
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
  { label: "Base", value: "Brazil, remote" },
  { label: "Since", value: "2014" },
];

export default function AboutPage() {
  return (
    <div className="page page--about">
      <PageHeader
        title="About me"
        description={description}
        command="cat about.md"
      />
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
          <ContactLinks className="about__contact" />
        </div>
        <div className="about__body">
          <p>
            I’m a software engineer. I work remote from Brazil and have been
            shipping web apps since 2014.
          </p>
          <p>
            I write about engineering, tools, and craft. More of that now is
            AI in the workflow: small demos and how they work, Cursor and
            other agents in real shipping, and takes while something is still
            in progress.
          </p>
          <p>
            I try a tool, see what still holds up after the novelty fades, and
            write that down.
          </p>
        </div>
      </div>
    </div>
  );
}
