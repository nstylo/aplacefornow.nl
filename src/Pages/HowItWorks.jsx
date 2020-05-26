import React from "react"
import styled from "styled-components"

import { Grid, Typography, Tab, Tabs, Box} from "@material-ui/core"
import PropTypes from 'prop-types';

import GreyClouds from "../Assets/GreyClouds.svg"
import TenantStep1 from "../Assets/HowItWorks/TenantStep1.svg"
import TenantStep2 from "../Assets/HowItWorks/TenantStep2.svg"
import TenantStep3 from "../Assets/HowItWorks/TenantStep3.svg"
import TenantStep4 from "../Assets/HowItWorks/TenantStep4.svg"
import TenantStep5 from "../Assets/HowItWorks/TenantStep5.svg"
import HostStep1 from "../Assets/HowItWorks/HostStep1.svg"
import HostStep2 from "../Assets/HowItWorks/HostStep2.svg"
import HostStep3 from "../Assets/HowItWorks/HostStep3.svg"
import HostStep4 from "../Assets/HowItWorks/HostStep4.svg"
import HostStep5 from "../Assets/HowItWorks/HostStep5.svg"
import HostStep6 from "../Assets/HowItWorks/HostStep5.svg"
import WelcomeBirds from "../Assets/WelcomeBirds.svg"
import ParagraphRect from "../Assets/HowItWorks/ParagraphRect.svg"
import StepTexts from "../Assets/HowItWorks/StepTexts.json";
import GreyTenantStep1 from "../Assets/HowItWorks/GreySteps/TenantStep1.svg";
import GreyTenantStep2 from "../Assets/HowItWorks/GreySteps/TenantStep2.svg";
import GreyTenantStep3 from "../Assets/HowItWorks/GreySteps/TenantStep3.svg";
import GreyTenantStep4 from "../Assets/HowItWorks/GreySteps/TenantStep4.svg";
import GreyTenantStep5 from "../Assets/HowItWorks/GreySteps/TenantStep5.svg";
import GreyTenantStep6 from "../Assets/HowItWorks/GreySteps/TenantStep6.svg";
import GreyTenantStep7 from "../Assets/HowItWorks/GreySteps/TenantStep7.svg";
import GreyHostStep1 from "../Assets/HowItWorks/GreySteps/HostStep1.svg";
import GreyHostStep2 from "../Assets/HowItWorks/GreySteps/HostStep2.svg";
import GreyHostStep3 from "../Assets/HowItWorks/GreySteps/HostStep3.svg";
import GreyHostStep4 from "../Assets/HowItWorks/GreySteps/HostStep4.svg";
import GreyHostStep5 from "../Assets/HowItWorks/GreySteps/HostStep5.svg";
import GreyHostStep6 from "../Assets/HowItWorks/GreySteps/HostStep6.svg";
import GreyHostStep7 from "../Assets/HowItWorks/GreySteps/HostStep7.svg";

import { useTheme } from "@material-ui/core/styles"
import { breakpoints } from "../theme"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}




export default () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container>
    <Section xs={12} top={120} item>
        <Typography variant="h1" color="primary">
          How It Works
        </Typography>

        <P>
        A Place For Now is built on the idea of creating a platform 
        where the existing community can help students for a temporary 
        time period while they search for a permanent place to stay. 
        </P>
      </Section>
      <Section xs={12} top={50} item>
        <StepTabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Tenants" {...a11yProps(0)} />
          <Tab label="Hosts" {...a11yProps(1)} />
        </StepTabs>
        <TabPanel value={value} index={0} >
          
        </TabPanel>
        <TabPanel value={value} index={1} >
          
        </TabPanel>

      </Section>
      
    </Container>
  )
}

const StepTabs = styled(Tabs)`
  

  }
`


const P = styled.p`
  width: ${props => props.width};
`
const Section = styled(Grid)`
  position: relative;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: ${props => props.top}px;

  @media (max-width: ${breakpoints.sm}px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: ${breakpoints.xxs}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const UStepImg = ({ img, header, className }) => {

  return (
    <Grid item xs={3} className={className } >
    <img src={img} alt={"Image of" + header} />
    </Grid>
  )
}

const UStepText = ({ header, text, color, className }) => {

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

  const Container = styled(Grid).attrs(() => ({
    container: true,
  }))`
    overflow: hidden;
  `
