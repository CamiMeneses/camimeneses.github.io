import React from 'react'
import './links.style.scss'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Links = () => {
  return (
  <div >
    <Navbar fixed="bottom">
      <div className="links">
        <Row>
          <Col className='d-flex justify-content-center flex-wrap'>
            <div>
              <a href='https://drive.google.com/file/d/166LBeln2xD63uXvnOK10bn8eP3H83jYN/view?usp=sharing' target='_blank'>
                <Button className= 'm-2' variant='outline-success'>Resume</Button>
              </a>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/camimeneses/' target='_blank'>
                <Button className= 'm-2' variant='outline-info'>LinkedIn</Button>
              </a>
            </div>
            <div>
              <a href='https://github.com/CamiMeneses' target='_blank'>
                <Button className= 'm-2' variant='outline-primary'>Github</Button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Navbar>
  </div>
  )
}

export default Links
