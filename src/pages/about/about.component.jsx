import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/profile.jpg'
import Button from 'react-bootstrap/Button'

import './about.style.css'

const About = () => {
  return (
    <div id='about'>
      <div className='about'>
        <h1 className='pt-3 text-center font-details pb-3'>About Me</h1>
        <Container>
          <Row className='pt-3 pb-5 align-items-center'>
            {/*Profile Photo*/}
            <Col xs={12} md={6}>
              <Row className='justify-content-center mb-2 mr-2'>
                <Image className='profile justify-content-end' alt='profile' src={Profile} thumbnail fluid />
              </Row>
            </Col>

            {/*Description*/}
            <Col xs={12} md={6}>
              <Row className=' align-items-start p-2 my-details rounded'>
                Hola! Soy Camila Meneses de Colombia<br />
                <br />

                Soy una persona muy alegre y amistosa, a quien
                le gusta aprender sobre culaquier tema, viajar y conocer otras culturas.<br />

                Para mi son muy importantes las personas con las que me rodeo a diario,
                ya que es inevitable no llevarte un poquito de cada una ellas.<br />
                <br />

                Por algo dicen: <br />
                "Quien con lobos anda, aprende a aullar"<br />

                <br />
                Me gustan los ambientes alegres, tranquilos y respetuosos,
                en donde las personas puedan compartir sus ideas, conocimientos y experiencias. <br />
              </Row>
              <Row>
                <Col className='d-flex justify-content-center flex-wrap'>
                  <div>
                    <a href='#contact'>
                      <Button className= 'm-2' variant='outline-success'>Contáctame</Button>
                    </a>
                  </div>
                  <div>
                    <a href='#linkedin'>
                      <Button className= 'm-2' variant='outline-info'>LinkedIn</Button>
                    </a>
                  </div>
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default About
