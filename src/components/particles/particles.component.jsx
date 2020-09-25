import React from 'react'
import ParticlesBg from "particles-bg";
import icon from "../../assets/icons/icon.png";
import "./particles.style.scss";

const Particles = () => {

  let config = {
    num: [1, 4],
    rps: 0.8,
    radius: [100, 10],
    life: [20, 3],
    v: [0.1, 0.1],
    tha: [-80, 80],
    alpha: [1, 0],
    scale: [.08, 0.1],
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
