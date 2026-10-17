import type { Metadata } from "next";
import { aiTools } from "@/lib/data";
import { pageAlternates, slugify } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { SectionHead } from "@/components/section-head";
import { ExternalLink } from "@/components/external-link";

const description = "AI tools and coding agents I use regularly.";

export const metadata: Metadata = {
  title: "AI Tools",
  description,
  alternates: pageAlternates("/ai-tools/"),
};

export default function AiToolsPage() {
  return (
    <div className="page page--ai-tools">
      <PageHeader
        title="AI Tools"
        description={description}
        command="ls ~/ai-tools"
      />
      <div className="page-sections">
        {aiTools.map((section) => (
          <section
            key={section.id}
            className="tool-section"
            aria-labelledby={`ai-${section.id}`}
          >
            <SectionHead id={`ai-${section.id}`} title={section.title} />
            <ul className="tool-list">
              {section.tools.map((tool) => (
                <li key={tool.name} className="tool-item card">
                  <ExternalLink
                    id={slugify(tool.name)}
                    href={tool.href}
                    className="tool-item__name card__link"
                  >
                    {tool.name}
                  </ExternalLink>
                  <p className="tool-item__note">{tool.note}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
