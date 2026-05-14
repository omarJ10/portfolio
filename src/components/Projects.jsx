import { FaGithub, FaArrowRight } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      num: '01',
      title: 'AgriSmart',
      subtitle: 'AI-Powered Precision Agriculture Platform',
      role: 'Solution Architect · Team of 6',
      period: 'Jan – May 2026',
      description: 'Architected a microservices platform with 6 independent services. Deployed on-device plant disease detection (MobileNetV2 TFLite, 38 classes, 87K+ images) with sub-3s offline inference. Built a RAG irrigation assistant with LangChain + Llama 3.',
      technologies: ['Python', 'FastAPI', 'TFLite', 'LangChain', 'Llama 3', 'Docker', 'PostgreSQL', 'MQTT'],
      github: null,
      featured: true
    },
    {
      num: '02',
      title: 'Visual Attention Captioning',
      subtitle: 'SAT Reproduction & Error Analysis',
      role: 'Research Project',
      period: 'Feb – Apr 2026',
      description: 'Reproduced "Show, Attend and Tell" and built a caption rectification engine using BLIP + YOLOv8. Defined a custom Object Preservation Rate (OPR) metric. Full-stack demo with FastAPI + ReactJS.',
      technologies: ['PyTorch', 'BLIP', 'YOLOv8', 'Stable Diffusion', 'FastAPI', 'ReactJS'],
      github: 'https://github.com/omarJ10',
      featured: true
    },
    {
      num: '03',
      title: 'MLOps Drug Classification',
      subtitle: 'End-to-End ML Pipeline',
      role: 'ML Engineer',
      period: 'Nov – Dec 2025',
      description: 'Random Forest + SMOTE achieving 0.89 F1-score on imbalanced medical data. FastAPI serving at <100ms. MLflow tracking, Docker Compose orchestration, Elasticsearch + Kibana observability.',
      technologies: ['Scikit-learn', 'FastAPI', 'MLflow', 'Docker', 'Elasticsearch', 'Kibana'],
      github: 'https://github.com/omarJ10',
      featured: false
    }
  ]

  return (
    <>
      <div className="divider" />
      <section id="projects" className="projects">
        <span className="section-label">// Projects</span>
        <div className="projects-header">
          <h2 className="section-heading">
            A Showcase of<br />
            <span className="highlight">My Latest Work</span>
          </h2>
          <span className="code-bracket">&lt;/&gt;</span>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className={`proj-card ${project.featured ? 'featured' : ''}`}>
              <div className="proj-card-top">
                <span className="proj-num">{project.num}</span>
                <div className="proj-meta">
                  <span className="proj-period">{project.period}</span>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-github">
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="proj-title">{project.title}</h3>
              <p className="proj-subtitle">{project.subtitle}</p>
              <p className="proj-role">{project.role}</p>

              <p className="proj-desc">{project.description}</p>

              <div className="proj-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="proj-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
