import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './RideLandingPageTwo.css';
import walletImg from './fi_855279.svg';
import workImg from './fi_463250.svg';
import incentiveImg from './fi_545885.svg';

export default function RideLandingPageTwo() {
  const images = [walletImg, workImg, incentiveImg];
  const text = [
    'Flexible Earning Opportunities',
    'Supportive Work Environments',
    'Incentive Programs',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div id="ride-landing-page-two">
      <div className="carousel-container">
        <div>
        <Carousel
          showStatus={false}
          showThumbs={false}
          selectedItem={activeIndex}
          interval={3000} // Change image every 3 seconds (adjust as needed)
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <div className="image-container">
                <img src={image} alt={text[index]} />
              </div>
              <div>
              {text[index]}
              </div>

              <div className="dot-indicators">
          {images.map((_,index) => (
            <div
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
          ></div>
          ))}
        </div>
            </div>
          ))}

        </Carousel>
        
        </div>
    </div>

    </div>
  );
}
