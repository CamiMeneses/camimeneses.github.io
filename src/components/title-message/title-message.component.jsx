import React from 'react'
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import "./title-message.style.scss";

const TitleMessage = () => {
  return (
    <div className="message">
      <Typewriter
        options={{
        strings: ['Hola! <br/> <br/> Soy <contrast> Camila Meneses </contrast>', 'Bienvenid@ a <contrast> mi página web </contrast> ',
                  'Conoce más <contrast> acerca de mi </contrast> ', "Hello! <br/> I'm <contrast> Camila Meneses </contrast> ",
                  'Welcome to my <contrast> website </contrast>', 'Know more <contrast> about me <contrast> '],
        autoStart: true,
        loop: true,
        delay: 90,
        cursor: '|',
        deleteSpeed: 1
        }}
      />
    </div>
  );
};

export default TitleMessage
