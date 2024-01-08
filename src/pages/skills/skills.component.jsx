import React from "react";
import "./skills.style.scss";

// Layout
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

// Images
import Ruby from "../../assets/icons/skills/ruby.png";
import Rails from "../../assets/icons/skills/rails.png";
import Nest from "../../assets/icons/skills/nest.png";
import Html from "../../assets/icons/skills/html.png";
import Css from "../../assets/icons/skills/css.png";
import Typescript from "../../assets/icons/skills/typescript.png";
import Rspec from "../../assets/icons/skills/rspec.png";
import Jest from "../../assets/icons/skills/jest.png";

import Postgres from "../../assets/icons/skills/postgres.png";
import Mongo from "../../assets/icons/skills/mongo.png";

import Git from "../../assets/icons/skills/git.webp";
import Github from "../../assets/icons/skills/github.png";
import Bitbucket from "../../assets/icons/skills/bitbucket.png";
import Awss3 from "../../assets/icons/skills/awss3.png";

import Scrum from "../../assets/icons/skills/scrum.png";
import Jira from "../../assets/icons/skills/jira.png";
import Trello from "../../assets/icons/skills/trello.png";

export default function Skills(props) {
  return (
    <div>
      <div id="skills" className="section">
        <h1>SKILLS</h1>
        <div id="skills-box">
          <Container fluid="md">
            <Row>
              <Theme1 />
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

const Theme1 = () => {
  return (
    <>
      <Col className="skill-column">
        <Row className="skill-row" xs={3} sm={4} lg={6}>
          <Col>
            <Image className="skill-image" alt="ruby" src={Ruby} />
          </Col>
          <Col>
            <Image className="skill-image" alt="rails" src={Rails} />
          </Col>
          <Col>
            <Image className="skill-image" alt="NestJs" src={Nest} />
          </Col>
          <Col>
            <Image className="skill-image" alt="html" src={Html} />
          </Col>
          <Col>
            <Image className="skill-image" alt="css" src={Css} />
          </Col>
          <Col>
            <Image className="skill-image" alt="Typescript" src={Typescript} />
          </Col>
          <Col>
            <Image className="skill-image" alt="rspec" src={Rspec} />
          </Col>
          <Col>
            <Image className="skill-image" alt="jest" src={Jest} />
          </Col>
          <Col>
            <Image className="skill-image" alt="postgres" src={Postgres} />
          </Col>
          <Col>
            <Image className="skill-image" alt="mongo" src={Mongo} />
          </Col>
          <Col>
            <Image className="skill-image" alt="git" src={Git} />
          </Col>
          <Col>
            <Image className="skill-image" alt="github" src={Github} />
          </Col>
          <Col>
            <Image className="skill-image" alt="bitbucket" src={Bitbucket} />
          </Col>
          <Col>
            <Image className="skill-image" alt="awss3t" src={Awss3} />
          </Col>
          <Col>
            <Image className="skill-image" alt="scrum" src={Scrum} />
          </Col>
          <Col>
            <Image className="skill-image" alt="jira" src={Jira} />
          </Col>
          <Col>
            <Image className="skill-image" alt="trello" src={Trello} />
          </Col>
        </Row>
      </Col>
    </>
  );
};
