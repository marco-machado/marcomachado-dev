import { Fragment } from "react";
import type { KvSectionData } from "@/lib/data";
import { slugify } from "@/lib/site";
import { ExternalLink } from "@/components/external-link";
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
              {row.items.map((item, index) => (
                <Fragment key={item.name}>
                  {index > 0 ? " / " : null}
                  <ExternalLink
                    id={slugify(item.name)}
                    href={item.href}
                    className="kv-row__link"
                  >
                    {item.name}
                  </ExternalLink>
                </Fragment>
              ))}
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
