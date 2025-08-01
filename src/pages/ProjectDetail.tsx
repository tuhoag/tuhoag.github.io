import { useParams } from "react-router";
import { fetchProjectById } from "../api/projects";
import { fetchPublicationsByProject } from "../api/publications";
import PapersList from "../components/PapersList";
import { fetchContact } from "../api/contact";
import { MultiParagraphDescription } from "../components/MultiParagraphDescription";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = fetchProjectById(projectId!);
  const projectPublications = fetchPublicationsByProject(projectId!);
  const contact = fetchContact();

  if (!project) {
    return <div className="alert alert-danger">Project not found</div>;
  }

  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center bg-body-secondary">
        <div className="col-12 mb-3 mt-2">
          {/* Display the title if it exists */}
          <h1 className="display-5 fw-normal text-body-emphasis lh-1 mb-0 text-start">
            {project!.name}
          </h1>
          <div className="text-body-secondary fs-5">
            {project!.startYear} - {project!.endYear ?? 'Present'}
          </div>
          <div className="fs-5">
            <MultiParagraphDescription description={project!.shortDescription} />
            {/* {project!.shortDescription} */}
          </div>
        </div>
      </div>
      <div className="row g-5 py-5">
        <div className="col-12">
          <div className="clearfix">
            <img src={project.imageUrl} className="col-md-6 float-md-end mb-3 ms-md-3" alt={project.name} />
            <div className="lead">
              <MultiParagraphDescription description={project.description} />
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5 py-5">
        <div className="col-12">
          {/* <h2>Publications</h2> */}
          <PapersList title={'Publications'} contact={contact} papers={projectPublications} />
        </div>
      </div>
    </>
  );
}