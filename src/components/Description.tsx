import type { DescriptionItem } from "../types";

export default function Description( { description }: { description: DescriptionItem[] }) {
  return (
    <div>
      {description.map((desc, index) => (
          typeof desc === 'string' ? desc : <a key={index} href={desc.url} target="_blank" rel="noopener noreferrer">{desc.text}</a>
      ))}
    </div>
  );
}