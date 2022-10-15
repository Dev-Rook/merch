import React from 'react'
import Styles from "../../Styles/Page-Styles/Landing/Landing.module.css"

import HeroBoardSlide from '../../Components/Swiper/HeroBoardSlide'
import PlaceholderSlide from '../../Components/Swiper/PlaceholderSlide'
import MensDataSlider from '../../Components/Swiper/MensDataSlider'
import WomensDataSlider from '../../Components/Swiper/WomensDataSlider'
import ElectronicsDataSlider from '../../Components/Swiper/ElectronicsDataSlider'
import JeweleryDataSlider from '../../Components/Swiper/JeweleryDataSlider'

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <HeroBoardSlide />
      <PlaceholderSlide />
      <MensDataSlider />
      <WomensDataSlider />
      <ElectronicsDataSlider />
      <JeweleryDataSlider />
    </div>
  )
}

export default Landing