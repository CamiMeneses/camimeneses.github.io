import React from 'react'
import ParticlesBg from "particles-bg";
import icon from "../../assets/icons/burbuja.png";
import "./particles.style.scss";

const Particles = () => {

  let config = {
    num: [4, 4],
    rps: 0.1,
    radius: [200, 100],
    life: [5, 40],
    v: [1, 0.1],
    tha: [-90, 80],
    alpha: [1, 0],
    scale: [.08, 0.1],
    body: icon,
    position: "all",
    cross: "dead",
    random: 1
  };

  return(
    <div className='Particles'>
      <ParticlesBg type="lines" num={100} config={config} bg={true}/>
    </div>
  );
};

export default Particles;
