import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Slide1 from "../../assets/img/carousal/slider1.webp"
import Slide2 from "../../assets/img/carousal/slider2.mp4"
import Slide3 from "../../assets/img/carousal/slider3.webp"
import ScrollDown from "../scroll-down/scroll-down.component"

import "./my-carousal.style.css";

const MyCarousal = () => {
  return (
    <div id="home">
      {/*<Carousel controls={false} indicators interval={2500} pauseOnHover={false}>*/}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*<ScrollDown />*/}
    </div>
  );
};

export default MyCarousal;
