import React from 'react'
import styled from "styled-components";
import Typewriter from 'typewriter-effect';

const MyTitleMessage = styled.h6`
  position: absolute;
  width: 100%;
  top: 25rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong{
    font-size: 5.25em;
  }
  div {
    color: #fcecfc;
    font-size: 80px;
    font-weight: 900;
    letter-spacing: 1px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 100px;
      letter-spacing: 1px;
    }
  }
`;

const TitleMessage = () => {
  return (
    <MyTitleMessage>
      <div className="sub">
        <Typewriter
          options={{
          strings: ['Hola! <br/> Bienvenido a mi página web ', 'Soy <br/>Camila Meneses ',
                    'Conoce más acerca de mi ', 'Hello! <br/> Welcome to my website',
                    "I'm <br/>Camila Meneses ", 'Know more about me',],
          autoStart: true,
          loop: true,
          delay: 90,
          cursor: ':)',
          deleteSpeed: 1
          }}
        />
      </div>
    </MyTitleMessage>
  );
};

export default TitleMessage
