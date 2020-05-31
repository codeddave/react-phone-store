import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Logo from "../img/phonecarousel1.JPG";
import img2 from "../img/carouselimage6.jpg";

import img3 from "../img/carouselimage4.jpg";
import img4 from "../img/carouselimage3.jpg";
import img5 from "../img/carouselimage2.jpg";
import "./Carouselss.css";

export default function Carousels() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselimage"
            src={Logo}
            alt="First slide"
            style={{ height: "370px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselimage"
            src={img2}
            alt="Third slide"
            style={{ height: "370px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselimage"
            src={img3}
            alt="Third slide"
            style={{ height: "370px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselimage"
            src={img4}
            alt="Third slide"
            style={{ height: "370px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselimage"
            src={img5}
            alt="Third slide"
            style={{ height: "370px" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
