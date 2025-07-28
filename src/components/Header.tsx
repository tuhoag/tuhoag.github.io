
function Header() {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
        <span className="fs-4">Tu Hoang</span>
      </a>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Projects</a>
        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Publications</a>
        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Talks</a>
        <a className="py-2 link-body-emphasis text-decoration-none" href="#">About</a>
      </nav>
    </header>
  )
}

export default Header
