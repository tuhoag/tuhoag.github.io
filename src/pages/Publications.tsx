import { fetchContact } from "../api/contact";
import { fetchPublicationsByType } from "../api/publications";
import PapersList from "../components/PapersList";

export default function Publications() {
  const conferencePapers = fetchPublicationsByType('Conference Paper');
  const journalArticles = fetchPublicationsByType('Journal Article');
  const contact = fetchContact();
  return (
    <>
      <PapersList title="Conference Papers" contact={contact} papers={conferencePapers} />
      <PapersList title="Journal Articles" contact={contact} papers={journalArticles} />
    </>
  );
}