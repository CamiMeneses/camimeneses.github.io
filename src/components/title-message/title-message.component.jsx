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
  text-shadow: 2px 2px 1px #ff4a4a, 4px 4px 1px #faf4a5;
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
  contrast{
    color: #5a2cff;
    text-shadow: 2px 2px 1px #ff4a4a, 4px 4px 1px #AFE4D9;
  }
`;

const TitleMessage = () => {
  return (
    <MyTitleMessage>
      <div className="sub">
        <Typewriter
          options={{
          strings: ['Hola! <br/> <br/> Soy <br/><contrast> Camila Meneses </contrast>', 'Bienvenid@ a <contrast> mi página web </contrast> ',
                    'Conoce más <contrast> acerca de mi </contrast> ', "Hello! <br/> <br/> I'm <br/> <contrast> Camila Meneses </contrast> ",
                    'Welcome to my <contrast> website </contrast>', 'Know more <contrast> about me <contrast> '],
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
