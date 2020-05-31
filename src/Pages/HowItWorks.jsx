import React from "react"
import styled from "styled-components"

import { Grid, Typography, Tab, Tabs} from "@material-ui/core"

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
import HostStep6 from "../Assets/HowItWorks/HostStep6.svg"
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
import {ReactComponent as Circle} from "../Assets/HowItWorks/ellipse.svg"
import Line from "../Assets/HowItWorks/line.svg"

import { breakpoints } from "../theme"

function TabPanel(props) {
  const { children, value, index} = props
  return (
    <div
      role="tabpanel"
    >
      {value === index && <Container>{children}</Container>}
    </div>
  )
}

export default () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
          <Tab label="Tenant" />
          <Tab label="Host"  />
        </StepTabs>
      </Section>
      <Section xs={12} top={40}>
        <TabPanel value={value} index={0}>
          <hr color="#AD578D" width="100%" size={5} />
          <StepsSection
            lg={6}
            md={12}
            top={50}
            container
            direction="row"
            justify-items="center"
          >
            <StepText
              header={"Create a profile"}
              text={StepTexts.TenantText1}
              color="primary"
              rectColor="#AD578D"
            />
            <StepImg img={TenantStep1} header={"step 1"} />
            <StepText
              header={"Choose your room"}
              text={StepTexts.TenantText2}
              color="primary"
              rectColor="#AD578D"
            />
            <StepImg img={TenantStep2} header={"step 2"} />
            <StepText
              header={"Contact the host"}
              text={StepTexts.TenantText3}
              color="primary"
              rectColor="#AD578D"
            />
            <StepImg img={TenantStep3} header={"step 3"} />
            <StepText
              header={"Confirm your choice"}
              text={StepTexts.TenantText4}
              color="primary"
              rectColor="#AD578D"
            />
            <StepImg img={TenantStep4} header={"step 4"} />
            <StepText
              header={"Move in and have fun!"}
              text={StepTexts.TenantText5}
              color="primary"
              rectColor="#AD578D"
            />
            <StepImg img={TenantStep5} header={"step 5"} />
            <StepText
              header={"The end!"}
              text={StepTexts.TenantText6}
              color="primary"
              rectColor="#AD578D"
            />
            <StepImg img={TenantStep6} header={"step 6"} />
            <StepText
              header={"Become a host!"}
              text={StepTexts.TenantText7}
              color="primary"
              rectColor="#AD578D"
            />
            <StepImg img={TenantStep7} header={"step 7"} />
          </StepsSection>
          <StepsSection
            lg={6}
            md={12}
            top={10}
            container
            direction="row"
            justify-items="center"
          >
            <StepText
              header={"Create a profile"}
              text={StepTexts.HostText1}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyHostStep1} header={"step 1"} />
            <StepText
              header={"Post your room"}
              text={StepTexts.HostText2}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyHostStep2} header={"step 2"} />
            <StepText
              header={"Receive applications"}
              text={StepTexts.HostText3}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyHostStep3} header={"step 3"} />
            <StepText
              header={"Confirm your choice"}
              text={StepTexts.HostText4}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyHostStep4} header={"step 4"} />
            <StepText
              header={"Greet your tenant!"}
              text={StepTexts.HostText5}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyHostStep5} header={"step 5"} />
            <StepText
              header={"The end!"}
              text={StepTexts.HostText6}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyHostStep6} header={"step 6"} />
            <StepText
              header={"Repost your room!"}
              text={StepTexts.HostText7}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyHostStep7} header={"step 7"} />
          </StepsSection>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <hr color="#72b7c4" width="100%" size={5} />
          <StepsSection
            lg={6}
            md={12}
            container
            direction="row"
            justify-items="center"
          >
            <StepText
              header={"Create a profile"}
              text={StepTexts.TenantText1}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyTenantStep1} header={"step 1"} />
            <StepText
              header={"Choose your room"}
              text={StepTexts.TenantText2}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyTenantStep2} header={"step 2"} />
            <StepText
              header={"Contact the host"}
              text={StepTexts.TenantText3}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyTenantStep3} header={"step 3"} />
            <StepText
              header={"Confirm your choice"}
              text={StepTexts.TenantText4}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyTenantStep4} header={"step 4"} />
            <StepText
              header={"Move in and have fun!"}
              text={StepTexts.TenantText5}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyTenantStep5} header={"step 5"} />
            <StepText
              header={"The end!"}
              text={StepTexts.TenantText6}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyTenantStep6} header={"step 6"} />
            <StepText
              header={"Become a host!"}
              text={StepTexts.TenantText7}
              color="textSecondary"
              rectColor="#DBDBDB"
            />
            <StepImg img={GreyTenantStep7} header={"step 7"} />
          </StepsSection>
          <StepsSection
            lg={6}
            md={12}
            container
            direction="row"
            justify-items="center"
          > 
            <StepText
              header={"Create a profile"}
              text={StepTexts.HostText1}
              color="secondary"
              rectColor="#72b7c4"
            />
            <StepImg img={HostStep1} header={"step 1"} />
            <StepText
              header={"Post your room"}
              text={StepTexts.HostText2}
              color="secondary"
              rectColor="#72b7c4"
            />
            <StepImg img={HostStep2} header={"step 2"} />
            <StepText
              header={"Receive applications"}
              text={StepTexts.HostText3}
              color="secondary"
              rectColor="#72b7c4"
            />
            <StepImg img={HostStep3} header={"step 3"} />
            <StepText
              header={"Confirm your choice"}
              text={StepTexts.HostText4}
              color="secondary"
              rectColor="#72b7c4"
            />
            <StepImg img={HostStep4} header={"step 4"} />
            <StepText
              header={"Greet your tenant!"}
              text={StepTexts.HostText5}
              color="secondary"
              rectColor="#72b7c4"
            />
            <StepImg img={HostStep5} header={"step 5"} />
            <StepText
              header={"The end!"}
              text={StepTexts.HostText6}
              color="secondary"
              rectColor="#72b7c4"
            />
            <StepImg img={HostStep6} header={"step 6"} />
            <StepText
              header={"Repost your room!"}
              text={StepTexts.HostText7}
              color="secondary"
              rectColor="#72b7c4"
            />
            <StepImg img={HostStep2} header={"step 7"} />
          </StepsSection>
        </TabPanel>
      </Section>
    </Container>
  )
}

const StepTabs = styled(Tabs)`
    indicatorColor: "#DBDBDB";
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
const StepsSection = styled(Grid)``

const UStepImg = ({ img, header, className }) => {
  return (
    <StepsSection xs={6} justify-items="center" item>
      <img src={img} alt={"Image of" + header} />
    </StepsSection>
  )

}

const UStepText = ({ header, text, color, rectColor, className }) => {
  return (
    <StepsSection xs={6} justify-items="center" item>
      <hr
        background-color={rectColor}
        color={rectColor}
        border="none"
        width="30%"
        align="left"
      />
      <Typography variant="h4" color={color}>
        {header}
      </Typography>
      <P>{text}</P>
    </StepsSection>
  )
}

const UPath = ({ color}) => {
  return (
    <StepsSection xs={1} item>
      
    </StepsSection>
  )
}

const Path = styled(UPath)`

`




const StepImg = styled(UStepImg)`
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 300px;
    height: auto;
  }
`

const StepText = styled(UStepText)`
`

const Container = styled(Grid).attrs(() => ({
  container: true,
}))`
  overflow: hidden;
`
