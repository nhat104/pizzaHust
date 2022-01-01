import React, { useState } from 'react';
import './Slider.css';
import BtnSlider from './BtnSlider';
import { v4 } from 'uuid';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          >
            <img
              style={{ width: '100%' }}
              src={process.env.PUBLIC_URL + `${obj.srcImg}`}
              alt=""
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
}

const dataSlider = [
  {
    id: v4(),
    srcImg: 'banner/banner1.png',
  },
  {
    id: v4(),
    srcImg: 'banner/banner2.png',
  },
  {
    id: v4(),
    srcImg: 'banner/banner3.png',
  },
  {
    id: v4(),
    srcImg: 'banner/banner4.png',
  },
  {
    id: v4(),
    srcImg: 'banner/Delivery2.png',
  },
];
