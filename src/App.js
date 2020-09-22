import React from 'react';
import './App.scss';
import { Parallax }  from "react-parallax";
import Container from 'react-bootstrap/Container'
//components
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/mycarousal.component';
import TitleMessage from './components/title-message/title-message.component';

import Particles from './pages/particles/particles.component';
import About from './pages/about/about.component';
import Education from './pages/education/education.component';
import Experience from './pages/experience/experience.component';
import Contact from './pages/contact/contact.component';

const App = () =>{
  return (
    <div className='App'>
      <MyNavbar />
      <Particles />
      <TitleMessage />
        {/*<Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={require('./assets/img/background/about.jpg')}
            bgImageAlt="about"
            strength={-200}
        >*/}
          <About />

          <Experience />
          <Education />
        {/*</Parallax>*/}

      <Contact />
      {/*<MyCarousal />*/}
    </div>
  );
}

export default App;
