import { fetchProjects } from "../api/projects";
import CardProjects from "../components/CardProjects";

export default function Projects() {
  const projects = fetchProjects();
  const width = 250;
  const height = 250;
  return (
    <CardProjects projects={projects} width={width} height={height} />
  );
}