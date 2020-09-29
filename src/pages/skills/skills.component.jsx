import React from 'react'
import './skills.style.scss'

// Layout
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Fade from 'react-reveal/Fade'

// Images
import Profile from '../../assets/img/profile/profile.jpg'

import Ruby from '../../assets/icons/skills/ruby-icon.png'
import Rails from '../../assets/icons/skills/rails.png'

import Html from '../../assets/icons/skills/html.png'
import Css from '../../assets/icons/skills/css.png'

import Git from '../../assets/icons/skills/git.webp'
import Github from '../../assets/icons/skills/github.png'
import Bitbucket from '../../assets/icons/skills/bitbucket.png'

import Scrum from '../../assets/icons/skills/scrum.png'
import Jira from '../../assets/icons/skills/jira.png'
import Trello from '../../assets/icons/skills/trello.png'

export default function Contact(props) {
  return (
    <div>
      <div id="skills" className="section">
        <h1>SKILLS</h1>
        <div id="skills-box">
          <Container>
            <Row className='pt-3 pb-5 align-items-center'>
              <Col xs={12} sm={12} md={12} lg={6}>
                <Fade bottom>
                  <Row className='justify-content-center mb-2 mr-2 education-box'>
                    <Image className='justify-content-end' alt='profile' src={Ruby} rounded fluid />
                  </Row>
                </Fade>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <Fade bottom>
                  <Row className='justify-content-center mb-2 mr-2 education-box'>
                    <Image className='justify-content-end' alt='profile' src={Rails} rounded fluid />
                  </Row>
                </Fade>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={12} lg={4}>
                <Fade bottom>
                  <Row className='justify-content-center mb-2 mr-2 education-box'>
                    <Image className='justify-content-end' alt='profile' src={Git} rounded fluid />
                  </Row>
                </Fade>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4}>
                <Fade bottom>
                  <Row className='justify-content-center mb-2 mr-2 education-box'>
                    <Image className='justify-content-end' alt='profile' src={Github} rounded fluid />
                  </Row>
                </Fade>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4}>
                <Fade bottom>
                  <Row className='justify-content-center mb-2 mr-2 education-box'>
                    <Image className='justify-content-end' alt='profile' src={Scrum} rounded fluid />
                  </Row>
                </Fade>
              </Col>
            </Row>

            <Row className='pt-3 pb-5 align-items-center'>
              <Col xs={12} sm={12} md={12} lg={6}>
                <Fade bottom>
                  <Row className='justify-content-center mb-2 mr-2 education-box'>
                    <Image className='justify-content-end' alt='profile' src={Html} rounded fluid />
                  </Row>
                </Fade>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <Fade bottom>
                  <Row className='justify-content-center mb-2 mr-2 education-box'>
                    <Image className='justify-content-end' alt='profile' src={Css} rounded fluid />
                  </Row>
                </Fade>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={12} lg={4}>
                <Fade bottom>
                  <Row className='justify-content-center mb-2 mr-2 education-box'>
                    <Image className='justify-content-end' alt='profile' src={Bitbucket} rounded fluid />
                  </Row>
                </Fade>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4}>
                <Fade bottom>
                  <Row className='justify-content-center mb-2 mr-2 education-box'>
                    <Image className='justify-content-end' alt='profile' src={Jira} rounded fluid />
                  </Row>
                </Fade>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4}>
                <Fade bottom>
                  <Row className='justify-content-center mb-2 mr-2 education-box'>
                    <Image className='justify-content-end' alt='profile' src={Trello} rounded fluid />
                  </Row>
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
