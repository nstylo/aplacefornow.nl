import React from "react"
import styled from "styled-components"
import UBannerImage from "../Assets/Home/BannerPicture2.png"
import {ReactComponent as UArrowVector} from "../Assets/Home/Vector.svg"
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
        
    <FixingTitle>FIXING ISSUES ONE STUDENT AT A TIME</FixingTitle> 
    <NewButton style={{minWidth: '206px'}}>Browse our offers</NewButton>
    <ArrowVector src={ArrowVector}/>
    <SideRectangle/>

  </Container>
  )
}

const NewButton = styled(Button)`
position: absolute;
left: 3.79%;
right: 81.5%;
top: 67.12%;
bottom: 27.88%;

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
`

const FixingTitle = styled(Title)`
/* FIXING ISSUES ONE STUDENT AT A TIME */

position: absolute;
left: 3.79%;
right: 26.5%;
top: 34.25%;
bottom: 36%;

`

const ArrowVector = styled(UArrowVector)`
position: absolute;
left: 47.68%;
right: 47.68%;
top: 90%;
bottom: 5.62%;
`

export default BannerFixing