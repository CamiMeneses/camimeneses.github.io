import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import "./links.style.scss";

import { useTranslation } from "i18n";

const Links = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar fixed="bottom">
        <div className="links">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              {t.socialLinks.map((link) => (
                <div key={link.label}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Button className="m-2" variant={link.variant}>
                      {link.label}
                    </Button>
                  </a>
                </div>
              ))}
            </Col>
          </Row>
        </div>
      </Navbar>
    </div>
  );
};

export default Links;
