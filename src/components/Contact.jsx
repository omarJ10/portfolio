import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className="divider" />
      <section id="contact" className="contact">
        <span className="section-label">// Contact</span>
        <div className="contact-layout">
          <div className="contact-left">
            <h2 className="contact-heading">
              Ready to take your<br />
              <span className="contact-heading-highlight">idea to the next level?</span>
            </h2>
            <p className="contact-desc">
              Open to ML engineering roles, research collaborations, 
              and interesting projects. Let's build something great together.
            </p>
          </div>
          <div className="contact-right">
            <a href="mailto:jalledomar2001@gmail.com" className="contact-row">
              <FaEnvelope className="contact-row-icon" />
              <div>
                <span className="contact-row-label">Email</span>
                <span className="contact-row-value">jalledomar2001@gmail.com</span>
              </div>
            </a>
            <a href="tel:+21629763231" className="contact-row">
              <FaPhone className="contact-row-icon" />
              <div>
                <span className="contact-row-label">Phone</span>
                <span className="contact-row-value">+216 29 763 231</span>
              </div>
            </a>
            <div className="contact-row">
              <FaMapMarkerAlt className="contact-row-icon" />
              <div>
                <span className="contact-row-label">Location</span>
                <span className="contact-row-value">Tunis, Tunisia</span>
              </div>
            </div>
            <div className="contact-socials">
              <a href="https://github.com/omarJ10" target="_blank" rel="noopener noreferrer" className="contact-social">
                <FaGithub /> GitHub
              </a>
              <a href="https://linkedin.com/in/omar-jalled" target="_blank" rel="noopener noreferrer" className="contact-social">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
