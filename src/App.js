import React from 'react';
import './App.css';
import Fade from 'react-reveal/Fade'
import { Parallax }  from "react-parallax";
import Container from 'react-bootstrap/Container'
//components
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/mycarousal.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';

const App = () =>{
  return (
    <div className='App' style={{ position: 'relative' }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <div>
        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={require('./assets/img/background/about.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
          <Container>
            <Fade duration={500}>
                <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
