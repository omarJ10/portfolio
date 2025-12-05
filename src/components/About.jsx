import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-paragraph">
            Développeur Full-Stack JavaScript avec une expérience dans la création d'applications 
            web modernes et évolutives utilisant <strong>React.js</strong>, <strong>Next.js</strong>, 
            <strong>Node.js</strong> ainsi que des bases de données SQL/NoSQL.
          </p>
          <p className="about-paragraph">
            Passionné par la <strong>clean architecture</strong>, les composants réutilisables, 
            la conception d'API et les solutions full-stack performantes.
          </p>
          <p className="about-paragraph">
            Expérience pratique à travers des projets réels et des stages optimisés et déployés 
            en production, utilisés par des utilisateurs. Je m'efforce constamment d'améliorer 
            mes compétences et d'apprendre les dernières technologies pour créer des solutions 
            innovantes et efficaces.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
