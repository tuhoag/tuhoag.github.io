import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import DashboardFeaturetteProjects from './components/DashboardFeaturetteProjects'
import DashboardPapers from './components/DashboardPapers'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="container py-4 px-3">
        <Header />
        <Hero />
        <DashboardFeaturetteProjects />
        <DashboardPapers />
        {/* <Footer /> */}
        <Footer />
      </div>
    </>
  )
}

export default App
