import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import "./contact.style.scss";

import { profile } from "../../data/profile";

interface ContactProps {
  children?: ReactNode;
}

const Contact = ({ children }: ContactProps) => {
  return (
    <div className="contact-wrapper">
      <div className="section" id="contact">
        <div id="contact-box">
          <div className="title">
            <b>Say Hi!</b>
          </div>
          <Container>
            <div className="text-subtitle">
              <p>
                <b>{profile.fullName}</b>
                <br />
                {profile.shortTitle}
                <br />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2990/2990218.png"
                  alt="email icon"
                  loading="lazy"
                />
                &nbsp; {profile.email}
                <br />
              </p>
            </div>
          </Container>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Contact;
