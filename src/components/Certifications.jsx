import { FaCertificate, FaCalendar } from 'react-icons/fa'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      title: 'Applications of AI for Anomaly Detection',
      issuer: 'NVIDIA',
      date: 'Apr 2026',
      topics: ['Autoencoders', 'Anomaly Scoring', 'Network Intrusion Detection', 'Threshold Calibration']
    },
    {
      title: 'Fundamentals of Deep Learning',
      issuer: 'NVIDIA',
      date: 'Feb 2026',
      topics: ['CNNs', 'Transfer Learning', 'GPU-Accelerated Training']
    }
  ]

  const inProgress = [
    { title: 'Microsoft Azure AI-900', desc: 'Azure AI Fundamentals' },
    { title: 'Microsoft Azure DP-100', desc: 'Data Scientist Associate' }
  ]

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">
        Continuous learning in ML, AI, and cloud technologies
      </p>
      <div className="certifications-container">
        <div className="certs-earned">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-icon">
                <FaCertificate />
              </div>
              <div className="cert-content">
                <div className="cert-header">
                  <div>
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                  <div className="cert-date">
                    <FaCalendar />
                    {cert.date}
                  </div>
                </div>
                <div className="cert-topics">
                  {cert.topics.map((topic, i) => (
                    <span key={i} className="cert-topic">{topic}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="certs-in-progress">
          <h3 className="certs-progress-title">In Progress</h3>
          <div className="progress-cards">
            {inProgress.map((cert, idx) => (
              <div key={idx} className="progress-card">
                <div className="progress-indicator" />
                <div>
                  <p className="progress-name">{cert.title}</p>
                  <p className="progress-desc">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
