import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";

const description =
  "I’m a software engineer who builds web applications and writes about how the work is changing.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about/" },
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
      <div className="grid gap-10 sm:grid-cols-[220px_1fr]">
        <div>
          <Image
            src="/images/portrait.webp"
            alt="Marco Machado"
            width={720}
            height={960}
            className="aspect-3/4 w-full rounded-lg border object-cover"
          />
          <dl className="mt-5 space-y-1 font-mono text-xs text-muted-foreground">
            {facts.map((fact) => (
              <div key={fact.label} className="flex gap-2">
                <dt className="uppercase">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
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
            Adaptable and quick to master new technologies, I bring strong
            engineering fundamentals and a collaborative mindset to every
            project.
          </p>
        </div>
      </div>
    </div>
  );
}
