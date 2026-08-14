import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Line Follower Robot",
      category: "Arduino / IoT",
      icon: "🤖",
      description:
        "Developed an autonomous robot using Arduino, IR sensors, and dual DC motors to follow predefined paths. Implemented real-time line tracking, speed control, and automatic path correction.",
      technologies: [
        "Arduino",
        "IR Sensors",
        "DC Motors",
        "C Programming",
      ],
    },

    {
      title: "Arduino Obstacle Avoiding Robot",
      category: "Arduino / IoT",
      icon: "🚗",
      description:
        "Built a self-navigating robot using Arduino Uno, ultrasonic sensors, and motor drivers. Implemented real-time obstacle detection and automatic reverse-and-turn movements for safe navigation.",
      technologies: [
        "Arduino Uno",
        "Ultrasonic Sensor",
        "Motor Driver",
        "C Programming",
      ],
    },

    {
      title: "Portfolio Website",
      category: "Web Development",
      icon: "💻",
      description:
        "Developed a responsive personal portfolio website using React.js to showcase skills, projects, education, and experience. Implemented reusable components and responsive layouts for desktop and mobile devices.",
      technologies: [
        "React.js",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <div className="projects-container">

        {/* Heading */}
        <div className="section-heading">
          <p>MY WORK</p>

          <h2>
            My Projects<span></span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              {/* Icon */}
              <div className="project-icon">
                {project.icon}
              </div>

              {/* Category */}
              <p className="project-category">
                {project.category}
              </p>

              {/* Title */}
              <h3>
                {project.title}
              </h3>

              {/* Description */}
              <p className="project-description">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="project-technologies">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;