import "./education.style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import upc from "assets/icons/education/upc.png";
import bb from "assets/icons/education/bb.png";
import miriadax from "assets/icons/education/miriadax.png";
import esp from "assets/icons/education/esp.png";
import eng from "assets/icons/education/eng.webp";
import ec from "assets/icons/education/ec.png";
import ef from "assets/icons/education/ef.svg";

import { useTranslation } from "i18n";

const Education = () => {
  const { t } = useTranslation();

  return (
    <div id="education" className="section">
      <h1>{t.sections.education}</h1>
      <Container>
        <Row className="pt-1 pb-4 align-items-center">
          <Col xs={12} sm={12} md={12} lg={12} xl={3}>
            <Row className="justify-content-center mb-2 mr-2 education-box">
              <Courses />
            </Row>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xl={6}>
            <Row className="justify-content-center mb-2 mr-2 education-box">
              <Bachelor />
            </Row>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xl={3}>
            <Row className="justify-content-center mb-2 mr-2 education-box">
              <Languages />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Bachelor = () => {
  const { t } = useTranslation();
  const { tooltips, bachelor } = t.education;

  return (
    <div className="description" id="university">
      <div>
        <Row>
          <Col xs={12} sm={6} md={6} lg={5} xl={6}>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip> {tooltips.aboutUniversity} </Tooltip>}
            >
              <a
                href="https://www.unipiloto.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="logo"
                  id="upc"
                  alt="upc"
                  src={upc}
                  loading="lazy"
                />
              </a>
            </OverlayTrigger>
          </Col>

          <Col xs={12} sm={6} md={6} lg={7} xl={6}>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip> {tooltips.whatIsMechatronics} </Tooltip>}
            >
              <a
                href="https://www.mtu.edu/mechatronics/what-is/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>{bachelor.title}</h4>
                <h3>{bachelor.degree}</h3>
              </a>
            </OverlayTrigger>
          </Col>
        </Row>
      </div>

      <div className="text-description">
        <b>{bachelor.location}</b>
      </div>

      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip> {tooltips.aboutProject} </Tooltip>}
      >
        <a
          href="http://polux.unipiloto.edu.co:8080/00003994.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-description">
            <b>{bachelor.projectLabel}</b> {bachelor.projectDescription}
          </div>
        </a>
      </OverlayTrigger>
    </div>
  );
};

const Courses = () => {
  const { t } = useTranslation();
  const { tooltips, courses } = t.education;

  return (
    <div className="description" id="courses">
      <h3>{courses.title}</h3>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} xl={12} className="nospace">
          <div className="course" id="bb-course">
            <h4>{courses.fullstackBootcamp}</h4>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip> {tooltips.aboutBootcamp} </Tooltip>}
            >
              <a
                href="https://www.bogotabootcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Row>
                  <Col>
                    <img
                      className="logo"
                      id="bb"
                      alt="BB"
                      src={bb}
                      loading="lazy"
                    />
                  </Col>
                  <Col>
                    <div className="text-subtitle">
                      <b>
                        {courses.bootcampName} <br />
                        {courses.bootcampSubname}
                      </b>
                    </div>
                  </Col>
                </Row>
              </a>
            </OverlayTrigger>

            <div className="text-subtitle">{courses.bootcampLocation}</div>
            <div className="text-description">
              {courses.bootcampContent}
              <br />
              <b>{courses.duration}</b> {courses.bootcampDuration}
            </div>
            <br />
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} xl={12} className="nospace">
          <div className="course" id="bb-course">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip> {tooltips.showCertification} </Tooltip>}
            >
              <a
                href="https://miriadax.net/files/10132/badge/c258b12f-2d9e-484b-9440-5aa65334e43f.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>{courses.miriadaCourse}</h4>
              </a>
            </OverlayTrigger>
            <Row>
              <Col>
                <img
                  className="logo"
                  id="miriadax"
                  alt="MiriadaX"
                  src={miriadax}
                  loading="lazy"
                />
              </Col>
              <Col>
                <div className="text-subtitle">
                  <b>
                    {courses.miriadaInstitution} <br />
                  </b>
                </div>
              </Col>
            </Row>
            <div className="text-description">
              <b>{courses.duration}</b> {courses.miriadaDuration}
              <br />
              <b>{courses.virtual}</b>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const Languages = () => {
  const { t } = useTranslation();
  const { tooltips, languages, courses } = t.education;

  return (
    <div className="description">
      <div id="languages">
        <h3>{languages.title}</h3>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6} xl={12} className="nospace">
            <div className="lang">
              <h4>{languages.spanish}</h4>
              <div className="text-subtitle">
                <b>{languages.native}</b>
              </div>
            </div>
            <img className="logo" id="esp" alt="esp" src={esp} loading="lazy" />
          </Col>

          <Col xs={6} sm={6} md={6} lg={6} xl={12} className="nospace">
            <div className="lang" style={{ paddingTop: 10 }}>
              <h4>{languages.english}</h4>{" "}
              <div className="text-subtitle">
                <b>{languages.advanced}</b>
              </div>
            </div>
            <img className="logo" id="eng" alt="eng" src={eng} loading="lazy" />
          </Col>
        </Row>
        {/*EC*/}
        <Row>
          <div className="text-subtitle nospace">
            <b>{languages.proficiencyLevel}</b>
            <br /> {languages.academicYear}
            <br />
          </div>
          <Row>
            <Col className="course nospace" xs={3} sm={3} md={3} lg={3} xl={3}>
              <img className="logo" id="ec" alt="ec" src={ec} loading="lazy" />
            </Col>
            <Col
              className="nospace text-subtitle"
              xs={9}
              sm={9}
              md={9}
              lg={9}
              xl={9}
            >
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip> {tooltips.aboutEc} </Tooltip>}
              >
                <a
                  href="https://www.ecenglish.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {languages.ecVancouver}
                  <br />
                </a>
              </OverlayTrigger>
              <div className="text-description nospace">
                <b>{languages.ecLocation}</b>
                <br />
                {languages.ecDate}
                <br />
                <b>{courses.duration}</b> {languages.ecDuration}
                <br />
              </div>
            </Col>
          </Row>
        </Row>

        {/*EF Credential*/}

        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip> {tooltips.seeCredential} </Tooltip>}
        >
          <div className="text-subtitle nospace">
            <Row className="nospace">
              <Col
                className="course nospace"
                xs={3}
                sm={3}
                md={3}
                lg={3}
                xl={3}
              >
                <img
                  className="logo"
                  id="ef"
                  alt="ef"
                  src={ef}
                  loading="lazy"
                />
              </Col>
              <Col
                className="nospace text-subtitle"
                xs={9}
                sm={9}
                md={9}
                lg={9}
                xl={9}
              >
                <a
                  href="https://www.efset.org/cert/YGip1z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {languages.efCertificate}
                </a>
              </Col>
            </Row>
          </div>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default Education;
