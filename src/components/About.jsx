import './About.css'

const About = () => {
  const stats = [
    { number: '3+', label: 'ML Projects Deployed' },
    { number: '2', label: 'NVIDIA Certifications' },
    { number: '0.89', label: 'Best F1-Score' },
    { number: '6+', label: 'Services Architected' },
  ]

  return (
    <>
      <div className="divider" />
      <section id="about" className="about">
        <div className="about-top">
          <div className="about-left">
            <span className="section-label">// About</span>
            <h2 className="section-heading">
              Building intelligent systems<br />
              <span className="highlight">from research to production</span>
            </h2>
          </div>
          <div className="about-right">
            <p className="about-text">
              Machine Learning Engineer with hands-on experience building 
              end-to-end ML systems. I specialize in taking models from notebooks to 
              production — with proper pipelines, monitoring, and scalability.
            </p>
            <p className="about-text">
              Currently pursuing an Engineering Degree in Computer Science at ESPRIT, 
              while actively delivering real-world projects in precision agriculture, 
              medical AI, and computer vision research.
            </p>
            <a href="#projects" className="about-cta">
              Explore my work <span className="cta-arrow">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
