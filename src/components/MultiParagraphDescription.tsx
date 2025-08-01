import type { MultiPartDescription } from "../types";
import Description from "./Description";

export function MultiParagraphDescription({ description }: { description: MultiPartDescription[] }) {
  return (
    <div>
      {description.map((desc, index) => (
        typeof desc === 'string' ? <div key={`desc-${index}`}>{desc}</div> :
        <Description description={desc} key={`desc-${index}`} />
      ))}
    </div>
  );
}