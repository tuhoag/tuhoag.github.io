import Hero from '../components/Hero';
import FeaturetteProjects from '../components/FeaturetteProjects';
import DashboardPapers from '../components/DashboardPapers';
import { fetchHighlightProjects } from '../api/projects';
import { fetchContact, fetchResearchInterests, fetchSkills } from '../api/contact';
import { fetchHighlightPublications } from '../api/publications';
import DashboardSection from '../components/DashboardSection';
// import CardProjects from '../components/CardProjects';

export default function Home() {
  const projects = fetchHighlightProjects();
  const researchInterests = fetchResearchInterests();
  const contact = fetchContact();
  const skills = fetchSkills();
  const publications = fetchHighlightPublications();
  const width = 300;
  const height = 250;

  return (
    <>
      <Hero contact={contact} researchInterests={researchInterests} skills={skills} />
      <DashboardSection title="Highlight Projects">
        <FeaturetteProjects projects={projects} width={width} height={height} />
      </DashboardSection>

      {/* <CardProjects projects={projects} /> */}
      <DashboardSection title="Highlight Publications">
        <DashboardPapers publications={publications} contact={contact} />
      </DashboardSection>
    </>
  );
}