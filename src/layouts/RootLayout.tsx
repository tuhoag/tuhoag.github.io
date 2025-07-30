import { Outlet } from "react-router";

import '../App.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

function RootLayout() {
  return (
    <div className="container py-4 px-3">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout;
