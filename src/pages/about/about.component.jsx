import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/profile.jpg'
import Fade from 'react-reveal/Fade'

import './about.style.scss'

const About = () => {
  return (
    <div className='about-container'>
      <div id='about' className='section'>
        <h1>ABOUT ME</h1>
        <div id='about-img'>
        <Container>
          <Row className='pt-3 pb-5 align-items-center'>
            {/*Profile Photo*/}
            <Col xs={12} sm={12} md={12} lg={6}>
              <Fade left>
                <Row className='justify-content-center mb-2 mr-2'>
                  <Image className='profile justify-content-end' alt='profile' src={Profile} rounded fluid />
                </Row>
              </Fade>
            </Col>

            {/*Description*/}
            <Col xs={12} sm={12} md={12} lg={6}>
              <Fade right>
                <Row className=' align-items-start rounded'>

                  Hi! I'm Camila from Colombia<br />
                  <br />

                  I'm glad you came to my website. Let's talk about me...<br />
                  <br />

                  I'm mechatronics engineer and FullStack developer. <br />
                  I have 1 year of experience working with Ruby on Rails, <br />
                  HTML and CSS. I had follwed Scrum Methodology <br />
                  and used host places like Github and Bitbucket. <br />
                  <br />

                  I want to continue learning about this world of development <br />
                  and for this, I'm studying JS and its frameworks <br />
                  like React JS, which I'm using here!<br />
                  <br />

                  Check out my website, learn more about me <br />
                  and feel free to contact me. <br />
                  <br />
                </Row>
              </Fade>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    </div>
  )
}

export default About
