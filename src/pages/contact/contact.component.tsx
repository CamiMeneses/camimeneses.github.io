import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";
import "./contact.style.scss";

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
                <b>Camila Andrea Meneses Torres</b>
                <br />
                Ing. Mecatrónica | Web Developer
                <br />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2990/2990218.png"
                  alt="email icon"
                  loading="lazy"
                />
                &nbsp; kam_1095@live.com
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
