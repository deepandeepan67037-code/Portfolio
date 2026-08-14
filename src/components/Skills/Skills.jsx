import "./Skills.css";

const Skills = () => {
  const technicalSkills = [
    "Python",
    "Java",
    "C Programming",
  ];

  const webSkills = [
    "React.js",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
  ];

  const coreSkills = [
    "Internet of Things (IoT)",
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        {/* Heading */}
        <div className="section-heading">
          <p>MY EXPERTISE</p>
          <h2>
            My Skills<span></span>
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="skills-grid">

          {/* Technical Skills */}
          <div className="skill-card">

            <div className="skill-icon">
              💻
            </div>

            <h3>Technical Skills</h3>

            <div className="skill-list">
              {technicalSkills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* Web Technologies */}
          <div className="skill-card">

            <div className="skill-icon">
              🌐
            </div>

            <h3>Web Technologies</h3>

            <div className="skill-list">
              {webSkills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* Core Competency */}
          <div className="skill-card">

            <div className="skill-icon">
              🤖
            </div>

            <h3>Core Competency</h3>

            <div className="skill-list">
              {coreSkills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;