import React from "react"
import styled from "styled-components"

import BannerWelcome from "./HomeComponents/BannerWelcome.jsx"
import BannerFixing from "./HomeComponents/BannerFixing.jsx"
import BannerWinner from "./HomeComponents/BannerWinner.jsx"
import BannerTUe from "./HomeComponents/BannerTUe.jsx"
import HomeContent from "./HomeComponents/HomeContent"

import UScrollDownIcon from '../Assets/Home/ScrollDownIcon.png';

import { breakpoints } from "../theme"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Button} from "../lib/Button.jsx"

export default () => {
  return (
  <Home>
  <HomeBanner>
    <MyCarousel showArrows={false} autoplay={true} stopOnHover={false} swipeable={true} showStatus={false}>
      <div>
        <BannerWelcome/>
      </div>

      <div>
        <BannerTUe/>
      </div>

      <div>
        <BannerFixing/>
      </div>

      <div>
        <BannerWinner/>
      </div>
    </MyCarousel>

    <ScrollDownIcon src={UScrollDownIcon}/>

  </HomeBanner>
  <HomeContent/>
  </Home>
  )
}

const ScrollDownIcon = styled.img`
position: relative; 
left: 50%; 
right: 50%; 
height: 9px;
width: 16px;
scale: 4; 
top: -12vh; 

@media (max-width: ${breakpoints.md}px) {
  height: 6px; 
  width: 10.67px; 
}

@media (max-width: ${breakpoints.xs}px) {
  height: 4.5px; 
  width: 8px; 
}
`
const HomeBanner = styled.div.attrs({className: "home-banner"})`
  position: absolute;
  width: 100vw;
  height: 100vh;
`

const Home = styled.div.attrs({className: "home"})`
position: relative;
display: flex;
justify-content: center;
background: #FFFFFF;
`

const MyCarousel = styled(Carousel)`

.carousel-root {
  width: inherit;
  height: inherit;
  justify-content: start;
}

.carousel.carousel-slider {
  overflow: ;
}

.carousel .slider-wrapper {
  margin: 0;
  height: 100%;
}

.carousel .slide {
  height: 100vh;
}

.carousel .thumbs-wrapper {
  margin: 0;
  width: ;
  height: 0px;
}

.carousel * {
  box-sizing: inherit;
}

.carousel img {
  width: ;
}

.carousel .slide img {
  height: 100vh;
  width: 100vw
}

div.carousel:nth-child(1) {
  height: 100%;
}

.carousel .control-dots {
  text-align: end;
}

.control-dots {
  right: 5.3vw;
  bottom: 5.9vh;
}

@media (max-width: ${breakpoints.xs}px) {
  .control-dots {
    right: -10.7vw;
    scale: 0.7;
    bottom: 1vh;
  }

  .carousel .slide img {
    height: initial;
    width: 100vw;
  }
}

`
