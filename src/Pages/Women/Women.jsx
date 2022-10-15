import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Styles from "../../Styles/Page-Styles/Global-Page-Styles/GlobalPageStyles.module.css";

import PlaceholderSlide from "../../Components/Swiper/PlaceholderSlide";
import ElectronicsDataSlider from "../../Components/Swiper/ElectronicsDataSlider";
import MensDataSlider from "../../Components/Swiper/MensDataSlider";
import JeweleryDataSlider from "../../Components/Swiper/JeweleryDataSlider";

const Women = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(4);

  const viewMore = () => {
    setVisible((prev) => prev++);
  };

  const url = `https://fakestoreapi.com/products/category/women's%20clothing`;

  const getMensData = useCallback(async () => {
    const result = await axios.get(url);
    setData(result.data);
    console.log(result.data);
  }, [url]);

  useEffect(() => {
    getMensData();
  }, [getMensData]);

  return (
    <div className={Styles.Page}>
      <div className={Styles.Header_Image_Container}>
        <img src="" alt="" className={Styles.Header_Image} />
      </div>

      <div className={Styles.Page_Title}>Women</div>

      <PlaceholderSlide />

      <div className={Styles.Pagintaion_Container}>
        {data &&
          data.slice(0, visible).map((value) => {
            return (
              <Link to={"/Men Products/" + value.id} key={value.id}>
                <div className={Styles.Card}>
                  <div className={Styles.Product_Image_Container}>
                    <img
                      src={value.image}
                      alt=""
                      className={Styles.Product_Image}
                    />
                  </div>

                  <div className={Styles.Information_Box}>
                    <h3 className={Styles.Large_Text}>
                      {value?.title.slice(0, 30)}..
                    </h3>
                    <h3 className={Styles.Category}>{value?.category}</h3>
                    <h3 className={Styles.Description}>
                      {value.description.slice(0, 100)}...
                    </h3>

                    <div className={Styles.Price__Rating}>
                      <p className={Styles.Small_Text}>${value?.price}</p>
                      <p className={Styles.Small_Text}>
                        {value?.rating?.rate}⭐
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

        <button onClick={viewMore} className={Styles.More_Button}>
          View More
        </button>
      </div>

      <div className={Styles.Page_Title}>Other Categories</div>

      <ElectronicsDataSlider />
      <MensDataSlider />
      <JeweleryDataSlider />
    </div>
  );
};

export default Women;