import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me-section" id="about">
      <div className="container">
        <h2 style={{textAlign:'center'}}>About Me</h2>
        <div className="title-section">
            <div className="line"></div> {/* Left line */}
            <span className="cust-underline">Who am I</span>
            <div className="line"></div> {/* Right line */}
        </div>

        <p className="pt-4 pt-md-4">
          Hello! I'm Rupesh Vakati, a Full Stack Developer with 1.6 years of experience specializing in web
          application development. I have strong expertise in both frontend and backend development, with a focus on
          technologies like React.js, Laravel, Next.js, and Node.js.
        </p>
        <p>
          My work spans multiple industries, from healthcare to analytics, where I’ve contributed to projects such as the 
          Referral Management System for Ankura Hospitals, the EHR system for KIMS Hospitals, and various other 
          web applications. I’ve been responsible for full lifecycle development, including user and role management, 
          API development, activity tracking, and data reporting.
        </p>
        <p>
          I have a deep understanding of PostgreSQL and MongoDB for database management, and I am skilled in 
          tools like Git, Figma, and Postman for efficient development and collaboration. I also have hands-on experience 
          in designing and implementing scalable solutions using both frontend and backend frameworks.
        </p>
        <p>
          With a passion for creating clean, efficient, and user-friendly solutions, I’m always looking for new challenges 
          and opportunities to further my skills in web development.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
