import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.css";

import Nav from "./Components/Main/Nav/Nav";
import Landing from "./Pages/Landing/Landing";

import MensProductDetailsPage from "./Dynamic-Pages/MensProductDetailsPage";
import WomensProductDetails from "./Dynamic-Pages/WomensProductDetails";
import ElectronicsProductDetails from "./Dynamic-Pages/ElectronicsProductDetails";
import JeweleryProductDetails from "./Dynamic-Pages/JeweleryProductDetails";

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Landing />} />

          {/* Dynamic Routes Start */}
          <Route path={"/Men Products/:id"} element={<MensProductDetailsPage />} />
          <Route path={"/Women Products/:id"} element={<WomensProductDetails />} />
          <Route path={"/Electronic Products/:id"} element={<ElectronicsProductDetails />} />
          <Route path={"/Jewelery Products/:id"} element={<JeweleryProductDetails />} />
          {/* Dynamic Routes End */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
