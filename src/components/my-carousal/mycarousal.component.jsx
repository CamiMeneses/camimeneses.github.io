import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Slide1 from "../../assets/img/carousal/slider1.webp"
import Slide2 from "../../assets/img/html.gif"
import Slide3 from "../../assets/img/css.gif"
import ScrollDown from "../scroll-down/scroll-down.component"
import Ruby from '../../assets/img/ruby.gif'

import "./my-carousal.style.scss";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
        <Carousel.Item className="carousel-box">
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <img id='img-skill-ruby' alt='ruby' src={Ruby}/>
            <h3 className="slider-caption">Ruby on Rails</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-box">
          <img
            className="d-block w-100 custom-img"
            src={Slide2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="slider-caption">HTML</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-box">
          <img
            className="d-block w-100 custom-img"
            src={Slide3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="slider-caption">CSS</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*<ScrollDown />*/}
    </div>
  );
};

export default MyCarousal;
