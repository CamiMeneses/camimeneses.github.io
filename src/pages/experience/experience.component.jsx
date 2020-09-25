import React from 'react'
import WorkIcon from '../../assets/img/profile/profile.jpg'
import SchoolIcon from '../../assets/img/profile/profile.jpg'
import Container from 'react-bootstrap/Container'
import color from '../../themes/theme.scss'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './experience.style.scss'

const Experience = () => {
  return (
    <div className='section' id='experience'>
      <h1>EXPERIENCE</h1>
      <Container>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar - Jul 2020"
            iconStyle={{ background: color.primarycolor, color: '#b52a08' }}
          >
            <h3 className="vertical-timeline-element-title">INTERMEDIATE DEVELOPER</h3>
            <h4 className="vertical-timeline-element-subtitle">2Transfair | FINTECH | Bogota, CO | Partly remote</h4>
            <p>
              <ul>
                <li><b>Ruby on Rails</b></li>
                <li>Worked with a team to build a platform to bring credits</li>
                <li>Used <b>HTML, CSS, bootstrap</b></li>
                <li>Built <b>PDFs</b> with dynamic data</li>
                <li><b>Monolithic</b></li>
                <li><b>API REST</b></li>
                <li>Used version control tool <b>Git</b> and code storage tool <b>Bitbucket</b> and reviewed Pull Requests.</li>
                <li>Contact with client</li>
                <li><b>Trello</b></li>
              </ul>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May - Dec 2019"
            iconStyle={{ background: color.primarycolor, color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">IT TRAINEE</h3>
            <h4 className="vertical-timeline-element-subtitle">Youse Colombia - CNPX | INSURTECH | Bogota, CO</h4>
            <p>
              <ul>
                <li>Collaborated with a team to implement a platform for insurances</li>
                <li>Wrote Unit tests for application quality assurance using <b>Rspec</b></li>
                <li>Used version control tool <b>Git</b> and code storage tool <b>Github</b> and reviewed Pull Requests</li>
                <li>Worked with a third-party to implement Salesforce</li>
                <li>Followed the <b>Scrum</b> methodology and used <b>Jira</b></li>
                <li>Set, updated and used data from <b>AWS S3</b> and <b>Redis</b></li>
                <li>Served as <b>bug-fixer</b> and fixed intermittent test</li>
                <li>Used tools like <b>Rabbit MQ</b>, <b>Logentries</b></li>
                <li><b>Microservices</b></li>
              </ul>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar - May 2019"
            iconStyle={{ background: color.primarycolor, color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">FREELANCE WEB DEVELOPER</h3>
            <h4 className="vertical-timeline-element-subtitle">Bogota Dev. Bootcamp & Dev Shop | Bogota, CO</h4>
            <p>
              <li>Built an application from scratch to manage the coding bootcamp using <b>Ruby on Rails </b>and <b>Haml</b>,
                <b>Bootstrap</b>, <b>Devise</b> gem and uploaded it to <b>Heroku</b></li>
              <li>Implemented <b>CRUD</b> operations for the application using the <b>MVC</b> (Model View Controller) architecture</li>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov - Dec 2017"
            iconStyle={{ background: color.primarycolor, color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">TECNICO 1 DATA QUIALITY</h3>
            <h4 className="vertical-timeline-element-subtitle">Unión temporal proceso unidad para la atención y reparación integral a las victimas 2017 | Bogota, CO</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: color.primarycolor, color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> STUDENT RESEARCHER | INTERN</h3>
            <h4 className="vertical-timeline-element-subtitle">Universidad Distrital Francisco José de Caldas | Universidad Piloto de Colombia | Bogota, CO</h4>
            <p>
              <b>Project:</b> Diseño de un sistema domótico con la placa Intel Galileo Gen1. This project was based on the <b>internet of things IoT</b>,
              using programming languages like <b>Python</b>, <b>HTML5</b>, <b>CSS</b>, others
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  )
}

export default Experience
