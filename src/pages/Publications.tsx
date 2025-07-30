import { fetchPublicationsByType } from "../api/publications";
import PapersList from "../components/PapersList";

export default function Publications() {
  const conferencePapers = fetchPublicationsByType('Conference Paper');
  const journalArticles = fetchPublicationsByType('Journal Article');
  return (
    <div className="row g-5 py-5">
      <div className="col-12">
        <h1 className="display-5 fw-normal text-body-emphasis lh-1 mb-3">Publications</h1>
        <PapersList title="Conference Papers" papers={conferencePapers} />
        <PapersList title="Journal Articles" papers={journalArticles} />
      </div>
    </div>
  );
}