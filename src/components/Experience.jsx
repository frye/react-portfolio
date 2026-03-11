import useReveal from '../hooks/useReveal'
import './Experience.css'

const roles = [
  {
    title: 'Senior Solutions Engineer',
    company: 'GitHub',
    period: '2026 — Present',
    current: true,
    emoji: '🚀',
    highlights: [
      'Partnering with enterprise customers to design and deliver tailored technical solutions',
      'Leading live product demonstrations and proof-of-concept engagements',
      'Translating complex platform capabilities into clear, compelling business narratives',
      'Collaborating cross-functionally with Sales, Product, and Engineering teams',
    ],
  },
  {
    title: 'Senior Customer Success Architect',
    company: 'GitHub',
    period: '2023 — 2026',
    current: false,
    emoji: '🏗️',
    highlights: [
      'Drove adoption and expansion across a portfolio of strategic enterprise accounts',
      'Delivered keynote presentations and technical workshops at customer events and summits',
      'Built and executed customer success plans that consistently exceeded retention targets',
      'Acted as the voice of the customer internally, influencing product roadmap decisions',
      'Mentored junior team members on customer engagement best practices',
    ],
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section className="section experience reveal" id="experience" ref={ref}>
      <h2 className="section-title gradient-text">Experience</h2>
      <p className="section-subtitle">Recent roles focused on customer impact</p>

      <div className="experience-timeline">
        {roles.map((role) => (
          <div className="experience-card" key={role.title}>
            <div className={`experience-dot ${role.current ? 'current' : ''}`}>
              {role.emoji}
            </div>
            <div className="experience-content glass-card">
              <h3>
                {role.title}
                {role.current && <span className="experience-badge">Current</span>}
              </h3>
              <p className="experience-company">{role.company}</p>
              <p className="experience-period">{role.period}</p>
              <ul className="experience-highlights">
                {role.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
