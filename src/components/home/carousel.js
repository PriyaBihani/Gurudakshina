import React from "react";
import "./css/homeContent.css";

const carousel = props => {
  const { imagesUrl } = props;
  if (imagesUrl) {
    console.log(imagesUrl[0]);
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide container-xl mt-3 mb-3"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {imagesUrl[0] ? (
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={imagesUrl[0].imageUrl}
                alt="First slide"
              />
            </div>
          ) : null}
          {imagesUrl[1] ? (
            <div className="carousel-item ">
              <img
                className="d-bloc w-100"
                src={imagesUrl[1].imageUrl}
                alt="second slide"
              />
            </div>
          ) : null}
          {imagesUrl[2] ? (
            <div className="carousel-item ">
              <img
                className="d-bloc w-100"
                src={imagesUrl[2].imageUrl}
                alt="Third slide"
              />
            </div>
          ) : null}
          {imagesUrl[3] ? (
            <div className="carousel-item ">
              <img
                className="d-bloc w-100"
                src={imagesUrl[3].imageUrl}
                alt="Fourth slide"
              />
            </div>
          ) : null}
          {imagesUrl[4] ? (
            <div className="carousel-item ">
              <img
                className="d-bloc w-100"
                src={imagesUrl[4].imageUrl}
                alt="Fifth slide"
              />
            </div>
          ) : null}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  } else {
    return null;
  }
};

export default carousel;
