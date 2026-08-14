import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo / Name */}
        <div className="footer-brand">
          <h2>
            <span>My Portfolio</span>
          </h2>

          <p>
            Computer Science Engineering Student
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-social">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>

          <a
            href="mailto:your-email@gmail.com"
            aria-label="Email"
          >
            Email
          </a>

        </div>

      </div>

      {/* Line */}
      <div className="footer-line"></div>

      {/* Copyright */}
      <div className="footer-bottom">

        <p>
          © {currentYear} MyPortfolio. All Rights Reserved.
        </p>

        <a href="#home">
          Back to Top ↑
        </a>

      </div>

    </footer>
  );
};

export default Footer;