import { getContact } from "../api/contact";
import { fetchHighlightPublications as fetchHighlightPublications } from "../api/publications";
import type { Publication } from "../types";
import Authors from "./Authors";
import DashboardSection from "./DashboardSection";
import PaperLinks from "./PaperLinks";

interface DashboardPaperItemInterface {
  publication: Publication,
  index: number
}

function DashboardPaperItem({ publication, index }: DashboardPaperItemInterface) {
  const contact = getContact();

  return (
    <div className="dashboard-paper mb-1">
      <div className="title lead fw-semibold line-clamp-3">
        {index + 1}.{' '}{publication.title}
      </div>
      <div className="authors lead line-clamp-3">
        <Authors authors={publication.authors} highlightAuthor={contact.name} />
      </div>
      <div className="lead text-secondary">
        {publication.year} &bull; {publication.venue.title}
      </div>
      <div>
        <PaperLinks links={publication.links} />
      </div>
    </div>
  );
}

function DashboardPapers() {
  let publications = fetchHighlightPublications();
  publications.sort((a, b) => b.year - a.year);

  return (
    <DashboardSection title="Highlight Publications">
      {
        publications.map((paper, index) => (
          <div className="row mb-3">
            <div className="col-12">
              <DashboardPaperItem publication={paper} index={index} />
            </div>
          </div>
        ))
      }
    </DashboardSection>
  );
}

export default DashboardPapers;