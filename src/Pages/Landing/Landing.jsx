import React from "react";
import { CSSProperties } from "react";
import Styles from "../../Styles/Page-Styles/Landing/Landing.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import ScaleLoader from "react-spinners/ScaleLoader";

import HeroBoardSlide from "../../Components/Swiper/HeroBoardSlide";
import PlaceholderSlide from "../../Components/Swiper/PlaceholderSlide";
import MensDataSlider from "../../Components/Swiper/MensDataSlider";
import WomensDataSlider from "../../Components/Swiper/WomensDataSlider";
import ElectronicsDataSlider from "../../Components/Swiper/ElectronicsDataSlider";
import JeweleryDataSlider from "../../Components/Swiper/JeweleryDataSlider";

import useAxios from "../../Hooks/useAxios";

const Landing = () => {
  const url = `https://fakestoreapi.com/products/category/electronics`;
  const { data, loading, error } = useAxios(url);

  const override  = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className={Styles.Page}>
      <HeroBoardSlide />
      <div className={Styles.Temporary}>
        <h1>useAxios Hook Data:</h1>
        {loading && (
          <ScaleLoader
            color={"red"}
            loading={loading}
            cssOverride={override}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        <p>{data && data[1]?.title}</p>
        <p>{data && data[1]?.category}</p>
        <p>{data && data[1]?.description}</p>
        <img src={data && data[1]?.image} alt="" />
        {error && <h3>Something went wrong..</h3>}
      </div>
      <PlaceholderSlide />
      <MensDataSlider />
      <WomensDataSlider />
      <ElectronicsDataSlider />
      <JeweleryDataSlider />
    </div>
  );
};

export default Landing;
