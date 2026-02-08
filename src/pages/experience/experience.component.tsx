import "./experience.style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  experiences,
  type Experience as ExperienceType,
  type ExperienceItem as ExperienceItemType,
} from "data/experience";

const Experience = () => {
  return (
    <div className="section" id="experience">
      <h1>EXPERIENCE</h1>
      <Container>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </VerticalTimeline>
      </Container>
    </div>
  );
};

interface ExperienceCardProps {
  experience: ExperienceType;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const {
    date,
    title,
    subtitle,
    url,
    tooltip,
    logo,
    logoId,
    secondLogo,
    secondLogoId,
    secondUrl,
    secondTooltip,
    items,
    description,
    isEducation,
  } = experience;

  const timelineClass = isEducation
    ? "vertical-timeline-element--education"
    : "vertical-timeline-element--work";

  const headerContent = (
    <Row className="nospace">
      <Col xs={12} sm={3} md={3} lg={3}>
        {secondLogo && url && tooltip ? (
          <>
            <Row>
              <LogoWithTooltip
                logo={logo}
                logoId={logoId}
                url={url}
                tooltip={tooltip}
              />
            </Row>
            <Row>
              <LogoWithTooltip
                logo={secondLogo}
                logoId={secondLogoId!}
                url={secondUrl!}
                tooltip={secondTooltip!}
              />
            </Row>
          </>
        ) : (
          <img
            className="logo"
            id={logoId}
            alt={title}
            src={logo}
            loading="lazy"
          />
        )}
      </Col>
      <Col xs={12} sm={9} md={9} lg={9}>
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      </Col>
    </Row>
  );

  return (
    <VerticalTimelineElement
      className={timelineClass}
      date={date}
      iconStyle={{ background: "#ffffff" }}
    >
      {url && tooltip ? (
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip>{tooltip}</Tooltip>}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            {headerContent}
          </a>
        </OverlayTrigger>
      ) : (
        headerContent
      )}

      {items.length > 0 && (
        <div>
          <ul>
            {items.map((item, index) => (
              <ExperienceItemRow key={index} item={item} />
            ))}
          </ul>
        </div>
      )}

      {description && (
        <div>
          <p>
            <b>Project:</b> {description}
          </p>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

interface LogoWithTooltipProps {
  logo: string;
  logoId: string;
  url: string;
  tooltip: string;
}

const LogoWithTooltip = ({
  logo,
  logoId,
  url,
  tooltip,
}: LogoWithTooltipProps) => (
  <OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={<Tooltip>{tooltip}</Tooltip>}
  >
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img className="logo" id={logoId} alt={tooltip} src={logo} loading="lazy" />
    </a>
  </OverlayTrigger>
);

interface ExperienceItemRowProps {
  item: ExperienceItemType;
}

const ExperienceItemRow = ({ item }: ExperienceItemRowProps) => {
  const { text, link, linkText, highlight } = item;

  return (
    <li>
      {text && <>{text} </>}
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <b>{linkText || text}</b>
        </a>
      )}
      {highlight && <b>{highlight}</b>}
    </li>
  );
};

export default Experience;
