import { fetchTalks } from "../api/talks";
import PapersList from "../components/PapersList";
import TalksList from "../components/TalksList";

export default function Talks() {
  const talks = fetchTalks();

  return (
    <div className="row g-5 py-5">
      <div className="col-12">
        <h1 className="display-5 fw-normal text-body-emphasis lh-1 mb-3">Talks</h1>
        <TalksList talks={talks} />
      </div>
    </div>
  );
}
