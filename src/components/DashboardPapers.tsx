import type { Contact, Publication } from "../types";
import Authors from "./Authors";
import PaperLinks from "./PaperLinks";
import PaperTitle from "./PaperTitle";

interface DashboardPaperItemInterface {
  publication: Publication,
  index: number,
  contact: Contact
}

function DashboardPaperItem({ publication, index, contact }: DashboardPaperItemInterface) {
  return (
    <div className="dashboard-paper mb-1">
      <div className="title lead fw-semibold line-clamp-3">
        <PaperTitle publication={publication} index={index} />
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

interface DashboardPapersProps {
  publications: Publication[];
  contact: Contact;
}

function DashboardPapers({ publications, contact }: DashboardPapersProps) {
  return (
    <>
      {
        publications.map((paper, index) => (
          <div className="row mb-3" key={paper.id}>
            <div className="col-12">
              <DashboardPaperItem publication={paper} index={index} contact={contact} />
            </div>
          </div>
        ))
      }
    </>
  );
}

export default DashboardPapers;