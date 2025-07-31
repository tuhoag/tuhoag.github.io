import { fetchPublicationsByType } from "../api/publications";
import PapersList from "../components/PapersList";

export default function Publications() {
  const conferencePapers = fetchPublicationsByType('Conference Paper');
  const journalArticles = fetchPublicationsByType('Journal Article');
  return (
    <>
      <PapersList title="Conference Papers" papers={conferencePapers} />
      <PapersList title="Journal Articles" papers={journalArticles} />
    </>
  );
}