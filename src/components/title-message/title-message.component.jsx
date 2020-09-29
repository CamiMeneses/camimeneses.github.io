import React from 'react'
import styled from "styled-components";
import Typewriter from 'typewriter-effect';

const MyTitleMessage = styled.h6`
  position: absolute;
  width: 90%;
  top: 10vw;
  z-index: 1;
  padding-left: 3em;
  text-align: left;
  text-shadow: 2px 4px 0px #ff4a4a, 4px 6px 0px rgba(255, 225, 76, 0.733);
  div {
    color: #FFFFFF;
    font-size: 2em;
    font-size: 5vw;
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
          strings: ['Hola! <br/> Bienvenid@ a mi página web ', 'Soy <br/>Camila Meneses ',
                    'Conoce más acerca de mi ', 'Hello! <br/> Welcome to my website',
                    "I'm <br/>Camila Meneses ", 'Know more about me',],
          autoStart: true,
          loop: true,
          delay: 90,
          cursor: '|',
          deleteSpeed: 1
          }}
        />
      </div>
    </MyTitleMessage>
  );
};

export default TitleMessage
