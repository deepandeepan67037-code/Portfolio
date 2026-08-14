import "./Hero.css";

const Hero = () => {
  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 25px 80px;
          background: #000;
          color: white;
          overflow: hidden;
        }

        .hero-container {
          width: 100%;
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 70px;
        }

        /* =========================
           HERO CONTENT
        ========================= */

        .hero-small-text {
          color: #1683ff;
          font-size: 15px;
          font-weight: bold;
          letter-spacing: 4px;
          margin-bottom: 15px;
          text-shadow: 0 0 10px #0066ff;
        }

        .hero-content h1 {
          font-size: 65px;
          line-height: 1.1;
          margin-bottom: 15px;
        }

        .hero-content h1 span {
          color: #1683ff;
          text-shadow:
            0 0 5px #1683ff,
            0 0 15px #0066ff,
            0 0 30px #0066ff;
        }

        .hero-content h2 {
          font-size: 24px;
          color: #ccc;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .hero-description {
          max-width: 550px;
          color: #888;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        /* =========================
           BUTTONS
        ========================= */

        .hero-buttons {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .hero-primary-button,
        .hero-secondary-button {
          padding: 13px 24px;
          border-radius: 7px;
          font-size: 15px;
          font-weight: bold;
          transition: 0.3s;
          text-decoration: none;
        }

        .hero-primary-button {
          background: #0066ff;
          color: white;
          box-shadow: 0 0 10px rgba(0, 102, 255, 0.6);
        }

        .hero-primary-button:hover {
          background: #1683ff;
          transform: translateY(-3px);
          box-shadow:
            0 0 15px #1683ff,
            0 0 30px rgba(0, 102, 255, 0.5);
        }

        .hero-secondary-button {
          color: #1683ff;
          border: 1px solid #1683ff;
        }

        .hero-secondary-button:hover {
          background: #0066ff;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 0 15px #0066ff;
        }

        /* =========================
           IMAGE
        ========================= */

        .hero-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-wrapper {
          position: relative;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          padding: 6px;
          background: #0066ff;
          box-shadow:
            0 0 15px #0066ff,
            0 0 35px rgba(0, 102, 255, 0.7),
            0 0 70px rgba(0, 102, 255, 0.35);
          z-index: 2;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          border-radius: 50%;
          border: 5px solid #000;
        }

        .hero-image-glow {
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: #0066ff;
          filter: blur(80px);
          opacity: 0.25;
          z-index: 1;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {

          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }

          /* IMAGE FIRST */
          .hero-image-container {
            order: 1;
          }

          /* TEXT SECOND */
          .hero-content {
            order: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-description {
            max-width: 600px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .hero-section {
            min-height: auto;
            padding: 100px 20px 70px;
          }

          .hero-container {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }

          /* IMAGE AT TOP */
          .hero-image-container {
            order: 1;
          }

          /* CONTENT BELOW IMAGE */
          .hero-content {
            order: 2;
          }

          .hero-image-wrapper {
            width: 220px;
            height: 220px;
          }

          .hero-image-glow {
            width: 220px;
            height: 220px;
          }

          .hero-content h1 {
            font-size: 45px;
          }

          .hero-content h2 {
            font-size: 19px;
          }

          .hero-description {
            font-size: 14px;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
            align-items: center;
          }

          .hero-primary-button,
          .hero-secondary-button {
            width: 220px;
            text-align: center;
          }
        }
      `}</style>

      <section id="home" className="hero-section">

        <div className="hero-container">

          {/* IMAGE - TOP ON MOBILE */}
          <div className="hero-image-container">

            <div className="hero-image-glow"></div>

            <div className="hero-image-wrapper">

              <img
                src="/profile.jpg"
                alt="Deepan Profile"
                className="hero-image"
              />

            </div>

          </div>

          {/* CONTENT */}
          <div className="hero-content">

            <p className="hero-small-text">
              HELLO, I'M
            </p>

            <h1>
              M.A. Deepan <span></span>
            </h1>

            <h2>
              Computer Science Engineering Student
            </h2>

            <p className="hero-description">
              Passionate about Full Stack Web Development,
              programming, and building modern web applications.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="hero-primary-button"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="hero-secondary-button"
              >
                Contact Me
              </a>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Hero;