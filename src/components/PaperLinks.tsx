import Icon from "./Icon";

export default function PaperLinks({ links }: { links?: { name: string, url: string, icon: string }[] }) {
  return (
    <>
      {links && links.length > 0 && (
        <div className="">
          {links.map((link, i) => (
            <div key={i} className="d-inline-block me-2">
              <Icon name={link.icon} className="me-1" />
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="">
                {link.name}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
}