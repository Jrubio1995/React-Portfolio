import React from "react";
import "./../index.css";

const Contact = () => {
  return (
    <section
      data-aos="zoom-in"
      className="contact-container"
      name="contact"
      id="contact"
    >

      <h1 className="heading">Contact Me Below</h1>

      <div className="cards-container">
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span>Email</span>
          </div>
          <div className="contact-links">
            <span>jesusrubio16@yahoo.com</span>
          </div>
        </div>
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span>Social</span>
          </div>
          <div className="contact-links">
            <a
              rel=""
              target="_blank"
              href="https://github.com/Jrubio1995"
            >
              <i className="fab fa-github" title="github" id="github"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/jesus-ariza-rubio-3123051b3/"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
            </a>

          </div>
        </div>

        {/* Card 3 - Phone */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-phone"></i>
          </div>
          <div className="contact-text">
            <span>Phone</span>
          </div>
          <div className="contact-links">
            <span> 612-226-5747 </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
