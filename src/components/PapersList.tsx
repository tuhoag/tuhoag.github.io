import { getContact } from "../api/contact";
import type { Publication } from "../types";
import Authors from "./Authors";
import PaperLinks from "./PaperLinks";
import PaperTitle from "./PaperTitle";

export default function PapersList({ title, papers }: { title: string, papers: Publication[] }) {
  return (
    <>
      <h2 className="display-6 mb-3">
        {title}
      </h2>
      {papers.map((paper, index) => (
        <PaperItem key={paper.id} paper={paper} index={index} />
      ))}
    </>
  );
}

function PaperItem({ paper, index }: { paper: Publication, index: number }) {
  const contact = getContact();

  return (
    <div className="row mb-3 pb-1">
      <div className="col-11">
        <div className="dashboard-paper">
          <div className="title lead fw-semibold line-clamp-3">
            <PaperTitle publication={paper} index={index} />
          </div>
          <div className="authors lead line-clamp-3">
            <Authors authors={paper.authors} highlightAuthor={contact.name} />
          </div>
          <div className="lead text-secondary">
            {paper.year} &bull; {paper.venue.title}
          </div>
          <div>
            <PaperLinks links={paper.links} />
          </div>
        </div>
      </div>
      <div className="col-1 d-flex align-items-right fs-3 text-secondary lead fw-bold">
        {paper.year}
      </div>
    </div>
  );
}