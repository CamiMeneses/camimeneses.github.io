import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

import Profile from "../../assets/img/profile/profile.png";
import "./about.style.scss";

const About = () => {
  return (
    <div className="about-container">
      <div id="about" className="section">
        <div id="about-form-1" />
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="nospace">
              <Fade left>
                <Row className="justify-content-center">
                  <Image
                    className="profile justify-content-end nospace"
                    alt="profile"
                    src={Profile}
                    roundedCircle
                    fluid
                  />
                </Row>
              </Fade>
              <Fade left>
                <Row className="justify-content-center nospace">
                  <h1>Camila Meneses</h1>
                  <h2>Mechatronics engineer and FullStack developer</h2>
                  <br />
                </Row>
              </Fade>
            </Col>
            {/*Description*/}
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Fade right>
                <Row className=" align-items-start rounded profile-text">
                  <p>
                    I began my journey as a Web Developer in <b>2019</b>, since
                    then I've been working mainly as a <b>Ruby on Rails</b>{" "}
                    backend developer.
                    <br />
                    <br />
                    In my daily routine I use <b>Git</b>, <b>Postman</b>, I
                    manage databases and code hosting platforms such as{" "}
                    <b>GitHub</b> and <b>Bitbucket</b>
                    <br />
                    <br />
                    I keep learning about this world of development and I want
                    to work hand in hand with best developers and people of all
                    cultures to grow in many ways.
                    <br />
                    I am going to take any challenge!
                    <br />
                    <br />
                    Check out my website, learn more about me <br />
                    and feel free to{" "}
                    <b>
                      <a href="#contact" target="contact me">
                        contact me
                      </a>{" "}
                    </b>
                    . <br />
                    <br />
                  </p>
                </Row>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
