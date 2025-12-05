import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'jalledomar2001@gmail.com',
      link: 'mailto:jalledomar2001@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+216 29763231',
      link: 'tel:+21629763231'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Tunis, Tunisia',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      url: 'https://github.com/omarJ10'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/omar-jalled'
    }
  ]

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-intro">
          <h3 className="contact-heading">Let's Work Together</h3>
          <p className="contact-text">
            Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question 
            ou que vous souhaitiez simplement dire bonjour, n'hésitez pas à me contacter. Je ferai 
            de mon mieux pour vous répondre !
          </p>
        </div>

        <div className="contact-details">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="contact-item">
              <div className="contact-icon">{info.icon}</div>
              <div className="contact-info">
                <div className="contact-label">{info.label}</div>
                {info.link ? (
                  <a href={info.link} className="contact-value">
                    {info.value}
                  </a>
                ) : (
                  <div className="contact-value">{info.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="social-section">
          <h4 className="social-heading">Connect with me</h4>
          <div className="social-links">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-large"
                title={social.label}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-label">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
