import React from 'react'
import "./welcome.style.scss";
import Image from 'react-bootstrap/Image'
import Yema from '../../assets/img/yema.png'
import Profile from '../../assets/img/profile/profile.png'

function Welcome(props){
  return(
    <div className="section" id='welcome'>
      <div id="yema-welcome">
        <Image className='' alt='profile' src={Profile} roundedCircle fluid />
      </div>
      <Image id='yemaImage' alt='profile' src={Yema} fluid />
    </div>
  );
};

export default Welcome;
