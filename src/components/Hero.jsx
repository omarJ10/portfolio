import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Omar Jalled</span>
          </h1>
          <h2 className="hero-subtitle">Full-Stack Developer</h2>
          <p className="hero-description">
            Specializing in React.js, Next.js, and Node.js
          </p>
          <div className="hero-info">
            <div className="info-item">
              <FaMapMarkerAlt />
              <span>Tunis, Tunisia</span>
            </div>
            <div className="info-item">
              <FaEnvelope />
              <a href="mailto:jalledomar2001@gmail.com">jalledomar2001@gmail.com</a>
            </div>
            <div className="info-item">
              <FaPhone />
              <a href="tel:+21629763231">29763231</a>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/omarJ10" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/omar-jalled" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="code-animation">
              <span className="code-line">&lt;Developer /&gt;</span>
              <span className="code-line">Full-Stack</span>
              <span className="code-line">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
