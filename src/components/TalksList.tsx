import { settings } from "../settings";
import type { Talk } from "../types";
import Icon from "./Icon";

export default function TalksList({ talks }: { talks: Talk[] }) {
  return (
    <>
      {talks.map((talk, index) => (
        <TalkItem key={talk.id} talk={talk} index={index} />
      ))}
    </>
  );
}

function TalkItem({ talk, index }: { paper: Talk, index: number }) {
  return (
    <div className="row mb-3 pb-1">
      <div className="col-11">
        <div className="dashboard-paper">
          <div className="title lead fw-semibold line-clamp-3">
            {index + 1}.{' '}{talk.title}
          </div>
          <div className="lead text-secondary">
            {talk.date} &bull; {talk.location}
          </div>
          <div>
            {talk.links && talk.links.length > 0 && (
              <div className="">
                {talk.links.map((link, i) => (
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
        {talk.date.split('/')[1]}
      </div>
    </div>
  );
}