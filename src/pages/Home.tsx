import Hero from '../components/Hero';
import DashboardFeaturetteProjects from '../components/DashboardFeaturetteProjects';
import DashboardPapers from '../components/DashboardPapers';

export default function Home() {
  return (
    <>
      <Hero />
      <DashboardFeaturetteProjects />
      <DashboardPapers />
    </>
  );
}