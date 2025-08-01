import { Outlet } from "react-router";

import Header from '../components/Header'
import Footer from '../components/Footer'
import { fetchContact, fetchResearchInterests, fetchSocialAccounts } from "../api/contact";
import { getSiteLinks } from "../api/links";

function RootLayout() {
  const contact = fetchContact();
  const links = getSiteLinks();
  const accounts = fetchSocialAccounts();
  const researchInterests = fetchResearchInterests();

  return (
    <div className="container py-4 px-3">
      <Header contact={contact} links={links} />
      <Outlet />
      <Footer contact={contact} links={links} accounts={accounts} researchInterests={researchInterests} />
    </div>
  )
}

export default RootLayout;
