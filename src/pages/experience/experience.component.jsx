import React from 'react'
import WorkIcon from '../../assets/icons/youse.png'
import SchoolIcon from '../../assets/img/profile/profile.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import color from '../../themes/theme.scss'

import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import twoTransfair from '../../assets/icons/2transfair.png'
import youse from '../../assets/icons/youse.png'
import bb from '../../assets/icons/bb.png'
import upc from '../../assets/icons/upc.png';
import distrital from '../../assets/icons/distrital.png';
import unidad from '../../assets/icons/unidad.png';
import excel from '../../assets/icons/excel.svg';

import ruby from '../../assets/img/ruby.gif'


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './experience.style.scss'

const Experience = () => {
  return (
    <div className='section' id='experience'>
      <h1>EXPERIENCE</h1>
      <Container>
        <VerticalTimeline>
          <TwoTransfair />
          <Youse />
          <BB />
          <Victimas />
          <Distrital />
        </VerticalTimeline>
      </Container>
    </div>
  )
}

const TwoTransfair = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="Mar - Jul 2020"
      iconStyle={{ background: '#ffffff'}}

    >
      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip> {"About 2Transfair"} </Tooltip>
        }
      >
        <a href='https://2transfair.com/' target='_blank' rel='noopener noreferrer'>
          <Row className='nospace'>
            <Col xs={12} sm={3} md={3} lg={3}>
              <img className='logo' id='twotransfair' alt='2tf' src={twoTransfair}/>
            </Col>
            <Col xs={12} sm={9} md={9} lg={9}>
              <h3 className="vertical-timeline-element-title">INTERMEDIATE DEVELOPER</h3>
              <h4 className="vertical-timeline-element-subtitle"> 2Transfair | FINTECH | Bogota, CO | Partly remote</h4>
            </Col>
          </Row>
        </a>
      </OverlayTrigger>
    <p>
      <ul>
        <li><b>Ruby on Rails</b></li>
        <li>Worked with a team to build a platform to bring credits</li>
        <li>Used <b>HTML, CSS, bootstrap</b></li>
        <li>Built <b>PDFs</b> with dynamic data</li>
        <li><b>Monolithic</b></li>
        <li><b>API REST</b></li>
        <li>Used version control tool <b>Git</b> and code storage tool <b>Bitbucket</b> and reviewed Pull Requests.</li>
        <li>Contact with client</li>
        <li><b>Trello</b></li>
      </ul>
    </p>
  </VerticalTimelineElement>
  )
}

const Youse = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="May - Dec 2019"
      iconStyle={{ background: '#ffffff'}}

    >
      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip> {"About CNPX | Youse"} </Tooltip>
        }
      >
        <a href='https://www.youse.com.br/' target='_blank' rel='noopener noreferrer'>
          <Row className='nospace'>
            <Col xs={12} sm={3} md={3} lg={3}>
              <img className='logo' id='youse' alt='youse' src={youse}/>
            </Col>
            <Col xs={12} sm={9} md={9} lg={9}>
              <h3 className="vertical-timeline-element-title">IT TRAINEE | RUBY ON RAILS DEVELOPER</h3>
              <h4 className="vertical-timeline-element-subtitle">Youse Colombia - CNPX | INSURTECH | Bogota, CO</h4>
            </Col>
          </Row>
        </a>
      </OverlayTrigger>
      <p>
        <ul>
          <li>Collaborated with a team to implement a platform for insurances</li>
          <li>Wrote Unit tests for application quality assurance using <b>Rspec</b></li>
          <li>Used version control tool <b>Git</b> and code storage tool <b>Github</b> and reviewed Pull Requests</li>
          <li>Worked with a third-party to implement Salesforce</li>
          <li>Followed the <b>Scrum</b> methodology and used <b>Jira</b></li>
          <li>Set, updated and used data from <b>AWS S3</b> and <b>Redis</b></li>
          <li>Served as <b>bug-fixer</b> and fixed intermittent test</li>
          <li>Used tools like <b>Rabbit MQ</b>, <b>Logentries</b></li>
          <li><b>Microservices</b></li>
        </ul>
      </p>
    </VerticalTimelineElement>
  )
}

