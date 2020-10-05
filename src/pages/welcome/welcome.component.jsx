import React from 'react'
import "./welcome.style.scss";
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/profile.jpg'


function Welcome(props){
  return(
    <div className='section' id='welcome'>
      {props.children}
    </div>
  );
};

export default Welcome;
