import React from 'react'
import { Container } from 'react-bootstrap'
import './contact.style.scss'

export default function Contact(props) {
  return (
    <div style={{backgroundColor:"transparent", position:"relative"}}>
      <div className='section' id="contact">
        <div id="contact-box">
          <div className="title"><b>Say Hi!</b></div>
          <Container>
            <div className='text-subtitle'>
              <p>
                <b>Camila Andrea Meneses Torres</b><br />
                Ing. Mecatrónica | Web Developer<br />
                <img src= "https://cdn-icons-png.flaticon.com/512/2990/2990218.png"  alt="email"></img>
                &nbsp; kam_1095@live.com<br />
              </p>
            </div>
          </Container>
            {props.children}
        </div>
      </div>
    </div>
  );
}
