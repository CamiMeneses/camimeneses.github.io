import React from 'react'
import './education.style.scss'
import Container from 'react-bootstrap/Container'

const Education = () => {
  return (
    <div className='education'>
      <Container>
        <h1>EDUCATION</h1>
        <Bachelor />
        <Courses />
        <Languages />
      </Container>
    </div>
  )
}

const Bachelor = () => {
  return (
    <div className='description'>
    <h3>Education</h3>
      <h4>Bachelor of Mechatronics Engineering</h4>
      <div className='text-subtitle'><b>Universidad Piloto de Colombia</b></div>
      <div className='text-subtitle'>Bogotá | 2017</div>
      <div className='text-description'>
        <b>Project:</b> Sistema de Monitoreo en la Nube para Medir los Riesgos Ambientales Basados en Sensores de Bajo Costo.
      </div>
    </div>
  )
}

const Courses = () => {
  return (
  <div className='description'>
    <h3>Courses</h3>
    <h4>Fullstack Bootcamp</h4>
    <div className='text-subtitle'><b>Bogotá Dev. Bootcamp & Dev Shop</b></div>
    <div className='text-subtitle'>Bogotá | 2019</div>
    <div className='text-description'>
      Ruby, Rails, HTML, CSS, Javascript, Jquery, GitHub, Rspec, React.js
    </div>
    <div className='text-description'><b>Duration:</b> 10 weeks | day</div>
    <br />
    <h4> Desarrollo en HTML5, CSS y Javascript de  Apps Web, Android, Ios(7ed.)</h4>
    <div className='text-subtitle'><b>Universidad Politécnica de Madrid - Virtual</b></div>
    <div className='text-subtitle'>2017</div>
    <div className='text-description'><b>Duration:</b> 5 weeks | 50 study hours</div>
  </div>
  )
}

const Languages = () => {
  return(
    <div className='description'>
      <h3>Languages</h3>
      <h4>Spanish</h4>
      <div className='text-subtitle'><b>Native</b></div>

      <br />
      <h4>English</h4>
      <div className='text-subtitle'><b>Advanced</b></div>
    </div>
  )
}

export default Education
