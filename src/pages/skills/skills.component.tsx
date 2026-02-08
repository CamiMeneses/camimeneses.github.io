import "./skills.style.scss";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { skills } from "../../data/skills";

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

const SkillsGrid = () => {
  return (
    <Col className="skill-column">
      <Row className="skill-row" xs={3} sm={4} lg={6}>
        {skills.map((skill) => (
          <Col key={skill.id}>
            <Image
              className="skill-image"
              alt={skill.name}
              src={skill.icon}
              loading="lazy"
            />
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default Skills;
