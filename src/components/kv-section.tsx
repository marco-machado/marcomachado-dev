import type { KvSectionData } from "@/lib/data";

export function KvSection({ section }: { section: KvSectionData }) {
  return (
    <section aria-labelledby={`kv-${section.id}`}>
      <h2
        id={`kv-${section.id}`}
        className="mb-4 border-b pb-3 font-mono text-xs tracking-widest text-muted-foreground uppercase"
      >
        {section.title}
      </h2>
      <dl className="space-y-2.5">
        {section.rows.map((row) => (
          <div
            key={row.key}
            className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-[10rem_1fr] sm:gap-4"
          >
            <dt className="text-muted-foreground">{row.key}</dt>
            <dd>
              {row.val}
              {row.note ? (
                <span className="text-muted-foreground"> · {row.note}</span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
