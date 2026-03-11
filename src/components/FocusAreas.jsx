import useReveal from '../hooks/useReveal'
import './FocusAreas.css'

const areas = [
  {
    icon: '🤝',
    title: 'Customer Advocacy',
    description:
      'Championing customer needs within the organization, ensuring their voice drives product improvements and strategic decisions.',
  },
  {
    icon: '🎤',
    title: 'Technical Presentations',
    description:
      'Delivering compelling keynotes, workshops, and demos at customer events that inspire confidence and accelerate adoption.',
  },
  {
    icon: '📈',
    title: 'Value Delivery',
    description:
      'Designing and executing success plans that tie platform capabilities directly to measurable business outcomes.',
  },
  {
    icon: '🔗',
    title: 'Strategic Partnerships',
    description:
      'Building trusted, long-term relationships with enterprise stakeholders from technical teams to the C-suite.',
  },
]

export default function FocusAreas() {
  const ref = useReveal()

  return (
    <section className="section focus-areas reveal" id="focus" ref={ref}>
      <h2 className="section-title gradient-text">What I Do</h2>
      <p className="section-subtitle">Areas where I create the most impact</p>

      <div className="focus-grid">
        {areas.map((area) => (
          <div className="glass-card focus-card" key={area.title}>
            <span className="focus-icon">{area.icon}</span>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
