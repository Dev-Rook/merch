import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Styles from "../../Styles/Swiper-Styles/Data-Slider-Styles/DataSlider.module.css";

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

const ElectronicsDataSlider = () => {
  const [data, setData] = useState([]);

  const url = `https://fakestoreapi.com/products/category/electronics`;


  const getProductData = useCallback(async () => {
    try {
      const results = await axios.get(url);
      console.log(results);
      setData(results.data);
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  useEffect(() => {
    getProductData();
  }, [getProductData]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={Styles.Slider_Container}>
      <h3 className={Styles.Slider_Title}>Electronics</h3>
      <Swiper
        speed={1000}
        // spaceBetween={10}
        modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
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
            spaceBetween: 50,
          },
          380: {
            width: 380,
            slidesPerView: 1,
            spaceBetween: 50,
          },
          480: {
            width: 480,
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1920: {
            width: 1920,
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {data &&
          data.map((value) => {
            return (
              <SwiperSlide key={value?.id}>
                <Link onClick={scrollUp} to={"/Electronic Products/" + value.id}>
                  <div className={Styles.Card}>
                    <div className={Styles.Image_Container}>
                      <img src={value?.image} alt="" className={Styles.Image} />
                    </div>

                    <div className={Styles.Information_Box}>
                      <h3 className={Styles.Large_Text}>{value?.title.slice(0, 30)}..</h3>
                      <h3 className={Styles.Category}>{value?.category}</h3>
                      <h3 className={Styles.Description}>{value.description.slice(0, 100)}...</h3>

                      <div className={Styles.Price__Rating}>
                        <p className={Styles.Small_Text}>${value?.price}</p>
                        <p className={Styles.Small_Text}>{value?.rating?.rate}⭐</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ElectronicsDataSlider;
