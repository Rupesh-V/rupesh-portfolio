import React from 'react';

const Projects = () => {
    const projects = [
        {
          name: 'Referral Management System for Ankura Hospitals',
          description: 
            'Full Stack Development (June 2024 - September 2024):\n' +
            '- Worked as a full stack developer using Next.js, NextUI, and PostgreSQL.\n' +
            '- Developed role and user management features along with functionalities for referral and in-house doctors.\n' +
            '- Implemented tracking for daily visits, camp visits, and ORC visits, and added reporting features like referrals, aging, auditing, and doctors\' approvals.'
        },
        {
          name: 'Electronic Health Record (EHR) System',
          description: 
            'Frontend Development (April 2023 - August 2023):\n' +
            '- Collaborated with an 8-member team to develop a comprehensive EHR system for KIMS Hospitals using ReactJS, Ant Design, and Bootstrap.\n' +
            '- Responsible for critical modules like outpatient prescription forms, inpatient billing charts, analytics, and reporting tools.\n' +
            '- Ensured the development of highly responsive healthcare interfaces and upheld system performance standards.'
        },
        {
          name: 'OGAnalySis Website',
          description: 
            'Full Stack Development (December 2023 - February 2024):\n' +
            '- Built the website and admin panel using Laravel’s MVC architecture, PostgreSQL, and Bootstrap.\n' +
            '- Integrated the CC Avenue payment gateway for secure transactions and used jQuery Ajax for seamless operations.'
        },
        {
          name: 'iLenSys Website',
          description: 
            'Full Stack Development (September 2023 - September 2024):\n' +
            '- Developed the website and admin panel using Laravel’s MVC architecture and PostgreSQL.\n' +
            '- Created custom admin panel features including user management, careers portal, and mail notifications to enhance functionality.'
        }
      ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-12 sec-header">
            <h2 className="section-title mb-0">Projects</h2>
            <span className="projects-heading-underline"></span>

            <div className="projects-list pt-3 pt-md-4">
              {projects.map(project => (
                <div key={project.name} className="project-item">
                  <h3>{project.name}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{project.description}</p> {/* To handle line breaks */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
