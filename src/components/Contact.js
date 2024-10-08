import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'; // Import Font Awesome icons

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-12 sec-header text-center">
            <h2 className="section-title">Contact Me</h2>
            <span className="heading-underline"></span>
          </div>

          {/* Two columns for Contact Info */}
          <div className="row contact-info mt-4">
            <div className="col-md-6 d-flex justify-content-start">
              <p><FaEnvelope /> Email: <a href="mailto:rupeshvakati@gmail.com">rupeshvakati@gmail.com</a></p>
            </div>
            <div className="col-md-6 d-flex justify-content-start">
              <p><FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/rupesh-vakati-194827244" target="_blank" rel="noopener noreferrer">linkedin.com/in/rupesh-vakati</a></p>
            </div>
            <div className="col-md-6 d-flex justify-content-start">
              <p><FaPhone /> Phone: +91-7993871455</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