const BB = () => {
  return (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Mar - May 2019"
    iconStyle={{ background: '#ffffff'}}
  >
    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
      overlay={
        <Tooltip> {"About Bogota Dev. Bootcamp & Dev Shop"} </Tooltip>
      }
    >
      <a href='https://www.bogotabootcamp.com/' target='_blank' rel='noopener noreferrer'>
        <Row className='nospace'>
          <Col xs={12} sm={3} md={3} lg={3}>
            <img className='logo' id='bb' alt='bb' src={bb}/>
          </Col>
          <Col xs={12} sm={9} md={9} lg={9}>
            <h3 className="vertical-timeline-element-title">FREELANCE WEB DEVELOPER</h3>
            <h4 className="vertical-timeline-element-subtitle">Bogota Dev. Bootcamp & Dev Shop | Bogota, CO</h4>
          </Col>
        </Row>
      </a>
    </OverlayTrigger>
    <p>
      <li>Built an application from scratch to manage the coding bootcamp using <b>Ruby on Rails </b>and <b>Haml</b>,
        <b>Bootstrap</b>, <b>Devise</b> gem and uploaded it to <b>Heroku</b></li>
      <li>Implemented <b>CRUD</b> operations for the application using the <b>MVC</b> (Model View Controller) architecture</li>
    </p>
  </VerticalTimelineElement>
  )
}

const Victimas = () => {
  return (
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Nov - Dec 2017"
    iconStyle={{background: '#ffffff'}}
    >
      <Row className='nospace'>
        <Col xs={12} sm={3} md={3} lg={3}>
          <img className='logo' id='unidad' alt='unidad' src={unidad}/>
        </Col>
        <Col xs={12} sm={9} md={9} lg={9}>
          <h3 className="vertical-timeline-element-title">TECNICO 1 DATA QUIALITY</h3>
          <h4 className="vertical-timeline-element-subtitle">Unión temporal proceso unidad para la atención y reparación integral a las victimas 2017 | Bogota, CO</h4>
        </Col>
      </Row>
    </VerticalTimelineElement>
  )
}

const Distrital = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="Jul - Dec 2016"
      iconStyle={{ background: '#ffffff'}}
    >
      <Row className='nospace'>
        <Col xs={12} sm={3} md={3} lg={3}>
          <Row>
            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip> {"About Universidad Distrital Francisco José de Caldas"} </Tooltip>
              }
            >
              <a href='https://www.udistrital.edu.co/' target='_blank' rel='noopener noreferrer'>
                <img className='logo' id='distrital' alt='distrital' src={distrital}/>
              </a>
            </OverlayTrigger>
          </Row>
          <Row>
            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip> {"About Universidad Piloto de Colombia"} </Tooltip>
              }
            >
              <a href='https://www.unipiloto.edu.co/' target='_blank' rel='noopener noreferrer'>
                <img className='logo' id='upc' alt='upc' src={upc}/>
              </a>
            </OverlayTrigger>
          </Row>
        </Col>

        <Col xs={12} sm={9} md={9} lg={9}>
          <h3 className="vertical-timeline-element-title"> STUDENT RESEARCHER | INTERN</h3>
          <h4 className="vertical-timeline-element-subtitle">Universidad Distrital Francisco José de Caldas | Universidad Piloto de Colombia | Bogota, CO</h4>
        </Col>
        <p>
          <b>Project:</b> Diseño de un sistema domótico con la placa Intel Galileo Gen1. This project was based on the <b>internet of things IoT</b>,
          using programming languages like <b>Python</b>, <b>HTML5</b>, <b>CSS</b>, others
        </p>
      </Row>
    </VerticalTimelineElement>
  )
}
export default Experience
