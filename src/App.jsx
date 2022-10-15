import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.css";

import NavigationIcon from '@mui/icons-material/Navigation';

import Nav from "./Components/Main/Nav/Nav";
import Landing from "./Pages/Landing/Landing";
import Electronics from "./Pages/Electronics/Electronics";
import Men from "./Pages/Men/Men";
import Women from "./Pages/Women/Women";
import Jewelery from "./Pages/Jewelery/Jewelery";


import MensProductDetailsPage from "./Dynamic-Pages/MensProductDetailsPage";
import WomensProductDetails from "./Dynamic-Pages/WomensProductDetails";
import ElectronicsProductDetails from "./Dynamic-Pages/ElectronicsProductDetails";
import JeweleryProductDetails from "./Dynamic-Pages/JeweleryProductDetails";

function App() {

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"Men"} element={<Men />} />
          <Route path={"Women"} element={<Women />} />
          <Route path={"Electronics"} element={<Electronics />} />
          <Route path={"Jewelery"} element={<Jewelery />} />

          {/* Dynamic Routes Start */}
          <Route path={"/Men Products/:id"} element={<MensProductDetailsPage />} />
          <Route path={"/Women Products/:id"} element={<WomensProductDetails />} />
          <Route path={"/Electronic Products/:id"} element={<ElectronicsProductDetails />} />
          <Route path={"/Jewelery Products/:id"} element={<JeweleryProductDetails />} />
          {/* Dynamic Routes End */}
        </Routes>
      </BrowserRouter>

      <NavigationIcon
          onClick={scrollUp}
          sx={{fontSize: 30, color: "black"}}
          className={`${Styles.Back_To_Top_Icon} ${backToTop? Styles.Show_Back_To_Top : ""}`}
        />

    </div>
  );
}

export default App;
