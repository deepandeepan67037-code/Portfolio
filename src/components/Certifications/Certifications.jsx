import "./Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      icon: "☁️",
      title: "Cloud Computing",
      organization: "NPTEL",
      description:
        "NPTEL Certification in Cloud Computing.",
    },
    {
      icon: "🌐",
      title: "Internet of Things (IoT)",
      organization: "NPTEL",
      description:
        "NPTEL Certification in Internet of Things (IoT).",
    },
    {
      icon: "⌨️",
      title: "English Typewriting Proficiency",
      organization: "Technical Education Certification Board",
      description:
        "English Typewriting Proficiency certification.",
    },
  ];

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="certifications-container">

        {/* Heading */}
        <div className="section-heading">
          <p>MY ACHIEVEMENTS</p>

          <h2>
            My Certifications<span></span>
          </h2>
        </div>

        {/* Certification Cards */}
        <div className="certifications-grid">

          {certifications.map((certificate, index) => (
            <div
              className="certification-card"
              key={index}
            >
              <div className="certification-icon">
                {certificate.icon}
              </div>

              <h3>
                {certificate.title}
              </h3>

              <h4>
                {certificate.organization}
              </h4>

              <p>
                {certificate.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;