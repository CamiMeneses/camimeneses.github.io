import React from 'react'
import WorkIcon from '../../assets/img/profile/profile.jpg'
import SchoolIcon from '../../assets/img/profile/profile.jpg'
import Container from 'react-bootstrap/Container'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './experience.style.scss'

const Experience = () => {
  return (
    <div className='experience'>
      <Container>
        <h1>EXPERIENCE</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar - Jul 2020"
            iconStyle={{ background: '#8AD8C9', color: '#b52a08' }}
          >
            <h3 className="vertical-timeline-element-title">INTERMEDIATE DEVELOPER</h3>
            <h4 className="vertical-timeline-element-subtitle">2Transfair | FINTECH | Bogota, CO | Partly remote</h4>
            <p>
              <ul>
                <li>Ruby on Rails</li>
                <li>Worked with a team to build a platform to bring credits</li>
                <li>Used HTML, CSS, bootstrap</li>
                <li>Built PDFs with dynamic data</li>
                <li>Monolithic</li>
                <li>API REST</li>
                <li>Used version control tool Git and code storage tool Bitbucket and reviewed Pull Requests.</li>
                <li>Contact with client</li>
                <li>Trello</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May - Dec 2019"
            iconStyle={{ background: '#8AD8C9', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">IT TRAINEE</h3>
            <h4 className="vertical-timeline-element-subtitle">Youse Colombia - CNPX | INSURTECH | Bogota, CO</h4>
            <p>
              <ul>
                <li>Collaborated with a team to implement a platform for insurances.</li>
                <li>Wrote Unit tests for application quality assurance using Rspec.</li>
                <li>Used version control tool Git and code storage tool Github and reviewed Pull Requests.</li>
                <li>Worked with a third-party to implement Salesforce.</li>
                <li>Followed the Scrum methodology and used Jira.</li>
                <li>Set, updated and used data from AWS S3 and Redis.</li>
                <li>Served as bug-fixer and fixed intermittent test.</li>
                <li>Used tools like Rabbit MQ, Logentries.</li>
                <li>Microservices</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar - May 2019"
            iconStyle={{ background: '#8AD8C9', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">FREELANCE WEB DEVELOPER</h3>
            <h4 className="vertical-timeline-element-subtitle">Bogota Dev. Bootcamp & Dev Shop | Bogota, CO</h4>
            <p>
              <li>Built an application from scratch to manage the coding bootcamp using Ruby on Rails and Haml, Bootstrap, Devise gems and uploaded it to Heroku</li>
              <li>Implemented CRUD operations for the application using the MVC (Model View Controller) architecture</li>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov - Dec 2017"
            iconStyle={{ background: '#8AD8C9', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">TECNICO 1 DATA QUIALITY</h3>
            <h4 className="vertical-timeline-element-subtitle">Unión temporal proceso unidad para la atención y reparación integral a las victimas 2017 | Bogota, CO</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: '#8AD8C9', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title"> STUDENT RESEARCHER | INTERN</h3>
            <h4 className="vertical-timeline-element-subtitle">Universidad Distrital Francisco José de Caldas | Universidad Piloto de Colombia | Bogota, CO</h4>
            <p>
              <b>Project:</b> Diseño de un sistema domótico con la placa Intel Galileo Gen1. This project was based on the internet of things IoT, using programming languages like Python, HTML5, CSS, others
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  )
}

export default Experience
