import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/profile.png'
import Fade from 'react-reveal/Fade'

import './about.style.scss'

const About = () => {
  return (
    <div className='about-container'>
      <div id='about' className='section'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000CA" fill-opacity="1" d="M0,128L40,128C80,128,160,128,240,128C320,128,400,128,480,154.7C560,181,640,235,720,261.3C800,288,880,288,960,272C1040,256,1120,224,1200,202.7C1280,181,1360,171,1400,165.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <Container>
          <Row className='pt-3 pb-3 align-items-center'>
            <Col xs={12} sm={12} md={12} lg={12} xl={6} className="nospace">
              <Fade left>
                <Row className='justify-content-center mb-2'>
                  <Image className='profile justify-content-end nospace' alt='profile' src={Profile} roundedCircle fluid />
                </Row>
              </Fade>
              <Fade left>
                <Row className='justify-content-center mb-2 nospace'>
                  <h1>Camila Meneses</h1>
                  <h2>Mechatronics engineer and FullStack developer</h2>
                  <br />
                </Row>
              </Fade>
            </Col>
            {/*Description*/}
            <Col xs={12} sm={12} md={12} lg={12} xl={6}>
              <Fade right>
                <Row className=' align-items-start rounded profile-text'>
                  <p>
                    I began my journey as a Web Developer in <b> 2019 </b> with Bogotá Dev & Bootcamp
                    where I learned the basics of multiples languages<br />
                    <br />

                    I've been working mainly as a <b>Ruby on Rails</b> developer, with <b>HTML</b> and <b>CSS</b>.
                    Used <b>Git</b>, and code hosting platforms like <b>GitHub</b> and <b>Bitbucket</b><br />
                    <br />

                    I keep learning about this world of development <br /> and I want to work hand in hand with best developers and <br />people of all cultures to grow in many ways.<br />
                    I am going to take any challenge!
                    <br />
                    <br />

                    Check out my website, learn more about me <br />
                    and feel free to <b><a href='#contact' target='contact me'>contact me</a> </b>. <br />
                    <br />
                  </p>
                </Row>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default About
