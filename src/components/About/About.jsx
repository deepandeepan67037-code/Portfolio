import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        {/* Heading */}
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>
            About Me<span></span>
          </h2>
        </div>

        {/* Content */}
        <div className="about-content">

          {/* Left Side */}
          <div className="about-text">

            <h3>
              I'm a <span>Computer Science Engineering Student</span>
            </h3>

            <p>
              I am a highly motivated CSE student with strong skills
              in Python, Java, C, and web technologies. I am interested
              in developing innovative software solutions and applying
              my technical and problem-solving skills to real-world
              applications.
            </p>

            <p>
              I have gained practical experience in web development,
              data analytics, and software development through
              academic projects and training. I enjoy learning new
              technologies and improving my development skills.
            </p>

          </div>

          {/* Right Side */}
          <div className="about-card">

            <div className="about-card-item">
              <span>🎓</span>
              <div>
                <h4>Education</h4>
                <p>Bachelor of Computer Science</p>
              </div>
            </div>

            <div className="about-card-item">
              <span>💻</span>
              <div>
                <h4>Development</h4>
                <p>React.js & Web Technologies</p>
              </div>
            </div>

            <div className="about-card-item">
              <span>📊</span>
              <div>
                <h4>Data Analytics</h4>
                <p>Python, Pandas, NumPy & SQL</p>
              </div>
            </div>

            <div className="about-card-item">
              <span>🤖</span>
              <div>
                <h4>Core Interest</h4>
                <p>Internet of Things (IoT)</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;