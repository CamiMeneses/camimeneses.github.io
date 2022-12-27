import React from 'react'
import './experience.style.scss'

// Layout
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Info
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

// Timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Images
import skydropx from '../../assets/icons/experience/skydropx.png';
import picap from '../../assets/icons/experience/picap.jpg'
import twoTransfair from '../../assets/icons/experience/2transfair.png'
import youse from '../../assets/icons/experience/youse.png'
import bb from '../../assets/icons/experience/bb.png'
import upc from '../../assets/icons/experience/upc.png';
import distrital from '../../assets/icons/experience/distrital.png';
import unidad from '../../assets/icons/experience/unidad.png';

const Experience = () => {
  return (
    <div className='section' id='experience'>
      <h1>EXPERIENCE</h1>
      <Container>
        <VerticalTimeline>
          <Skydropx />
          <Picap />
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

const Skydropx = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="Oct 2021 - Current"
      iconStyle={{ background: '#ffffff'}}

    >
      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip> {"About Skydropx"} </Tooltip>
        }
      >
        <a href='https://www.skydropx.com/' target='_blank' rel='noopener noreferrer'>
          <Row className='nospace'>
            <Col xs={12} sm={3} md={3} lg={3}>
              <img className='logo' id='picap' alt='2tf' src={picap}/>
            </Col>
            <Col xs={12} sm={9} md={9} lg={9}>
              <h3 className="vertical-timeline-element-title">SOFTWARE DEVELOPER</h3>
              <h4 className="vertical-timeline-element-subtitle"> Skydropx/Shipkraken | MX | Remote</h4>
            </Col>
          </Row>
        </a>
      </OverlayTrigger>
    <p>
      <ul>
        <li><b>Ruby on Rails</b></li>
        <li>Microservices - <b>API REST</b></li>
        <li>Unit tests<b>Rspec</b></li>
        <li>Use <b>Heroku</b></li>
        <li>Postman</li>
        <li>Use version control tool <b>Git</b> and code storage tool <b>Github</b></li>
        <li><b>Scrum - Jira</b></li>
      </ul>
    </p>
  </VerticalTimelineElement>
  )
}

const Picap = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="Dec 2020 - Sep 2021"
      iconStyle={{ background: '#ffffff'}}

    >
      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
        overlay={
          <Tooltip> {"About Picap"} </Tooltip>
        }
      >
        <a href='https://www.picap.app/' target='_blank' rel='noopener noreferrer'>
          <Row className='nospace'>
            <Col xs={12} sm={3} md={3} lg={3}>
              <img className='logo' id='picap' alt='2tf' src={picap}/>
            </Col>
            <Col xs={12} sm={9} md={9} lg={9}>
              <h3 className="vertical-timeline-element-title">RUBY ON RAILS DEVELOPER</h3>
              <h4 className="vertical-timeline-element-subtitle"> Picap | Bogota, CO | Remote</h4>
            </Col>
          </Row>
        </a>
      </OverlayTrigger>
    <p>
      <ul>
        <li><b>Ruby on Rails</b></li>
        <li>Build a project from scratch <a href="https://www.picap.app/#/pibox-storage" target="_blank"><b>Pibox Storage</b></a></li>
        <li>Unit tests<b>Rspec</b></li>
        <li>Use <b>Heroku</b></li>
        <li><b>API REST</b></li>
        <li>Use version control tool <b>Git</b> and code storage tool <b>Bitbucket</b></li>
        <li><b>Scrum - Clickup</b></li>
      </ul>
    </p>
  </VerticalTimelineElement>
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
