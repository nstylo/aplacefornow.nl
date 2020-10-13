import React from "react"
import styled from "styled-components"
import UBannerImage from "../Assets/Home/BannerPicture.png"
import {Container} from "./BannerComponents/BannerContainer"
import {BannerImage} from "./BannerComponents/BannerImageStyle"
import {BackgroundGradient} from "./BannerComponents/BannerBackgroundGradient"
import {SideRectangle} from "./BannerComponents/BannerSideRectangle"
import {Title} from "./BannerComponents/BannerTitle"

import { breakpoints } from "../theme"

function BannerWelcome() {
  return (
  <Container>
    <BannerImage src={UBannerImage}/>
    <BackgroundGradient src={BackgroundGradient}/>
        
    <WelcomeTitle>WELCOME TO <br/> A PLACE FOR NOW</WelcomeTitle> 
    <SubTitle>Let's find you a room!</SubTitle>
    <SideRectangle/>

  </Container>
  )
}

const SubTitle = styled.div`
  /* Let’s find you a room! */

  position: absolute;
  top: 77.38%;
  bottom: 13.38%;

  font-family: Brandon Grotesque;
  font-style: italic;
  font-weight: 390;
  font-size: 36px;

  line-height: 51px;

  /* White */
  color: #FFFFFF;
`

const WelcomeTitle = styled(Title)`
  /*WELCOME TO A PLACE FOR NOW */

  position: absolute;
  left: 3.79%;
  right: 47.29%;
  top: 34.25%;
  bottom: 36%;

  width: 58.59vw;
  heigh: 29vh;
  
`

export default BannerWelcome