import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('libraries'); // Default active tab

  const librariesFrameworks = [
    'ReactJS', 'Ant Design', 'Material UI', 'Tailwind CSS', 'Next.js', 'Node.js', 'PHP', 'Laravel',
    'NextUI', 'Bootstrap', 'Highcharts', 'Chart.js', 'Sockets', 'Mongoose', 'MongoDB', 'PostgreSQL', 'MySQL'
  ];

  const languages = [
    'HTML', 'CSS', 'JavaScript', 'JQuery', 'AJAX', 'SQL', 'JSX'
  ];

  const toolsTechnologies = [
    'pgAdmin', 'Figma', 'PM2', 'SonicWall', 'MobaXterm', 'Postman', 'VSCode', 'Git', 'GitHub', 'Bitbucket',
    'Web APIs', 'Query Optimization', 'Linux Server Management'
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'libraries':
        return librariesFrameworks.map(skill => <li key={skill} className="skill-item">{skill}</li>);
      case 'languages':
        return languages.map(skill => <li key={skill} className="skill-item">{skill}</li>);
      case 'tools':
        return toolsTechnologies.map(skill => <li key={skill} className="skill-item">{skill}</li>);
      default:
        return null;
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
      <h2 className="section-title mb-0">{activeTab === 'libraries' ? 'Libraries and Frameworks' : activeTab === 'languages' ? 'Languages' : 'Tools and Technologies'}</h2>
      <span className={activeTab === 'libraries'? 'skills-heading-underline1'  : activeTab === 'languages' ? 'skills-heading-underline2' : 'skills-heading-underline3'}></span>        
        <div className="tab-navigation pt-3 pt-md-4">
          <button onClick={() => setActiveTab('libraries')} className={`tab-button ${activeTab === 'libraries' ? 'active' : ''}`}>Libraries & Frameworks</button>
          <button onClick={() => setActiveTab('languages')} className={`tab-button ${activeTab === 'languages' ? 'active' : ''}`}>Languages</button>
          <button onClick={() => setActiveTab('tools')} className={`tab-button ${activeTab === 'tools' ? 'active' : ''}`}>Tools & Technologies</button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* <h2 className="section-title">{activeTab === 'libraries' ? 'Libraries and Frameworks' : activeTab === 'languages' ? 'Languages' : 'Tools and Technologies'}</h2>
          <span className="heading-underline"></span> */}
          <ul className="skills-list">
            {renderTabContent()}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
