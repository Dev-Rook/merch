import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Styles from "../Styles/Dynamic-Page-Styles/Details-Page-Styles/DetailsPageStyles.module.css";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import MensDataSlider from "../Components/Swiper/MensDataSlider";
import PlaceholderSlide from "../Components/Swiper/PlaceholderSlide";

const MensProductDetailsPage = () => {
  const { id } = useParams();

  const [details, setDetails] = useState({});

  const url = `https://fakestoreapi.com/products/${id}`;

  const getProductDetails = useCallback(async () => {
    try {
      const results = await axios.get(url);
      console.log(results);
      setDetails(results.data);
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  useEffect(() => {
    getProductDetails();
  }, [getProductDetails]);

  return (
    <div className={Styles.Page}>
      <Link to={"/"}>
        <CancelPresentationIcon
          sx={{ color: "red", fontSize: 50 }}
          className={Styles.Return_Arrow}
        />
      </Link>
      <div className={Styles.Header}>
        <img src={details.image} alt="" className={Styles.Header_Image} />
        <div className={Styles.Diffuser}></div>
        <div className={Styles.Product_Information_Box}>
          <div className={Styles.Image_Container}>
            <img src={details.image} alt="" className={Styles.Image} />
          </div>

          <div className={Styles.Information}>
            <h3 className={Styles.Title}>{details?.title}</h3>
            <div className={Styles.Price__Rating}>
              <p>${details?.price}</p>
              <p>{details?.rating?.rate} ⭐</p>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.Order__Circles}>
        <button className={Styles.Order_Button}>Order</button>

        <div className={Styles.Circle_Container}>
          <div className={Styles.Circle}></div>
          <div className={Styles.Circle}></div>
          <div className={Styles.Circle}></div>
        </div>
      </div>

      <div className={Styles.Descrption_Box}>
        <h3 className={Styles.Title}>
          About this product{" "}
          <ArrowRightIcon sx={{ color: "black", fontSize: 30 }} />
        </h3>

        <p className={Styles.Description}>{details.description}</p>
      </div>

      <MensDataSlider />

      <PlaceholderSlide />
    </div>
  );
};

export default MensProductDetailsPage;
