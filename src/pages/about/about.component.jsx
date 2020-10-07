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
                    I began my journey as Web Developer since <b> 2019 </b> with Bogotá Dev & Bootcamp
                    where I learnt the basics of multiples languages<br />
                    <br />

                    I've been working mainly as <b>Ruby on Rails</b> developer, with <b>HTML</b> and <b>CSS</b>.
                    Used <b>Git</b>, and code hosting platforms like <b>Github</b> and <b>Bitbucket</b><br />
                    <br />

                    I want to keep learning about this world of development <br />
                    and even when I've been focused on back-end, I like the front-end part
                    so then I'm studying <b>JS</b> and its frameworks like <b>React JS</b>, which I'm using here!<br />
                    <br />

                    Check out my website, learn more about me <br />
                    and feel free to <b>contact me</b>. <br />
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
