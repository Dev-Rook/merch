import React from 'react'
import Styles from "../../Styles/Page-Styles/Landing/Landing.module.css"

import HeroBoardSlide from '../../Components/Swiper/HeroBoardSlide'
import PlaceholderSlide from '../../Components/Swiper/PlaceholderSlide'
import MensDataSlider from '../../Components/Swiper/MensDataSlider'

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <HeroBoardSlide />
      <PlaceholderSlide />
      <MensDataSlider />
    </div>
  )
}

export default Landing