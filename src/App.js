import React from 'react';
import { Layout} from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import HomePageContent from './components/Banner';
import '../src/styles/styels.css';
const {Content, Footer } = Layout;



const App = () => {
 

  return (
    <Router>
      <Layout>
        <Navbar />
        <HomePageContent />
        <Content
          style={{
            padding: '20px',
            background: '#ECF0F3',
          }}
        >
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Content>
        
        <Footer style={{ textAlign: 'center',color:'white',backgroundColor:'rgb(0, 21, 41)' }}>
          My Portfolio ©2024 Created by Rupesh Vakati
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
