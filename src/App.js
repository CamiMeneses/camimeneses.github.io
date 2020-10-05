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
import ParticlesBg from "particles-bg";



const App = () =>{
  return (
    <div className='App'>
      <MyNavbar />

      <Welcome >
        <ParticlesBg type="cobweb" color="#ff00ff" num={50} bg={true}/>
      </Welcome>
      <TitleMessage />
      <About />
      <ExperienceSection />
      {/*<img className='woman' alt='woman' src={Woman}/>*/}
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
    <div id="background-skills">
      <Skills />
    </div>
    /*
    <Parallax
    bgImage={require('./assets/img/background/skills-girl-power.jpg')}
    bgImageAlt="about"
    strength={300}
    >
    </Parallax>
    */
  )
}

export default App;
