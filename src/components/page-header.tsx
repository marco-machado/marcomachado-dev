interface PageHeaderProps {
  title: string;
  description?: React.ReactNode;
  /** Shell command printed above the title. */
  command?: string;
  /** What the command printed, shown under it (the 404 page's error). */
  output?: string;
  /** Extra header content after the description (an article's meta and cover). */
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  command,
  output,
  children,
}: PageHeaderProps) {
  return (
    <header className="page-header">
      {command ? (
        <p className="page-header__cmd">
          <span className="page-header__prompt" aria-hidden="true">
            ${" "}
          </span>
          {command}
        </p>
      ) : null}
      {output ? <p className="page-header__output">{output}</p> : null}
      <h1 className="page-header__title">{title}</h1>
      {description ? <p className="page-header__desc">{description}</p> : null}
      {children}
    </header>
  );
}
