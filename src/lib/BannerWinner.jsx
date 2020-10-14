import React from "react"
import styled from "styled-components"
import UBannerImage from "../Assets/Home/BannerPicture3.png"
import {Button} from "./Button.jsx"
import {Container} from "./BannerComponents/BannerContainer"
import {BannerImage} from "./BannerComponents/BannerImageStyle"
import {BackgroundGradient} from "./BannerComponents/BannerBackgroundGradient"
import {SideRectangle} from "./BannerComponents/BannerSideRectangle"
import {Title} from "./BannerComponents/BannerTitle"

import { breakpoints } from "../theme"

function BannerWinner() {
  return (
  <Container>
    <NewBannerImage src={UBannerImage}/>
    <BackgroundGradient src={BackgroundGradient}/>
        
    <NewButton style={{minWidth: '160px' , minHeight: '40px'}}>Read more</NewButton>
    <WinnerTitle>TU/E CONTEST <br/> AUDIENCE AWARD WINNER</WinnerTitle> 
    <SideRectangle/>
  </Container>
  )
}

const NewBannerImage = styled(BannerImage)`
margin: 0px;
`

const NewButton = styled(Button)`
position: absolute;
left: 3.79%;
right: 84.79%;
top: 64%;
bottom: 31%;

font-family: Karla;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;

border: 1.5px solid #FFFFFF;
box-sizing: border-box;
border-radius: 20px;

color: #FFFFFF;

@media (max-width: ${breakpoints.xs}px) {
  left:initial;
  right:initial;
  top: 61vh;
  bottom: 33vh;
}
`

const WinnerTitle = styled(Title)`
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

export default BannerWinner