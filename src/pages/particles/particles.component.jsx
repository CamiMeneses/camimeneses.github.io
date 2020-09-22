import React from 'react'
import styled from "styled-components";
import ParticlesBg from "particles-bg";
import "./particles.style.scss";

const Particles = () => {
  return(
    <div className='Particles'>
      <ParticlesBg color="#000000" num={500} type="lines" />
    </div>
  );
};

export default Particles;
