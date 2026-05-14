import './Education.css'

const Education = () => {
  const education = [
    {
      institution: 'ESPRIT',
      full: 'Ecole Supérieure Privée d\'Ingénierie et de Technologies',
      degree: 'Engineering Degree in Computer Science',
      period: '2024 – Present',
      status: 'current'
    },
    {
      institution: 'ISET Rades',
      full: 'Higher Institute of Technological Studies',
      degree: 'Bachelor Degree in Information Technology',
      period: '2021 – 2024',
      status: 'done'
    }
  ]

  const certs = [
    { title: 'Applications of AI for Anomaly Detection', issuer: 'NVIDIA', date: 'Apr 2026' },
    { title: 'Fundamentals of Deep Learning', issuer: 'NVIDIA', date: 'Feb 2026' },
  ]

  const inProgress = [
    'Microsoft Azure AI-900',
    'Microsoft Azure DP-100',
  ]

  return (
    <>
      <div className="divider" />
      <section id="education" className="education">
        <span className="section-label">// Education & Certifications</span>
        <h2 className="section-heading">
          Academic Background<br />
          <span className="highlight">& Credentials</span>
        </h2>

        <div className="edu-grid">
          <div className="edu-col">
            <h3 className="edu-col-title">Education</h3>
            {education.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <div className="edu-card-top">
                  <span className="edu-school">{edu.institution}</span>
                  <span className={`edu-badge ${edu.status}`}>
                    {edu.status === 'current' ? 'In Progress' : 'Completed'}
                  </span>
                </div>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-full">{edu.full}</p>
                <span className="edu-period">{edu.period}</span>
              </div>
            ))}
          </div>

          <div className="edu-col">
            <h3 className="edu-col-title">Certifications</h3>
            {certs.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className="cert-card-top">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <p className="cert-title">{cert.title}</p>
              </div>
            ))}
            <div className="cert-progress">
              <span className="cert-progress-label">In Progress</span>
              <div className="cert-progress-items">
                {inProgress.map((item, idx) => (
                  <span key={idx} className="cert-progress-item">
                    <span className="progress-dot" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Education
