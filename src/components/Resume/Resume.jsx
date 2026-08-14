import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">

      <div className="resume-container">

        {/* Heading */}
        <div className="section-heading">
          <p>MY RESUME</p>

          <h2>
            Download My Resume<span></span>
          </h2>
        </div>

        {/* Resume Content */}
        <div className="resume-card">

          <div className="resume-icon">
            📄
          </div>

          <h3>
            Want to know more about me?
          </h3>

          <p>
            Check out my resume to learn more about my education,
            skills, experience, projects, and certifications.
          </p>

          {/* Buttons */}
          <div className="resume-buttons">

            {/* View Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="view-resume-button"
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download
              className="download-resume-button"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Resume;