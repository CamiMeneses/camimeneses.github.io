import React from 'react';
import './App.scss';
import { Parallax }  from "react-parallax";
import ParticlesBg from "particles-bg";

// Components
import MyNavbar from './components/my-navbar/mynavbar.component';
import Links from './components/links/links.component';
import TitleMessage from './components/title-message/title-message.component';

//Pages
import Welcome from './pages/welcome/welcome.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Education from './pages/education/education.component';
import Experience from './pages/experience/experience.component';
import Contact from './pages/contact/contact.component';

const App = () =>{
  return (
    <div className='App'>
      <div class="parallax">
        <MyNavbar />
        <Welcome >
          <ParticlesBg type="cobweb" color="#fc7979" num={10} bg={true}/>
        </Welcome>
        <TitleMessage />
        <About />
        <Skills />
        <EducationSection />
        <ExperienceSection />
        <Contact>
          <ParticlesBg type="lines" num={100} bg={true}/>
        </Contact>
        <Links />
      </div>
    </div>
  );
}

const EducationSection = () =>{
  return (
    <Parallax
    bgImage={require('./assets/img/background/education-croquis.png')}
    bgImageAlt="about"
    strength={600}
    bgImageStyle = {{opacity: '.4'}}
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

export default App;
