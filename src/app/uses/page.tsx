import type { Metadata } from "next";
import { uses } from "@/lib/data";
import { pageAlternates } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { KvSection } from "@/components/kv-section";
import { ExternalLink } from "@/components/external-link";

const description =
  "Tools, hardware, and software that I use daily. Inspired by uses.tech.";

export const metadata: Metadata = {
  title: "Uses",
  description,
  alternates: pageAlternates("/uses/"),
};

export default function UsesPage() {
  return (
    <div className="page page--uses">
      <PageHeader
        title="Uses"
        description={
          <>
            Tools, hardware, and software that I use daily. Inspired by{" "}
            <ExternalLink href="https://uses.tech/">uses.tech</ExternalLink>.
          </>
        }
        command="cat uses.md"
      />
      <div className="page-sections">
        {uses.map((section) => (
          <KvSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
