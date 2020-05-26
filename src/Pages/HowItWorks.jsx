import React from "react"
import styled from "styled-components"

import { Grid, Typography, Tab, Tabs, Box } from "@material-ui/core"
import PropTypes from "prop-types"

import GreyClouds from "../Assets/GreyClouds.svg"
import TenantStep1 from "../Assets/HowItWorks/TenantStep1.svg"
import TenantStep2 from "../Assets/HowItWorks/TenantStep2.svg"
import TenantStep3 from "../Assets/HowItWorks/TenantStep3.svg"
import TenantStep4 from "../Assets/HowItWorks/TenantStep4.svg"
import TenantStep5 from "../Assets/HowItWorks/TenantStep5.svg"
import TenantStep6 from "../Assets/HowItWorks/TenantStep6.svg"
import TenantStep7 from "../Assets/HowItWorks/TenantStep7.svg"
import HostStep1 from "../Assets/HowItWorks/HostStep1.svg"
import HostStep2 from "../Assets/HowItWorks/HostStep2.svg"
import HostStep3 from "../Assets/HowItWorks/HostStep3.svg"
import HostStep4 from "../Assets/HowItWorks/HostStep4.svg"
import HostStep5 from "../Assets/HowItWorks/HostStep5.svg"
import HostStep6 from "../Assets/HowItWorks/HostStep5.svg"
import WelcomeBirds from "../Assets/WelcomeBirds.svg"
import ParagraphRect from "../Assets/HowItWorks/ParagraphRect.svg"
import StepTexts from "../Assets/HowItWorks/StepTexts.json"
import GreyTenantStep1 from "../Assets/HowItWorks/GreySteps/TenantStep1.svg"
import GreyTenantStep2 from "../Assets/HowItWorks/GreySteps/TenantStep2.svg"
import GreyTenantStep3 from "../Assets/HowItWorks/GreySteps/TenantStep3.svg"
import GreyTenantStep4 from "../Assets/HowItWorks/GreySteps/TenantStep4.svg"
import GreyTenantStep5 from "../Assets/HowItWorks/GreySteps/TenantStep5.svg"
import GreyTenantStep6 from "../Assets/HowItWorks/GreySteps/TenantStep6.svg"
import GreyTenantStep7 from "../Assets/HowItWorks/GreySteps/TenantStep7.svg"
import GreyHostStep1 from "../Assets/HowItWorks/GreySteps/HostStep1.svg"
import GreyHostStep2 from "../Assets/HowItWorks/GreySteps/HostStep2.svg"
import GreyHostStep3 from "../Assets/HowItWorks/GreySteps/HostStep3.svg"
import GreyHostStep4 from "../Assets/HowItWorks/GreySteps/HostStep4.svg"
import GreyHostStep5 from "../Assets/HowItWorks/GreySteps/HostStep5.svg"
import GreyHostStep6 from "../Assets/HowItWorks/GreySteps/HostStep6.svg"
import GreyHostStep7 from "../Assets/HowItWorks/GreySteps/HostStep7.svg"

import { useTheme } from "@material-ui/core/styles"
import { breakpoints } from "../theme"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Container>{children}</Container>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

export default () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  const theme = useTheme();

  return (
    <Container>
      <Section xs={12} top={120} item>
        <Typography variant="h1" color="primary">
          How It Works
        </Typography>

        <P>
          A Place For Now is built on the idea of creating a platform where the
          existing community can help students for a temporary time period while
          they search for a permanent place to stay.
        </P>
      </Section>
      <Section xs={12} top={50} item>
        <StepTabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Tenants" {...a11yProps(0)} />
          <Tab label="Hosts" {...a11yProps(1)} />
        </StepTabs>
      </Section>
      <Section xs={12} top={50}>
        <TabPanel value={value} index={0}>
          <StepsSection xs={6} top={10} container direction="row" justify-items="center">
            <StepText
              header={"Create a profile"}
              text={StepTexts.TenantText1}
              color="primary"
            />
            <StepImg img={TenantStep1} header={"step 1"} />
            <StepText
              header={"Choose your room"}
              text={StepTexts.TenantText2}
              color="primary"
            />
            <StepImg img={TenantStep2} header={"step 2"} />
            <StepText
              header={"Contact the host"}
              text={StepTexts.TenantText3}
              color="primary"
            />
            <StepImg img={TenantStep3} header={"step 3"} />
            <StepText
              header={"Confirm your choice"}
              text={StepTexts.TenantText4}
              color="primary"
            />
            <StepImg img={TenantStep4} header={"step 4"} />
            <StepText
              header={"Move in and have fun!"}
              text={StepTexts.TenantText5}
              color="primary"
            />
            <StepImg img={TenantStep5} header={"step 5"} />
            <StepText
              header={"The end!"}
              text={StepTexts.TenantText6}
              color="primary"
            />
            <StepImg img={TenantStep6} header={"step 6"} />
            <StepText
              header={"Become a host!"}
              text={StepTexts.TenantText7}
              color="primary"
            />
            <StepImg img={TenantStep7} header={"step 7"} />
          </StepsSection>
          <StepsSection xs={6} top={10} container direction="row" justify-items="center">
          <StepText
              header={"Create a profile"}
              text={StepTexts.HostText1}
              color="textSecondary"
            />
            <StepImg img={GreyHostStep1} header={"step 1"} />
            <StepText
              header={"Create a profile"}
              text={StepTexts.HostText1}
              color="textSecondary"
            />
            <StepImg img={GreyHostStep1} header={"step 1"} />
            <StepText
              header={"Create a profile"}
              text={StepTexts.HostText1}
              color="textSecondary"
            />
            <StepImg img={GreyHostStep1} header={"step 1"} />
            <StepText
              header={"Create a profile"}
              text={StepTexts.HostText1}
              color="textSecondary"
            />
            <StepImg img={GreyHostStep1} header={"step 1"} />
            <StepText
              header={"Create a profile"}
              text={StepTexts.HostText1}
              color="textSecondary"
            />
            <StepImg img={GreyHostStep1} header={"step 1"} />
            <StepText
              header={"Create a profile"}
              text={StepTexts.HostText1}
              color="textSecondary"
            />
            <StepImg img={GreyHostStep1} header={"step 1"} />
            <StepText
              header={"Create a profile"}
              text={StepTexts.HostText1}
              color="textSecondary"
            />
            <StepImg img={GreyHostStep1} header={"step 1"} />
            
          </StepsSection>
        </TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
      </Section>
    </Container>
  )
}

const StepTabs = styled(Tabs)`
  

  }
`

const P = styled(Typography).attrs(() => ({
  variant: "body1",
}))`
  text-align: justify;
  margin-top: 16px;
  margin-bottom: 24px;
  width: auto;
  
`
const Section = styled(Grid)`
  position: relative;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: ${(props) => props.top}px;

  @media (max-width: ${breakpoints.sm}px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: ${breakpoints.xxs}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
const StepsSection = styled(Grid)`
  position: relative;
`

const UStepImg = ({ img, header, className }) => {
  return (
    <StepsSection xs={6} item>
      <img src={img} alt={"Image of" + header} />
    </StepsSection>
  )
}

const UStepText = ({ header, text, color }) => {

  return (
    <StepsSection xs={6} item >
      <Typography variant="h4" color={color}>
        {header}
      </Typography>
      <P>{text}</P>
    </StepsSection>
  )
}

const StepImg = styled(UStepImg)`
  img {
    max-width: 100%;
    max-height:100%
  }
  
  `

const StepText = styled(UStepText)``

const Container = styled(Grid).attrs(() => ({
  container: true,
}))`
  overflow: hidden;
`
