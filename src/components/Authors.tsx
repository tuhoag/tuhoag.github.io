export default function Authors({ authors, highlightAuthor }: { authors: string[], highlightAuthor: string }) {
  return (
    <p className="mb-0">
      {authors.map((author, i) => {
        const isHighlighted = author === highlightAuthor;
        return (
          <span key={`author-${i}`}>
            <span className={isHighlighted ? "text-primary fw-semibold" : ""}>
              {author}
            </span>
            {i < authors.length - 1 ? ', ' : ''}
          </span>
        );
      })}
    </p>
  );
}
