import { Outlet, useMatches, type UIMatch } from "react-router";

type MatchWithHandle = UIMatch<unknown, { title?: string }>;

function PageLayout() {
  const currentMatch = useMatches() as MatchWithHandle[];
  const title = currentMatch?.[currentMatch.length - 1]?.handle?.title;

  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center bg-body-secondary">
        <div className="col-12 mb-3 mt-2">
          {/* Display the title if it exists */}
          {title && (
            <h1 className="display-5 fw-normal text-body-emphasis lh-1 mb-0 text-start">
              {title}
            </h1>
          )}
        </div>
      </div>

      {/* Page content inside Bootstrap grid */}
      <div className="row g-5 py-5">
        <div className="col-12">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default PageLayout;
