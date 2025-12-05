import { FaBriefcase, FaCalendar } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Proservices',
      role: 'Stage d\'été',
      period: 'Juin 2025 – Août 2025',
      description: [
        'Participation au développement d\'une plateforme e-learning ERP hybride (web + mobile)',
        'Contribution au frontend avec React.js pour certaines interfaces internes (Admin Dashboard)',
        'Développement d\'API backend en NestJS + PostgreSQL',
        'Déploiement du backend et intégration complète avec le frontend'
      ],
      technologies: ['React.js', 'NestJS', 'PostgreSQL', 'ERP']
    },
    {
      company: 'Artrok',
      role: 'Freelance',
      period: 'Janvier 2025 – Avril 2025',
      description: [
        'Développement d\'une application complète d\'échange d\'œuvres d\'art',
        'Intégration d\'un backend en NestJS + PostgreSQL + Firebase',
        'Gestion des notifications en temps réel et du système de matching',
        'Contribution à une augmentation de 40% de la rétention utilisateur'
      ],
      technologies: ['NestJS', 'PostgreSQL', 'Firebase', 'Real-time notifications']
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="experience-header">
                <div>
                  <h3 className="company-name">
                    <FaBriefcase className="inline-icon" />
                    {exp.company}
                  </h3>
                  <h4 className="role-name">{exp.role}</h4>
                </div>
                <div className="period">
                  <FaCalendar className="calendar-icon" />
                  {exp.period}
                </div>
              </div>
              <ul className="description-list">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="technologies">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
