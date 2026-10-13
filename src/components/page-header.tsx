import { ThemeOnly } from "@/components/theme-only";

interface PageHeaderProps {
  title: string;
  description?: string;
  /** Small label above the title in the design themes. */
  eyebrow?: string;
  /** Shell command the terminal themes print above the title. */
  command?: string;
}

export function PageHeader({
  title,
  description,
  eyebrow,
  command,
}: PageHeaderProps) {
  return (
    <header className="page-header classic:mb-10">
      <ThemeOnly except={["classic"]}>
        {command ? (
          <p className="page-header__cmd">
            <span className="page-header__prompt" aria-hidden="true">
              ${" "}
            </span>
            {command}
          </p>
        ) : null}
        {eyebrow ? <p className="page-header__eyebrow">{eyebrow}</p> : null}
      </ThemeOnly>
      <h1 className="page-header__title classic:font-serif classic:text-4xl classic:font-semibold classic:tracking-tight classic:text-balance">
        {title}
      </h1>
      {description ? (
        <p className="page-header__desc classic:mt-3 classic:text-lg classic:text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}
