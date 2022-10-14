import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.css";

import Nav from "./Components/Main/Nav/Nav";
import ProductDetailsPage from "./Dynamic-Pages/ProductDetailsPage";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Landing />} />

          {/* Dynamic Routes Start */}
          <Route path={"/Details/:id"} element={<ProductDetailsPage />} />
          {/* Dynamic Routes End */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
