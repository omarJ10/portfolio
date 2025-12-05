import { FaGraduationCap, FaCalendar } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      institution: 'École supérieure privée d\'ingénierie et de technologie',
      degree: 'Diplôme d\'ingénieur en génie logiciel',
      period: 'Sep 2024 - Jun 2027',
      status: 'En cours',
      description: 'Formation d\'ingénieur en génie logiciel avec focus sur le développement full-stack, les architectures logicielles et les méthodologies agiles.'
    },
    {
      institution: 'Institut supérieur des études technologiques',
      degree: 'Licence en technologies de l\'information',
      period: 'Sep 2021 - Jun 2024',
      status: 'Complété',
      description: 'Formation technique en technologies de l\'information couvrant le développement web, les bases de données et les fondamentaux de la programmation.'
    }
  ]

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {education.map((edu, idx) => (
          <div key={idx} className="education-card">
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-content">
              <div className="education-header">
                <div>
                  <h3 className="institution-name">{edu.institution}</h3>
                  <h4 className="degree-name">{edu.degree}</h4>
                </div>
                <div className="education-meta">
                  <div className="education-period">
                    <FaCalendar className="calendar-icon" />
                    {edu.period}
                  </div>
                  <span className={`status-badge ${edu.status === 'En cours' ? 'in-progress' : 'completed'}`}>
                    {edu.status}
                  </span>
                </div>
              </div>
              <p className="education-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
