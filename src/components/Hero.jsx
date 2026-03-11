import profileImg from '../assets/profile-sailing.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-profile">
        <img src={profileImg} alt="Samuli Järvinen sailing" className="hero-profile-img" />
      </div>
      <p className="hero-tagline">Bridging Technology &amp; Customer Success</p>
      <h1 className="hero-name gradient-text">Samuli Järvinen</h1>
      <h2 className="hero-title">Senior Solutions Engineer</h2>
      <p className="hero-description">
        Partnering with customers to unlock the full potential of their technology
        investments. Two decades of experience turning complex technical challenges
        into lasting business outcomes.
      </p>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
