import React , {useState} from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Slider.css'

const images = [
    { url: "images/img1.jpg" },
    { url: "images/img2.jpg" },
    { url: "images/img3.jpg" },
    { url: "images/img4.jpg" },
  ];
  function Slider  ()  {
    return (
        <>
      <div className="slide-container">
      <AliceCarousel autoPlay autoPlayInterval="2000"  infinite="true">
      <img src="images/img1.jpg" className="sliderimg"/>
      <img src="images/img2.jpg" className="sliderimg"/>
      <img src="images/img3.jpg" className="sliderimg"/>
      <img src="images/img4.jpg" className="sliderimg"/>
</AliceCarousel>
      </div>
      </>
    );
  }
export default Slider