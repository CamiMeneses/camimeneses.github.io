import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Profile from "../../assets/img/profile/profile.png";
import "./about.style.scss";

import { profile } from "../../data/profile";

const About = () => {
  return (
    <div className="about-container">
      <div id="about" className="section">
        <div id="about-form-1" />
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="nospace">
              <Row className="justify-content-center">
                <Image
                  className="profile justify-content-end nospace"
                  alt="profile"
                  src={Profile}
                  roundedCircle
                  fluid
                  loading="lazy"
                />
              </Row>
              <Row className="justify-content-center nospace">
                <h1>{profile.name}</h1>
                <h2>{profile.title}</h2>
                <br />
              </Row>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Row className="align-items-start rounded profile-text">
                <p>
                  {profile.bio.map((paragraph, index) => (
                    <span key={index}>
                      <span dangerouslySetInnerHTML={{ __html: paragraph }} />
                      <br />
                      <br />
                    </span>
                  ))}
                  Check out my website, learn more about me <br />
                  and feel free to{" "}
                  <b>
                    <a href="#contact">contact me</a>
                  </b>
                  .
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
