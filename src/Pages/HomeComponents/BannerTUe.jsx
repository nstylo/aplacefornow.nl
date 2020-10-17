import React from "react"
import styled from "styled-components"

import UBannerImage from "../../Assets/Home/BannerPicture4.png"
import SmallBannerImage from "../../Assets/Home/uni_phone.png"
import {ReactComponent as UTUeLogo} from "../../Assets/Home/TUe logo.svg"

import {Button} from "../../lib/Button.jsx"

import {Container} from "./BannerComponents/BannerContainer"
import {BannerImage} from "./BannerComponents/BannerImageStyle"
import {BackgroundGradient} from "./BannerComponents/BannerBackgroundGradient"
import {SideRectangle} from "./BannerComponents/BannerSideRectangle"
import {Title} from "./BannerComponents/BannerTitle"

import { breakpoints } from "../../theme"

function BannerTUe() {
  return (
  <Container >
    <picture>
      <source media="(max-width: 480px)" srcset={SmallBannerImage}/>
      <source media="(min-width: 481px)" srcset={UBannerImage}/>
      <BannerImage src={UBannerImage}/>
    </picture>

    <BackgroundGradient src={BackgroundGradient}/>
        
    <TUeTitle>A SERVICE ENDORSED <br/> BY UNIVERSITIES</TUeTitle> 
    <TUeLogo/>
    <SideRectangle/>
  </Container>
  )
}

const TUeLogo = styled(UTUeLogo)`
position: absolute;
left: 3.79%;
right: 56.36%;
top: 64%;
bottom: 21.53%;
width: 29.75vw;

@media (max-width: ${breakpoints.md}px) {
  right: 66.88%;
  top: 59%;
  bottom: 25.34%;
}

@media (max-width: ${breakpoints.mds}px) {
  top: 55%;
}

@media (max-width: ${breakpoints.xs}px) {
  width:55vw;
  left: initial;
  right: initial;
}

`

const TUeTitle = styled(Title)`
/* A SERVICE ENDORSED BY UNIVERSITIES */

position: absolute;
left: 3.79%;
right: 47.29%;
top: 34.25%;
bottom: 36%;

width:100%;
height: auto;

@media (max-width: ${breakpoints.xs}px) {
  left:0px;
  right:0px;
}
}
`

export default BannerTUe