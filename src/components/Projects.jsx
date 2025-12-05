import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'System de gestion d\'agence de voyage',
      type: 'Project en groupe',
      description: 'Développé un système JavaFX/MySQL pour la gestion des hôtels, locations de voitures, vols et attractions touristiques en Tunisie. Intégré des recommandations alimentées par l\'IA, une messagerie en temps réel via Firebase et un système complet de réservation.',
      technologies: ['JavaFX', 'Java', 'Scene Builder', 'MySQL', 'Firebase', 'AI Models'],
      github: 'https://github.com/ahmed-brahmi1/TuniXplore',
      features: [
        'Gestion complète des réservations',
        'Recommandations IA',
        'Messagerie temps réel Firebase',
        'Interface JavaFX intuitive'
      ]
    },
    {
      title: 'ForjaBlouchi',
      type: 'Plateforme de découverte de films',
      description: 'Développé une plateforme web permettant de parcourir une sélection de films, consulter des fiches détaillées et lire ou publier des avis utilisateurs, le tout via une interface responsive et intuitive.',
      technologies: ['ReactJS', 'Spring Boot', 'REST API', 'MongoDB'],
      github: 'https://github.com/omarJ10/ForjaBalouchi',
      features: [
        'Parcourir et rechercher des films',
        'Fiches détaillées avec informations complètes',
        'Système d\'avis utilisateurs',
        'Interface responsive moderne'
      ]
    },
    {
      title: 'Application de gestion d\'étudiants',
      type: 'Full-Stack Application',
      description: 'Développé un système complet de gestion des étudiants améliorant l\'organisation des tâches et des données, réduisant de 30% la charge administrative et augmentant la productivité au sein des établissements éducatifs.',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/omarJ10/Employee-Manager-app',
      features: [
        'Gestion complète des étudiants',
        'Réduction de 30% de la charge admin',
        'Organisation optimisée des données',
        'Interface Angular moderne'
      ]
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-header">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-type">{project.type}</p>
              </div>
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  title="View on GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-features">
              {project.features.map((feature, i) => (
                <div key={i} className="feature-item">
                  <span className="feature-bullet">✓</span>
                  {feature}
                </div>
              ))}
            </div>
            
            <div className="project-technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="project-tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
