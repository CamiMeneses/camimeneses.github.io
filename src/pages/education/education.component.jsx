import React from 'react'
import './education.style.scss'
import Container from 'react-bootstrap/Container'
import Fade from 'react-reveal/Fade'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Education = () => {
  return (
    <div id='education' className= 'section'>
      <h1>EDUCATION</h1>
      <Container>
        <Row className='pt-3 pb-5 align-items-center'>
          {/*Courses*/}
          <Col xs={12} sm={12} md={12} lg={4}>
            <Fade bottom>
              <Row className='justify-content-center mb-2 mr-2 education-box'>
                <Courses />
              </Row>
            </Fade>
          </Col>

          {/*Education*/}
          <Col xs={12} sm={12} md={12} lg={4}>
            <Fade bottom>
              <Row className='justify-content-center mb-2 mr-2 education-box'>
                <Bachelor />
              </Row>
            </Fade>
          </Col>

          {/*Languages*/}
          <Col xs={12} sm={12} md={12} lg={4}>
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
  let msg = "About this university";
  let projectMsg = "About this project";
  let whatIs= "What's Mechatronics?"
  return (
    <div className='description' id='university'>
      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
        overlay={
        <Tooltip> {whatIs} </Tooltip>
        }
      >
        <a href='https://www.mtu.edu/mechatronics/what-is/' target='_blank' rel='noopener noreferrer'>
          <h4>Bachelor of Mechatronics Engineering</h4>
        </a>
      </OverlayTrigger>

      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
        overlay={
        <Tooltip> {msg} </Tooltip>
        }
      >
        <div className='text-subtitle'>
          <a href='https://www.unipiloto.edu.co/' target='_blank' rel='noopener noreferrer'>
            <b>Universidad Piloto de Colombia</b>
          </a>
        </div>
      </OverlayTrigger>
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
  let miriada = "Certification"
  return (
  <div className='description'>
    <h3>COURSES</h3>
    <h4>Fullstack Bootcamp</h4>
    <div className='text-subtitle'>
      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
          overlay={
          <Tooltip> {bootcamp} </Tooltip>
          }
        >
        <a href='https://www.bogotabootcamp.com/' target='_blank' rel='noopener noreferrer'>
          <b>Bogotá Dev. Bootcamp & Dev Shop</b>
        </a>
      </OverlayTrigger>
    </div>
    <div className='text-subtitle'>Bogotá | 2019</div>
    <div className='text-description'>
      Ruby, Rails, HTML, CSS, Javascript, Jquery, GitHub, Rspec, React.js
    </div>
    <div className='text-description'><b>Duration:</b> 10 weeks | day</div>
    <hr />

    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }}
      overlay={
      <Tooltip> {miriada} </Tooltip>
      }
    >
      <a href='https://miriadax.net/files/10132/badge/c258b12f-2d9e-484b-9440-5aa65334e43f.pdf' target='_blank' rel='noopener noreferrer'>
        <h4>Desarrollo en HTML5, CSS y Javascript de  Apps Web, Android, Ios(7ed.)</h4>
        <div className='text-subtitle'>
          <b>Miriada X | Universidad Politécnica de Madrid <br />
            Virtual 2017
          </b>
        </div>
      </a>
    </OverlayTrigger>
    <div className='text-description'><b>Duration:</b> 5 weeks | 50 study hours</div>
  </div>
  )
}

const Languages = () => {
  return(
    <div className='description'>
      <h3>LANGUAGES</h3>
      <h4>Spanish</h4>
      <div className='text-subtitle'><b>Native</b></div>
      <hr />
      <h4>English</h4>
      <div className='text-subtitle'><b>Advanced</b></div>
      <div className='text-description'>
        <b>ENGLISH | PROFICIENCY LEVEL</b><br />
        ACADEMIC YEAR 30 LESSONS<br />
        English Languages Centres - EC Vancouver<br />
        <b>Duration:</b> 36 weeks<br />
        <b>2018 | Jan - Sep | Vancouver</b>
      </div>
    </div>
  )
}

export default Education
