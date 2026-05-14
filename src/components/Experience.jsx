import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      num: '01',
      company: 'Kinko',
      role: 'ML-Integrated Mobile Developer',
      location: 'Remote · Ariana, Tunisia',
      period: 'Dec 2025 – Present',
      description: [
        'Built event-tracking data collection layer within the Flutter app capturing reservation, occupancy, and revenue events for downstream analytics',
        'Designed structured event schemas and SQL aggregation queries enabling real-time KPI computation (occupancy rate, conversion rate, revenue per room)',
        'Translated business metrics into production-ready data models and reporting views'
      ],
      technologies: ['Flutter', 'SQL', 'Analytics', 'Event Schemas', 'KPIs']
    },
    {
      num: '02',
      company: 'Proservices Training',
      role: 'Data Engineering Intern',
      location: 'On-site · Ariana, Tunisia',
      period: 'Jun – Aug 2025',
      description: [
        'Designed PostgreSQL analytics backend capturing learning engagement metrics for 100+ users with optimized indexing',
        'Built scalable RESTful services using NestJS with consistent integrity guarantees',
        'Applied MVVM architecture for maintainable data flows between backend and Flutter client'
      ],
      technologies: ['PostgreSQL', 'NestJS', 'Flutter', 'MVVM', 'REST API']
    }
  ]

  return (
    <>
      <div className="divider" />
      <section id="experience" className="experience">
        <span className="section-label">// Experience</span>
        <div className="exp-header">
          <h2 className="section-heading">
            Work Experience<br />
            <span className="highlight">& Impact</span>
          </h2>
          <span className="code-bracket">&lt;/&gt;</span>
        </div>

        <div className="exp-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-card">
              <div className="exp-card-left">
                <span className="exp-num">{exp.num}</span>
              </div>
              <div className="exp-card-body">
                <div className="exp-card-header">
                  <div>
                    <h3 className="exp-company">{exp.company}</h3>
                    <p className="exp-role">{exp.role}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="exp-points">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="exp-tech">
                  {exp.technologies.map((t, i) => (
                    <span key={i} className="exp-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Experience
