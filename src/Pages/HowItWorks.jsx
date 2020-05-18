import React from "react"
import styled from "styled-components"
import { spacing } from '@material-ui/system';

import { Grid, Typography, Paper } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

import GreyClouds from "../Assets/GreyClouds.svg"
import TenantStep1 from "../Assets/TenantStep1.svg"
import TenantStep2 from "../Assets/TenantStep2.svg"
import TenantStep3 from "../Assets/TenantStep3.svg"
import TenantStep4 from "../Assets/TenantStep4.svg"
import TenantStep5 from "../Assets/TenantStep5.svg"
import HostStep1 from "../Assets/HostStep1.svg"
import HostStep2 from "../Assets/HostStep2.svg"
import HostStep3 from "../Assets/HostStep3.svg"
import HostStep4 from "../Assets/HostStep4.svg"
import HostStep5 from "../Assets/HostStep5.svg"
import HostStep6 from "../Assets/HostStep5.svg"
import WelcomeBirds from "../Assets/WelcomeBirds.svg"

import { ReactComponent as UParagraphRect } from "../Assets/ParagraphRect.svg"
import { ReactComponent as UTenantButton } from "../Assets/TenantButton.svg"
import { ReactComponent as UHostButton } from "../Assets/HostButton.svg"
import { ReactComponent as UTenantPath } from "../Assets/TenantPath.svg"
import { ReactComponent as UHostPath } from "../Assets/HostPath.svg"
import { ReactComponent as UIntersectionCircles } from "../Assets/IntersectionCircles.svg"





export default () => {
  return (
    <Grid container>
      <TenantButton/>
      <HostButton/>
      <ParagraphRect/>
      <TenantPath/>
      <HostPath/>
      <IntersectionCircles/>
      <Section left="160px" top="280px" bottom="360px">
        <Typography variant="h1" color="primary">
          How It Works
        </Typography>
        <P>
        A Place For Now is built on the idea of creating a platform 
        where the existing community can help students for a temporary 
        time period while they search for a permanent place to stay. 
        </P>
      </Section>
      <Section left="160px">
      <Grid container justify="space-evenly" alignItems="center" spacing={2}>
        <StepImg img={TenantStep1} header={"step 1"}/>
        <StepText header={"Create Your Profile"} text={"Create a free A Place For Now profile using your student email to get started. You can start creating your profile here."} color="primary" />
        <StepText header={"Create Your Profile"} text={"Create a free A Place For Now profile using your student email to get started. You can start creating your profile here."} color="secondary" />
        <StepImg img={HostStep1} header={"step 1"}/>
        <StepText header={"Browse the Options"} text={"Browse through the different offers made available by hosts and select a room that fits with your needs."} color="Primary" />
        <StepImg img={TenantStep2} header={"step 2"}/>
        <StepImg img={HostStep2} header={"step 2"}/>
        <StepText header={"Post Your Room"} text={"Browse through the different offers made available by hosts and select a room that fits with your needs."} color="secondary" />
        <StepImg img={TenantStep3} header={"step 3"}/>
        <StepText header={"Get in touch"} text={"After selecting a room get in touch with the host. Talk freely through our chat service and get to know each other a little better."} color="primary" />
        <StepText header={"Get in touch"} text={"After selecting a room get in touch with the host. Talk freely through our chat service and get to know each other a little better."} color="secondary" />
        <StepImg img={HostStep3} header={"step 3"}/>
        <StepText header={"Confirm agreement"} text={"Discuss the terms of the agreement for the stay. When everything is in order confirm the agreement with the host of the room."} color="Primary" />
        <StepImg img={TenantStep4} header={"step 4"}/>
        <StepImg img={HostStep4} header={"step 4"}/>
        <StepText header={"Confirm agreement"} text={"Discuss the terms of the agreement for the stay. When everything is in order confirm the agreement with the tenant."} color="secondary" />\
        <div><img src={WelcomeBirds} alt={"Welcome Birds"} /></div>
        <Grid container justify="space-evenly" alignItems="center" spacing={1}>
        <Grid item xs={3}  > 
        <Typography variant="h3" color="primary">Connect</Typography>
        <P>Meet your host and get to know both the city and each other. Get to see your room and get situated.</P>
        </Grid>
        </Grid>
        <StepText header={"Saying goodbye :("} text={"After the time of your agreement has concluded it is time to say goodbye. Pay for your stay, say your goodbyes and maybe stay in touch."} color="primary" />
        <StepImg img={TenantStep5} header={"step 5"}/>
        <StepImg img={HostStep5} header={"step 5"}/>
        <StepText header={"Support your tenant"} text={"After some time the agreement will conclude. Try to support your tenant within their sourch for a permanent solution. When the time comes say your goodbyes and maybe stay in touch"} color="secondary" />
        <StepImg img={GreyClouds} header={"step 6"}/>
        <StepText header={"Help somebody else!"} text={"After your tenant has moved out you can repost your room again an help out someone new!"} color="primary" />
        <StepText header={"Repost your room"} text={"After your tenant has moved out you can repost your room again an help out someone new!"} color="secondary" />
        <StepImg img={HostStep6} header={"step 6"}/>
      </Grid>
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
of the page.*/}

const UStepImg = ({ img, header, className }) => {
  const theme = useTheme()

  return (
    <Grid item xs={3} className={className } >
    <img src={img} alt={"Image of" + header} />
    </Grid>
  )
}

const UStepText = ({ header, text, color, className }) => {
  const theme = useTheme()

  return (
    <Grid item xs={3} className={className} >
    <Typography variant="h3" color={color}>{header}</Typography>
    <P>{text}</P>
    </Grid>
  )
}

const StepImg = styled(UStepImg)`
  img {
    width: 80%;
    max-height:100%
    float: left;
  }
  
  `

const StepText = styled(UStepText)`
  
  `
  const TenantPath = styled(UTenantPath)`
  position: absolute;
  top:1070px;
  left:255px;
  z-index:-1;

  @media (min-width: 1920px) {
    left: calc(155px + (100vw - 1920px) / 2);
  }
`
const HostPath = styled(UHostPath)`
  position: absolute;
  top:1070px;
  left:954.84px;
  z-index:-1;

  @media (min-width: 1920px) {
    left: calc(954.84px + (100vw - 1920px) / 2);
  }
`
const IntersectionCircles = styled(UIntersectionCircles)`
  position: absolute;
  top:915px;
  left:168px;
  z-index:-1;


  @media (min-width: 1920px) {
    left: calc(168px + (100vw - 1920px) / 2);
  }
`