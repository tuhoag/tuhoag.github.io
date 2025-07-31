import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturetteProjects from './components/FeaturetteProjects'
import DashboardPapers from './components/DashboardPapers'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="container py-4 px-3">
        <Header />
        <Hero />
        <FeaturetteProjects />
        <DashboardPapers />
        {/* <Footer /> */}
        <Footer />
      </div>
    </>
  )
}

export default App
