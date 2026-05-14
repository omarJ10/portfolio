import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="divider" />
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-logo">
            <span className="footer-bracket">&lt;</span>OJ<span className="footer-bracket">/&gt;</span>
          </span>
          <span className="footer-copy">&copy; {currentYear} Omar Jalled</span>
        </div>
        <div className="footer-right">
          <span className="footer-built">Built with React + Vite</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
