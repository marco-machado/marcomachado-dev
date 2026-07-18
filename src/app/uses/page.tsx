import type { Metadata } from "next";
import { uses } from "@/lib/data";
import { pageAlternates } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { KvSection } from "@/components/kv-section";

const description =
  "Tools, hardware, and software that I use daily. Inspired by uses.tech.";

export const metadata: Metadata = {
  title: "Uses",
  description,
  alternates: pageAlternates("/uses/"),
};

export default function UsesPage() {
  return (
    <div>
      <PageHeader title="Uses" description={description} />
      <div className="space-y-12">
        {uses.map((section) => (
          <KvSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
