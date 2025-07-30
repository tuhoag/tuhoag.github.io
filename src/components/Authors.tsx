export default function Authors({ authors, highlightAuthor }: { authors: string[], highlightAuthor: string }) {
  return (
    <>
      {authors.map((author, i) => {
        const isHighlighted = author === highlightAuthor;
        return (
          <>
            <span key={i} className={isHighlighted ? "text-primary fw-semibold" : ""}>
              {author}
            </span>
            {i < authors.length - 1 ? ", " : ""}
          </>
        );
      })}
    </>
  );
}