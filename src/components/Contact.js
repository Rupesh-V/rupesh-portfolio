import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-12 sec-header text-center">
            <h2 className="section-title">Contact Me</h2>
            <span className="heading-underline"></span>
            <p className="pt-3 contact-para">
              I’m always open to new opportunities and collaborations! Feel free to reach out to discuss 
              potential projects, job offers, or even just to connect. Here’s how you can get in touch with me:
            </p>
          </div>

          {/* Two columns for Contact Info */}
          <div className="row contact-info mt-4">
            <div className="col-md-4 mb-4 d-flex justify-content-center align-items-center">
              <a
                href="mailto:rupeshvakati@gmail.com"
                aria-label="Email"
                className='main_anchor'
                style={{
                  background: 'linear-gradient(145deg, #e2e8ec, #ffffff)',
                  boxShadow: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
                  borderRadius: '50%'
                }}
              >
                <FaEnvelope size={30} />
              </a>
            <p className="pt-2">Email: <a href="mailto:rupeshvakati@gmail.com" style={{color:'#ff014f'}}>rupeshvakati@gmail.com</a></p>

            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center align-items-center">
              <a
                href="https://www.linkedin.com/in/rupesh-vakati-194827244"
                aria-label="LinkedIn"
                className='main_anchor'
                style={{
                  background: 'linear-gradient(145deg, #e2e8ec, #ffffff)',
                  boxShadow: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
                  borderRadius: '50%'
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <p className="pt-2">LinkedIn: <a href="https://www.linkedin.com/in/rupesh-vakati-194827244" style={{color:'#ff014f'}}>Rupesh Vakati</a></p>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center  align-items-center">
              <a
                href="tel:+91-7993871455"
                aria-label="Phone"
                className='main_anchor'
                style={{
                  background: 'linear-gradient(145deg, #e2e8ec, #ffffff)',
                  boxShadow: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
                  borderRadius: '50%'
                }}
              >
                <FaPhone size={30} />
              </a>
              <p className="pt-2">Phone: +91-7993871455</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
