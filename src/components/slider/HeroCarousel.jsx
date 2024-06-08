import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroCarousel.css'; // For custom styling

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src="https://img.freepik.com/free-photo/side-view-woman-with-headphones-running_23-2148419832.jpg?size=626&ext=jpg&ga=GA1.1.1631200661.1710473064&semt=ais_user" alt="Slide 1" />
          <div className="carousel-caption">
            <h1>Slide 1 Title</h1>
            <p>Slide 1 Description</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="https://img.freepik.com/premium-photo/young-athletic-african-american-man-trains-dark-gym-athletic-guy-lifts-heavy-dumbbells_164411-4585.jpg?w=900" alt="Slide 2" />
          <div className="carousel-caption">
            <h1>Slide 2 Title</h1>
            <p>Slide 2 Description</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="https://img.freepik.com/free-photo/athletic-man-practicing-gymnastics-keep-fit_23-2150989809.jpg?t=st=1717857023~exp=1717860623~hmac=be90c8cc7f5083f6e96291323a4ce520acf20186c60160545b7329ab34144b72&w=740" />
          <div className="carousel-caption">
            <h1>Slide 3 Title</h1>
            <p>Slide 3 Description</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;