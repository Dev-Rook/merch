import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Swiper-Styles/Placeholder-Swiper-Styles/PlaceholderSliderStyles.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import PlaceholderData from "../../Components/Data/Placeholder-Slider-Data/PlaceholderSliderData.json";

const PlaceholderSlide = () => {
  const [data, setData] = useState(PlaceholderData);

  return (
    <div className={Styles.Slider_Container}>
      <Swiper
        speed={1000}
        spaceBetween={10}
        modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        className={Styles.Swiper}
        breakpoints={{
            360: {
              width: 360,
              slidesPerView: 1,
              spaceBetween: 10,
            },
            380: {
              width: 380,
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            480: {
              width: 480,
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1920: {
              width: 1920,
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
      >
        {data &&
          data.map((items) => {
            return (
              <SwiperSlide className={Styles.Slide} key={items.id}>
                <div className={Styles.Card}>
                  <div className={Styles.Top}>
                    <img
                      src={items.large_image}
                      alt=""
                      className={Styles.Image}
                    />
                  </div>

                  <div className={Styles.Bottom}>
                    <div className={Styles.Image__Placeholder}>
                      <div className={Styles.Image_Container}>
                        <img
                          src={items.small_image}
                          alt=""
                          className={Styles.Tiny_Image}
                        />
                      </div>

                      <p className={Styles.Placeholder_Text}>
                        Placeholder
                      </p>
                    </div>

                    <div className={Styles.Three_Dots_Container}>
                        <div className={Styles.Dot}></div>
                        <div className={Styles.Dot}></div>
                        <div className={Styles.Dot}></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default PlaceholderSlide;
