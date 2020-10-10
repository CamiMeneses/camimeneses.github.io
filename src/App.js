import React from 'react';
import './App.scss';
import Dark from "./themes/theme.scss";
import Image from 'react-bootstrap/Image'

// Components
import MyNavbar from './components/my-navbar/mynavbar.component';
import Links from './components/links/links.component';
import TitleMessage from './components/title-message/title-message.component';

//Pages
import Welcome from './pages/welcome/welcome.component';
import About from './pages/about/about.component';
import Education from './pages/education/education.component';
import Experience from './pages/experience/experience.component';
import Skills from './pages/skills/skills.component';
import Contact from './pages/contact/contact.component';

//images
import mancha from './assets/img/mancha.png'
import mancha2 from './assets/img/mancha2.png'
import mancha3 from './assets/img/mancha-verde.png'



//Parallax Background
import { Parallax }  from "react-parallax";

import ParticlesBg from "particles-bg";

const App = () =>{
  return (
    <div className='App'>
      <MyNavbar />
      <Welcome >
        {/* <ParticlesBg type="cobweb" color="#fa84c3" num={40} bg={true}/>*/}
      </Welcome>
      <TitleMessage />
      <About />
      <div style={{background: "#000000"}}>
        <ExperienceSection />
        <Image id='mancha' alt='deco' src={mancha}/>
        <EducationSection />
        <Image id='mancha2' alt='deco' src={mancha2}/>
        <Image id='mancha3' alt='deco' src={mancha3}/>
      </div>
      <SkillsSection />
      <Contact>
        <ParticlesBg type="lines" num={100} bg={true}/>
      </Contact>
      <Links />
    </div>
  );
}

const EducationSection = () =>{
  return (
    /*
    <Parallax
    bgImage={require('./assets/img/background/education-croquis.png')}
    bgImageAlt="about"
    strength={600}
    >
      <div id="background-papel">
        <Education />
      </div>
    </Parallax>*/
    <Education />
  )
}

const ExperienceSection = () =>{
  return (
    /*
    <Parallax
      bgImage={require('./assets/img/background/experience-fucsia-spots.jpg')}
      bgImageAlt="about"
      strength={1000}
    >
      <Experience />
    </Parallax>*/
    <Experience />
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
