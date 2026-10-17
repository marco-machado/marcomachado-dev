import type { Metadata } from "next";
import { ArrowUpRightIcon } from "lucide-react";
import { aiTools } from "@/lib/data";
import { pageAlternates } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { SectionHead } from "@/components/section-head";

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
                <li key={tool.name} className="tool-item">
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noreferrer"
                    className="tool-item__name"
                  >
                    {tool.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                    <ArrowUpRightIcon className="tool-item__icon" aria-hidden="true" />
                  </a>
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
