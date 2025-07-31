import type { Project } from "../types";

interface DashboardProjectItemProps {
  project: Project,
  index: number,
  width: number,
  height: number
}

export function DashboardProjectItem({ project, index, width, height }: DashboardProjectItemProps) {
  const isReversed = index % 2 !== 0;
  const rowClass = `row align-items-center g-5 mb-3 featurette ${isReversed ? 'flex-row-reverse' : ''}`;
  const endYear = project.endYear ?? 'Present';

  return (
    <article className={rowClass}>
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1 mb-3">
          {project.name}
          <br />
          <span className="text-body-secondary fs-5">
            {project.startYear} - {endYear}
          </span>
        </h2>
        <p className="lead mb-3">
          {project.shortDescription}
        </p>
        <button className="btn btn-sm btn-outline-primary">See more</button>
      </div>
      <div className="col-md-5">
        <img src={project.imageUrl || 'https://via.placeholder.com/100'} width={width} height={height} className="card-img-top" alt={project.name} />
      </div>
    </article>
  );
}

function FeaturetteProjects({ projects, width, height }: { projects: Project[], width: number, height: number }) {
  return (
    <>
      {projects.map((project, index) => (
        <DashboardProjectItem key={project.id} project={project} index={index} width={width} height={height} />
      ))}
    </>
  );
}

export default FeaturetteProjects;