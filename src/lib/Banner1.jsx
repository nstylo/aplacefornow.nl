import React from "react"
import styled from "styled-components"
import UBannerImage from "../Assets/Home/BannerPicture.png"
import {ReactComponent as UArrowVector} from "../Assets/Home/Vector.svg"
import {ReactComponent as USideRectangleVector} from "../Assets/Home/Rectangle 3.svg"

//TODO
//logo left top
//login button right top
//you gotta import the Karla font still 

function Banner1() {
  return (
  <div>
    <Home>
      <HomeBanner>
        <div>
          <BannerImage src={BannerImage}/>
          <BackgroundGradient src={BackgroundGradient}/>
        </div>
        
        <Title>WELCOME TO A PLACE FOR NOW</Title> 
        <SubTitle>Let's find you a room!</SubTitle>
        <ArrowVector src={ArrowVector}/>

        <SideComponent>
          <SideRectangleVector src={SideRectangleVector}/>
        </SideComponent>
      </HomeBanner>
    </Home>
  </div>
  )
}

const Home = styled.div`
position: relative;
width: 1400px;
height: 3703px;

background: #FFFFFF;
`

const HomeBanner = styled.div`
  position: absolute;
  width: 1400px;
  height: 800px;
  left: 0px;
  top: 0px;
`

const BannerImage = styled.div`
  position: absolute;
  left: 0.07%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background-image: url(${UBannerImage});
  `

const BackgroundGradient = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  
  background: linear-gradient(123.69deg, #AD57A7 0%, #914A7A 77%);
  opacity: 0.75;
  `

const SubTitle = styled.div`
  /* Let’s find you a room! */

  position: absolute;
  left: 39.43%;
  right: 39.43%;
  top: 77.38%;
  bottom: 13.38%;

  font-family: Brandon Grotesque;
  font-style: italic;
  font-weight: 390;
  font-size: 36px;
  line-height: 51px;
  display: flex;
  align-items: center;
  text-align: center;

  /* White */
  color: #FFFFFF;
`

const Title = styled.div`
  /*WELCOME TO A PLACE FOR NOW */

  position: absolute;
  left: 3.79%;
  right: 47.29%;
  top: 34.25%;
  bottom: 36%;
  
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  display: flex;
  align-items: center;
  
  /* White */
  color: #FFFFFF;
`

const ArrowVector = styled(UArrowVector)`
  position: absolute;
  left: 47.68%;
  right: 47.68%;
  top: 90%;
  bottom: 5.62%;
`

const SideComponent = styled.div`
position: absolute;
left: 0%;
right: 99.29%;
top: 36.5%;
bottom: 38.5%;
`

const SideRectangleVector = styled(USideRectangleVector)`
/* Rectangle 3 */

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

/* White */
background: #FFFFFF;
`
export default Banner1