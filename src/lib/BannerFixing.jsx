import React from "react"
import styled from "styled-components"
import UBannerImage from "../Assets/Home/BannerPicture2.png"
import {Button} from "./Button.jsx"
import {Container} from "./BannerComponents/BannerContainer"
import {BannerImage} from "./BannerComponents/BannerImageStyle"
import {BackgroundGradient} from "./BannerComponents/BannerBackgroundGradient"
import {SideRectangle} from "./BannerComponents/BannerSideRectangle"
import {Title} from "./BannerComponents/BannerTitle"

import { breakpoints } from "../theme"

function BannerFixing() {
  return (
  <Container>
    <BannerImage src={UBannerImage}/>
    <BackgroundGradient src={BackgroundGradient}/>
        
    <FixingTitle>FIXING ISSUES ONE STUDENT <br/> AT A TIME</FixingTitle> 
    <NewButton style={{minWidth: '206px', minHeight: '40px'}}>Browse our offers</NewButton>
    <SideRectangle/>

  </Container>
  )
}

const NewButton = styled(Button)`
position: absolute;
left: 3.79%;
right: 81.5%;
top: 64.12%;
bottom: 30.88%;

border: 1.5px solid #FFFFFF;
box-sizing: border-box;
border-radius: 20px;

font-family: Karla;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

@media (max-width: ${breakpoints.xs}px) {
  left:initial;
  right:initial;
  top: 61vh;
  bottom: 33vh;
}
`

const FixingTitle = styled(Title)`
/* FIXING ISSUES ONE STUDENT AT A TIME */

position: absolute;
left: 3.79%;
right: 26.5%;
top: 34.25%;
bottom: 36%;

@media (max-width: ${breakpoints.xs}px) {
  left:0px;
  right:0px;
}

`


export default BannerFixing