import type { Publication } from "../types";

export default function PaperTitle({ publication, index }: { publication: Publication, index: number }) {
  return (
    <>
      {index + 1}.{' '}{publication.title}{publication.best_paper_award && <span className="badge bg-warning text-dark ms-1">Best Paper Award</span>}
    </>
  );
}