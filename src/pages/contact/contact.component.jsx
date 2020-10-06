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
                <img src="https://www.flaticon.es/svg/static/icons/svg/3062/3062634.svg"/>
                &nbsp; kam_1095@live.com<br />

                <img src="https://www.flaticon.es/svg/static/icons/svg/2920/2920339.svg" alt="celular"></img>
                &nbsp; +57 3184726170<br />

                <img src="https://www.flaticon.es/svg/static/icons/svg/3062/3062588.svg" alt="ubicación"></img>
                &nbsp; Bogota - Colombia<br />
              </p>
            </div>
          </Container>
            {props.children}
        </div>
        {/*<img className='call-me' alt='call-me' src={callMe}/>*/}
      </div>
    </div>
  );
}
