import React from 'react';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-12 sec-header">
            <h2 className="section-title mb-0">Work Experience</h2>
            <div className="title-section-exp">
              <div className="line-exp"></div> {/* Left line */}
              <span className="cust-underline">1.6 Years</span>
              <div className="line-exp"></div> {/* Right line */}
            </div>

            <div className="experience-list pt-3">
              <div className="experience-item">
                <h3>Software Developer - Aurora e-Labs Pvt Ltd (Apr 2023 - Sept 2024)</h3>
                
                <ul>
                  <li>
                    <strong>Web Application Development:</strong> Spearheaded the design and implementation of dynamic, responsive web pages using Next.js, NextUI, and ReactJS, ensuring a seamless and engaging user experience.
                  </li>
                  <li>
                    <strong>API Development and Database Management:</strong> Engineered robust APIs with Node.js and managed PostgreSQL and MongoDB databases, ensuring data integrity, security, and optimal performance.
                  </li>
                  <li>
                    <strong>Client Requirement Analysis and Solution Design:</strong> Led requirement gathering and analysis sessions with clients, translating complex business needs into precise technical specifications, ensuring alignment and successful project outcomes.
                  </li>
                  <li>
                    <strong>Team Leadership and Mentorship:</strong> Took responsibility for a product within an 8-member team, mentored and trained junior developers, providing guidance, promoting skill development, and maintaining high standards of code quality and best practices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
