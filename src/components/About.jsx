import useReveal from '../hooks/useReveal'
import './About.css'

export default function About() {
  const ref = useReveal()

  return (
    <section className="section about reveal" id="about" ref={ref}>
      <h2 className="section-title gradient-text">About Me</h2>
      <p className="section-subtitle">
        From engineering teams to customer boardrooms
      </p>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I&rsquo;m a customer-focused technologist with over two decades of experience
            spanning telecom companies in Finland, Microsoft, and now GitHub in the USA.
            My career has evolved from supporting software engineering teams to directly
            partnering with customers to drive adoption and deliver measurable value.
          </p>
          <p>
            I thrive at the intersection of deep technical understanding and strategic
            customer engagement — whether I&rsquo;m presenting at a customer summit, leading
            a technical workshop, or architecting a success plan that aligns product
            capabilities with business goals.
          </p>
          <p>
            Outside of work, you&rsquo;ll find me exploring the beautiful Pacific Northwest —
            especially sailing the Puget Sound.
          </p>
        </div>

        <div className="about-stats">
          <div className="glass-card stat-card">
            <span className="stat-number gradient-text">20+</span>
            <span className="stat-label">Years in Tech</span>
          </div>
          <div className="glass-card stat-card">
            <span className="stat-number gradient-text">2</span>
            <span className="stat-label">Countries Lived In</span>
          </div>
          <div className="glass-card stat-card">
            <span className="stat-number gradient-text">100s</span>
            <span className="stat-label">Customer Engagements</span>
          </div>
          <div className="glass-card stat-card">
            <span className="stat-number gradient-text">∞</span>
            <span className="stat-label">Curiosity</span>
          </div>
        </div>
      </div>
    </section>
  )
}
