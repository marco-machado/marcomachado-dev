import type { Metadata } from "next";
import { aiTools } from "@/lib/data";
import { pageAlternates } from "@/lib/site";
import { PageHeader } from "@/components/page-header";

const description = "AI tools and coding agents I use regularly.";

export const metadata: Metadata = {
  title: "AI Tools",
  description,
  alternates: pageAlternates("/ai-tools/"),
};

export default function AiToolsPage() {
  return (
    <div>
      <PageHeader title="AI Tools" description={description} />
      <div className="space-y-12">
        {aiTools.map((section) => (
          <section key={section.id} aria-labelledby={`ai-${section.id}`}>
            <h2
              id={`ai-${section.id}`}
              className="mb-4 border-b pb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase"
            >
              {section.title}
            </h2>
            <ul className="space-y-4">
              {section.tools.map((tool) => (
                <li key={tool.name}>
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-serif text-lg font-semibold tracking-tight transition-colors hover:text-primary"
                  >
                    {tool.name}
                  </a>
                  <p className="text-sm text-muted-foreground">{tool.note}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
