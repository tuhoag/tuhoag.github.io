import { NavLink } from "react-router";
import Icon from "./Icon";
import type { Contact, Link, ResearchInterest, SiteLink } from "../types";

function Footer({contact, links, accounts, researchInterests}: {contact: Contact, links: SiteLink[], accounts: Link[], researchInterests: ResearchInterest[]}) {

  return (
    <footer className="py-5 mt-5 border-top">
        {/* Main footer layout */}
        <div className="d-flex flex-column flex-lg-row justify-content-between">
          {/* Left: About + Contact */}
          <div className="mb-4 mb-lg-0" style={{ maxWidth: "600px" }}>
            <h5>{contact.shortName}</h5>
            <p className="text-body-secondary">
              {contact.footnoteMessage}
            </p>
            <ul className="nav flex-column mb-3">
              <li className="nav-item mb-2 text-body-secondary">
                <Icon name="address" className="me-2" />
                {contact.address}
              </li>
              {contact.emails.map(((emailAddress, index) => (
                <li key={`link-${index}`} className="nav-item mb-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="nav-link p-0 text-body-secondary"
                  >
                    <Icon name="email" className="me-2" />
                    {emailAddress}
                  </a>
                </li>
              )))}

            </ul>
            <p className="text-muted small mb-0">
              © 2025 {contact.shortName}. All rights reserved. Designed by me using{' '}
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a>,{' '}
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>, and{' '}
              <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">Bootstrap</a>.
            </p>
          </div>

          {/* Right: Links / Research / Social */}
          <div className="d-flex flex-wrap justify-content-lg-end gap-5">
            {/* Links */}
            <div>
              <h5>Links</h5>
              <ul className="nav flex-column">
                {links.map(
                  (link, idx) => (
                    <li className="nav-item mb-2" key={idx}>
                      <NavLink to={link.url} className="nav-link p-0 text-body-secondary">
                        {link.title}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Research */}
            <div>
              <h5>Research</h5>
              <ul className="nav flex-column">
                {researchInterests.map((topic, idx) => (
                  <li className="nav-item mb-2" key={idx}>
                    <a href={topic.url} className="nav-link p-0 text-body-secondary">
                      {topic.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h5>Social Accounts</h5>
              <ul className="nav flex-column">
                {accounts.map(({ name, url, icon }) => (
                  <li className="nav-item mb-2" key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link p-0 text-body-secondary"
                    >
                      <Icon name={icon} className="me-2" />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </footer>
  );
}

export default Footer;