import { ArrowRightIcon } from "lucide-react";
import type { Project } from "@/lib/showcase";
import { Art } from "@/components/art";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="project-card">
      <Art seed={index} className="project-card__media" />
      <div className="project-card__body">
        <span className="project-card__index" aria-hidden="true">
          {number}
        </span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <ul className="project-card__tags" aria-label="Stack">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        <a
          href={project.href}
          className="project-card__link arrow-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          View project
          <span className="sr-only">
            : {project.title} (opens in a new tab)
          </span>
          <ArrowRightIcon className="arrow" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
