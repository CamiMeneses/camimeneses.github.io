import React from "react";
import "./skills.style.scss";

// Layout
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

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

const Skills = () => {
  return (
    <div id="skills" className="section">
      <h1>SKILLS</h1>
      <div id="skills-box">
        <Container fluid="md">
          <Row>
            <SkillsGrid />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;

const SkillsGrid = () => {
  return (
    <Col className="skill-column">
      <Row className="skill-row" xs={3} sm={4} lg={6}>
        <Col>
          <Image className="skill-image" alt="ruby" src={Ruby} loading="lazy" />
        </Col>
        <Col>
          <Image
            className="skill-image"
            alt="rails"
            src={Rails}
            loading="lazy"
          />
        </Col>
        <Col>
          <Image
            className="skill-image"
            alt="NestJs"
            src={Nest}
            loading="lazy"
          />
        </Col>
        <Col>
          <Image className="skill-image" alt="html" src={Html} loading="lazy" />
        </Col>
        <Col>
          <Image className="skill-image" alt="css" src={Css} loading="lazy" />
        </Col>
        <Col>
          <Image
            className="skill-image"
            alt="typescript"
            src={Typescript}
            loading="lazy"
          />
        </Col>
        <Col>
          <Image
            className="skill-image"
            alt="rspec"
            src={Rspec}
            loading="lazy"
          />
        </Col>
        <Col>
          <Image className="skill-image" alt="jest" src={Jest} loading="lazy" />
        </Col>
        <Col>
          <Image
            className="skill-image"
            alt="postgres"
            src={Postgres}
            loading="lazy"
          />
        </Col>
        <Col>
          <Image
            className="skill-image"
            alt="mongo"
            src={Mongo}
            loading="lazy"
          />
        </Col>
        <Col>
          <Image className="skill-image" alt="git" src={Git} loading="lazy" />
        </Col>
        <Col>
          <Image
            className="skill-image"
            alt="github"
            src={Github}
            loading="lazy"
          />
        </Col>
        <Col>
          <Image
            className="skill-image"
            alt="bitbucket"
            src={Bitbucket}
            loading="lazy"
          />
        </Col>
        <Col>
          <Image
            className="skill-image"
            alt="aws s3"
            src={Awss3}
            loading="lazy"
          />
        </Col>
        <Col>
          <Image
            className="skill-image"
            alt="scrum"
            src={Scrum}
            loading="lazy"
          />
        </Col>
        <Col>
          <Image className="skill-image" alt="jira" src={Jira} loading="lazy" />
        </Col>
        <Col>
          <Image
            className="skill-image"
            alt="trello"
            src={Trello}
            loading="lazy"
          />
        </Col>
      </Row>
    </Col>
  );
};
