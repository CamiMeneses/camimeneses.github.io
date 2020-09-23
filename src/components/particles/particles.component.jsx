import React from 'react'
import styled from "styled-components";
import ParticlesBg from "particles-bg";
import icon from "../../assets/icons/icon.jpg";
import "./particles.style.scss";

const Particles = () => {

  let config = {
    num: [0, 1],
    rps: 0.2,
    radius: [100, 10],
    life: [100, 100],
    v: [1, 2],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [.1, 0.1],
    body: icon,
    position: "all",
    cross: "dead",
    random: 1
  };

  return(
    <div className='Particles'>
      <ParticlesBg type="custom" color="#f731f7" config={config} bg={true}/>
    </div>
  );
};

export default Particles;
