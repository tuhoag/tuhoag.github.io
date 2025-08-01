import { NavLink } from "react-router"
import type { Contact, SiteLink } from "../types"

function Header({contact, links}: {contact: Contact, links: SiteLink[]}) {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <NavLink to="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
      <span className="fs-4">{contact.shortName}</span>
      </NavLink>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {links.map((link) => (
          <NavLink key={link.url} className="me-3 py-2 link-body-emphasis text-decoration-none" to={link.url}>
            {link.title}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
