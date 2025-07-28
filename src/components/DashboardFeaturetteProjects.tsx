import { fetchHighlightProjects } from "../api/projects"
import type { Project } from "../types";
import DashboardSection from "./DashboardSection";

const width = 250;
const height = 250;

interface DashboardProjectItemProps {
  project: Project,
  index: number
}

function DashboardProjectItem({ project, index }: DashboardProjectItemProps) {
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
        <button className="btn btn-primary">See more</button>
      </div>
      <div className="col-md-5">
        <img src={project.imageUrl || 'https://via.placeholder.com/100'} width={width} height={height} className="card-img-top" alt={project.name} />
      </div>
    </article>
  );
}

function DashboardFeaturetteProjects() {
  let projects = fetchHighlightProjects();
  projects.sort((a, b) => b.startYear - a.startYear);

  return (
    <DashboardSection title="Highlight Projects">
      {projects.map((project, index) => (
        <DashboardProjectItem key={project.id} project={project} index={index} />
      ))}
    </DashboardSection>
  );
}

export default DashboardFeaturetteProjects;