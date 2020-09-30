import React from 'react'
import './education.style.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Fade from 'react-reveal/Fade'

import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import upc from "../../assets/icons/education/upc.png";
import bb from "../../assets/icons/education/bb.png";
import miriadax from "../../assets/icons/education/miriadax.png";
import esp from "../../assets/icons/education/esp.png";
import eng from "../../assets/icons/education/eng.webp";
import ec from "../../assets/icons/education/ec.png";

const Education = () => {
  return (
    <div id='education' className= 'section'>
      <h1>EDUCATION</h1>
      <Container>
        <Row className='pt-3 pb-5 align-items-center'>
          {/*Courses*/}
          <Col xs={12} sm={12} md={12} lg={3}>
            <Fade bottom>
              <Row className='justify-content-center mb-2 mr-2 education-box'>
                <Courses />
              </Row>
            </Fade>
          </Col>

          {/*Education*/}
          <Col xs={12} sm={12} md={12} lg={6}>
            <Fade bottom>
              <Row className='justify-content-center mb-2 mr-2 education-box'>
                <Bachelor />
              </Row>
            </Fade>
          </Col>

          {/*Languages*/}
          <Col xs={12} sm={12} md={12} lg={3}>
            <Fade bottom>
              <Row className='justify-content-center mb-2 mr-2 education-box'>
                <Languages />
              </Row>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Bachelor = () => {
  let upcMsg = "About this university";
  let projectMsg = "About this project | ESP";
  let whatIs= "What's Mechatronics?"
  return (
    <div className='description' id='university'>
        <div>
            <Row>
              {/*UPC*/}
              <Col xs={12} sm={6} md={6} lg={6}>
                  <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
                    overlay={
                      <Tooltip> {upcMsg} </Tooltip>
                    }
                  >
                    <a href='https://www.unipiloto.edu.co/' target='_blank' rel='noopener noreferrer'>
                      <img className='logo' id='upc' alt='upc' src={upc}/>
                    </a>
                    </OverlayTrigger>
                </Col>

              {/*Mechatronics*/}
              <Col xs={12} sm={6} md={6} lg={6}>
                <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip> {whatIs} </Tooltip>
                  }
                >
                  <a href='https://www.mtu.edu/mechatronics/what-is/' target='_blank' rel='noopener noreferrer'>
                    <h4>Bachelor of</h4>
                    <h3>Mechatronics Engineering</h3>
                  </a>
                </OverlayTrigger>
              </Col>
            </Row>
        </div>

      <div className='text-subtitle'>Bogotá | 2017</div>

      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
        overlay={
        <Tooltip> {projectMsg} </Tooltip>
        }
      >
        <a href='http://polux.unipiloto.edu.co:8080/00003994.pdf' target='_blank' rel='noopener noreferrer'>
          <div className='text-description'>
            <b>Project:</b> Sistema de Monitoreo en la Nube para Medir los Riesgos Ambientales Basados en Sensores de Bajo Costo.
          </div>
        </a>
      </OverlayTrigger>
    </div>
  )
}

const Courses = () => {
  let bootcamp = "About this bootcamp"
  let miriada = "Show certification"
  return (
  <div className="description" id="courses">
    <h3>COURSES</h3>

    <div className="course" id="bb-course">
      <h4>Fullstack Bootcamp</h4>
        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip> {bootcamp} </Tooltip>
          }
        >
          <a href='https://www.bogotabootcamp.com/' target='_blank' rel='noopener noreferrer'>
            <Row>
              <Col>
                <img className='logo' id='bb' alt='BB' src={bb}/>
              </Col>
              <Col>
                <div className='text-subtitle'>
                  <b>Bogotá Dev <br />Bootcamp & Dev Shop</b>
              </div>
              </Col>
            </Row>
          </a>
        </OverlayTrigger>

      <div className='text-subtitle'>Bogotá | 2019</div>
      <div className='text-description'>
        Ruby, Rails, HTML, CSS, Javascript, Jquery, GitHub, Rspec, React.js<br />
        <b>Duration:</b> 10 weeks | day
      </div>
    </div>

    <hr />

    <div className="course" id="bb-course">
      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
        overlay={
        <Tooltip> {miriada} </Tooltip>
        }
      >
        <a href='https://miriadax.net/files/10132/badge/c258b12f-2d9e-484b-9440-5aa65334e43f.pdf' target='_blank' rel='noopener noreferrer'>
          <h4>Desarrollo en HTML5, CSS y Javascript de  Apps Web, Android, Ios(7ed.)</h4>
        </a>
      </OverlayTrigger>
      <Row>
        <Col>
          <img className='logo' id='miriadax' alt='MiriadaX' src={miriadax}/>
        </Col>
        <Col>
        <div className='text-subtitle'>
          <b>Miriada X | Universidad Politécnica de Madrid <br />
          </b>
        </div>
        </Col>
      </Row>
      <div className='text-description'><b>Duration:</b> 5 weeks | 50 study hours<br />
        <b>Virtual 2017</b>
      </div>
    </div>
  </div>
  )
}

const Languages = () => {
  let EcSite = "About EC"
  return(
    <div className='description'>
      <h3>LANGUAGES</h3>

      <div className="languages">
        <div className="lang">
          <h4>Spanish</h4><div className='text-subtitle'><b>Native</b></div>
        </div>
        <img className='logo' id='esp' alt='esp' src={esp}/>

        <hr />

        <div className="lang">
          <h4>English</h4> <div className='text-subtitle'><b>Advanced</b></div>
        </div>
        <img className='logo' id='eng' alt='eng' src={eng}/>
        <Row>
          <Col className="nospace" xs={3} sm={3} md={3} lg={3}>
            <img className='logo' id='ec' alt='ec' src={ec}/>
          </Col>
          <Col className="nospace" xs={9} sm={9} md={9} lg={9}>
            <b>PROFICIENCY LEVEL</b><br /> ACADEMIC YEAR 30 LESSONS<br />
            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip> {EcSite} </Tooltip>
              }
            >
              <a href='https://www.ecenglish.com/' target='_blank' rel='noopener noreferrer'>
                English Languages Centres - EC Vancouver<br />
              </a>
              </OverlayTrigger>
          </Col>
        </Row>
        <div className='text-description'>
          <b>Duration:</b> 36 weeks<br />
          <b>2018 | Jan - Sep | Vancouver</b>
        </div>
      </div>
    </div>
  )
}

export default Education
