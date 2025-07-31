import { NavLink } from "react-router";
import type { Project } from "../types";

interface CardProjectItemProps {
  project: Project,
  index: number,
  width: number,
  height: number
}

export function CardProjectItem({ project, index, width, height }: CardProjectItemProps) {
  return (
    <div key={index} className="col-4">
      <div className="card shadow-sm mb-4">
        <img src={project.imageUrl || 'https://via.placeholder.com/100'} width={width} height={height} className="card-img-top" alt={project.name} />
        <div className="card-header">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">
            {project.startYear} - {project.endYear ?? 'Present'}
          </p>
        </div>
        <div className="card-body">
          <p className="card-text">{project.shortDescription}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <NavLink to={`/project/${project.id}`} className="btn btn-sm btn-outline-primary">
                See more
              </NavLink>
              {/* <button type="button" className="btn btn-sm btn-outline-primary">See more</button> */}
            </div>
            {/* <small className="text-body-secondary">9 mins</small> */}
          </div>
        </div>
      </div>
    </div>
  );
}

interface CardProjectsProps {
  projects: Project[],
  width: number,
  height: number
}

function CardProjects({ projects, width, height }: CardProjectsProps) {
  return (
    <div className="row">
      {projects.map((project, index) => (
        <CardProjectItem key={project.id} project={project} index={index} width={width} height={height} />
      ))}
    </div>
  );
}

export default CardProjects;