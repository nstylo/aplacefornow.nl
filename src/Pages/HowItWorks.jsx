import React from "react"
import styled from "styled-components"
import SvgIcon from '@material-ui/core/SvgIcon';

import { Grid, Typography, Paper } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

import { ReactComponent as UParagraphRect } from "../Assets/ParagraphRect.svg"
import { ReactComponent as UTenantButton } from "../Assets/TenantButton.svg"
import { ReactComponent as UHostButton } from "../Assets/HostButton.svg"
import { ReactComponent as UTenantPath } from "../Assets/TenantPath.svg"
import { ReactComponent as UHostPath } from "../Assets/HostPath.svg"
import { ReactComponent as UIntersectionCircles } from "../Assets/IntersectionCircles.svg"
import { ReactComponent as UWelcomeBirds } from "../Assets/WelcomeBirds.svg"

import GreyClouds from "../Assets/GreyClouds.svg"
import TenantStep1 from "../Assets/TenantStep1.svg"
import TenantStep2 from "../Assets/TenantStep2.svg"
import TenantStep3 from "../Assets/TenantStep3.svg"
import TenantStep4 from "../Assets/TenantStep4.svg"
import TenantStep5 from "../Assets/TenantStep5.svg"


export default () => {
  return (
    <Grid container>
      <TenantButton/>
      <HostButton/>
      <ParagraphRect/>
      <WelcomeBirds/>
      <TenantPath/>
      <HostPath/>
      <IntersectionCircles/>
      <Section left="160px" top="280px" bottom="634px">
        <Typography variant="h1" color="primary">
          How It Works
        </Typography>
        <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
        </P>
      </Section>
    </Grid>
  )
}

const ParagraphRect = styled(UParagraphRect)`
  position: absolute;
  top: 430px;
`
const TenantButton = styled(UTenantButton)`
  position: absolute;
  top: 800px;
  left: 350px;

  @media (min-width: 1920px) {
    left: calc(350px + (100vw - 1920px) / 2);
  }

`
const HostButton = styled(UHostButton)`
  position: absolute;
  top:800px;
  left:1265px;

  @media (min-width: 1920px) {
    left: calc(1265px + (100vw - 1920px) / 2);
  }
`
const TenantPath = styled(UTenantPath)`
  position: absolute;
  top:1070px;
  left:255px;

  @media (min-width: 1920px) {
    left: calc(155px + (100vw - 1920px) / 2);
  }
`
const HostPath = styled(UHostPath)`
  position: absolute;
  top:1070px;
  left:954.84px;

  @media (min-width: 1920px) {
    left: calc(954.84px + (100vw - 1920px) / 2);
  }
`
const IntersectionCircles = styled(UIntersectionCircles)`
  position: absolute;
  top:915px;
  left:168px;

  @media (min-width: 1920px) {
    left: calc(168px + (100vw - 1920px) / 2);
  }
`
const WelcomeBirds = styled(UWelcomeBirds)`
  position: absolute;
  top:2535px;
  left:462px;

  @media (min-width: 1920px) {
    left: calc(462px + (100vw - 1920px) / 2);
  };
`
const P = styled.p`
  width: ${props => props.width};
`
const Section = styled(Grid).attrs(props => ({
  item: true,
  xs: 12,
}))`
  padding-left: ${props => props.left};
  padding-right: ${props => props.right};
  padding-top: ${props => props.top};
  padding-bottom: ${props => props.bottom};
`






{/* Idea for DRY implementation, very difficult to do because of structure
  of the page.

const UStepImgLeftSide = ({ img, header, text, color, className }) => {
  const theme = useTheme()

  return (
    <Grid direction="row" justify="flex-start" alignItems="center"  >
    <Grid item xs={6} className={className}>
    <img src={img} alt={"image for" + header} />
    </Grid>
    <Grid item xs={6} className={className}>
    <Typography variant="h3" color={color}>{header}</Typography>
      <P>
        {text}
      </P>  
    </Grid>
    </Grid>
  )
}

const StepImgLeftSide = styled(UStepImgLeftSide)`
  img {
    display:inline;
    float:left;
  }

  p {
    display:inline;
    margin-left:10px;
    margin-top:20px;

  }

`
*/}