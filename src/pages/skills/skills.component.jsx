import React from 'react'
import { Container } from 'react-bootstrap'
import './skills.style.scss'
import MyCarousal from '../../components/my-carousal/mycarousal.component';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Fade from 'react-reveal/Fade'
import Image from 'react-bootstrap/Image'


import Profile from '../../assets/img/profile/profile.jpg'


export default function Contact(props) {
  return (
    <div>
      <div id="skills" className="section">
      <h1>SKILLS</h1>
        <div id="skills-box">
          <Container>
            <Row className='pt-3 pb-5 align-items-center'>
            <Col xs={12} sm={12} md={12} lg={3}>
              <Fade bottom>
                <Row className='justify-content-center mb-2 mr-2 education-box'>
                  <Image className='justify-content-end' alt='profile' src={Profile} rounded fluid />
                </Row>
              </Fade>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6}>
              <Fade bottom>
                <Row className='justify-content-center mb-2 mr-2 education-box'>
                  <Image className='justify-content-end' alt='profile' src={Profile} rounded fluid />
                </Row>
              </Fade>
            </Col>

          <Col xs={12} sm={12} md={12} lg={3}>
              <Fade bottom>
                <Row className='justify-content-center mb-2 mr-2 education-box'>
                  <Image className='justify-content-end' alt='profile' src={Profile} rounded fluid />
                </Row>
              </Fade>
            </Col>
          </Row>

          <Row className='pt-3 pb-5 align-items-center'>
            <Col xs={12} sm={12} md={12} lg={3}>
              <Fade bottom>
                <Row className='justify-content-center mb-2 mr-2 education-box'>
                  <Image className='justify-content-end' alt='profile' src={Profile} rounded fluid />
                </Row>
              </Fade>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6}>
              <Fade bottom>
                <Row className='justify-content-center mb-2 mr-2 education-box'>
                  <Image className='justify-content-end' alt='profile' src={Profile} rounded fluid />
                </Row>
              </Fade>
            </Col>

          <Col xs={12} sm={12} md={12} lg={3}>
              <Fade bottom>
                <Row className='justify-content-center mb-2 mr-2 education-box'>
                  <Image className='justify-content-end' alt='profile' src={Profile} rounded fluid />
                </Row>
              </Fade>
            </Col>
          </Row>

            {/*<MyCarousal />*/}

          </Container>
        </div>
      </div>
    </div>
  );
}
