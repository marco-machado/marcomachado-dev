import type { Metadata } from "next";
import Image from "next/image";
import { pageAlternates } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { ContactLinks } from "@/components/contact-links";

const description =
  "I’m a software engineer who builds web applications and writes about how the work is changing.";

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
    <div>
      <PageHeader title="About me" description={description} />
      <div className="grid gap-8 sm:grid-cols-[180px_1fr] sm:gap-10">
        <div>
          <Image
            src="/images/portrait.webp"
            alt="Marco Machado"
            width={720}
            height={960}
            className="mx-auto aspect-3/4 w-32 rounded-lg border object-cover sm:mx-0 sm:w-full"
          />
          <dl className="mt-5 space-y-1 font-mono text-xs text-muted-foreground">
            {facts.map((fact) => (
              <div key={fact.label} className="flex gap-2">
                <dt className="uppercase">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <ContactLinks muted className="mt-4" />
        </div>
        <div className="space-y-5 leading-relaxed">
          <p>
            Software Engineer with deep full-stack expertise in PHP, Laravel,
            JavaScript, and Vue.js, and a growing focus on how intelligent,
            system-driven workflows are reshaping the way software gets built.
            I’ve spent years architecting and shipping scalable web
            applications with US-based teams of all sizes, from early-stage
            startups to mature enterprise platforms.
          </p>
          <p>
            I care about clean code, pragmatic technical decisions, resilient
            data architecture, and seamless user experiences. But I’m equally
            drawn to what’s next: leveraging intelligent automation and modern
            tooling to reduce friction, eliminate repetitive work, and let
            engineers focus on the problems that actually matter.
          </p>
          <p>
            Most days I’m remote from Brazil, pairing with product teams and
            learning the tools that actually stick — then writing down what
            holds up once the novelty wears off.
          </p>
        </div>
      </div>
    </div>
  );
}
