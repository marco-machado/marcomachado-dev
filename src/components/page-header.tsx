interface PageHeaderProps {
  title: string;
  description?: React.ReactNode;
  /** Shell command printed above the title. */
  command?: string;
}

export function PageHeader({ title, description, command }: PageHeaderProps) {
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
      <h1 className="page-header__title">{title}</h1>
      {description ? <p className="page-header__desc">{description}</p> : null}
    </header>
  );
}
