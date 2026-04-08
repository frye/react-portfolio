import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Nav.css'

const sections = [
  { label: 'About', hash: '#about' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Focus', hash: '#focus' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleLogoClick(e) {
    e.preventDefault()
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.history.replaceState(null, '', '/')
    } else {
      navigate('/')
    }
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="/" className="nav-logo" onClick={handleLogoClick}>
        SJ<span>.</span>
      </a>
      <ul className="nav-links">
        {sections.map(({ label, hash }) => (
          <li key={hash}>
            {isHome ? (
              <a href={hash}>{label}</a>
            ) : (
              <Link to={`/${hash}`}>{label}</Link>
            )}
          </li>
        ))}
        <li>
          {isHome ? (
            <Link to="/gallery">Gallery</Link>
          ) : (
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
              Gallery
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
