import React from 'react'
import "./welcome.style.scss";

function Welcome(props){
  return(
    <div className='section' id='welcome'>
      {props.children}
    </div>
  );
};

export default Welcome;
