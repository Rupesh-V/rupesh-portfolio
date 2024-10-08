import React from 'react';
import RupeshPic from '../assets/images/Rupesh.jpg';
import RupeshResume from '../assets/Resume/RupeshFullStackDeveloper.pdf';

const HomePageContent = () => {
  return (
    <div>
      <section 
        className="home-banner-sec position-relative"
        style={{
          backgroundColor: '#ECF0F3',
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <div className="container-fluid h-100">
          <div className="container h-100 p-0">
            <div className="row h-100">
              <div className="col-md-7 banner-content">
                <span className="subtitle">Welcome to my world</span>
                <h1 className="title">
                  Hi, I’m <span>Rupesh Vakati</span><br />
                  <span className="header-caption">
                    a FullStack Developer
                    {/* <span className="text-rotate">
                      <b className="is-visible">Professional Coder.</b>
                      <b className="is-hidden">FrontEnd Developer.</b>
                      <b className="is-hidden">Backend Developer.</b>
                    </span> */}
                  </span>
                </h1>
                <p> Hello! I'm Rupesh Vakati, a Full Stack Developer with 1.6 years of experience specializing in web
                application development. I have strong expertise in both frontend and backend development, with a focus on
                technologies like React.js, Laravel, Next.js, and Node.js.
                </p>
                <p>Welcome to my portfolio. Explore my projects, experience, and skills!</p>

                <a className="btn download-btn mt-2" href={RupeshResume} target="_blank" rel="noopener noreferrer">
                    View My CV
                </a>
              </div>
              <div className="col-md-5 d-flex align-items-center">
                <figure className="mb-0 d-flex justify-content-center">
                  <img src={RupeshPic} alt="Rupesh Vakati" className="w-75" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageContent;
