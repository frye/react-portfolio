import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import FocusAreas from './components/FocusAreas'
import ScenicBanner from './components/ScenicBanner'
import Footer from './components/Footer'

const Gallery = lazy(() => import('./components/Gallery'))

function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FocusAreas />
      <ScenicBanner />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Nav />
      <main>
        <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
