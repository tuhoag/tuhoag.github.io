import { NavLink } from "react-router"

function Header() {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <NavLink to="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
      <span className="fs-4">Tu Hoang</span>
      </NavLink>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <NavLink className="me-3 py-2 link-body-emphasis text-decoration-none" to="/">Home</NavLink>
        <NavLink className="me-3 py-2 link-body-emphasis text-decoration-none" to="/projects">Projects</NavLink>
        <NavLink className="me-3 py-2 link-body-emphasis text-decoration-none" to="/publications">Publications</NavLink>
        <NavLink className="me-3 py-2 link-body-emphasis text-decoration-none" to="/talks">Talks</NavLink>
        <NavLink className="py-2 link-body-emphasis text-decoration-none" to="/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header
