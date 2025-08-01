import Hero from '../components/Hero';
import FeaturetteProjects from '../components/FeaturetteProjects';
import DashboardPapers from '../components/DashboardPapers';
import { fetchHighlightProjects } from '../api/projects';
import { fetchContact, fetchResearchInterests, fetchSkills } from '../api/contact';
import { fetchHighlightPublications } from '../api/publications';
import DashboardSection from '../components/DashboardSection';

export default function Home() {
  const projects = fetchHighlightProjects();
  const researchInterests = fetchResearchInterests();
  const contact = fetchContact();
  const skills = fetchSkills();
  const publications = fetchHighlightPublications();

  return (
    <>
      <Hero contact={contact} researchInterests={researchInterests} skills={skills} />
      <DashboardSection title="Highlight Projects">
        <FeaturetteProjects projects={projects} />
      </DashboardSection>

      <DashboardSection title="Highlight Publications">
        <DashboardPapers publications={publications} contact={contact} />
      </DashboardSection>
    </>
  );
}