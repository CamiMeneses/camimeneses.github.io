import React from 'react'
import Typewriter from 'typewriter-effect';
import "./title-message.style.scss";

const TitleMessage = () => {
  return (
    <div className="message">
      <Typewriter
        options={{
        strings: ["Hello! <br/> I'm <contrast> Camila Meneses </contrast> ",
                  'Welcome to my <contrast> website </contrast>', 'Know more <contrast> about me <contrast> '],
        autoStart: true,
        loop: true,
        delay: 20,
        cursor: '|',
        deleteSpeed: 0.5
        }}
      />
    </div>
  );
};

export default TitleMessage
