import React from "react"

import styled from "styled-components"
import BannerWelcome from "../lib/BannerWelcome.jsx"
import BannerFixing from "../lib/BannerFixing.jsx"
import BannerWinner from "../lib/BannerWinner.jsx"
import BannerTUe from "../lib/BannerTUe.jsx"

import { breakpoints } from "../theme"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default () => {
  return (
  <Home>
  <HomeBanner>
    <MyCarousel showArrows={false} autoplay={true} stopOnHover={false} swipeable={true}>
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
  </HomeBanner>
  </Home>
  )
}

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

`
