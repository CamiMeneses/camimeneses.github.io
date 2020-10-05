import React from 'react'
import './skills.style.scss'

// Layout
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Fade from 'react-reveal/Fade'

// Images
import Ruby from '../../assets/icons/skills/ruby.png'
import Rails from '../../assets/icons/skills/rails.png'

import Html from '../../assets/icons/skills/html.png'
import Css from '../../assets/icons/skills/css.png'

import Git from '../../assets/icons/skills/git.webp'
import Github from '../../assets/icons/skills/github.png'
import Bitbucket from '../../assets/icons/skills/bitbucket.png'

import Scrum from '../../assets/icons/skills/scrum.png'
import Jira from '../../assets/icons/skills/jira.png'
import Trello from '../../assets/icons/skills/trello.png'
import Computer from '../../assets/img/background/skills-girl-power.jpg'

export default function Skills(props) {
  return (
    <div>
      <div id="skills" className="section">
        <h1>SKILLS</h1>
        <div id="skills-box">
          <Container>
            <Row>
              <Theme2 />

            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

const Theme1 = () => {
  return (
    <>
      {/*Primera columna*/}
      <Col xs={12} sm={12} md={12} lg={3} className="skill-column">
        <div className="skill-box">
          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='profile' src={Git}/>
            </Fade>
          </Row>
          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='profile' src={Github}/>
            </Fade>
          </Row>
          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='profile' src={Bitbucket}/>
            </Fade>
          </Row>
        </div>
      </Col>

      {/*Segunda columna*/}
      <Col xs={12} sm={12} md={12} lg={6} className="skill-column">
        <div className="skill-box">
          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='profile' src={Ruby}/>
            </Fade>
            <Fade bottom>
              <Image className='skill-image' alt='profile' src={Rails}/>
            </Fade>
          </Row>
          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='profile' src={Html}/>
            </Fade>
            <Fade bottom>
              <Image className='skill-image' alt='profile' src={Css}/>
            </Fade>
          </Row>
        </div>
      </Col>

      {/*Tercera columna*/}
      <Col xs={12} sm={12} md={12} lg={3} className="skill-column">
        <div className="skill-box">
          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='profile' src={Scrum}/>
            </Fade>
          </Row>
          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='profile' src={Jira}/>
            </Fade>
          </Row>
          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='profile' src={Trello}/>
            </Fade>
          </Row>
        </div>
      </Col>
    </>
  )
}

const Theme2 = () => {
  return (
    <>
      {/*Primera columna*/}
      <Col xs={12} sm={12} md={12} lg={6} className="skill-column">
        <Image className='skill-computer-image' alt='profile' src={Computer}/>
      </Col>

      {/*Segunda columna*/}
      <Col xs={12} sm={12} md={12} lg={6} className="skill-column">
          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='ruby' src={Ruby}/>
              <Image className='skill-image' alt='rails' src={Rails}/>
              <Image className='skill-image' alt='html' src={Html}/>
              <Image className='skill-image' alt='css' src={Css}/>
              <Image className='skill-image' alt='git' src={Git}/>
            </Fade>
          </Row>

          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='github' src={Github}/>
              <Image className='skill-image' alt='bitbucket' src={Bitbucket}/>
              <Image className='skill-image' alt='scrum' src={Scrum}/>
              <Image className='skill-image' alt='jira' src={Jira}/>
              <Image className='skill-image' alt='trello' src={Trello}/>
            </Fade>
          </Row>
      </Col>
    </>
  )
}
