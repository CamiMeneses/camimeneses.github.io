import React from 'react'
import ParticlesBg from "particles-bg";
import "./particles.style.scss";

const Particles = () => {

  return(
    <div className='Particles'>
      <ParticlesBg type="lines" num={100} bg={true}/>
    </div>
  );
};

export default Particles;
