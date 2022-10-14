import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Swiper-Styles/Hero-Board-Swiper-Styles/HeroBoardSwiperStyles.module.css";

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

import HeroBoard from "../../Components/Data/Hero-Board-Data/HeroBorad.json";

const HeroBoardSlide = () => {
  const [data, setData] = useState(HeroBoard);

  return (
    <div className={Styles.Slider_Container}>
      <Swiper
        speed={1000}
        slidesPerView={1}
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
      >
        {data &&
          data.map((items) => {
            return <SwiperSlide className={Styles.Slide} key={items.id}>
                <div className={Styles.Card}>
                    <img src={items.image} alt="" className={Styles.Image} />
                </div>
            </SwiperSlide>;
          })}
      </Swiper>
    </div>
  );
};

export default HeroBoardSlide;
