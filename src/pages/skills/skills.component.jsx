import React from 'react'
import { Container } from 'react-bootstrap'
import './skills.style.scss'
import MyCarousal from '../../components/my-carousal/mycarousal.component';

export default function Contact(props) {
  return (
    <div>
      <div id="skills">
      <h1>SKILLS</h1>
        <div id="skills-box">
          <Container>
            {<MyCarousal />}
          </Container>
        </div>
      </div>
    </div>
  );
}
