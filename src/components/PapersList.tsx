import { settings } from "../settings";
import type { Publication } from "../types";
import Icon from "./Icon";

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
  const authorsText = paper.authors.map((author, i) => {
    const isHighlighted = author === settings.ownerAuthor;
    return (
      <span key={i} className={isHighlighted ? "text-primary fw-semibold" : ""}>
        {author}
        {i < paper.authors.length - 1 ? ", " : ""}
      </span>
    );
  });

  return (
    <div className="row mb-3 pb-1">
      <div className="col-11">
        <div className="dashboard-paper">
          <div className="title lead fw-semibold line-clamp-3">
            {index + 1}.{' '}{paper.title}
          </div>
          <div className="authors lead line-clamp-3">
            {authorsText}
          </div>
          <div className="lead text-secondary">
            {paper.year} &bull; {paper.venue}
          </div>
          <div>
            {paper.links && paper.links.length > 0 && (
              <div className="">
                {paper.links.map((link, i) => (
                  <div key={i} className="d-inline-block me-2">
                    <Icon name={link.icon} className="me-1" />
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="">
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-1 d-flex align-items-right fs-3 text-secondary lead fw-bold">
        {paper.year}
      </div>
    </div>
  );
}