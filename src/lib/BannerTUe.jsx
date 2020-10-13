import React from "react"
import styled from "styled-components"
import UBannerImage from "../Assets/Home/BannerPicture4.png"
import {ReactComponent as UTUeLogo} from "../Assets/Home/TUe logo.svg"
import {Button} from "./Button.jsx"
import {Container} from "./BannerComponents/BannerContainer"
import {BannerImage} from "./BannerComponents/BannerImageStyle"
import {BackgroundGradient} from "./BannerComponents/BannerBackgroundGradient"
import {SideRectangle} from "./BannerComponents/BannerSideRectangle"
import {Title} from "./BannerComponents/BannerTitle"

import { breakpoints } from "../theme"

function BannerTUe() {
  return (
  <Container >
    <NewBannerImage src={UBannerImage}/>
    <BackgroundGradient src={BackgroundGradient}/>
        
    <TUeTitle>A SERVICE ENDORSED <br/> BY UNIVERSITIES</TUeTitle> 
    <TUeLogo/>
    <SideRectangle/>
  </Container>
  )
}

const NewBannerImage = styled(BannerImage)`
margin: 0px;
`

const TUeLogo = styled(UTUeLogo)`
position: absolute;
left: 3.79%;
right: 56.36%;
top: 64%;
bottom: 21.53%;

width: 29.75vw;
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
`

const TUeTitle = styled(Title)`
/* A SERVICE ENDORSED BY UNIVERSITIES */

position: absolute;
left: 3.79%;
right: 47.29%;
top: 34.25%;
bottom: 36%;

width:100%;
`

export default BannerTUe