import type { KvSectionData } from "@/lib/data";
import { SectionHead } from "@/components/section-head";

interface KvSectionProps {
  section: KvSectionData;
}

export function KvSection({ section }: KvSectionProps) {
  return (
    <section className="kv-section" aria-labelledby={`kv-${section.id}`}>
      <SectionHead id={`kv-${section.id}`} title={section.title} />
      <dl className="kv-list">
        {section.rows.map((row) => (
          <div key={row.key} className="kv-row">
            <dt className="kv-row__key">{row.key}</dt>
            <dd className="kv-row__val">
              {row.val}
              {row.note ? (
                <span className="kv-row__note"> · {row.note}</span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
