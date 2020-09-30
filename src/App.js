import React from 'react';
import './App.scss';

// Components
import MyNavbar from './components/my-navbar/mynavbar.component';
import Particles from './components/particles/particles.component';
import Links from './components/links/links.component';
import TitleMessage from './components/title-message/title-message.component';

//Pages
import Welcome from './pages/welcome/welcome.component';
import About from './pages/about/about.component';
import Education from './pages/education/education.component';
import Experience from './pages/experience/experience.component';
import Skills from './pages/skills/skills.component';
import Contact from './pages/contact/contact.component';

//Parallax Background
import { Parallax }  from "react-parallax";

//Images
import Woman from './assets/img/background/thinking-woman.png'


const App = () =>{
  return (
    <div className='App'>
      <MyNavbar />
      <div id="welcome-box">
        <Parallax className="welcome-parallax"
        bgImage={require('./assets/img/background/welcome.png')}
        bgImageAlt="about"
        strength={1000}
        >
          <Welcome />
      </Parallax>
      <div id="welcome-content">
          <TitleMessage />
          <About />
          </div>

      </div>
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
    bgImage={require('./assets/img/background/education-croquis.png')}
    bgImageAlt="about"
    strength={600}
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
      bgImage={require('./assets/img/background/experience-fucsia-spots.jpg')}
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
    bgImage={require('./assets/img/background/skills-light-purple.png')}
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
