import { fetchHighlightPublications as fetchHighlightPublications } from "../api/publications";
import { settings } from "../settings";
import type { Publication } from "../types";
import DashboardSection from "./DashboardSection";

interface DashboardPaperItemInterface {
  publication: Publication,
  index: number
}

function DashboardPaperItem({ publication, index }: DashboardPaperItemInterface) {
  const authorsText = publication.authors.map((author, i) => {
    const isHighlighted = author === settings.ownerAuthor;
    return (
      <span key={i} className={isHighlighted ? "text-primary fw-semibold" : ""}>
        {author}
        {i < publication.authors.length - 1 ? ", " : ""}
      </span>
    );
  });

  return (
    <div className="dashboard-paper mb-1">
      <div className="title lead fw-semibold line-clamp-3">
        {index + 1}.{' '}{publication.title}
      </div>
      <div className="authors lead line-clamp-3">
        {authorsText}
      </div>
      <div className="lead text-secondary">
        {publication.year} &bull; {publication.venue}
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