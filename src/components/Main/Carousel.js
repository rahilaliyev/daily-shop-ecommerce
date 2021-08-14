import React from "react";
import Carousel from "react-bootstrap/Carousel";
  import "bootstrap/dist/css/bootstrap.min.css";
import CarouselPhoto1 from "../../assets/CarouselPhoto1.jpg";
import CarouselPhoto2 from "../../assets/CarouselPhoto2.jpg";
import CarouselPhoto3 from "../../assets/CarouselPhoto3.jpg";
import "./Carousel.scss";

const CarouselItem = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item interval={2000}>
          <div className="carousel-photo">
            <img
              className="d-block w-100"
              src={CarouselPhoto1}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <span>Save up to 40%</span>
            <h2>WRISTWATCH COLLECTION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
              illum.
            </p>
            <button>Shop now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="carousel-photo">
            <img
              className="d-block w-100"
              src={CarouselPhoto2}
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <span>Save up to 75%</span>
            <h2>JEANS COLLECTION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
              illum.
            </p>
            <button>Shop now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="carousel-photo">
            <img
              className="d-block w-100"
              src={CarouselPhoto3}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <span>Save up to 75%</span>
            <h2>EXCLUSIVE SHOES</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
              illum.
            </p>
            <button>Shop now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselItem;
