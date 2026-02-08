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

import { getExperienceMeta } from "data/experience";
import { useTranslation } from "i18n";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="section" id="experience">
      <h1>{t.sections.experience}</h1>
      <Container>
        <VerticalTimeline>
          {t.experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </VerticalTimeline>
      </Container>
    </div>
  );
};

interface ExperienceData {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  tooltip?: string;
  secondTooltip?: string;
  description?: string;
  isEducation?: boolean;
  items: Array<{
    text?: string;
    link?: string;
    linkText?: string;
    highlight?: string;
  }>;
}

interface ExperienceCardProps {
  experience: ExperienceData;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const meta = getExperienceMeta(experience.id);

  if (!meta) return null;

  const {
    date,
    title,
    subtitle,
    tooltip,
    secondTooltip,
    items,
    description,
    isEducation,
  } = experience;

  const { logo, url, secondLogo, secondUrl } = meta;

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
                logoId={experience.id}
                url={url}
                tooltip={tooltip}
              />
            </Row>
            <Row>
              <LogoWithTooltip
                logo={secondLogo}
                logoId={`${experience.id}-second`}
                url={secondUrl!}
                tooltip={secondTooltip!}
              />
            </Row>
          </>
        ) : (
          <img
            className="logo"
            id={experience.id}
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
        <ul>
          {items.map((item, index) => (
            <ExperienceItemRow key={index} item={item} />
          ))}
        </ul>
      )}

      {description && <p>{description}</p>}
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
      <img
        className="logo"
        id={logoId}
        alt={tooltip}
        src={logo}
        loading="lazy"
      />
    </a>
  </OverlayTrigger>
);

interface ExperienceItemProps {
  item: {
    text?: string;
    link?: string;
    linkText?: string;
    highlight?: string;
  };
}

const ExperienceItemRow = ({ item }: ExperienceItemProps) => {
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
