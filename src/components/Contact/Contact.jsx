import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* Heading */}
        <div className="section-heading">
          <p>GET IN TOUCH</p>

          <h2>
            Contact Me<span></span>
          </h2>
        </div>

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">

            <h3>Let's Connect</h3>

            <p className="contact-intro">
              I'm always interested in discussing new opportunities,
              projects, and ideas. Feel free to get in touch with me.
            </p>

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">
                📞
              </div>

              <div>
                <h4>Phone</h4>

                <a href="tel:8438187443">
                  8438187443
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">
                📧
              </div>

              <div>
                <h4>Email</h4>

                <a href="mailto:your-email@gmail.com">
                  deepandeepan67037@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="contact-item">
              <div className="contact-icon">
                💼
              </div>

              <div>
                <h4>LinkedIn</h4>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 www.linkedin.com/in/m-a-deepan-41a0732a5/
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="contact-item">
              <div className="contact-icon">
                🐙
              </div>

              <div>
                <h4>GitHub</h4>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 https://github.com/deepandeepan67037-code
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form-container">

            <form className="contact-form">

              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button type="submit">
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;