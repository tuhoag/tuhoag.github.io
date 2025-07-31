import { fetchTalks } from "../api/talks";
import TalksList from "../components/TalksList";

export default function Talks() {
  const talks = fetchTalks();

  return (
    <>
      <TalksList talks={talks} />
    </>
  );
}
