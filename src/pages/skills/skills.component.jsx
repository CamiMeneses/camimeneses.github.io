import React from 'react'
import './skills.style.scss'

// Layout
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Fade from 'react-reveal/Fade'

// Images
import Ruby from '../../assets/icons/skills/ruby.png'
import Rails from '../../assets/icons/skills/rails.png'
import Nest from '../../assets/icons/skills/nest.png'
import Html from '../../assets/icons/skills/html.png'
import Css from '../../assets/icons/skills/css.png'
import Typescript from '../../assets/icons/skills/typescript.png'
import Rspec from '../../assets/icons/skills/rspec.png'
import Jest from '../../assets/icons/skills/jest.png'

import Postgres from '../../assets/icons/skills/postgres.png'
import Mongo from '../../assets/icons/skills/mongo.png'

import Git from '../../assets/icons/skills/git.webp'
import Github from '../../assets/icons/skills/github.png'
import Bitbucket from '../../assets/icons/skills/bitbucket.png'
import Awss3 from '../../assets/icons/skills/awss3.png'

import Scrum from '../../assets/icons/skills/scrum.png'
import Jira from '../../assets/icons/skills/jira.png'
import Trello from '../../assets/icons/skills/trello.png'

export default function Skills(props) {
  return (
    <div>
      <div id="skills" className="section">
        <h1>SKILLS</h1>
        <div id="skills-box">
          <Container>
            <Row>
              <Theme1 />
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
      <Col xs={12} sm={12} md={12} lg={12} className="skill-column">
          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='ruby' src={Ruby}/>
              <Image className='skill-image' alt='rails' src={Rails}/>
              <Image className='skill-image' alt='NestJs' src={Nest}/>
              <Image className='skill-image' alt='html' src={Html}/>
              <Image className='skill-image' alt='css' src={Css}/>
              <Image className='skill-image' alt='Typescript' src={Typescript}/>
            </Fade>
          </Row>

          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='rspec' src={Rspec}/>
              <Image className='skill-image' alt='jest' src={Jest}/>
              <Image className='skill-image' alt='postgres' src={Postgres}/>
              <Image className='skill-image' alt='mongo' src={Mongo}/>
              <Image className='skill-image' alt='git' src={Git}/>
            </Fade>
          </Row>

          <Row className="skill-row">
            <Fade bottom>
              <Image className='skill-image' alt='github' src={Github}/>
              <Image className='skill-image' alt='bitbucket' src={Bitbucket}/>
              <Image className='skill-image' alt='awss3t' src={Awss3}/>
              <Image className='skill-image' alt='scrum' src={Scrum}/>
              <Image className='skill-image' alt='jira' src={Jira}/>
              <Image className='skill-image' alt='trello' src={Trello}/>
            </Fade>
          </Row>
      </Col>
    </>
  )
}
