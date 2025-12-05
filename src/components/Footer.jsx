import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {currentYear} Omar Jalled. All rights reserved.
        </p>
        <p className="footer-subtext">
          Built with React.js & Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer
