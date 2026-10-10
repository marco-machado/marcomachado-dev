import type { KvSectionData } from "@/lib/data";
import { SectionHead } from "@/components/section-head";

interface KvSectionProps {
  section: KvSectionData;
  /** Section number shown by numbered themes ("01"). */
  index?: string;
}

export function KvSection({ section, index }: KvSectionProps) {
  return (
    <section className="kv-section" aria-labelledby={`kv-${section.id}`}>
      <SectionHead id={`kv-${section.id}`} index={index} title={section.title} />
      <dl className="kv-list classic:space-y-2.5">
        {section.rows.map((row) => (
          <div
            key={row.key}
            className="kv-row classic:grid classic:grid-cols-1 classic:gap-1 classic:text-sm classic:sm:grid-cols-[10rem_1fr] classic:sm:gap-4"
          >
            <dt className="kv-row__key classic:text-muted-foreground">{row.key}</dt>
            <dd className="kv-row__val">
              {row.val}
              {row.note ? (
                <span className="kv-row__note classic:text-muted-foreground">
                  {" "}
                  · {row.note}
                </span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
