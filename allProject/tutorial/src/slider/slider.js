import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HorizontalCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/images/11.jpg" alt="Product 1" />
      </div>
      <div>
        <img src="/images/12.jpg" alt="Product 2" />
      </div>
      <div>
        <img src="/images/13.jpg" alt="Product 3" />
      </div>  <div>
        <img src="/images/13.jpg" alt="Product 3" />
      </div>  <div>
        <img src="/images/13.jpg" alt="Product 3" />
      </div>  <div>
        <img src="/images/13.jpg" alt="Product 3" />
      </div>  <div>
        <img src="/images/13.jpg" alt="Product 3" />
      </div>  <div>
        <img src="/images/13.jpg" alt="Product 3" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default HorizontalCarousel;