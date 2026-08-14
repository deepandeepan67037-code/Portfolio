import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">

      <div className="experience-container">

        {/* Heading */}
        <div className="section-heading">
          <p>MY JOURNEY</p>
          <h2>
            My Experience<span></span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">

          {/* Experience 1 */}
          <div className="experience-item">

            <div className="timeline-dot"></div>

            <div className="experience-card">

              <div className="experience-header">
                <div>
                  <h3>Full Stack Web Development</h3>
                  <h4>Xenora Technologies</h4>
                </div>

                <span className="experience-date">
                  July 2026 - Sep 2026
                </span>
              </div>

              <p className="experience-location">
                📍 Coimbatore, Tamil Nadu
              </p>

              <p className="experience-description">
                Completed a Full Stack Web Development course covering
                HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js,
                Node.js, and Express.js. Gained practical experience with
                MongoDB, MySQL, REST APIs, CRUD operations, JWT
                authentication, Git/GitHub, and Postman.
              </p>

              <p className="experience-description">
                Developed responsive websites and full-stack applications
                with experience in debugging, problem-solving, and
                deployment using Vercel, Netlify, and Render.
              </p>

              <div className="technology-list">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>REST API</span>
                <span>Git/GitHub</span>
              </div>

            </div>

          </div>

          {/* Experience 2 */}
          <div className="experience-item">

            <div className="timeline-dot"></div>

            <div className="experience-card">

              <div className="experience-header">
                <div>
                  <h3>Data Analytics</h3>
                  <h4>MSQUARE</h4>
                </div>

                <span className="experience-date">
                  July 2025 - Aug 2025
                </span>
              </div>

              <p className="experience-location">
                📍 Erode, Tamil Nadu
              </p>

              <p className="experience-description">
                Analyzed and processed datasets using Python, Pandas,
                and NumPy to identify trends and meaningful insights.
                Performed data cleaning, preprocessing, and exploratory
                data analysis (EDA) to improve data quality.
              </p>

              <p className="experience-description">
                Created visualizations and charts using Matplotlib to
                present analytical findings clearly. Used SQL for data
                extraction, filtering, and analysis to support
                data-driven decision-making.
              </p>

              <div className="technology-list">
                <span>Python</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
                <span>SQL</span>
                <span>EDA</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;