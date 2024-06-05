import React from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import Ecommerce from '../../img/ecommerce.png';
import MusicApp from '../../img/musicapp.png';
import ObjectRecognition from '../../img/object-recognition.png';
import InstagramClone from '../../img/instagram-clone.png';
import { themeContext } from "../../Context";
import { useContext } from "react";
import 'swiper/css'

const Portfolio = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
        <span style={{color: darkMode? 'black': ''}}>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">
            <SwiperSlide>
                <a href='https://github.com/PrimeRin/TraditionalBhutaneseWood-CaneDetectionWebApp?tab=readme-ov-file'>
                <img src={ObjectRecognition} alt="" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
            <a href='https://github.com/PrimeRin/instagram-clone'>
            <img src={InstagramClone} alt="" />
                </a>    
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ecommerce} alt="" />  
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio