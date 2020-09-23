import React from 'react';
import './App.scss';
import { Parallax }  from "react-parallax";
import Container from 'react-bootstrap/Container'
import ParticlesBg from "particles-bg";
//components
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/mycarousal.component';
import Particles from './components/particles/particles.component';

import Welcome from './pages/welcome/welcome.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Links from './components/links/links.component';

import Education from './pages/education/education.component';
import Experience from './pages/experience/experience.component';

import Contact from './pages/contact/contact.component';

import icon from "./assets/icons/icon.jpg";

const App = () =>{
  return (
    <div className='App'>
      <Parallax
        bgImage={require('./assets/img/background/welcome.jpg')}
        bgImageAlt="about"
        strength={1000}
      >
        <MyNavbar />
        <Welcome />
        <TitleMessage />
      </Parallax>

      <Parallax
        bgImage={require('./assets/img/background/about.jpg')}
        bgImageAlt="about"
        strength={1000}
      >
        <About />
      </Parallax>

      <Parallax
        bgImage={require('./assets/img/background/experience.jpg')}
        bgImageAlt="about"
        strength={1000}
      >
        <Experience />
      </Parallax>
      <Parallax
        bgImage={require('./assets/img/background/education.jpg')}
        bgImageAlt="about"
        strength={1000}
      >
        <Education />
      </Parallax>

      <Contact>
          <Particles />
      </Contact>
      {/*<MyCarousal />*/}

      <Links />
    </div>

  );
}

export default App;
