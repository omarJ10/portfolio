import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      
      <div className="hero-main">
        <div className="hero-left">
          <p className="hero-greeting">Hey, I'm</p>
          <h1 className="hero-name">Omar<br />Jalled</h1>
          <div className="hero-role">
            <span className="role-line" />
            <span className="role-text">Machine Learning Engineer</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-profile-card">
            <img src="/profile.jpg" alt="Omar Jalled" className="hero-photo" />
            <div className="hero-status">
              <span className="status-pulse" />
              Available for work
            </div>
          </div>
        </div>
      </div>

      <div className="hero-marquee-wrapper">
        <div className="hero-marquee">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="marquee-content">
                <span>TensorFlow</span><span className="marquee-dot" />
                <span>PyTorch</span><span className="marquee-dot" />
                <span>MLflow</span><span className="marquee-dot" />
                <span>FastAPI</span><span className="marquee-dot" />
                <span>Docker</span><span className="marquee-dot" />
                <span>Computer Vision</span><span className="marquee-dot" />
                <span>LangChain</span><span className="marquee-dot" />
                <span>PostgreSQL</span><span className="marquee-dot" />
                <span>Scikit-learn</span><span className="marquee-dot" />
                <span>CI/CD</span><span className="marquee-dot" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <p className="hero-desc">
          I craft end-to-end ML systems — from data pipelines to deployment 
          and monitoring. Specialized in MLOps, computer vision, and scalable 
          AI architectures.
        </p>
        <div className="hero-links">
          <a href="https://github.com/omarJ10" target="_blank" rel="noopener noreferrer" className="hero-link-item">
            <FaGithub /> <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/omar-jalled" target="_blank" rel="noopener noreferrer" className="hero-link-item">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a href="mailto:jalledomar2001@gmail.com" className="hero-link-item">
            <FaEnvelope /> <span>Email</span>
          </a>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <FaArrowDown />
        <span>SCROLL</span>
      </a>
    </section>
  )
}

export default Hero
