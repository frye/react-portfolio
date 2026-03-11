import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import FocusAreas from './components/FocusAreas'
import ScenicBanner from './components/ScenicBanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <FocusAreas />
      </main>
      <ScenicBanner />
      <Footer />
    </>
  )
}
