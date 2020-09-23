import React from 'react'
import { Container } from 'react-bootstrap'
import './contact.style.scss'

export default function Contact(props) {
  return (
    <div style={{backgroundColor:"transparent", position:"relative"}}>
      <div id="contact">
      <div className="title">CONTACT</div>
        <Container>
          <div className='text-subtitle'>
            <p>
              Camila Andrea Meneses Torres<br />
              Ing. Mecatrónica | Web Developer<br />
              kam_1095@live.com<br />
              Bogota - Colombia<br />
            </p>
          </div>
        </Container>
          {props.children}
      </div>
    </div>
  );
}

