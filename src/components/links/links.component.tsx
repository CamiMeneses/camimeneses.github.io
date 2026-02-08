import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import "./links.style.scss";

import { socialLinks, type SocialLink } from "../../data/profile";

const Links = () => {
  return (
    <div>
      <Navbar fixed="bottom">
        <div className="links">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              {socialLinks.map((link) => (
                <LinkButton key={link.id} link={link} />
              ))}
            </Col>
          </Row>
        </div>
      </Navbar>
    </div>
  );
};

interface LinkButtonProps {
  link: SocialLink;
}

const LinkButton = ({ link }: LinkButtonProps) => (
  <div>
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      <Button className="m-2" variant={link.variant}>
        {link.label}
      </Button>
    </a>
  </div>
);

export default Links;
