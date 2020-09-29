import React from 'react';
import './App.scss';
import { Parallax }  from "react-parallax";

//components
import MyNavbar from './components/my-navbar/mynavbar.component';
import Particles from './components/particles/particles.component';

import Welcome from './pages/welcome/welcome.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Links from './components/links/links.component';

import Education from './pages/education/education.component';
import Experience from './pages/experience/experience.component';
import Skills from './pages/skills/skills.component';

import Contact from './pages/contact/contact.component';

import Woman from './assets/img/woman.png'

import WomanExperience from './assets/img/woman-experience.png'
import { Container } from 'react-bootstrap';

const App = () =>{
  return (
    <div className='App'>
        <MyNavbar />

          <Parallax
          bgImage={require('./assets/img/background/colors/welcome.png')}
          bgImageAlt="about"
          strength={1000}
          >
            <div>
              <Welcome />
              <TitleMessage />
              <About />
            </div>
          </Parallax>

        <ExperienceSection />

        <img className='woman' alt='woman' src={Woman}/>
        <EducationSection />
        <SkillsSection />
        <Contact>
            <Particles />
        </Contact>
        <Links />
      </div>
  );
}

const EducationSection = () =>{
  return (
    <Parallax
    bgImage={require('./assets/img/croquis-gris.png')}
    bgImageAlt="about"
    strength={200}
  >
    <div id="background-papel">
      <Education />
    </div>
  </Parallax>
  )
}

const ExperienceSection = () =>{
  return (
    <Parallax
      bgImage={require('./assets/img/background/colors/welcome3.jpg')}
      bgImageAlt="about"
      strength={1000}
    >
      <Experience />
    </Parallax>
  )
}

const SkillsSection = () =>{
  return (
    <Parallax
    bgImage={require('./assets/img/background/colors/skills.png')}
    bgImageAlt="about"
    strength={1000}
  >
    <div id="background-skills">
      <Skills />
    </div>
  </Parallax>

  )
}



export default App;
