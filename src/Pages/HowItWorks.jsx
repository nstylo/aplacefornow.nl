import React from "react"
import styled from "styled-components"

import { Grid, Typography, Tab, Tabs } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import TenantStep1 from "../Assets/HowItWorks/TenantStep1.png"
import TenantStep2 from "../Assets/HowItWorks/TenantStep2.png"
import TenantStep3 from "../Assets/HowItWorks/TenantStep3.png"
import TenantStep4 from "../Assets/HowItWorks/TenantStep4.png"
import TenantStep5 from "../Assets/HowItWorks/TenantStep5.png"
import TenantStep6 from "../Assets/HowItWorks/TenantStep6.png"
import TenantStep7 from "../Assets/HowItWorks/TenantStep7.png"
import HostStep1 from "../Assets/HowItWorks/HostStep1.png"
import HostStep2 from "../Assets/HowItWorks/HostStep2.png"
import HostStep3 from "../Assets/HowItWorks/HostStep3.png"
import HostStep4 from "../Assets/HowItWorks/HostStep4.png"
import HostStep5 from "../Assets/HowItWorks/HostStep5.png"
import HostStep6 from "../Assets/HowItWorks/HostStep6.png"
import StepTexts from "../Assets/HowItWorks/StepTexts.json"
import GreyTenantStep1 from "../Assets/HowItWorks/GreySteps/TenantStep1.png"
import GreyTenantStep2 from "../Assets/HowItWorks/GreySteps/TenantStep2.png"
import GreyTenantStep3 from "../Assets/HowItWorks/GreySteps/TenantStep3.png"
import GreyTenantStep4 from "../Assets/HowItWorks/GreySteps/TenantStep4.png"
import GreyTenantStep5 from "../Assets/HowItWorks/GreySteps/TenantStep5.png"
import GreyTenantStep6 from "../Assets/HowItWorks/GreySteps/TenantStep6.png"
import GreyTenantStep7 from "../Assets/HowItWorks/GreySteps/TenantStep7.png"
import GreyHostStep1 from "../Assets/HowItWorks/GreySteps/HostStep1.png"
import GreyHostStep2 from "../Assets/HowItWorks/GreySteps/HostStep2.png"
import GreyHostStep3 from "../Assets/HowItWorks/GreySteps/HostStep3.png"
import GreyHostStep4 from "../Assets/HowItWorks/GreySteps/HostStep4.png"
import GreyHostStep5 from "../Assets/HowItWorks/GreySteps/HostStep5.png"
import GreyHostStep6 from "../Assets/HowItWorks/GreySteps/HostStep6.png"
import GreyHostStep7 from "../Assets/HowItWorks/GreySteps/HostStep7.png"
import { ReactComponent as UTenantLine } from "../Assets/HowItWorks/TenantLine.svg"
import { ReactComponent as UHostLine } from "../Assets/HowItWorks/HostLine.svg"
import { ReactComponent as UGreyLine } from "../Assets/HowItWorks/GreyLine.svg"

import { breakpoints } from "../theme"

function TabPanel(props) {
  const { children, value, index } = props
  return (
    <div role="tabpanel">
      {value === index && <Container>{children}</Container>}
    </div>
  )
}
export default () => {
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const classes = useStyles()
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
      <Section xs={12} top={80} item>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          classes={{
            root: classes.customTabRoot,
            indicator: value
              ? classes.customTabIndicator1
              : classes.customTabIndicator2,
          }}
        >
          <Tab label="Tenant" />
          <Tab label="Host" />
        </Tabs>
      </Section>
      <Section xs={12} top={80}>
        <TabPanel value={value} index={0}>
          <hr color="#AD578D" width="100%" size={5} />
          <StepsSection
            xl={1}
            lg={1}
            md={1}
            sm={1}
            xs={3}
            xxs={3}
            container
            direction="row"
            justify-items="center"
          >
            <TenantLine />
          </StepsSection>
          <StepsSection
            xl={5}
            lg={5}
            md={11}
            sm={11}
            xs={9}
            xxs={9}
            container
            direction="row"
            justify-items="center"
            alignItems="center"
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
          <GreyStepsSection
            xl={1}
            lg={1}
            md={1}
            sm={1}
            xs={3}
            xxs={3}
            container
            direction="row"
            justify-items="center"
          >
            <GreyLine />
          </GreyStepsSection>
          <GreyStepsSection
            xl={5}
            lg={5}
            md={11}
            sm={11}
            xs={9}
            xxs={9}
            container
            direction="row"
            justify-items="center"
            alignItems="center"
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
          </GreyStepsSection>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <hr color="#72b7c4" width="100%" size={5} />
          <GreyStepsSection
            xl={1}
            lg={1}
            md={1}
            sm={1}
            xs={3}
            xxs={3}
            container
            direction="row"
            justify-items="center"
          >
            <GreyLine />
          </GreyStepsSection>
          <GreyStepsSection
            xl={5}
            lg={5}
            md={11}
            sm={11}
            xs={9}
            xxs={9}
            container
            direction="row"
            justify-items="center"
            alignItems="center"
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
          </GreyStepsSection>
          <StepsSection
            xl={1}
            lg={1}
            md={1}
            sm={1}
            xs={3}
            xxs={3}
            container
            direction="row"
            justify-items="center"
          >
            <HostLine />
          </StepsSection>
          <StepsSection
            xl={5}
            lg={5}
            md={11}
            sm={11}
            xs={9}
            xxs={9}
            container
            direction="row"
            justify-items="center"
            alignItems="center"
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

const useStyles = makeStyles((theme) => ({
  customTabRoot: {
    color: "black",
    backgroundColor: "transparent",
  },
  customTabIndicator2: {
    backgroundColor: "#AD578D",
    height: 5,
    width: "100%",
  },
  customTabIndicator1: {
    backgroundColor: "#72b7c4",
    height: 5,
    width: "100%",
  },
}))

const TenantLine = styled(UTenantLine)`
  position: relative;
  width: auto;
  height: 90%;
  z-index: -1;
  top: 20px;

  @media (max-width: ${breakpoints.md}px) {
    top: 60px;
  }
`

const HostLine = styled(UHostLine)`
  position: relative;
  width: auto;
  height: 90%;
  z-index: -1;
  top: 20px;

  @media (max-width: ${breakpoints.md}px) {
    top: 60px;
  }
`
const GreyLine = styled(UGreyLine)`
  position: relative;
  width: auto;
  height: 90%;
  z-index: -1;
  top: 20px;

  @media (max-width: ${breakpoints.md}px) {
    top: 60px;
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
const StepsSection = styled(Grid)``

const GreyStepsSection = styled(Grid)`
  @media (max-width: ${breakpoints.lg}px) {
    display: none;
  }
`

const UStepImg = ({ img, header }) => {
  return (
    <StepsSection
      xl={6}
      lg={6}
      md={6}
      sm={6}
      xs={12}
      xxs={12}
      justify-items="center"
      item
    >
      <img src={img} alt={"Image of" + header} />
    </StepsSection>
  )
}

const UStepText = ({ header, text, color, rectColor }) => {
  return (
    <StepsSection
      xl={6}
      lg={6}
      md={6}
      sm={6}
      xs={12}
      xxs={12}
      justify-items="center"
      item
    >
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

const StepImg = styled(UStepImg)``

const StepText = styled(UStepText)``

const Container = styled(Grid).attrs(() => ({
  container: true,
}))`
  overflow: hidden;
`
