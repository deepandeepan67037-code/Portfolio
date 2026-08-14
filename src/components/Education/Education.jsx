import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">

      <div className="education-container">

        {/* Heading */}
        <div className="section-heading">
          <p>MY ACADEMIC JOURNEY</p>

          <h2>
            My Education<span></span>
          </h2>
        </div>

        {/* Education Card */}
        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div className="education-content">

            <div className="education-top">

              <div>
                <h3>
                  Bachelor of Computer Science
                </h3>

                <h4>
                  Ganamani College of Technology
                </h4>
              </div>

              <span className="education-year">
                2023 - 2027
              </span>

            </div>

            <p className="education-description">
              Currently pursuing a Bachelor of Computer Science
              degree with a focus on developing technical,
              programming, and problem-solving skills.
            </p>

            <div className="education-tags">
              <span>Computer Science</span>
              <span>Programming</span>
              <span>Web Development</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;